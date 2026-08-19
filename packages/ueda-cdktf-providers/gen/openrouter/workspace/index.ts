// https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/resources/workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Required to delete the default workspace (not yet generally available; callers not enabled for it receive a 403 while the capability rolls out). Deleting it permanently disables the account’s unscoped inference API keys (management/provisioning keys are retained) and its budgets, guardrails, classifiers, and broadcast destinations. Ignored for non-default workspaces. must be one of ["true", "false"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/resources/workspace#confirm_default_settings_deletion Workspace#confirm_default_settings_deletion}
  */
  readonly confirmDefaultSettingsDeletion?: string;
  /**
  * Default image model for this workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/resources/workspace#default_image_model Workspace#default_image_model}
  */
  readonly defaultImageModel?: string;
  /**
  * Default provider sort preference (price, throughput, latency, exacto)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/resources/workspace#default_provider_sort Workspace#default_provider_sort}
  */
  readonly defaultProviderSort?: string;
  /**
  * Default text model for this workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/resources/workspace#default_text_model Workspace#default_text_model}
  */
  readonly defaultTextModel?: string;
  /**
  * Description of the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/resources/workspace#description Workspace#description}
  */
  readonly description?: string;
  /**
  * Optional array of API key IDs to filter I/O logging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/resources/workspace#io_logging_api_key_ids Workspace#io_logging_api_key_ids}
  */
  readonly ioLoggingApiKeyIds?: number[];
  /**
  * Sampling rate for I/O logging (0.0001-1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/resources/workspace#io_logging_sampling_rate Workspace#io_logging_sampling_rate}
  */
  readonly ioLoggingSamplingRate?: number;
  /**
  * Whether data discount logging is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/resources/workspace#is_data_discount_logging_enabled Workspace#is_data_discount_logging_enabled}
  */
  readonly isDataDiscountLoggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether broadcast is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/resources/workspace#is_observability_broadcast_enabled Workspace#is_observability_broadcast_enabled}
  */
  readonly isObservabilityBroadcastEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether private logging is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/resources/workspace#is_observability_io_logging_enabled Workspace#is_observability_io_logging_enabled}
  */
  readonly isObservabilityIoLoggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name for the new workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/resources/workspace#name Workspace#name}
  */
  readonly name: string;
  /**
  * URL-friendly slug (lowercase alphanumeric segments separated by single hyphens, no leading/trailing hyphens)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/resources/workspace#slug Workspace#slug}
  */
  readonly slug: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/resources/workspace openrouter_workspace}
*/
export class Workspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Workspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Workspace to import
  * @param importFromId The id of the existing Workspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/resources/workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Workspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/resources/workspace openrouter_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'openrouter_workspace',
      terraformGeneratorMetadata: {
        providerName: 'openrouter',
        providerVersion: '0.2.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._confirmDefaultSettingsDeletion = config.confirmDefaultSettingsDeletion;
    this._defaultImageModel = config.defaultImageModel;
    this._defaultProviderSort = config.defaultProviderSort;
    this._defaultTextModel = config.defaultTextModel;
    this._description = config.description;
    this._ioLoggingApiKeyIds = config.ioLoggingApiKeyIds;
    this._ioLoggingSamplingRate = config.ioLoggingSamplingRate;
    this._isDataDiscountLoggingEnabled = config.isDataDiscountLoggingEnabled;
    this._isObservabilityBroadcastEnabled = config.isObservabilityBroadcastEnabled;
    this._isObservabilityIoLoggingEnabled = config.isObservabilityIoLoggingEnabled;
    this._name = config.name;
    this._slug = config.slug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // confirm_default_settings_deletion - computed: false, optional: true, required: false
  private _confirmDefaultSettingsDeletion?: string; 
  public get confirmDefaultSettingsDeletion() {
    return this.getStringAttribute('confirm_default_settings_deletion');
  }
  public set confirmDefaultSettingsDeletion(value: string) {
    this._confirmDefaultSettingsDeletion = value;
  }
  public resetConfirmDefaultSettingsDeletion() {
    this._confirmDefaultSettingsDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmDefaultSettingsDeletionInput() {
    return this._confirmDefaultSettingsDeletion;
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

  // default_image_model - computed: true, optional: true, required: false
  private _defaultImageModel?: string; 
  public get defaultImageModel() {
    return this.getStringAttribute('default_image_model');
  }
  public set defaultImageModel(value: string) {
    this._defaultImageModel = value;
  }
  public resetDefaultImageModel() {
    this._defaultImageModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultImageModelInput() {
    return this._defaultImageModel;
  }

  // default_provider_sort - computed: true, optional: true, required: false
  private _defaultProviderSort?: string; 
  public get defaultProviderSort() {
    return this.getStringAttribute('default_provider_sort');
  }
  public set defaultProviderSort(value: string) {
    this._defaultProviderSort = value;
  }
  public resetDefaultProviderSort() {
    this._defaultProviderSort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultProviderSortInput() {
    return this._defaultProviderSort;
  }

  // default_text_model - computed: true, optional: true, required: false
  private _defaultTextModel?: string; 
  public get defaultTextModel() {
    return this.getStringAttribute('default_text_model');
  }
  public set defaultTextModel(value: string) {
    this._defaultTextModel = value;
  }
  public resetDefaultTextModel() {
    this._defaultTextModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTextModelInput() {
    return this._defaultTextModel;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // include_byok_in_budgets - computed: true, optional: false, required: false
  public get includeByokInBudgets() {
    return this.getBooleanAttribute('include_byok_in_budgets');
  }

  // io_logging_api_key_ids - computed: true, optional: true, required: false
  private _ioLoggingApiKeyIds?: number[]; 
  public get ioLoggingApiKeyIds() {
    return this.getNumberListAttribute('io_logging_api_key_ids');
  }
  public set ioLoggingApiKeyIds(value: number[]) {
    this._ioLoggingApiKeyIds = value;
  }
  public resetIoLoggingApiKeyIds() {
    this._ioLoggingApiKeyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioLoggingApiKeyIdsInput() {
    return this._ioLoggingApiKeyIds;
  }

  // io_logging_sampling_rate - computed: true, optional: true, required: false
  private _ioLoggingSamplingRate?: number; 
  public get ioLoggingSamplingRate() {
    return this.getNumberAttribute('io_logging_sampling_rate');
  }
  public set ioLoggingSamplingRate(value: number) {
    this._ioLoggingSamplingRate = value;
  }
  public resetIoLoggingSamplingRate() {
    this._ioLoggingSamplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ioLoggingSamplingRateInput() {
    return this._ioLoggingSamplingRate;
  }

  // is_data_discount_logging_enabled - computed: true, optional: true, required: false
  private _isDataDiscountLoggingEnabled?: boolean | cdktf.IResolvable; 
  public get isDataDiscountLoggingEnabled() {
    return this.getBooleanAttribute('is_data_discount_logging_enabled');
  }
  public set isDataDiscountLoggingEnabled(value: boolean | cdktf.IResolvable) {
    this._isDataDiscountLoggingEnabled = value;
  }
  public resetIsDataDiscountLoggingEnabled() {
    this._isDataDiscountLoggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDataDiscountLoggingEnabledInput() {
    return this._isDataDiscountLoggingEnabled;
  }

  // is_observability_broadcast_enabled - computed: true, optional: true, required: false
  private _isObservabilityBroadcastEnabled?: boolean | cdktf.IResolvable; 
  public get isObservabilityBroadcastEnabled() {
    return this.getBooleanAttribute('is_observability_broadcast_enabled');
  }
  public set isObservabilityBroadcastEnabled(value: boolean | cdktf.IResolvable) {
    this._isObservabilityBroadcastEnabled = value;
  }
  public resetIsObservabilityBroadcastEnabled() {
    this._isObservabilityBroadcastEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isObservabilityBroadcastEnabledInput() {
    return this._isObservabilityBroadcastEnabled;
  }

  // is_observability_io_logging_enabled - computed: true, optional: true, required: false
  private _isObservabilityIoLoggingEnabled?: boolean | cdktf.IResolvable; 
  public get isObservabilityIoLoggingEnabled() {
    return this.getBooleanAttribute('is_observability_io_logging_enabled');
  }
  public set isObservabilityIoLoggingEnabled(value: boolean | cdktf.IResolvable) {
    this._isObservabilityIoLoggingEnabled = value;
  }
  public resetIsObservabilityIoLoggingEnabled() {
    this._isObservabilityIoLoggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isObservabilityIoLoggingEnabledInput() {
    return this._isObservabilityIoLoggingEnabled;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      confirm_default_settings_deletion: cdktf.stringToTerraform(this._confirmDefaultSettingsDeletion),
      default_image_model: cdktf.stringToTerraform(this._defaultImageModel),
      default_provider_sort: cdktf.stringToTerraform(this._defaultProviderSort),
      default_text_model: cdktf.stringToTerraform(this._defaultTextModel),
      description: cdktf.stringToTerraform(this._description),
      io_logging_api_key_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ioLoggingApiKeyIds),
      io_logging_sampling_rate: cdktf.numberToTerraform(this._ioLoggingSamplingRate),
      is_data_discount_logging_enabled: cdktf.booleanToTerraform(this._isDataDiscountLoggingEnabled),
      is_observability_broadcast_enabled: cdktf.booleanToTerraform(this._isObservabilityBroadcastEnabled),
      is_observability_io_logging_enabled: cdktf.booleanToTerraform(this._isObservabilityIoLoggingEnabled),
      name: cdktf.stringToTerraform(this._name),
      slug: cdktf.stringToTerraform(this._slug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      confirm_default_settings_deletion: {
        value: cdktf.stringToHclTerraform(this._confirmDefaultSettingsDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_image_model: {
        value: cdktf.stringToHclTerraform(this._defaultImageModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_provider_sort: {
        value: cdktf.stringToHclTerraform(this._defaultProviderSort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_text_model: {
        value: cdktf.stringToHclTerraform(this._defaultTextModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      io_logging_api_key_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ioLoggingApiKeyIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      io_logging_sampling_rate: {
        value: cdktf.numberToHclTerraform(this._ioLoggingSamplingRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_data_discount_logging_enabled: {
        value: cdktf.booleanToHclTerraform(this._isDataDiscountLoggingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_observability_broadcast_enabled: {
        value: cdktf.booleanToHclTerraform(this._isObservabilityBroadcastEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_observability_io_logging_enabled: {
        value: cdktf.booleanToHclTerraform(this._isObservabilityIoLoggingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
