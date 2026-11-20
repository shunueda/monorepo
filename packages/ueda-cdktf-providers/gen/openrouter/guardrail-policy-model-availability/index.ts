// https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuardrailPolicyModelAvailabilityConfig extends cdktf.TerraformMetaArguments {
  /**
  * API key hashes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#api_key_hashes GuardrailPolicyModelAvailability#api_key_hashes}
  */
  readonly apiKeyHashes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#config GuardrailPolicyModelAvailability#config}
  */
  readonly config: GuardrailPolicyModelAvailabilityConfigA;
  /**
  * Make this the workspace default for its policy type. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#is_workspace_default GuardrailPolicyModelAvailability#is_workspace_default}
  */
  readonly isWorkspaceDefault?: boolean | cdktf.IResolvable;
  /**
  * Organization member user IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#member_ids GuardrailPolicyModelAvailability#member_ids}
  */
  readonly memberIds?: string[];
  /**
  * Policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#name GuardrailPolicyModelAvailability#name}
  */
  readonly name: string;
  /**
  * API keys that should not inherit the policy when it is the workspace default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#opted_out_api_key_hashes GuardrailPolicyModelAvailability#opted_out_api_key_hashes}
  */
  readonly optedOutApiKeyHashes?: string[];
  /**
  * Members that should not inherit the policy when it is the workspace default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#opted_out_member_ids GuardrailPolicyModelAvailability#opted_out_member_ids}
  */
  readonly optedOutMemberIds?: string[];
  /**
  * must be "model_availability"; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#policy_type GuardrailPolicyModelAvailability#policy_type}
  */
  readonly policyType: string;
  /**
  * Workspace the policy belongs to. Required for an organization management key; a workspace-scoped key defaults to its own workspace and gets 403 for any other.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#workspace_id GuardrailPolicyModelAvailability#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface GuardrailPolicyModelAvailabilityConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#allow_safety_retention_google GuardrailPolicyModelAvailability#allow_safety_retention_google}
  */
  readonly allowSafetyRetentionGoogle?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#allow_safety_retention_other GuardrailPolicyModelAvailability#allow_safety_retention_other}
  */
  readonly allowSafetyRetentionOther?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#allowed_data_regions GuardrailPolicyModelAvailability#allowed_data_regions}
  */
  readonly allowedDataRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#allowed_models GuardrailPolicyModelAvailability#allowed_models}
  */
  readonly allowedModels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#allowed_providers GuardrailPolicyModelAvailability#allowed_providers}
  */
  readonly allowedProviders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#enable_free_model_publication GuardrailPolicyModelAvailability#enable_free_model_publication}
  */
  readonly enableFreeModelPublication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#enable_free_model_training GuardrailPolicyModelAvailability#enable_free_model_training}
  */
  readonly enableFreeModelTraining?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#enable_paid_model_training GuardrailPolicyModelAvailability#enable_paid_model_training}
  */
  readonly enablePaidModelTraining?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#enforce_first_party_harness_models GuardrailPolicyModelAvailability#enforce_first_party_harness_models}
  */
  readonly enforceFirstPartyHarnessModels?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#enforce_zdr GuardrailPolicyModelAvailability#enforce_zdr}
  */
  readonly enforceZdr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#enforce_zdr_anthropic GuardrailPolicyModelAvailability#enforce_zdr_anthropic}
  */
  readonly enforceZdrAnthropic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#enforce_zdr_google GuardrailPolicyModelAvailability#enforce_zdr_google}
  */
  readonly enforceZdrGoogle?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#enforce_zdr_openai GuardrailPolicyModelAvailability#enforce_zdr_openai}
  */
  readonly enforceZdrOpenai?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#enforce_zdr_other GuardrailPolicyModelAvailability#enforce_zdr_other}
  */
  readonly enforceZdrOther?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#enforce_zdr_xai GuardrailPolicyModelAvailability#enforce_zdr_xai}
  */
  readonly enforceZdrXai?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#ignored_models GuardrailPolicyModelAvailability#ignored_models}
  */
  readonly ignoredModels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#ignored_providers GuardrailPolicyModelAvailability#ignored_providers}
  */
  readonly ignoredProviders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#platform_banned_authors GuardrailPolicyModelAvailability#platform_banned_authors}
  */
  readonly platformBannedAuthors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#platform_banned_models GuardrailPolicyModelAvailability#platform_banned_models}
  */
  readonly platformBannedModels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#platform_banned_providers GuardrailPolicyModelAvailability#platform_banned_providers}
  */
  readonly platformBannedProviders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#require_eu_data_region GuardrailPolicyModelAvailability#require_eu_data_region}
  */
  readonly requireEuDataRegion?: boolean | cdktf.IResolvable;
}

export function guardrailPolicyModelAvailabilityConfigAToTerraform(struct?: GuardrailPolicyModelAvailabilityConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_safety_retention_google: cdktf.booleanToTerraform(struct!.allowSafetyRetentionGoogle),
    allow_safety_retention_other: cdktf.booleanToTerraform(struct!.allowSafetyRetentionOther),
    allowed_data_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedDataRegions),
    allowed_models: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedModels),
    allowed_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedProviders),
    enable_free_model_publication: cdktf.booleanToTerraform(struct!.enableFreeModelPublication),
    enable_free_model_training: cdktf.booleanToTerraform(struct!.enableFreeModelTraining),
    enable_paid_model_training: cdktf.booleanToTerraform(struct!.enablePaidModelTraining),
    enforce_first_party_harness_models: cdktf.booleanToTerraform(struct!.enforceFirstPartyHarnessModels),
    enforce_zdr: cdktf.booleanToTerraform(struct!.enforceZdr),
    enforce_zdr_anthropic: cdktf.booleanToTerraform(struct!.enforceZdrAnthropic),
    enforce_zdr_google: cdktf.booleanToTerraform(struct!.enforceZdrGoogle),
    enforce_zdr_openai: cdktf.booleanToTerraform(struct!.enforceZdrOpenai),
    enforce_zdr_other: cdktf.booleanToTerraform(struct!.enforceZdrOther),
    enforce_zdr_xai: cdktf.booleanToTerraform(struct!.enforceZdrXai),
    ignored_models: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoredModels),
    ignored_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoredProviders),
    platform_banned_authors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.platformBannedAuthors),
    platform_banned_models: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.platformBannedModels),
    platform_banned_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.platformBannedProviders),
    require_eu_data_region: cdktf.booleanToTerraform(struct!.requireEuDataRegion),
  }
}


export function guardrailPolicyModelAvailabilityConfigAToHclTerraform(struct?: GuardrailPolicyModelAvailabilityConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_safety_retention_google: {
      value: cdktf.booleanToHclTerraform(struct!.allowSafetyRetentionGoogle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_safety_retention_other: {
      value: cdktf.booleanToHclTerraform(struct!.allowSafetyRetentionOther),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allowed_data_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedDataRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_models: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedModels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_providers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedProviders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_free_model_publication: {
      value: cdktf.booleanToHclTerraform(struct!.enableFreeModelPublication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_free_model_training: {
      value: cdktf.booleanToHclTerraform(struct!.enableFreeModelTraining),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_paid_model_training: {
      value: cdktf.booleanToHclTerraform(struct!.enablePaidModelTraining),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_first_party_harness_models: {
      value: cdktf.booleanToHclTerraform(struct!.enforceFirstPartyHarnessModels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_zdr: {
      value: cdktf.booleanToHclTerraform(struct!.enforceZdr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_zdr_anthropic: {
      value: cdktf.booleanToHclTerraform(struct!.enforceZdrAnthropic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_zdr_google: {
      value: cdktf.booleanToHclTerraform(struct!.enforceZdrGoogle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_zdr_openai: {
      value: cdktf.booleanToHclTerraform(struct!.enforceZdrOpenai),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_zdr_other: {
      value: cdktf.booleanToHclTerraform(struct!.enforceZdrOther),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_zdr_xai: {
      value: cdktf.booleanToHclTerraform(struct!.enforceZdrXai),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignored_models: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoredModels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignored_providers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoredProviders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    platform_banned_authors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.platformBannedAuthors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    platform_banned_models: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.platformBannedModels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    platform_banned_providers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.platformBannedProviders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    require_eu_data_region: {
      value: cdktf.booleanToHclTerraform(struct!.requireEuDataRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardrailPolicyModelAvailabilityConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GuardrailPolicyModelAvailabilityConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSafetyRetentionGoogle !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSafetyRetentionGoogle = this._allowSafetyRetentionGoogle;
    }
    if (this._allowSafetyRetentionOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSafetyRetentionOther = this._allowSafetyRetentionOther;
    }
    if (this._allowedDataRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDataRegions = this._allowedDataRegions;
    }
    if (this._allowedModels !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedModels = this._allowedModels;
    }
    if (this._allowedProviders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedProviders = this._allowedProviders;
    }
    if (this._enableFreeModelPublication !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFreeModelPublication = this._enableFreeModelPublication;
    }
    if (this._enableFreeModelTraining !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFreeModelTraining = this._enableFreeModelTraining;
    }
    if (this._enablePaidModelTraining !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePaidModelTraining = this._enablePaidModelTraining;
    }
    if (this._enforceFirstPartyHarnessModels !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceFirstPartyHarnessModels = this._enforceFirstPartyHarnessModels;
    }
    if (this._enforceZdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceZdr = this._enforceZdr;
    }
    if (this._enforceZdrAnthropic !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceZdrAnthropic = this._enforceZdrAnthropic;
    }
    if (this._enforceZdrGoogle !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceZdrGoogle = this._enforceZdrGoogle;
    }
    if (this._enforceZdrOpenai !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceZdrOpenai = this._enforceZdrOpenai;
    }
    if (this._enforceZdrOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceZdrOther = this._enforceZdrOther;
    }
    if (this._enforceZdrXai !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceZdrXai = this._enforceZdrXai;
    }
    if (this._ignoredModels !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredModels = this._ignoredModels;
    }
    if (this._ignoredProviders !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoredProviders = this._ignoredProviders;
    }
    if (this._platformBannedAuthors !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformBannedAuthors = this._platformBannedAuthors;
    }
    if (this._platformBannedModels !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformBannedModels = this._platformBannedModels;
    }
    if (this._platformBannedProviders !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformBannedProviders = this._platformBannedProviders;
    }
    if (this._requireEuDataRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireEuDataRegion = this._requireEuDataRegion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardrailPolicyModelAvailabilityConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowSafetyRetentionGoogle = undefined;
      this._allowSafetyRetentionOther = undefined;
      this._allowedDataRegions = undefined;
      this._allowedModels = undefined;
      this._allowedProviders = undefined;
      this._enableFreeModelPublication = undefined;
      this._enableFreeModelTraining = undefined;
      this._enablePaidModelTraining = undefined;
      this._enforceFirstPartyHarnessModels = undefined;
      this._enforceZdr = undefined;
      this._enforceZdrAnthropic = undefined;
      this._enforceZdrGoogle = undefined;
      this._enforceZdrOpenai = undefined;
      this._enforceZdrOther = undefined;
      this._enforceZdrXai = undefined;
      this._ignoredModels = undefined;
      this._ignoredProviders = undefined;
      this._platformBannedAuthors = undefined;
      this._platformBannedModels = undefined;
      this._platformBannedProviders = undefined;
      this._requireEuDataRegion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowSafetyRetentionGoogle = value.allowSafetyRetentionGoogle;
      this._allowSafetyRetentionOther = value.allowSafetyRetentionOther;
      this._allowedDataRegions = value.allowedDataRegions;
      this._allowedModels = value.allowedModels;
      this._allowedProviders = value.allowedProviders;
      this._enableFreeModelPublication = value.enableFreeModelPublication;
      this._enableFreeModelTraining = value.enableFreeModelTraining;
      this._enablePaidModelTraining = value.enablePaidModelTraining;
      this._enforceFirstPartyHarnessModels = value.enforceFirstPartyHarnessModels;
      this._enforceZdr = value.enforceZdr;
      this._enforceZdrAnthropic = value.enforceZdrAnthropic;
      this._enforceZdrGoogle = value.enforceZdrGoogle;
      this._enforceZdrOpenai = value.enforceZdrOpenai;
      this._enforceZdrOther = value.enforceZdrOther;
      this._enforceZdrXai = value.enforceZdrXai;
      this._ignoredModels = value.ignoredModels;
      this._ignoredProviders = value.ignoredProviders;
      this._platformBannedAuthors = value.platformBannedAuthors;
      this._platformBannedModels = value.platformBannedModels;
      this._platformBannedProviders = value.platformBannedProviders;
      this._requireEuDataRegion = value.requireEuDataRegion;
    }
  }

  // allow_safety_retention_google - computed: true, optional: true, required: false
  private _allowSafetyRetentionGoogle?: boolean | cdktf.IResolvable; 
  public get allowSafetyRetentionGoogle() {
    return this.getBooleanAttribute('allow_safety_retention_google');
  }
  public set allowSafetyRetentionGoogle(value: boolean | cdktf.IResolvable) {
    this._allowSafetyRetentionGoogle = value;
  }
  public resetAllowSafetyRetentionGoogle() {
    this._allowSafetyRetentionGoogle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSafetyRetentionGoogleInput() {
    return this._allowSafetyRetentionGoogle;
  }

  // allow_safety_retention_other - computed: true, optional: true, required: false
  private _allowSafetyRetentionOther?: boolean | cdktf.IResolvable; 
  public get allowSafetyRetentionOther() {
    return this.getBooleanAttribute('allow_safety_retention_other');
  }
  public set allowSafetyRetentionOther(value: boolean | cdktf.IResolvable) {
    this._allowSafetyRetentionOther = value;
  }
  public resetAllowSafetyRetentionOther() {
    this._allowSafetyRetentionOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSafetyRetentionOtherInput() {
    return this._allowSafetyRetentionOther;
  }

  // allowed_data_regions - computed: true, optional: true, required: false
  private _allowedDataRegions?: string[]; 
  public get allowedDataRegions() {
    return this.getListAttribute('allowed_data_regions');
  }
  public set allowedDataRegions(value: string[]) {
    this._allowedDataRegions = value;
  }
  public resetAllowedDataRegions() {
    this._allowedDataRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDataRegionsInput() {
    return this._allowedDataRegions;
  }

  // allowed_models - computed: true, optional: true, required: false
  private _allowedModels?: string[]; 
  public get allowedModels() {
    return this.getListAttribute('allowed_models');
  }
  public set allowedModels(value: string[]) {
    this._allowedModels = value;
  }
  public resetAllowedModels() {
    this._allowedModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedModelsInput() {
    return this._allowedModels;
  }

  // allowed_providers - computed: true, optional: true, required: false
  private _allowedProviders?: string[]; 
  public get allowedProviders() {
    return this.getListAttribute('allowed_providers');
  }
  public set allowedProviders(value: string[]) {
    this._allowedProviders = value;
  }
  public resetAllowedProviders() {
    this._allowedProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedProvidersInput() {
    return this._allowedProviders;
  }

  // enable_free_model_publication - computed: true, optional: true, required: false
  private _enableFreeModelPublication?: boolean | cdktf.IResolvable; 
  public get enableFreeModelPublication() {
    return this.getBooleanAttribute('enable_free_model_publication');
  }
  public set enableFreeModelPublication(value: boolean | cdktf.IResolvable) {
    this._enableFreeModelPublication = value;
  }
  public resetEnableFreeModelPublication() {
    this._enableFreeModelPublication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFreeModelPublicationInput() {
    return this._enableFreeModelPublication;
  }

  // enable_free_model_training - computed: true, optional: true, required: false
  private _enableFreeModelTraining?: boolean | cdktf.IResolvable; 
  public get enableFreeModelTraining() {
    return this.getBooleanAttribute('enable_free_model_training');
  }
  public set enableFreeModelTraining(value: boolean | cdktf.IResolvable) {
    this._enableFreeModelTraining = value;
  }
  public resetEnableFreeModelTraining() {
    this._enableFreeModelTraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFreeModelTrainingInput() {
    return this._enableFreeModelTraining;
  }

  // enable_paid_model_training - computed: true, optional: true, required: false
  private _enablePaidModelTraining?: boolean | cdktf.IResolvable; 
  public get enablePaidModelTraining() {
    return this.getBooleanAttribute('enable_paid_model_training');
  }
  public set enablePaidModelTraining(value: boolean | cdktf.IResolvable) {
    this._enablePaidModelTraining = value;
  }
  public resetEnablePaidModelTraining() {
    this._enablePaidModelTraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePaidModelTrainingInput() {
    return this._enablePaidModelTraining;
  }

  // enforce_first_party_harness_models - computed: true, optional: true, required: false
  private _enforceFirstPartyHarnessModels?: boolean | cdktf.IResolvable; 
  public get enforceFirstPartyHarnessModels() {
    return this.getBooleanAttribute('enforce_first_party_harness_models');
  }
  public set enforceFirstPartyHarnessModels(value: boolean | cdktf.IResolvable) {
    this._enforceFirstPartyHarnessModels = value;
  }
  public resetEnforceFirstPartyHarnessModels() {
    this._enforceFirstPartyHarnessModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceFirstPartyHarnessModelsInput() {
    return this._enforceFirstPartyHarnessModels;
  }

  // enforce_zdr - computed: true, optional: true, required: false
  private _enforceZdr?: boolean | cdktf.IResolvable; 
  public get enforceZdr() {
    return this.getBooleanAttribute('enforce_zdr');
  }
  public set enforceZdr(value: boolean | cdktf.IResolvable) {
    this._enforceZdr = value;
  }
  public resetEnforceZdr() {
    this._enforceZdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceZdrInput() {
    return this._enforceZdr;
  }

  // enforce_zdr_anthropic - computed: true, optional: true, required: false
  private _enforceZdrAnthropic?: boolean | cdktf.IResolvable; 
  public get enforceZdrAnthropic() {
    return this.getBooleanAttribute('enforce_zdr_anthropic');
  }
  public set enforceZdrAnthropic(value: boolean | cdktf.IResolvable) {
    this._enforceZdrAnthropic = value;
  }
  public resetEnforceZdrAnthropic() {
    this._enforceZdrAnthropic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceZdrAnthropicInput() {
    return this._enforceZdrAnthropic;
  }

  // enforce_zdr_google - computed: true, optional: true, required: false
  private _enforceZdrGoogle?: boolean | cdktf.IResolvable; 
  public get enforceZdrGoogle() {
    return this.getBooleanAttribute('enforce_zdr_google');
  }
  public set enforceZdrGoogle(value: boolean | cdktf.IResolvable) {
    this._enforceZdrGoogle = value;
  }
  public resetEnforceZdrGoogle() {
    this._enforceZdrGoogle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceZdrGoogleInput() {
    return this._enforceZdrGoogle;
  }

  // enforce_zdr_openai - computed: true, optional: true, required: false
  private _enforceZdrOpenai?: boolean | cdktf.IResolvable; 
  public get enforceZdrOpenai() {
    return this.getBooleanAttribute('enforce_zdr_openai');
  }
  public set enforceZdrOpenai(value: boolean | cdktf.IResolvable) {
    this._enforceZdrOpenai = value;
  }
  public resetEnforceZdrOpenai() {
    this._enforceZdrOpenai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceZdrOpenaiInput() {
    return this._enforceZdrOpenai;
  }

  // enforce_zdr_other - computed: true, optional: true, required: false
  private _enforceZdrOther?: boolean | cdktf.IResolvable; 
  public get enforceZdrOther() {
    return this.getBooleanAttribute('enforce_zdr_other');
  }
  public set enforceZdrOther(value: boolean | cdktf.IResolvable) {
    this._enforceZdrOther = value;
  }
  public resetEnforceZdrOther() {
    this._enforceZdrOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceZdrOtherInput() {
    return this._enforceZdrOther;
  }

  // enforce_zdr_xai - computed: true, optional: true, required: false
  private _enforceZdrXai?: boolean | cdktf.IResolvable; 
  public get enforceZdrXai() {
    return this.getBooleanAttribute('enforce_zdr_xai');
  }
  public set enforceZdrXai(value: boolean | cdktf.IResolvable) {
    this._enforceZdrXai = value;
  }
  public resetEnforceZdrXai() {
    this._enforceZdrXai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceZdrXaiInput() {
    return this._enforceZdrXai;
  }

  // ignored_models - computed: true, optional: true, required: false
  private _ignoredModels?: string[]; 
  public get ignoredModels() {
    return this.getListAttribute('ignored_models');
  }
  public set ignoredModels(value: string[]) {
    this._ignoredModels = value;
  }
  public resetIgnoredModels() {
    this._ignoredModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredModelsInput() {
    return this._ignoredModels;
  }

  // ignored_providers - computed: true, optional: true, required: false
  private _ignoredProviders?: string[]; 
  public get ignoredProviders() {
    return this.getListAttribute('ignored_providers');
  }
  public set ignoredProviders(value: string[]) {
    this._ignoredProviders = value;
  }
  public resetIgnoredProviders() {
    this._ignoredProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoredProvidersInput() {
    return this._ignoredProviders;
  }

  // platform_banned_authors - computed: true, optional: true, required: false
  private _platformBannedAuthors?: string[]; 
  public get platformBannedAuthors() {
    return this.getListAttribute('platform_banned_authors');
  }
  public set platformBannedAuthors(value: string[]) {
    this._platformBannedAuthors = value;
  }
  public resetPlatformBannedAuthors() {
    this._platformBannedAuthors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformBannedAuthorsInput() {
    return this._platformBannedAuthors;
  }

  // platform_banned_models - computed: true, optional: true, required: false
  private _platformBannedModels?: string[]; 
  public get platformBannedModels() {
    return this.getListAttribute('platform_banned_models');
  }
  public set platformBannedModels(value: string[]) {
    this._platformBannedModels = value;
  }
  public resetPlatformBannedModels() {
    this._platformBannedModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformBannedModelsInput() {
    return this._platformBannedModels;
  }

  // platform_banned_providers - computed: true, optional: true, required: false
  private _platformBannedProviders?: string[]; 
  public get platformBannedProviders() {
    return this.getListAttribute('platform_banned_providers');
  }
  public set platformBannedProviders(value: string[]) {
    this._platformBannedProviders = value;
  }
  public resetPlatformBannedProviders() {
    this._platformBannedProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformBannedProvidersInput() {
    return this._platformBannedProviders;
  }

  // require_eu_data_region - computed: true, optional: true, required: false
  private _requireEuDataRegion?: boolean | cdktf.IResolvable; 
  public get requireEuDataRegion() {
    return this.getBooleanAttribute('require_eu_data_region');
  }
  public set requireEuDataRegion(value: boolean | cdktf.IResolvable) {
    this._requireEuDataRegion = value;
  }
  public resetRequireEuDataRegion() {
    this._requireEuDataRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireEuDataRegionInput() {
    return this._requireEuDataRegion;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability openrouter_guardrail_policy_model_availability}
*/
export class GuardrailPolicyModelAvailability extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_guardrail_policy_model_availability";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GuardrailPolicyModelAvailability resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GuardrailPolicyModelAvailability to import
  * @param importFromId The id of the existing GuardrailPolicyModelAvailability that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GuardrailPolicyModelAvailability to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_guardrail_policy_model_availability", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_model_availability openrouter_guardrail_policy_model_availability} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuardrailPolicyModelAvailabilityConfig
  */
  public constructor(scope: Construct, id: string, config: GuardrailPolicyModelAvailabilityConfig) {
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
  private _config = new GuardrailPolicyModelAvailabilityConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GuardrailPolicyModelAvailabilityConfigA) {
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
      config: guardrailPolicyModelAvailabilityConfigAToTerraform(this._config.internalValue),
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
        value: guardrailPolicyModelAvailabilityConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GuardrailPolicyModelAvailabilityConfigA",
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
