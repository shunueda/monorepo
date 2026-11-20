// https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/data-sources/guardrail_policy_model_availability
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenrouterGuardrailPolicyModelAvailabilityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Policy ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/data-sources/guardrail_policy_model_availability#id DataOpenrouterGuardrailPolicyModelAvailability#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Workspace the policy belongs to. Required for an organization management key; a workspace-scoped key defaults to its own workspace and gets 403 for any other.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/data-sources/guardrail_policy_model_availability#workspace_id DataOpenrouterGuardrailPolicyModelAvailability#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface DataOpenrouterGuardrailPolicyModelAvailabilityConfigA {
}

export function dataOpenrouterGuardrailPolicyModelAvailabilityConfigAToTerraform(struct?: DataOpenrouterGuardrailPolicyModelAvailabilityConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailPolicyModelAvailabilityConfigAToHclTerraform(struct?: DataOpenrouterGuardrailPolicyModelAvailabilityConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailPolicyModelAvailabilityConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterGuardrailPolicyModelAvailabilityConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailPolicyModelAvailabilityConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_safety_retention_google - computed: true, optional: false, required: false
  public get allowSafetyRetentionGoogle() {
    return this.getBooleanAttribute('allow_safety_retention_google');
  }

  // allow_safety_retention_other - computed: true, optional: false, required: false
  public get allowSafetyRetentionOther() {
    return this.getBooleanAttribute('allow_safety_retention_other');
  }

  // allowed_data_regions - computed: true, optional: false, required: false
  public get allowedDataRegions() {
    return this.getListAttribute('allowed_data_regions');
  }

  // allowed_models - computed: true, optional: false, required: false
  public get allowedModels() {
    return this.getListAttribute('allowed_models');
  }

  // allowed_providers - computed: true, optional: false, required: false
  public get allowedProviders() {
    return this.getListAttribute('allowed_providers');
  }

  // enable_free_model_publication - computed: true, optional: false, required: false
  public get enableFreeModelPublication() {
    return this.getBooleanAttribute('enable_free_model_publication');
  }

  // enable_free_model_training - computed: true, optional: false, required: false
  public get enableFreeModelTraining() {
    return this.getBooleanAttribute('enable_free_model_training');
  }

  // enable_paid_model_training - computed: true, optional: false, required: false
  public get enablePaidModelTraining() {
    return this.getBooleanAttribute('enable_paid_model_training');
  }

  // enforce_first_party_harness_models - computed: true, optional: false, required: false
  public get enforceFirstPartyHarnessModels() {
    return this.getBooleanAttribute('enforce_first_party_harness_models');
  }

  // enforce_zdr - computed: true, optional: false, required: false
  public get enforceZdr() {
    return this.getBooleanAttribute('enforce_zdr');
  }

  // enforce_zdr_anthropic - computed: true, optional: false, required: false
  public get enforceZdrAnthropic() {
    return this.getBooleanAttribute('enforce_zdr_anthropic');
  }

  // enforce_zdr_google - computed: true, optional: false, required: false
  public get enforceZdrGoogle() {
    return this.getBooleanAttribute('enforce_zdr_google');
  }

  // enforce_zdr_openai - computed: true, optional: false, required: false
  public get enforceZdrOpenai() {
    return this.getBooleanAttribute('enforce_zdr_openai');
  }

  // enforce_zdr_other - computed: true, optional: false, required: false
  public get enforceZdrOther() {
    return this.getBooleanAttribute('enforce_zdr_other');
  }

  // enforce_zdr_xai - computed: true, optional: false, required: false
  public get enforceZdrXai() {
    return this.getBooleanAttribute('enforce_zdr_xai');
  }

  // ignored_models - computed: true, optional: false, required: false
  public get ignoredModels() {
    return this.getListAttribute('ignored_models');
  }

  // ignored_providers - computed: true, optional: false, required: false
  public get ignoredProviders() {
    return this.getListAttribute('ignored_providers');
  }

  // platform_banned_authors - computed: true, optional: false, required: false
  public get platformBannedAuthors() {
    return this.getListAttribute('platform_banned_authors');
  }

  // platform_banned_models - computed: true, optional: false, required: false
  public get platformBannedModels() {
    return this.getListAttribute('platform_banned_models');
  }

  // platform_banned_providers - computed: true, optional: false, required: false
  public get platformBannedProviders() {
    return this.getListAttribute('platform_banned_providers');
  }

  // require_eu_data_region - computed: true, optional: false, required: false
  public get requireEuDataRegion() {
    return this.getBooleanAttribute('require_eu_data_region');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/data-sources/guardrail_policy_model_availability openrouter_guardrail_policy_model_availability}
*/
export class DataOpenrouterGuardrailPolicyModelAvailability extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_guardrail_policy_model_availability";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenrouterGuardrailPolicyModelAvailability resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenrouterGuardrailPolicyModelAvailability to import
  * @param importFromId The id of the existing DataOpenrouterGuardrailPolicyModelAvailability that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/data-sources/guardrail_policy_model_availability#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenrouterGuardrailPolicyModelAvailability to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_guardrail_policy_model_availability", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/data-sources/guardrail_policy_model_availability openrouter_guardrail_policy_model_availability} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenrouterGuardrailPolicyModelAvailabilityConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpenrouterGuardrailPolicyModelAvailabilityConfig) {
    super(scope, id, {
      terraformResourceType: 'openrouter_guardrail_policy_model_availability',
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
    this._id = config.id;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key_hashes - computed: true, optional: false, required: false
  public get apiKeyHashes() {
    return this.getListAttribute('api_key_hashes');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOpenrouterGuardrailPolicyModelAvailabilityConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
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

  // is_workspace_default - computed: true, optional: false, required: false
  public get isWorkspaceDefault() {
    return this.getBooleanAttribute('is_workspace_default');
  }

  // member_ids - computed: true, optional: false, required: false
  public get memberIds() {
    return this.getListAttribute('member_ids');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // opted_out_api_key_hashes - computed: true, optional: false, required: false
  public get optedOutApiKeyHashes() {
    return this.getListAttribute('opted_out_api_key_hashes');
  }

  // opted_out_member_ids - computed: true, optional: false, required: false
  public get optedOutMemberIds() {
    return this.getListAttribute('opted_out_member_ids');
  }

  // overridden_api_key_hashes - computed: true, optional: false, required: false
  public get overriddenApiKeyHashes() {
    return this.getListAttribute('overridden_api_key_hashes');
  }

  // overridden_member_ids - computed: true, optional: false, required: false
  public get overriddenMemberIds() {
    return this.getListAttribute('overridden_member_ids');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
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
      id: cdktf.stringToTerraform(this._id),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
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
