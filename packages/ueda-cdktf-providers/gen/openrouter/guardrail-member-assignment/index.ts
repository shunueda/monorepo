// https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/guardrail_member_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuardrailMemberAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the guardrail to assign. Must belong to `workspace_id` and must not be the workspace default guardrail. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/guardrail_member_assignment#guardrail_id GuardrailMemberAssignment#guardrail_id}
  */
  readonly guardrailId: string;
  /**
  * User ID of the organization member to assign the guardrail to. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/guardrail_member_assignment#user_id GuardrailMemberAssignment#user_id}
  */
  readonly userId: string;
  /**
  * ID (UUID) of the workspace the guardrail belongs to. Slugs are rejected. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/guardrail_member_assignment#workspace_id GuardrailMemberAssignment#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/guardrail_member_assignment openrouter_guardrail_member_assignment}
*/
export class GuardrailMemberAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_guardrail_member_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GuardrailMemberAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GuardrailMemberAssignment to import
  * @param importFromId The id of the existing GuardrailMemberAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/guardrail_member_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GuardrailMemberAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_guardrail_member_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/guardrail_member_assignment openrouter_guardrail_member_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuardrailMemberAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: GuardrailMemberAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'openrouter_guardrail_member_assignment',
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
    this._userId = config.userId;
    this._workspaceId = config.workspaceId;
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

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      guardrail_id: cdktf.stringToTerraform(this._guardrailId),
      user_id: cdktf.stringToTerraform(this._userId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
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
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
