// https://registry.terraform.io/providers/wombelix/sourcehut/1.0.1/docs/resources/user_pgp_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserPgpKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wombelix/sourcehut/1.0.1/docs/resources/user_pgp_key#id UserPgpKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The armored PGP key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wombelix/sourcehut/1.0.1/docs/resources/user_pgp_key#key UserPgpKey#key}
  */
  readonly key: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/wombelix/sourcehut/1.0.1/docs/resources/user_pgp_key sourcehut_user_pgp_key}
*/
export class UserPgpKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sourcehut_user_pgp_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserPgpKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserPgpKey to import
  * @param importFromId The id of the existing UserPgpKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/wombelix/sourcehut/1.0.1/docs/resources/user_pgp_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserPgpKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sourcehut_user_pgp_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/wombelix/sourcehut/1.0.1/docs/resources/user_pgp_key sourcehut_user_pgp_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserPgpKeyConfig
  */
  public constructor(scope: Construct, id: string, config: UserPgpKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'sourcehut_user_pgp_key',
      terraformGeneratorMetadata: {
        providerName: 'sourcehut',
        providerVersion: '1.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._key = config.key;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // canonical_user - computed: true, optional: false, required: false
  public get canonicalUser() {
    return this.getStringAttribute('canonical_user');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // created_unix - computed: true, optional: false, required: false
  public get createdUnix() {
    return this.getNumberAttribute('created_unix');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
