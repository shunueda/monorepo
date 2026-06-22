// https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamecheapProviderConfig {
  /**
  * The namecheap API key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs#api_key NamecheapProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * A registered api user for namecheap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs#api_user NamecheapProvider#api_user}
  */
  readonly apiUser?: string;
  /**
  * Client IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs#client_ip NamecheapProvider#client_ip}
  */
  readonly clientIp?: string;
  /**
  * Use sandbox API endpoints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs#use_sandbox NamecheapProvider#use_sandbox}
  */
  readonly useSandbox?: boolean | cdktf.IResolvable;
  /**
  * A registered user name for namecheap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs#user_name NamecheapProvider#user_name}
  */
  readonly userName?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs#alias NamecheapProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs namecheap}
*/
export class NamecheapProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "namecheap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NamecheapProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NamecheapProvider to import
  * @param importFromId The id of the existing NamecheapProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NamecheapProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "namecheap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs namecheap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamecheapProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NamecheapProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'namecheap',
      terraformGeneratorMetadata: {
        providerName: 'namecheap',
        providerVersion: '2.3.5'
      },
      terraformProviderSource: 'namecheap/namecheap'
    });
    this._apiKey = config.apiKey;
    this._apiUser = config.apiUser;
    this._clientIp = config.clientIp;
    this._useSandbox = config.useSandbox;
    this._userName = config.userName;
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

  // api_user - computed: false, optional: true, required: false
  private _apiUser?: string; 
  public get apiUser() {
    return this._apiUser;
  }
  public set apiUser(value: string | undefined) {
    this._apiUser = value;
  }
  public resetApiUser() {
    this._apiUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUserInput() {
    return this._apiUser;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: string; 
  public get clientIp() {
    return this._clientIp;
  }
  public set clientIp(value: string | undefined) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // use_sandbox - computed: false, optional: true, required: false
  private _useSandbox?: boolean | cdktf.IResolvable; 
  public get useSandbox() {
    return this._useSandbox;
  }
  public set useSandbox(value: boolean | cdktf.IResolvable | undefined) {
    this._useSandbox = value;
  }
  public resetUseSandbox() {
    this._useSandbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSandboxInput() {
    return this._useSandbox;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this._userName;
  }
  public set userName(value: string | undefined) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
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
      api_user: cdktf.stringToTerraform(this._apiUser),
      client_ip: cdktf.stringToTerraform(this._clientIp),
      use_sandbox: cdktf.booleanToTerraform(this._useSandbox),
      user_name: cdktf.stringToTerraform(this._userName),
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
      api_user: {
        value: cdktf.stringToHclTerraform(this._apiUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ip: {
        value: cdktf.stringToHclTerraform(this._clientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_sandbox: {
        value: cdktf.booleanToHclTerraform(this._useSandbox),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
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
