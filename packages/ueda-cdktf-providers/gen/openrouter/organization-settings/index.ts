// https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/organization_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * When true, the signed-in dashboard lists only the models the organization can use. `GET /api/v1/models` called with an API key always returns only the models that key can use, whatever this setting says; anonymous requests receive the public catalog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/organization_settings#is_filtered_model_catalog_enabled OrganizationSettings#is_filtered_model_catalog_enabled}
  */
  readonly isFilteredModelCatalogEnabled: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/organization_settings openrouter_organization_settings}
*/
export class OrganizationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_organization_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationSettings to import
  * @param importFromId The id of the existing OrganizationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/organization_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_organization_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/organization_settings openrouter_organization_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'openrouter_organization_settings',
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
    this._isFilteredModelCatalogEnabled = config.isFilteredModelCatalogEnabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_filtered_model_catalog_enabled - computed: false, optional: false, required: true
  private _isFilteredModelCatalogEnabled?: boolean | cdktf.IResolvable; 
  public get isFilteredModelCatalogEnabled() {
    return this.getBooleanAttribute('is_filtered_model_catalog_enabled');
  }
  public set isFilteredModelCatalogEnabled(value: boolean | cdktf.IResolvable) {
    this._isFilteredModelCatalogEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isFilteredModelCatalogEnabledInput() {
    return this._isFilteredModelCatalogEnabled;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      is_filtered_model_catalog_enabled: cdktf.booleanToTerraform(this._isFilteredModelCatalogEnabled),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      is_filtered_model_catalog_enabled: {
        value: cdktf.booleanToHclTerraform(this._isFilteredModelCatalogEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
