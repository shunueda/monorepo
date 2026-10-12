import {
  Configuration,
  CountryCode,
  PlaidApi,
  PlaidEnvironments,
  Products,
} from "plaid";
import { execFileSync } from "node:child_process";
import { ok } from "node:assert";
import { setInterval } from "node:timers/promises";

export async function link({
  clientId,
  secret,
}: {
  clientId: string;
  secret: string;
}) {
  const client = new PlaidApi(
    new Configuration({
      basePath: PlaidEnvironments.production,
      baseOptions: {
        headers: {
          "Plaid-Client-Id": clientId,
          "Plaid-Secret": secret,
        },
      },
    }),
  );

  const {
    data: { hosted_link_url, link_token },
  } = await client.linkTokenCreate({
    client_name: "my-finance",
    language: "en",
    country_codes: [CountryCode.Us],
    user: { client_user_id: "me" },
    products: [Products.Transactions],
    optional_products: [Products.Investments, Products.Liabilities],
    hosted_link: {},
  });

  ok(hosted_link_url);

  console.log(hosted_link_url);
  execFileSync("open", [hosted_link_url]);

  const fetchPublicToken = async (): Promise<string | undefined> => {
    const { data } = await client.linkTokenGet({ link_token });
    for (const s of data.link_sessions ?? []) {
      const token = (s.results?.item_add_results ?? []).find(
        (a) => a.public_token,
      )?.public_token;
      if (token) {
        return token;
      }
    }
    return undefined;
  };

  let publicToken = await fetchPublicToken();
  if (!publicToken) {
    for await (const _ of setInterval(3000, undefined, {
      signal: AbortSignal.timeout(200 * 3000),
    })) {
      publicToken = await fetchPublicToken();
      if (publicToken) {
        break;
      }
    }
  }

  ok(publicToken);

  const {
    data: { access_token, item_id },
  } = await client.itemPublicTokenExchange({ public_token: publicToken });

  console.log("ACCESS_TOKEN:", access_token);
  console.log("ITEM_ID:", item_id);
}
