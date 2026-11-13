// https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/guardrail_key_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuardrailKeyAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the guardrail to assign. Must not be a workspace default guardrail. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/guardrail_key_assignment#guardrail_id GuardrailKeyAssignment#guardrail_id}
  */
  readonly guardrailId: string;
  /**
  * Hash of the API key to assign the guardrail to, for example `openrouter_api_key.example.hash`. Not the secret key itself. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/guardrail_key_assignment#key_hash GuardrailKeyAssignment#key_hash}
  */
  readonly keyHash: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/guardrail_key_assignment openrouter_guardrail_key_assignment}
*/
export class GuardrailKeyAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_guardrail_key_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GuardrailKeyAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GuardrailKeyAssignment to import
  * @param importFromId The id of the existing GuardrailKeyAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/guardrail_key_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GuardrailKeyAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_guardrail_key_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/guardrail_key_assignment openrouter_guardrail_key_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuardrailKeyAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: GuardrailKeyAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'openrouter_guardrail_key_assignment',
      terraformGeneratorMetadata: {
        providerName: 'openrouter',
        providerVersion: '0.3.258'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._guardrailId = config.guardrailId;
    this._keyHash = config.keyHash;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // guardrail_id - computed: false, optional: false, required: true
  private _guardrailId?: string; 
  public get guardrailId() {
    return this.getStringAttribute('guardrail_id');
  }
  public set guardrailId(value: string) {
    this._guardrailId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailIdInput() {
    return this._guardrailId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_hash - computed: false, optional: false, required: true
  private _keyHash?: string; 
  public get keyHash() {
    return this.getStringAttribute('key_hash');
  }
  public set keyHash(value: string) {
    this._keyHash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyHashInput() {
    return this._keyHash;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      guardrail_id: cdktf.stringToTerraform(this._guardrailId),
      key_hash: cdktf.stringToTerraform(this._keyHash),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      guardrail_id: {
        value: cdktf.stringToHclTerraform(this._guardrailId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_hash: {
        value: cdktf.stringToHclTerraform(this._keyHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
