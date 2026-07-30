// https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/workspaces
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenrouterWorkspacesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataOpenrouterWorkspacesData {
}

export function dataOpenrouterWorkspacesDataToTerraform(struct?: DataOpenrouterWorkspacesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterWorkspacesDataToHclTerraform(struct?: DataOpenrouterWorkspacesData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterWorkspacesDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterWorkspacesData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterWorkspacesData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // default_guardrail_id - computed: true, optional: false, required: false
  public get defaultGuardrailId() {
    return this.getStringAttribute('default_guardrail_id');
  }

  // default_image_model - computed: true, optional: false, required: false
  public get defaultImageModel() {
    return this.getStringAttribute('default_image_model');
  }

  // default_provider_sort - computed: true, optional: false, required: false
  public get defaultProviderSort() {
    return this.getStringAttribute('default_provider_sort');
  }

  // default_text_model - computed: true, optional: false, required: false
  public get defaultTextModel() {
    return this.getStringAttribute('default_text_model');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // io_logging_api_key_ids - computed: true, optional: false, required: false
  public get ioLoggingApiKeyIds() {
    return this.getNumberListAttribute('io_logging_api_key_ids');
  }

  // io_logging_sampling_rate - computed: true, optional: false, required: false
  public get ioLoggingSamplingRate() {
    return this.getNumberAttribute('io_logging_sampling_rate');
  }

  // is_data_discount_logging_enabled - computed: true, optional: false, required: false
  public get isDataDiscountLoggingEnabled() {
    return this.getBooleanAttribute('is_data_discount_logging_enabled');
  }

  // is_observability_broadcast_enabled - computed: true, optional: false, required: false
  public get isObservabilityBroadcastEnabled() {
    return this.getBooleanAttribute('is_observability_broadcast_enabled');
  }

  // is_observability_io_logging_enabled - computed: true, optional: false, required: false
  public get isObservabilityIoLoggingEnabled() {
    return this.getBooleanAttribute('is_observability_io_logging_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataOpenrouterWorkspacesDataList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterWorkspacesDataOutputReference {
    return new DataOpenrouterWorkspacesDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/workspaces openrouter_workspaces}
*/
export class DataOpenrouterWorkspaces extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_workspaces";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenrouterWorkspaces resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenrouterWorkspaces to import
  * @param importFromId The id of the existing DataOpenrouterWorkspaces that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/workspaces#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenrouterWorkspaces to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_workspaces", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/workspaces openrouter_workspaces} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenrouterWorkspacesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpenrouterWorkspacesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'openrouter_workspaces',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataOpenrouterWorkspacesDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
