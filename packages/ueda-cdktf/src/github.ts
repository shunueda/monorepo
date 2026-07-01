import { ActionsSecret } from "@ueda/cdktf-providers/github/actions-secret";
import {
  Repository,
  type RepositoryConfig,
} from "@ueda/cdktf-providers/github/repository";
import type { TerraformStack } from "cdktf";
import { ActionsVariable } from "@ueda/cdktf-providers/github/actions-variable";
import { Repository as SourcehutRepository } from "@ueda/cdktf-providers/sourcehut/repository";

export function createGitHubRepo(
  stack: TerraformStack,
  config: RepositoryConfig,
  options?: Partial<{
    actions: {
      variables: Record<string, string>;
      secrets: Record<string, string>;
    };
    createsSourcehutMirror: boolean;
  }>,
) {
  const repository = new Repository(stack, `${config.name}-github-repo`, {
    ...config,
    lifecycle: {
      preventDestroy: true,
    },
  });

  function envNameToId(envName: string) {
    return envName.toLowerCase().replaceAll("_", "-");
  }

  for (const [name, value] of Object.entries(options?.actions?.secrets || {})) {
    new ActionsSecret(
      stack,
      `${config.name}-${envNameToId(name)}-actions-secret`,
      {
        repository: repository.name,
        secretName: name,
        value,
      },
    );
  }

  for (const [name, value] of Object.entries(
    options?.actions?.variables || {},
  )) {
    new ActionsVariable(
      stack,
      `${config.name}-${envNameToId(name)}-actions-variable`,
      {
        repository: repository.name,
        variableName: name,
        value,
      },
    );
  }

  if (options?.createsSourcehutMirror) {
    new SourcehutRepository(stack, `${config.name}-sourcehut-repo`, config);
  }

  return repository;
}
