// https://registry.terraform.io/providers/wombelix/sourcehut/1.0.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourcehutProviderConfig {
  /**
  * The URL to the SourceHut Git API endpoint. It is required if using
  * 					a private installation of SourceHut. The default is to use the cloud
  * 					git service. It can be provided via the SRHT_GIT_URL environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wombelix/sourcehut/1.0.1/docs#git_url SourcehutProvider#git_url}
  */
  readonly gitUrl?: string;
  /**
  * The URL to the SourceHut Meta API endpoint. It is required if using
  * 					a private installation of SourceHut. The default is to use the cloud
  * 					paste service. It can be provided via the SRHT_META_URL environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wombelix/sourcehut/1.0.1/docs#meta_url SourcehutProvider#meta_url}
  */
  readonly metaUrl?: string;
  /**
  * The URL to the SourceHut Paste API endpoint. It is required if using
  * 					a private installation of SourceHut. The default is to use the cloud
  * 					paste service. It can be provided via the SRHT_PASTE_URL environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wombelix/sourcehut/1.0.1/docs#paste_url SourcehutProvider#paste_url}
  */
  readonly pasteUrl?: string;
  /**
  * A SourceHut API personal access token. It is required to use most
  * 					resources. It can be provided via the SRHT_TOKEN environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wombelix/sourcehut/1.0.1/docs#token SourcehutProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wombelix/sourcehut/1.0.1/docs#alias SourcehutProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/wombelix/sourcehut/1.0.1/docs sourcehut}
*/
export class SourcehutProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sourcehut";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourcehutProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourcehutProvider to import
  * @param importFromId The id of the existing SourcehutProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/wombelix/sourcehut/1.0.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourcehutProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sourcehut", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/wombelix/sourcehut/1.0.1/docs sourcehut} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourcehutProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SourcehutProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sourcehut',
      terraformGeneratorMetadata: {
        providerName: 'sourcehut',
        providerVersion: '1.0.1'
      },
      terraformProviderSource: 'wombelix/sourcehut'
    });
    this._gitUrl = config.gitUrl;
    this._metaUrl = config.metaUrl;
    this._pasteUrl = config.pasteUrl;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // git_url - computed: false, optional: true, required: false
  private _gitUrl?: string; 
  public get gitUrl() {
    return this._gitUrl;
  }
  public set gitUrl(value: string | undefined) {
    this._gitUrl = value;
  }
  public resetGitUrl() {
    this._gitUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitUrlInput() {
    return this._gitUrl;
  }

  // meta_url - computed: false, optional: true, required: false
  private _metaUrl?: string; 
  public get metaUrl() {
    return this._metaUrl;
  }
  public set metaUrl(value: string | undefined) {
    this._metaUrl = value;
  }
  public resetMetaUrl() {
    this._metaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaUrlInput() {
    return this._metaUrl;
  }

  // paste_url - computed: false, optional: true, required: false
  private _pasteUrl?: string; 
  public get pasteUrl() {
    return this._pasteUrl;
  }
  public set pasteUrl(value: string | undefined) {
    this._pasteUrl = value;
  }
  public resetPasteUrl() {
    this._pasteUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pasteUrlInput() {
    return this._pasteUrl;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
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
      git_url: cdktf.stringToTerraform(this._gitUrl),
      meta_url: cdktf.stringToTerraform(this._metaUrl),
      paste_url: cdktf.stringToTerraform(this._pasteUrl),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      git_url: {
        value: cdktf.stringToHclTerraform(this._gitUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta_url: {
        value: cdktf.stringToHclTerraform(this._metaUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paste_url: {
        value: cdktf.stringToHclTerraform(this._pasteUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
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
