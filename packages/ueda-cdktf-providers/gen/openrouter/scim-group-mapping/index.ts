// https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.79/docs/resources/scim_group_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ScimGroupMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.79/docs/resources/scim_group_mapping#boolean ScimGroupMapping#boolean}
  */
  readonly boolean?: boolean | cdktf.IResolvable;
  /**
  * must be one of ["true", "false"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.79/docs/resources/scim_group_mapping#keep_members_enum ScimGroupMapping#keep_members_enum}
  */
  readonly keepMembersEnum?: string;
  /**
  * must be one of ["admin", "member"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.79/docs/resources/scim_group_mapping#role ScimGroupMapping#role}
  */
  readonly role: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.79/docs/resources/scim_group_mapping#scim_group_id ScimGroupMapping#scim_group_id}
  */
  readonly scimGroupId: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.79/docs/resources/scim_group_mapping#workspace_id ScimGroupMapping#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.79/docs/resources/scim_group_mapping openrouter_scim_group_mapping}
*/
export class ScimGroupMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_scim_group_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ScimGroupMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScimGroupMapping to import
  * @param importFromId The id of the existing ScimGroupMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.79/docs/resources/scim_group_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScimGroupMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_scim_group_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.79/docs/resources/scim_group_mapping openrouter_scim_group_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScimGroupMappingConfig
  */
  public constructor(scope: Construct, id: string, config: ScimGroupMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'openrouter_scim_group_mapping',
      terraformGeneratorMetadata: {
        providerName: 'openrouter',
        providerVersion: '0.2.79'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._boolean = config.boolean;
    this._keepMembersEnum = config.keepMembersEnum;
    this._role = config.role;
    this._scimGroupId = config.scimGroupId;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boolean - computed: false, optional: true, required: false
  private _boolean?: boolean | cdktf.IResolvable; 
  public get boolean() {
    return this.getBooleanAttribute('boolean');
  }
  public set boolean(value: boolean | cdktf.IResolvable) {
    this._boolean = value;
  }
  public resetBoolean() {
    this._boolean = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanInput() {
    return this._boolean;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keep_members_enum - computed: false, optional: true, required: false
  private _keepMembersEnum?: string; 
  public get keepMembersEnum() {
    return this.getStringAttribute('keep_members_enum');
  }
  public set keepMembersEnum(value: string) {
    this._keepMembersEnum = value;
  }
  public resetKeepMembersEnum() {
    this._keepMembersEnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepMembersEnumInput() {
    return this._keepMembersEnum;
  }

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // scim_group_id - computed: false, optional: false, required: true
  private _scimGroupId?: string; 
  public get scimGroupId() {
    return this.getStringAttribute('scim_group_id');
  }
  public set scimGroupId(value: string) {
    this._scimGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scimGroupIdInput() {
    return this._scimGroupId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
      boolean: cdktf.booleanToTerraform(this._boolean),
      keep_members_enum: cdktf.stringToTerraform(this._keepMembersEnum),
      role: cdktf.stringToTerraform(this._role),
      scim_group_id: cdktf.stringToTerraform(this._scimGroupId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      boolean: {
        value: cdktf.booleanToHclTerraform(this._boolean),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keep_members_enum: {
        value: cdktf.stringToHclTerraform(this._keepMembersEnum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_group_id: {
        value: cdktf.stringToHclTerraform(this._scimGroupId),
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
