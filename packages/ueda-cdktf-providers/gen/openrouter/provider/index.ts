// https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenrouterProviderConfig {
  /**
  * API key as bearer token in Authorization header. Configurable via environment variable `OPENROUTER_MANAGEMENT_KEY`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs#api_key OpenrouterProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * ID of the organization's Workload Identity Federation policy that acts as a management key. Required with `oidc_token` or `oidc_token_file`. Configurable via environment variable `OPENROUTER_FEDERATION_POLICY_ID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs#federation_policy_id OpenrouterProvider#federation_policy_id}
  */
  readonly federationPolicyId?: string;
  /**
  * OIDC token issued to this workload (for example a GitLab `id_tokens` JWT), exchanged for a short-lived management token through Workload Identity Federation. Use with `federation_policy_id` instead of `api_key`. Configurable via environment variable `OPENROUTER_OIDC_TOKEN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs#oidc_token OpenrouterProvider#oidc_token}
  */
  readonly oidcToken?: string;
  /**
  * Path to a file holding the workload's OIDC token. The file is reread on every exchange, so a rotated token is picked up. Alternative to `oidc_token`. Configurable via environment variable `OPENROUTER_OIDC_TOKEN_FILE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs#oidc_token_file OpenrouterProvider#oidc_token_file}
  */
  readonly oidcTokenFile?: string;
  /**
  * Server URL (defaults to https://openrouter.ai/api/v1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs#server_url OpenrouterProvider#server_url}
  */
  readonly serverUrl?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs#alias OpenrouterProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs openrouter}
*/
export class OpenrouterProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenrouterProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenrouterProvider to import
  * @param importFromId The id of the existing OpenrouterProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenrouterProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs openrouter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenrouterProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OpenrouterProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'openrouter',
      terraformGeneratorMetadata: {
        providerName: 'openrouter',
        providerVersion: '0.3.258'
      },
      terraformProviderSource: 'OpenRouterTeam/openrouter'
    });
    this._apiKey = config.apiKey;
    this._federationPolicyId = config.federationPolicyId;
    this._oidcToken = config.oidcToken;
    this._oidcTokenFile = config.oidcTokenFile;
    this._serverUrl = config.serverUrl;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // federation_policy_id - computed: false, optional: true, required: false
  private _federationPolicyId?: string; 
  public get federationPolicyId() {
    return this._federationPolicyId;
  }
  public set federationPolicyId(value: string | undefined) {
    this._federationPolicyId = value;
  }
  public resetFederationPolicyId() {
    this._federationPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federationPolicyIdInput() {
    return this._federationPolicyId;
  }

  // oidc_token - computed: false, optional: true, required: false
  private _oidcToken?: string; 
  public get oidcToken() {
    return this._oidcToken;
  }
  public set oidcToken(value: string | undefined) {
    this._oidcToken = value;
  }
  public resetOidcToken() {
    this._oidcToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenInput() {
    return this._oidcToken;
  }

  // oidc_token_file - computed: false, optional: true, required: false
  private _oidcTokenFile?: string; 
  public get oidcTokenFile() {
    return this._oidcTokenFile;
  }
  public set oidcTokenFile(value: string | undefined) {
    this._oidcTokenFile = value;
  }
  public resetOidcTokenFile() {
    this._oidcTokenFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcTokenFileInput() {
    return this._oidcTokenFile;
  }

  // server_url - computed: false, optional: true, required: false
  private _serverUrl?: string; 
  public get serverUrl() {
    return this._serverUrl;
  }
  public set serverUrl(value: string | undefined) {
    this._serverUrl = value;
  }
  public resetServerUrl() {
    this._serverUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverUrlInput() {
    return this._serverUrl;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      federation_policy_id: cdktf.stringToTerraform(this._federationPolicyId),
      oidc_token: cdktf.stringToTerraform(this._oidcToken),
      oidc_token_file: cdktf.stringToTerraform(this._oidcTokenFile),
      server_url: cdktf.stringToTerraform(this._serverUrl),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      federation_policy_id: {
        value: cdktf.stringToHclTerraform(this._federationPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_token: {
        value: cdktf.stringToHclTerraform(this._oidcToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_token_file: {
        value: cdktf.stringToHclTerraform(this._oidcTokenFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_url: {
        value: cdktf.stringToHclTerraform(this._serverUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
