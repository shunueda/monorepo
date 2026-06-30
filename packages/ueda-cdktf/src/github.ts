import { ActionsSecret } from "@ueda/cdktf-providers/github/actions-secret";
import { Repository } from "@ueda/cdktf-providers/github/repository";
import type { TerraformStack } from "cdktf";
import { ActionsVariable } from "@ueda/cdktf-providers/github/actions-variable";

export function createGitHubRepo(
  stack: TerraformStack,
  repositoryName: string,
  options: {
    actions: {
      variables: Record<string, string>;
      secrets: Record<string, string>;
    };
  },
) {
  const repository = new Repository(stack, `${repositoryName}-github-repo`, {
    name: repositoryName,
    lifecycle: {
      preventDestroy: true,
    },
  });

  function envNameToId(envName: string) {
    return envName.toLowerCase().replaceAll("_", "-");
  }

  for (const [name, value] of Object.entries(options.actions.secrets)) {
    new ActionsSecret(
      stack,
      `${repositoryName}-${envNameToId(name)}-actions-secret`,
      {
        repository: repository.name,
        secretName: name,
        value,
      },
    );
  }

  for (const [name, value] of Object.entries(options.actions.variables)) {
    new ActionsVariable(
      stack,
      `${repositoryName}-${envNameToId(name)}-actions-variable`,
      {
        repository: repository.name,
        variableName: name,
        value,
      },
    );
  }
}
