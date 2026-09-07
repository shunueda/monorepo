// https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/workspace_budget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceBudgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The workspace ID (UUID) or slug
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/workspace_budget#id WorkspaceBudget#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Whether to include BYOK (bring-your-own-key) spend when enforcing the workspace's budgets. This is a workspace-wide setting: it applies to every budget interval (daily, weekly, monthly, and lifetime), not just the interval being upserted in this request. Omit to leave the current setting unchanged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/workspace_budget#include_byok_in_budgets WorkspaceBudget#include_byok_in_budgets}
  */
  readonly includeByokInBudgets?: boolean | cdktf.IResolvable;
  /**
  * Budget reset interval. Use "lifetime" for a one-time budget that never resets. must be one of ["daily", "weekly", "monthly", "lifetime"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/workspace_budget#interval WorkspaceBudget#interval}
  */
  readonly interval: string;
  /**
  * Spending limit in USD. Must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/workspace_budget#limit_usd WorkspaceBudget#limit_usd}
  */
  readonly limitUsd: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/workspace_budget openrouter_workspace_budget}
*/
export class WorkspaceBudget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_workspace_budget";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceBudget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceBudget to import
  * @param importFromId The id of the existing WorkspaceBudget that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/workspace_budget#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceBudget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_workspace_budget", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/workspace_budget openrouter_workspace_budget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceBudgetConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceBudgetConfig) {
    super(scope, id, {
      terraformResourceType: 'openrouter_workspace_budget',
      terraformGeneratorMetadata: {
        providerName: 'openrouter',
        providerVersion: '0.2.103'
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
    this._includeByokInBudgets = config.includeByokInBudgets;
    this._interval = config.interval;
    this._limitUsd = config.limitUsd;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // include_byok_in_budgets - computed: true, optional: true, required: false
  private _includeByokInBudgets?: boolean | cdktf.IResolvable; 
  public get includeByokInBudgets() {
    return this.getBooleanAttribute('include_byok_in_budgets');
  }
  public set includeByokInBudgets(value: boolean | cdktf.IResolvable) {
    this._includeByokInBudgets = value;
  }
  public resetIncludeByokInBudgets() {
    this._includeByokInBudgets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeByokInBudgetsInput() {
    return this._includeByokInBudgets;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // limit_usd - computed: false, optional: false, required: true
  private _limitUsd?: number; 
  public get limitUsd() {
    return this.getNumberAttribute('limit_usd');
  }
  public set limitUsd(value: number) {
    this._limitUsd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitUsdInput() {
    return this._limitUsd;
  }

  // reset_interval - computed: true, optional: false, required: false
  public get resetInterval() {
    return this.getStringAttribute('reset_interval');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
      id: cdktf.stringToTerraform(this._id),
      include_byok_in_budgets: cdktf.booleanToTerraform(this._includeByokInBudgets),
      interval: cdktf.stringToTerraform(this._interval),
      limit_usd: cdktf.numberToTerraform(this._limitUsd),
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
      include_byok_in_budgets: {
        value: cdktf.booleanToHclTerraform(this._includeByokInBudgets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_usd: {
        value: cdktf.numberToHclTerraform(this._limitUsd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
