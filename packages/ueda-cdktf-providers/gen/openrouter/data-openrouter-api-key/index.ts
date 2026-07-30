// https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenrouterApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique hash identifier for the API key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/api_key#hash DataOpenrouterApiKey#hash}
  */
  readonly hash: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/api_key openrouter_api_key}
*/
export class DataOpenrouterApiKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_api_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenrouterApiKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenrouterApiKey to import
  * @param importFromId The id of the existing DataOpenrouterApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenrouterApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/api_key openrouter_api_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenrouterApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpenrouterApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'openrouter_api_key',
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
    this._hash = config.hash;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // hash - computed: false, optional: false, required: true
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hash: cdktf.stringToTerraform(this._hash),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hash: {
        value: cdktf.stringToHclTerraform(this._hash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
