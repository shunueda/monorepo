// https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/api_keys
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenrouterApiKeysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to include disabled API keys in the response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/api_keys#include_disabled DataOpenrouterApiKeys#include_disabled}
  */
  readonly includeDisabled?: string;
  /**
  * Number of API keys to skip for pagination
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/api_keys#offset DataOpenrouterApiKeys#offset}
  */
  readonly offset?: number;
  /**
  * Filter API keys by workspace ID. By default, keys in the default workspace are returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/api_keys#workspace_id DataOpenrouterApiKeys#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface DataOpenrouterApiKeysData {
}

export function dataOpenrouterApiKeysDataToTerraform(struct?: DataOpenrouterApiKeysData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterApiKeysDataToHclTerraform(struct?: DataOpenrouterApiKeysData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterApiKeysDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpenrouterApiKeysData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterApiKeysData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // byok_usage - computed: true, optional: false, required: false
  public get byokUsage() {
    return this.getNumberAttribute('byok_usage');
  }

  // byok_usage_daily - computed: true, optional: false, required: false
  public get byokUsageDaily() {
    return this.getNumberAttribute('byok_usage_daily');
  }

  // byok_usage_monthly - computed: true, optional: false, required: false
  public get byokUsageMonthly() {
    return this.getNumberAttribute('byok_usage_monthly');
  }

  // byok_usage_weekly - computed: true, optional: false, required: false
  public get byokUsageWeekly() {
    return this.getNumberAttribute('byok_usage_weekly');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // creator_user_id - computed: true, optional: false, required: false
  public get creatorUserId() {
    return this.getStringAttribute('creator_user_id');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // hash - computed: true, optional: false, required: false
  public get hash() {
    return this.getStringAttribute('hash');
  }

  // include_byok_in_limit - computed: true, optional: false, required: false
  public get includeByokInLimit() {
    return this.getBooleanAttribute('include_byok_in_limit');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getNumberAttribute('limit');
  }

  // limit_remaining - computed: true, optional: false, required: false
  public get limitRemaining() {
    return this.getNumberAttribute('limit_remaining');
  }

  // limit_reset - computed: true, optional: false, required: false
  public get limitReset() {
    return this.getStringAttribute('limit_reset');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getNumberAttribute('usage');
  }

  // usage_daily - computed: true, optional: false, required: false
  public get usageDaily() {
    return this.getNumberAttribute('usage_daily');
  }

  // usage_monthly - computed: true, optional: false, required: false
  public get usageMonthly() {
    return this.getNumberAttribute('usage_monthly');
  }

  // usage_weekly - computed: true, optional: false, required: false
  public get usageWeekly() {
    return this.getNumberAttribute('usage_weekly');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}

export class DataOpenrouterApiKeysDataList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOpenrouterApiKeysDataOutputReference {
    return new DataOpenrouterApiKeysDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/api_keys openrouter_api_keys}
*/
export class DataOpenrouterApiKeys extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_api_keys";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenrouterApiKeys resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenrouterApiKeys to import
  * @param importFromId The id of the existing DataOpenrouterApiKeys that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/api_keys#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenrouterApiKeys to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_api_keys", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/api_keys openrouter_api_keys} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenrouterApiKeysConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpenrouterApiKeysConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'openrouter_api_keys',
      terraformGeneratorMetadata: {
        providerName: 'openrouter',
        providerVersion: '0.1.22'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._includeDisabled = config.includeDisabled;
    this._offset = config.offset;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataOpenrouterApiKeysDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // include_disabled - computed: false, optional: true, required: false
  private _includeDisabled?: string; 
  public get includeDisabled() {
    return this.getStringAttribute('include_disabled');
  }
  public set includeDisabled(value: string) {
    this._includeDisabled = value;
  }
  public resetIncludeDisabled() {
    this._includeDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeDisabledInput() {
    return this._includeDisabled;
  }

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
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
      include_disabled: cdktf.stringToTerraform(this._includeDisabled),
      offset: cdktf.numberToTerraform(this._offset),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      include_disabled: {
        value: cdktf.stringToHclTerraform(this._includeDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
