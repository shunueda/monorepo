// https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceDefaultGuardrailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether ZDR-only requests to google/* models may also use Safety Retention endpoints, which may retain prompts and responses from any request, only to prevent abuse, and do not use them for training. false allows only ZDR endpoints. A guardrail can only be more restrictive than the account setting. Inherits the account setting when not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#allow_safety_retention_google WorkspaceDefaultGuardrail#allow_safety_retention_google}
  */
  readonly allowSafetyRetentionGoogle?: boolean | cdktf.IResolvable;
  /**
  * Whether ZDR-only requests to models outside the named providers (for example open-weight models on Vertex) may also use Safety Retention endpoints, which may retain prompts and responses from any request, only to prevent abuse, and do not use them for training. false allows only ZDR endpoints. A guardrail can only be more restrictive than the account setting. Inherits the account setting when not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#allow_safety_retention_other WorkspaceDefaultGuardrail#allow_safety_retention_other}
  */
  readonly allowSafetyRetentionOther?: boolean | cdktf.IResolvable;
  /**
  * Data regions through which requests governed by this guardrail must arrive. `global` is https://openrouter.ai, `europe` is https://eu.openrouter.ai, and `us` is https://us.openrouter.ai. Requests arriving through any other region are rejected. `null` leaves the ingress region unrestricted. When several guardrails apply (workspace default, member, API key), the effective regions are the intersection of every non-null value. An empty array is rejected. Omit or set to null to remove the restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#allowed_data_regions WorkspaceDefaultGuardrail#allowed_data_regions}
  */
  readonly allowedDataRegions?: string[];
  /**
  * Array of model identifiers (slug or canonical_slug accepted) Omit or set to null to remove the restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#allowed_models WorkspaceDefaultGuardrail#allowed_models}
  */
  readonly allowedModels?: string[];
  /**
  * List of allowed provider IDs Omit or set to null to remove the restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#allowed_providers WorkspaceDefaultGuardrail#allowed_providers}
  */
  readonly allowedProviders?: string[];
  /**
  * Builtin content filters to apply. Every builtin slug supports "block", "redact", and the detect-only "flag" action. Omit or set to null to remove the restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#content_filter_builtins WorkspaceDefaultGuardrail#content_filter_builtins}
  */
  readonly contentFilterBuiltins?: WorkspaceDefaultGuardrailContentFilterBuiltins[] | cdktf.IResolvable;
  /**
  * Custom regex content filters to apply to request messages Omit or set to null to remove the restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#content_filters WorkspaceDefaultGuardrail#content_filters}
  */
  readonly contentFilters?: WorkspaceDefaultGuardrailContentFilters[] | cdktf.IResolvable;
  /**
  * Description of the guardrail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#description WorkspaceDefaultGuardrail#description}
  */
  readonly description?: string;
  /**
  * Whether this guardrail allows free endpoints that publish prompts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#enable_free_model_publication WorkspaceDefaultGuardrail#enable_free_model_publication}
  */
  readonly enableFreeModelPublication?: boolean | cdktf.IResolvable;
  /**
  * Whether this guardrail allows free endpoints that train on request data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#enable_free_model_training WorkspaceDefaultGuardrail#enable_free_model_training}
  */
  readonly enableFreeModelTraining?: boolean | cdktf.IResolvable;
  /**
  * Whether this guardrail allows paid endpoints that train on request data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#enable_paid_model_training WorkspaceDefaultGuardrail#enable_paid_model_training}
  */
  readonly enablePaidModelTraining?: boolean | cdktf.IResolvable;
  /**
  * Whether coding harnesses list only their vendor's own models: Codex lists OpenAI models and Claude Code and Claude Desktop list Anthropic models. Affects only the model list those harnesses request from GET /models; a model the client names directly is still routed. Any true across the workspace default, member, and API key guardrails applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#enforce_first_party_harness_models WorkspaceDefaultGuardrail#enforce_first_party_harness_models}
  */
  readonly enforceFirstPartyHarnessModels?: boolean | cdktf.IResolvable;
  /**
  * Deprecated. Use enforce_zdr_anthropic, enforce_zdr_openai, enforce_zdr_google, enforce_zdr_xai, and enforce_zdr_other instead. When provided, its value is copied into any of those per-provider fields that are not explicitly specified on the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#enforce_zdr WorkspaceDefaultGuardrail#enforce_zdr}
  */
  readonly enforceZdr?: boolean | cdktf.IResolvable;
  /**
  * Whether to enforce zero data retention for Anthropic models. Falls back to enforce_zdr when not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#enforce_zdr_anthropic WorkspaceDefaultGuardrail#enforce_zdr_anthropic}
  */
  readonly enforceZdrAnthropic?: boolean | cdktf.IResolvable;
  /**
  * Whether to enforce zero data retention for Google models. Falls back to enforce_zdr when not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#enforce_zdr_google WorkspaceDefaultGuardrail#enforce_zdr_google}
  */
  readonly enforceZdrGoogle?: boolean | cdktf.IResolvable;
  /**
  * Whether to enforce zero data retention for OpenAI models. Falls back to enforce_zdr when not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#enforce_zdr_openai WorkspaceDefaultGuardrail#enforce_zdr_openai}
  */
  readonly enforceZdrOpenai?: boolean | cdktf.IResolvable;
  /**
  * Whether to enforce zero data retention for models that are not from Anthropic, OpenAI, Google, or xAI. Falls back to enforce_zdr when not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#enforce_zdr_other WorkspaceDefaultGuardrail#enforce_zdr_other}
  */
  readonly enforceZdrOther?: boolean | cdktf.IResolvable;
  /**
  * Whether to enforce zero data retention for xAI models. Falls back to enforce_zdr when not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#enforce_zdr_xai WorkspaceDefaultGuardrail#enforce_zdr_xai}
  */
  readonly enforceZdrXai?: boolean | cdktf.IResolvable;
  /**
  * Array of model identifiers to exclude from routing (slug or canonical_slug accepted) Omit or set to null to remove the restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#ignored_models WorkspaceDefaultGuardrail#ignored_models}
  */
  readonly ignoredModels?: string[];
  /**
  * List of provider IDs to exclude from routing Omit or set to null to remove the restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#ignored_providers WorkspaceDefaultGuardrail#ignored_providers}
  */
  readonly ignoredProviders?: string[];
  /**
  * Whether BYOK (bring-your-own-key) inference spend counts toward this guardrail's limit_usd, in addition to OpenRouter credit spend. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#include_byok_in_budgets WorkspaceDefaultGuardrail#include_byok_in_budgets}
  */
  readonly includeByokInBudgets?: boolean | cdktf.IResolvable;
  /**
  * Spending limit in USD. Must be provided together with `reset_interval`: a request that sets only one of the two is rejected with a 400.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#limit_usd WorkspaceDefaultGuardrail#limit_usd}
  */
  readonly limitUsd?: number;
  /**
  * Interval at which the limit resets (daily, weekly, monthly). must be one of ["daily", "weekly", "monthly"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#reset_interval WorkspaceDefaultGuardrail#reset_interval}
  */
  readonly resetInterval?: string;
  /**
  * The workspace whose default guardrail is managed. The default guardrail applies to all traffic in the workspace. Member and API key guardrails combine with it and can only narrow it, never bypass it. Exactly one of these resources should exist per workspace. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#workspace_id WorkspaceDefaultGuardrail#workspace_id}
  */
  readonly workspaceId: string;
}
export interface WorkspaceDefaultGuardrailContentFilterBuiltins {
  /**
  * Action taken when the builtin filter triggers. Not Null; must be one of ["redact", "block", "flag"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#action WorkspaceDefaultGuardrail#action}
  */
  readonly action?: string;
  /**
  * Deprecated: labels are system-assigned and cannot be set by the caller. Accepted for backward compatibility but silently ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#label WorkspaceDefaultGuardrail#label}
  */
  readonly label?: string;
  /**
  * Which message roles to scan for prompt injection. Only applies to the regex-prompt-injection builtin. Defaults to all_messages. must be one of ["user_only", "all_messages"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#scan_scope WorkspaceDefaultGuardrail#scan_scope}
  */
  readonly scanScope?: string;
  /**
  * The builtin filter identifier. Not Null; must be one of ["email", "phone", "ssn", "credit-card", "ip-address", "secrets", "person-name", "address", "regex-prompt-injection"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#slug WorkspaceDefaultGuardrail#slug}
  */
  readonly slug?: string;
}

export function workspaceDefaultGuardrailContentFilterBuiltinsToTerraform(struct?: WorkspaceDefaultGuardrailContentFilterBuiltins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    label: cdktf.stringToTerraform(struct!.label),
    scan_scope: cdktf.stringToTerraform(struct!.scanScope),
    slug: cdktf.stringToTerraform(struct!.slug),
  }
}


export function workspaceDefaultGuardrailContentFilterBuiltinsToHclTerraform(struct?: WorkspaceDefaultGuardrailContentFilterBuiltins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_scope: {
      value: cdktf.stringToHclTerraform(struct!.scanScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slug: {
      value: cdktf.stringToHclTerraform(struct!.slug),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceDefaultGuardrailContentFilterBuiltinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkspaceDefaultGuardrailContentFilterBuiltins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._scanScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanScope = this._scanScope;
    }
    if (this._slug !== undefined) {
      hasAnyValues = true;
      internalValueResult.slug = this._slug;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceDefaultGuardrailContentFilterBuiltins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._label = undefined;
      this._scanScope = undefined;
      this._slug = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._label = value.label;
      this._scanScope = value.scanScope;
      this._slug = value.slug;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // scan_scope - computed: true, optional: true, required: false
  private _scanScope?: string; 
  public get scanScope() {
    return this.getStringAttribute('scan_scope');
  }
  public set scanScope(value: string) {
    this._scanScope = value;
  }
  public resetScanScope() {
    this._scanScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanScopeInput() {
    return this._scanScope;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }
}

export class WorkspaceDefaultGuardrailContentFilterBuiltinsList extends cdktf.ComplexList {
  public internalValue? : WorkspaceDefaultGuardrailContentFilterBuiltins[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceDefaultGuardrailContentFilterBuiltinsOutputReference {
    return new WorkspaceDefaultGuardrailContentFilterBuiltinsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkspaceDefaultGuardrailContentFilters {
  /**
  * Action taken when the pattern matches. Not Null; must be one of ["redact", "block", "flag"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#action WorkspaceDefaultGuardrail#action}
  */
  readonly action?: string;
  /**
  * Optional label used in redaction placeholders or error messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#label WorkspaceDefaultGuardrail#label}
  */
  readonly label?: string;
  /**
  * A regex pattern to match against request content. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#pattern WorkspaceDefaultGuardrail#pattern}
  */
  readonly pattern?: string;
}

export function workspaceDefaultGuardrailContentFiltersToTerraform(struct?: WorkspaceDefaultGuardrailContentFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    label: cdktf.stringToTerraform(struct!.label),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function workspaceDefaultGuardrailContentFiltersToHclTerraform(struct?: WorkspaceDefaultGuardrailContentFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceDefaultGuardrailContentFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): WorkspaceDefaultGuardrailContentFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceDefaultGuardrailContentFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._label = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._label = value.label;
      this._pattern = value.pattern;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // is_enforced - computed: true, optional: false, required: false
  public get isEnforced() {
    return this.getBooleanAttribute('is_enforced');
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // pattern - computed: true, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class WorkspaceDefaultGuardrailContentFiltersList extends cdktf.ComplexList {
  public internalValue? : WorkspaceDefaultGuardrailContentFilters[] | cdktf.IResolvable

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
  public get(index: number): WorkspaceDefaultGuardrailContentFiltersOutputReference {
    return new WorkspaceDefaultGuardrailContentFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail openrouter_workspace_default_guardrail}
*/
export class WorkspaceDefaultGuardrail extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_workspace_default_guardrail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceDefaultGuardrail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceDefaultGuardrail to import
  * @param importFromId The id of the existing WorkspaceDefaultGuardrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceDefaultGuardrail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_workspace_default_guardrail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/workspace_default_guardrail openrouter_workspace_default_guardrail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceDefaultGuardrailConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceDefaultGuardrailConfig) {
    super(scope, id, {
      terraformResourceType: 'openrouter_workspace_default_guardrail',
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
    this._allowSafetyRetentionGoogle = config.allowSafetyRetentionGoogle;
    this._allowSafetyRetentionOther = config.allowSafetyRetentionOther;
    this._allowedDataRegions = config.allowedDataRegions;
    this._allowedModels = config.allowedModels;
    this._allowedProviders = config.allowedProviders;
    this._contentFilterBuiltins.internalValue = config.contentFilterBuiltins;
    this._contentFilters.internalValue = config.contentFilters;
    this._description = config.description;
    this._enableFreeModelPublication = config.enableFreeModelPublication;
    this._enableFreeModelTraining = config.enableFreeModelTraining;
    this._enablePaidModelTraining = config.enablePaidModelTraining;
    this._enforceFirstPartyHarnessModels = config.enforceFirstPartyHarnessModels;
    this._enforceZdr = config.enforceZdr;
    this._enforceZdrAnthropic = config.enforceZdrAnthropic;
    this._enforceZdrGoogle = config.enforceZdrGoogle;
    this._enforceZdrOpenai = config.enforceZdrOpenai;
    this._enforceZdrOther = config.enforceZdrOther;
    this._enforceZdrXai = config.enforceZdrXai;
    this._ignoredModels = config.ignoredModels;
    this._ignoredProviders = config.ignoredProviders;
    this._includeByokInBudgets = config.includeByokInBudgets;
    this._limitUsd = config.limitUsd;
    this._resetInterval = config.resetInterval;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // allowed_data_regions - computed: false, optional: true, required: false
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

  // allowed_models - computed: false, optional: true, required: false
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

  // allowed_providers - computed: false, optional: true, required: false
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

  // content_filter_builtins - computed: false, optional: true, required: false
  private _contentFilterBuiltins = new WorkspaceDefaultGuardrailContentFilterBuiltinsList(this, "content_filter_builtins", false);
  public get contentFilterBuiltins() {
    return this._contentFilterBuiltins;
  }
  public putContentFilterBuiltins(value: WorkspaceDefaultGuardrailContentFilterBuiltins[] | cdktf.IResolvable) {
    this._contentFilterBuiltins.internalValue = value;
  }
  public resetContentFilterBuiltins() {
    this._contentFilterBuiltins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFilterBuiltinsInput() {
    return this._contentFilterBuiltins.internalValue;
  }

  // content_filters - computed: false, optional: true, required: false
  private _contentFilters = new WorkspaceDefaultGuardrailContentFiltersList(this, "content_filters", false);
  public get contentFilters() {
    return this._contentFilters;
  }
  public putContentFilters(value: WorkspaceDefaultGuardrailContentFilters[] | cdktf.IResolvable) {
    this._contentFilters.internalValue = value;
  }
  public resetContentFilters() {
    this._contentFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFiltersInput() {
    return this._contentFilters.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignored_models - computed: false, optional: true, required: false
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

  // ignored_providers - computed: false, optional: true, required: false
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

  // limit_usd - computed: true, optional: true, required: false
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // reset_interval - computed: true, optional: true, required: false
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
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
      allow_safety_retention_google: cdktf.booleanToTerraform(this._allowSafetyRetentionGoogle),
      allow_safety_retention_other: cdktf.booleanToTerraform(this._allowSafetyRetentionOther),
      allowed_data_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedDataRegions),
      allowed_models: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedModels),
      allowed_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedProviders),
      content_filter_builtins: cdktf.listMapper(workspaceDefaultGuardrailContentFilterBuiltinsToTerraform, false)(this._contentFilterBuiltins.internalValue),
      content_filters: cdktf.listMapper(workspaceDefaultGuardrailContentFiltersToTerraform, false)(this._contentFilters.internalValue),
      description: cdktf.stringToTerraform(this._description),
      enable_free_model_publication: cdktf.booleanToTerraform(this._enableFreeModelPublication),
      enable_free_model_training: cdktf.booleanToTerraform(this._enableFreeModelTraining),
      enable_paid_model_training: cdktf.booleanToTerraform(this._enablePaidModelTraining),
      enforce_first_party_harness_models: cdktf.booleanToTerraform(this._enforceFirstPartyHarnessModels),
      enforce_zdr: cdktf.booleanToTerraform(this._enforceZdr),
      enforce_zdr_anthropic: cdktf.booleanToTerraform(this._enforceZdrAnthropic),
      enforce_zdr_google: cdktf.booleanToTerraform(this._enforceZdrGoogle),
      enforce_zdr_openai: cdktf.booleanToTerraform(this._enforceZdrOpenai),
      enforce_zdr_other: cdktf.booleanToTerraform(this._enforceZdrOther),
      enforce_zdr_xai: cdktf.booleanToTerraform(this._enforceZdrXai),
      ignored_models: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoredModels),
      ignored_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ignoredProviders),
      include_byok_in_budgets: cdktf.booleanToTerraform(this._includeByokInBudgets),
      limit_usd: cdktf.numberToTerraform(this._limitUsd),
      reset_interval: cdktf.stringToTerraform(this._resetInterval),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_safety_retention_google: {
        value: cdktf.booleanToHclTerraform(this._allowSafetyRetentionGoogle),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_safety_retention_other: {
        value: cdktf.booleanToHclTerraform(this._allowSafetyRetentionOther),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_data_regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedDataRegions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_models: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedModels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_providers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedProviders),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      content_filter_builtins: {
        value: cdktf.listMapperHcl(workspaceDefaultGuardrailContentFilterBuiltinsToHclTerraform, false)(this._contentFilterBuiltins.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspaceDefaultGuardrailContentFilterBuiltinsList",
      },
      content_filters: {
        value: cdktf.listMapperHcl(workspaceDefaultGuardrailContentFiltersToHclTerraform, false)(this._contentFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspaceDefaultGuardrailContentFiltersList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_free_model_publication: {
        value: cdktf.booleanToHclTerraform(this._enableFreeModelPublication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_free_model_training: {
        value: cdktf.booleanToHclTerraform(this._enableFreeModelTraining),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_paid_model_training: {
        value: cdktf.booleanToHclTerraform(this._enablePaidModelTraining),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_first_party_harness_models: {
        value: cdktf.booleanToHclTerraform(this._enforceFirstPartyHarnessModels),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_zdr: {
        value: cdktf.booleanToHclTerraform(this._enforceZdr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_zdr_anthropic: {
        value: cdktf.booleanToHclTerraform(this._enforceZdrAnthropic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_zdr_google: {
        value: cdktf.booleanToHclTerraform(this._enforceZdrGoogle),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_zdr_openai: {
        value: cdktf.booleanToHclTerraform(this._enforceZdrOpenai),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_zdr_other: {
        value: cdktf.booleanToHclTerraform(this._enforceZdrOther),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_zdr_xai: {
        value: cdktf.booleanToHclTerraform(this._enforceZdrXai),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignored_models: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoredModels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ignored_providers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ignoredProviders),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      include_byok_in_budgets: {
        value: cdktf.booleanToHclTerraform(this._includeByokInBudgets),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limit_usd: {
        value: cdktf.numberToHclTerraform(this._limitUsd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_interval: {
        value: cdktf.stringToHclTerraform(this._resetInterval),
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
