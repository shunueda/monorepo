// https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenrouterWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier for the workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/workspace#id DataOpenrouterWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/workspace openrouter_workspace}
*/
export class DataOpenrouterWorkspace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenrouterWorkspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenrouterWorkspace to import
  * @param importFromId The id of the existing DataOpenrouterWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenrouterWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/workspace openrouter_workspace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenrouterWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpenrouterWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'openrouter_workspace',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
