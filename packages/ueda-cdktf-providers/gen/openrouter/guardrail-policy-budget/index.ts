// https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_budget
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuardrailPolicyBudgetConfig extends cdktf.TerraformMetaArguments {
  /**
  * API key hashes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_budget#api_key_hashes GuardrailPolicyBudget#api_key_hashes}
  */
  readonly apiKeyHashes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_budget#config GuardrailPolicyBudget#config}
  */
  readonly config: GuardrailPolicyBudgetConfigA;
  /**
  * Make this the workspace default for its policy type. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_budget#is_workspace_default GuardrailPolicyBudget#is_workspace_default}
  */
  readonly isWorkspaceDefault?: boolean | cdktf.IResolvable;
  /**
  * Organization member user IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_budget#member_ids GuardrailPolicyBudget#member_ids}
  */
  readonly memberIds?: string[];
  /**
  * Policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_budget#name GuardrailPolicyBudget#name}
  */
  readonly name: string;
  /**
  * API keys that should not inherit the policy when it is the workspace default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_budget#opted_out_api_key_hashes GuardrailPolicyBudget#opted_out_api_key_hashes}
  */
  readonly optedOutApiKeyHashes?: string[];
  /**
  * Members that should not inherit the policy when it is the workspace default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_budget#opted_out_member_ids GuardrailPolicyBudget#opted_out_member_ids}
  */
  readonly optedOutMemberIds?: string[];
  /**
  * must be "budget"; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_budget#policy_type GuardrailPolicyBudget#policy_type}
  */
  readonly policyType: string;
  /**
  * Workspace the policy belongs to. Required for an organization management key; a workspace-scoped key defaults to its own workspace and gets 403 for any other.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_budget#workspace_id GuardrailPolicyBudget#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface GuardrailPolicyBudgetConfigA {
  /**
  * Whether BYOK (bring-your-own-key) inference spend counts toward this guardrail's limit_usd, in addition to OpenRouter credit spend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_budget#include_byok_in_budgets GuardrailPolicyBudget#include_byok_in_budgets}
  */
  readonly includeByokInBudgets: boolean | cdktf.IResolvable;
  /**
  * Spending limit in USD. Must be provided together with `reset_interval`: a request that sets only one of the two is rejected with a 400.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_budget#limit_usd GuardrailPolicyBudget#limit_usd}
  */
  readonly limitUsd?: number;
  /**
  * Interval at which the limit resets (daily, weekly, monthly). must be one of ["daily", "weekly", "monthly"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_budget#reset_interval GuardrailPolicyBudget#reset_interval}
  */
  readonly resetInterval?: string;
}

export function guardrailPolicyBudgetConfigAToTerraform(struct?: GuardrailPolicyBudgetConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    include_byok_in_budgets: cdktf.booleanToTerraform(struct!.includeByokInBudgets),
    limit_usd: cdktf.numberToTerraform(struct!.limitUsd),
    reset_interval: cdktf.stringToTerraform(struct!.resetInterval),
  }
}


export function guardrailPolicyBudgetConfigAToHclTerraform(struct?: GuardrailPolicyBudgetConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    include_byok_in_budgets: {
      value: cdktf.booleanToHclTerraform(struct!.includeByokInBudgets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit_usd: {
      value: cdktf.numberToHclTerraform(struct!.limitUsd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reset_interval: {
      value: cdktf.stringToHclTerraform(struct!.resetInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardrailPolicyBudgetConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GuardrailPolicyBudgetConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includeByokInBudgets !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeByokInBudgets = this._includeByokInBudgets;
    }
    if (this._limitUsd !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitUsd = this._limitUsd;
    }
    if (this._resetInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetInterval = this._resetInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardrailPolicyBudgetConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._includeByokInBudgets = undefined;
      this._limitUsd = undefined;
      this._resetInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._includeByokInBudgets = value.includeByokInBudgets;
      this._limitUsd = value.limitUsd;
      this._resetInterval = value.resetInterval;
    }
  }

  // include_byok_in_budgets - computed: false, optional: false, required: true
  private _includeByokInBudgets?: boolean | cdktf.IResolvable; 
  public get includeByokInBudgets() {
    return this.getBooleanAttribute('include_byok_in_budgets');
  }
  public set includeByokInBudgets(value: boolean | cdktf.IResolvable) {
    this._includeByokInBudgets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeByokInBudgetsInput() {
    return this._includeByokInBudgets;
  }

  // limit_usd - computed: false, optional: true, required: false
  private _limitUsd?: number; 
  public get limitUsd() {
    return this.getNumberAttribute('limit_usd');
  }
  public set limitUsd(value: number) {
    this._limitUsd = value;
  }
  public resetLimitUsd() {
    this._limitUsd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitUsdInput() {
    return this._limitUsd;
  }

  // reset_interval - computed: false, optional: true, required: false
  private _resetInterval?: string; 
  public get resetInterval() {
    return this.getStringAttribute('reset_interval');
  }
  public set resetInterval(value: string) {
    this._resetInterval = value;
  }
  public resetResetInterval() {
    this._resetInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetIntervalInput() {
    return this._resetInterval;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_budget openrouter_guardrail_policy_budget}
*/
export class GuardrailPolicyBudget extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_guardrail_policy_budget";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GuardrailPolicyBudget resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GuardrailPolicyBudget to import
  * @param importFromId The id of the existing GuardrailPolicyBudget that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_budget#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GuardrailPolicyBudget to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_guardrail_policy_budget", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_budget openrouter_guardrail_policy_budget} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuardrailPolicyBudgetConfig
  */
  public constructor(scope: Construct, id: string, config: GuardrailPolicyBudgetConfig) {
    super(scope, id, {
      terraformResourceType: 'openrouter_guardrail_policy_budget',
      terraformGeneratorMetadata: {
        providerName: 'openrouter',
        providerVersion: '0.3.280'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKeyHashes = config.apiKeyHashes;
    this._config.internalValue = config.config;
    this._isWorkspaceDefault = config.isWorkspaceDefault;
    this._memberIds = config.memberIds;
    this._name = config.name;
    this._optedOutApiKeyHashes = config.optedOutApiKeyHashes;
    this._optedOutMemberIds = config.optedOutMemberIds;
    this._policyType = config.policyType;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_hashes - computed: true, optional: true, required: false
  private _apiKeyHashes?: string[]; 
  public get apiKeyHashes() {
    return this.getListAttribute('api_key_hashes');
  }
  public set apiKeyHashes(value: string[]) {
    this._apiKeyHashes = value;
  }
  public resetApiKeyHashes() {
    this._apiKeyHashes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyHashesInput() {
    return this._apiKeyHashes;
  }

  // config - computed: false, optional: false, required: true
  private _config = new GuardrailPolicyBudgetConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GuardrailPolicyBudgetConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_workspace_default - computed: true, optional: true, required: false
  private _isWorkspaceDefault?: boolean | cdktf.IResolvable; 
  public get isWorkspaceDefault() {
    return this.getBooleanAttribute('is_workspace_default');
  }
  public set isWorkspaceDefault(value: boolean | cdktf.IResolvable) {
    this._isWorkspaceDefault = value;
  }
  public resetIsWorkspaceDefault() {
    this._isWorkspaceDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isWorkspaceDefaultInput() {
    return this._isWorkspaceDefault;
  }

  // member_ids - computed: true, optional: true, required: false
  private _memberIds?: string[]; 
  public get memberIds() {
    return this.getListAttribute('member_ids');
  }
  public set memberIds(value: string[]) {
    this._memberIds = value;
  }
  public resetMemberIds() {
    this._memberIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdsInput() {
    return this._memberIds;
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

  // opted_out_api_key_hashes - computed: true, optional: true, required: false
  private _optedOutApiKeyHashes?: string[]; 
  public get optedOutApiKeyHashes() {
    return this.getListAttribute('opted_out_api_key_hashes');
  }
  public set optedOutApiKeyHashes(value: string[]) {
    this._optedOutApiKeyHashes = value;
  }
  public resetOptedOutApiKeyHashes() {
    this._optedOutApiKeyHashes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optedOutApiKeyHashesInput() {
    return this._optedOutApiKeyHashes;
  }

  // opted_out_member_ids - computed: true, optional: true, required: false
  private _optedOutMemberIds?: string[]; 
  public get optedOutMemberIds() {
    return this.getListAttribute('opted_out_member_ids');
  }
  public set optedOutMemberIds(value: string[]) {
    this._optedOutMemberIds = value;
  }
  public resetOptedOutMemberIds() {
    this._optedOutMemberIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optedOutMemberIdsInput() {
    return this._optedOutMemberIds;
  }

  // overridden_api_key_hashes - computed: true, optional: false, required: false
  public get overriddenApiKeyHashes() {
    return this.getListAttribute('overridden_api_key_hashes');
  }

  // overridden_member_ids - computed: true, optional: false, required: false
  public get overriddenMemberIds() {
    return this.getListAttribute('overridden_member_ids');
  }

  // policy_type - computed: false, optional: false, required: true
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // reference - computed: true, optional: false, required: false
  public get reference() {
    return this.getStringAttribute('reference');
  }

  // replaces_legacy_default - computed: true, optional: false, required: false
  public get replacesLegacyDefault() {
    return this.getBooleanAttribute('replaces_legacy_default');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
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
      api_key_hashes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiKeyHashes),
      config: guardrailPolicyBudgetConfigAToTerraform(this._config.internalValue),
      is_workspace_default: cdktf.booleanToTerraform(this._isWorkspaceDefault),
      member_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._memberIds),
      name: cdktf.stringToTerraform(this._name),
      opted_out_api_key_hashes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._optedOutApiKeyHashes),
      opted_out_member_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._optedOutMemberIds),
      policy_type: cdktf.stringToTerraform(this._policyType),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key_hashes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiKeyHashes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      config: {
        value: guardrailPolicyBudgetConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GuardrailPolicyBudgetConfigA",
      },
      is_workspace_default: {
        value: cdktf.booleanToHclTerraform(this._isWorkspaceDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      member_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._memberIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opted_out_api_key_hashes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._optedOutApiKeyHashes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      opted_out_member_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._optedOutMemberIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
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
