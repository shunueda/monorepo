// https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/data-sources/organization_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenrouterOrganizationSettingsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/data-sources/organization_settings openrouter_organization_settings}
*/
export class DataOpenrouterOrganizationSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_organization_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenrouterOrganizationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenrouterOrganizationSettings to import
  * @param importFromId The id of the existing DataOpenrouterOrganizationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/data-sources/organization_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenrouterOrganizationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_organization_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/data-sources/organization_settings openrouter_organization_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenrouterOrganizationSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpenrouterOrganizationSettingsConfig = {}) {
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_filtered_model_catalog_enabled - computed: true, optional: false, required: false
  public get isFilteredModelCatalogEnabled() {
    return this.getBooleanAttribute('is_filtered_model_catalog_enabled');
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
