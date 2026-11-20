// https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GuardrailPolicyModerationConfig extends cdktf.TerraformMetaArguments {
  /**
  * API key hashes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#api_key_hashes GuardrailPolicyModeration#api_key_hashes}
  */
  readonly apiKeyHashes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#config GuardrailPolicyModeration#config}
  */
  readonly config: GuardrailPolicyModerationConfigA;
  /**
  * Make this the workspace default for its policy type. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#is_workspace_default GuardrailPolicyModeration#is_workspace_default}
  */
  readonly isWorkspaceDefault?: boolean | cdktf.IResolvable;
  /**
  * Organization member user IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#member_ids GuardrailPolicyModeration#member_ids}
  */
  readonly memberIds?: string[];
  /**
  * Policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#name GuardrailPolicyModeration#name}
  */
  readonly name: string;
  /**
  * API keys that should not inherit the policy when it is the workspace default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#opted_out_api_key_hashes GuardrailPolicyModeration#opted_out_api_key_hashes}
  */
  readonly optedOutApiKeyHashes?: string[];
  /**
  * Members that should not inherit the policy when it is the workspace default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#opted_out_member_ids GuardrailPolicyModeration#opted_out_member_ids}
  */
  readonly optedOutMemberIds?: string[];
  /**
  * must be "moderation"; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#policy_type GuardrailPolicyModeration#policy_type}
  */
  readonly policyType: string;
  /**
  * Workspace the policy belongs to. Required for an organization management key; a workspace-scoped key defaults to its own workspace and gets 403 for any other.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#workspace_id GuardrailPolicyModeration#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRule {
  /**
  * Stable id, unique within its source; reported as the deciding rule when it fires. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#id GuardrailPolicyModeration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * What the rule matches, written for the classifier. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#instructions GuardrailPolicyModeration#instructions}
  */
  readonly instructions?: string;
  /**
  * Display name shown in verdict explanations; defaults to the id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#name GuardrailPolicyModeration#name}
  */
  readonly name?: string;
  /**
  * Probability at or above which the rule counts as matched. Defaults to 0.6 for hard-deny and soft-deny rules and 0.7 for allow rules (an exception needs stronger evidence to clear a matched soft deny).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#threshold GuardrailPolicyModeration#threshold}
  */
  readonly threshold?: number;
}

export function guardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRuleToTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    instructions: cdktf.stringToTerraform(struct!.instructions),
    name: cdktf.stringToTerraform(struct!.name),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function guardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRuleToHclTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instructions: {
      value: cdktf.stringToHclTerraform(struct!.instructions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instructions !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructions = this._instructions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._instructions = undefined;
      this._name = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._instructions = value.instructions;
      this._name = value.name;
      this._threshold = value.threshold;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instructions - computed: true, optional: true, required: false
  private _instructions?: string; 
  public get instructions() {
    return this.getStringAttribute('instructions');
  }
  public set instructions(value: string) {
    this._instructions = value;
  }
  public resetInstructions() {
    this._instructions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionsInput() {
    return this._instructions;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllow {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#armor_rule GuardrailPolicyModeration#armor_rule}
  */
  readonly armorRule?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#str GuardrailPolicyModeration#str}
  */
  readonly str?: string;
}

export function guardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowToTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    armor_rule: guardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRuleToTerraform(struct!.armorRule),
    str: cdktf.stringToTerraform(struct!.str),
  }
}


export function guardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowToHclTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    armor_rule: {
      value: guardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRuleToHclTerraform(struct!.armorRule),
      isBlock: true,
      type: "struct",
      storageClassType: "GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRule",
    },
    str: {
      value: cdktf.stringToHclTerraform(struct!.str),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._armorRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.armorRule = this._armorRule?.internalValue;
    }
    if (this._str !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._armorRule.internalValue = undefined;
      this._str = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._armorRule.internalValue = value.armorRule;
      this._str = value.str;
    }
  }

  // armor_rule - computed: true, optional: true, required: false
  private _armorRule = new GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRuleOutputReference(this, "armor_rule");
  public get armorRule() {
    return this._armorRule;
  }
  public putArmorRule(value: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRule) {
    this._armorRule.internalValue = value;
  }
  public resetArmorRule() {
    this._armorRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get armorRuleInput() {
    return this._armorRule.internalValue;
  }

  // str - computed: true, optional: true, required: false
  private _str?: string; 
  public get str() {
    return this.getStringAttribute('str');
  }
  public set str(value: string) {
    this._str = value;
  }
  public resetStr() {
    this._str = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str;
  }
}

export class GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowList extends cdktf.ComplexList {
  public internalValue? : GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllow[] | cdktf.IResolvable

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
  public get(index: number): GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowOutputReference {
    return new GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntry {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#name GuardrailPolicyModeration#name}
  */
  readonly name?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#value GuardrailPolicyModeration#value}
  */
  readonly value?: string;
}

export function guardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntryToTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function guardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntryToHclTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#armor_environment_entry GuardrailPolicyModeration#armor_environment_entry}
  */
  readonly armorEnvironmentEntry?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntry;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#str GuardrailPolicyModeration#str}
  */
  readonly str?: string;
}

export function guardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentToTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    armor_environment_entry: guardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntryToTerraform(struct!.armorEnvironmentEntry),
    str: cdktf.stringToTerraform(struct!.str),
  }
}


export function guardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentToHclTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    armor_environment_entry: {
      value: guardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntryToHclTerraform(struct!.armorEnvironmentEntry),
      isBlock: true,
      type: "struct",
      storageClassType: "GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntry",
    },
    str: {
      value: cdktf.stringToHclTerraform(struct!.str),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._armorEnvironmentEntry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.armorEnvironmentEntry = this._armorEnvironmentEntry?.internalValue;
    }
    if (this._str !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._armorEnvironmentEntry.internalValue = undefined;
      this._str = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._armorEnvironmentEntry.internalValue = value.armorEnvironmentEntry;
      this._str = value.str;
    }
  }

  // armor_environment_entry - computed: true, optional: true, required: false
  private _armorEnvironmentEntry = new GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntryOutputReference(this, "armor_environment_entry");
  public get armorEnvironmentEntry() {
    return this._armorEnvironmentEntry;
  }
  public putArmorEnvironmentEntry(value: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntry) {
    this._armorEnvironmentEntry.internalValue = value;
  }
  public resetArmorEnvironmentEntry() {
    this._armorEnvironmentEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get armorEnvironmentEntryInput() {
    return this._armorEnvironmentEntry.internalValue;
  }

  // str - computed: true, optional: true, required: false
  private _str?: string; 
  public get str() {
    return this.getStringAttribute('str');
  }
  public set str(value: string) {
    this._str = value;
  }
  public resetStr() {
    this._str = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str;
  }
}

export class GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentList extends cdktf.ComplexList {
  public internalValue? : GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironment[] | cdktf.IResolvable

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
  public get(index: number): GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentOutputReference {
    return new GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRule {
  /**
  * Stable id, unique within its source; reported as the deciding rule when it fires. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#id GuardrailPolicyModeration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * What the rule matches, written for the classifier. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#instructions GuardrailPolicyModeration#instructions}
  */
  readonly instructions?: string;
  /**
  * Display name shown in verdict explanations; defaults to the id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#name GuardrailPolicyModeration#name}
  */
  readonly name?: string;
  /**
  * Probability at or above which the rule counts as matched. Defaults to 0.6 for hard-deny and soft-deny rules and 0.7 for allow rules (an exception needs stronger evidence to clear a matched soft deny).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#threshold GuardrailPolicyModeration#threshold}
  */
  readonly threshold?: number;
}

export function guardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRuleToTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    instructions: cdktf.stringToTerraform(struct!.instructions),
    name: cdktf.stringToTerraform(struct!.name),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function guardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRuleToHclTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instructions: {
      value: cdktf.stringToHclTerraform(struct!.instructions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instructions !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructions = this._instructions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._instructions = undefined;
      this._name = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._instructions = value.instructions;
      this._name = value.name;
      this._threshold = value.threshold;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instructions - computed: true, optional: true, required: false
  private _instructions?: string; 
  public get instructions() {
    return this.getStringAttribute('instructions');
  }
  public set instructions(value: string) {
    this._instructions = value;
  }
  public resetInstructions() {
    this._instructions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionsInput() {
    return this._instructions;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDeny {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#armor_rule GuardrailPolicyModeration#armor_rule}
  */
  readonly armorRule?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#str GuardrailPolicyModeration#str}
  */
  readonly str?: string;
}

export function guardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyToTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    armor_rule: guardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRuleToTerraform(struct!.armorRule),
    str: cdktf.stringToTerraform(struct!.str),
  }
}


export function guardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyToHclTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    armor_rule: {
      value: guardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRuleToHclTerraform(struct!.armorRule),
      isBlock: true,
      type: "struct",
      storageClassType: "GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRule",
    },
    str: {
      value: cdktf.stringToHclTerraform(struct!.str),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDeny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._armorRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.armorRule = this._armorRule?.internalValue;
    }
    if (this._str !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDeny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._armorRule.internalValue = undefined;
      this._str = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._armorRule.internalValue = value.armorRule;
      this._str = value.str;
    }
  }

  // armor_rule - computed: true, optional: true, required: false
  private _armorRule = new GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRuleOutputReference(this, "armor_rule");
  public get armorRule() {
    return this._armorRule;
  }
  public putArmorRule(value: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRule) {
    this._armorRule.internalValue = value;
  }
  public resetArmorRule() {
    this._armorRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get armorRuleInput() {
    return this._armorRule.internalValue;
  }

  // str - computed: true, optional: true, required: false
  private _str?: string; 
  public get str() {
    return this.getStringAttribute('str');
  }
  public set str(value: string) {
    this._str = value;
  }
  public resetStr() {
    this._str = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str;
  }
}

export class GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyList extends cdktf.ComplexList {
  public internalValue? : GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDeny[] | cdktf.IResolvable

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
  public get(index: number): GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyOutputReference {
    return new GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRule {
  /**
  * Stable id, unique within its source; reported as the deciding rule when it fires. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#id GuardrailPolicyModeration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * What the rule matches, written for the classifier. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#instructions GuardrailPolicyModeration#instructions}
  */
  readonly instructions?: string;
  /**
  * Display name shown in verdict explanations; defaults to the id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#name GuardrailPolicyModeration#name}
  */
  readonly name?: string;
  /**
  * Probability at or above which the rule counts as matched. Defaults to 0.6 for hard-deny and soft-deny rules and 0.7 for allow rules (an exception needs stronger evidence to clear a matched soft deny).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#threshold GuardrailPolicyModeration#threshold}
  */
  readonly threshold?: number;
}

export function guardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRuleToTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    instructions: cdktf.stringToTerraform(struct!.instructions),
    name: cdktf.stringToTerraform(struct!.name),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function guardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRuleToHclTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instructions: {
      value: cdktf.stringToHclTerraform(struct!.instructions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._instructions !== undefined) {
      hasAnyValues = true;
      internalValueResult.instructions = this._instructions;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._instructions = undefined;
      this._name = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._instructions = value.instructions;
      this._name = value.name;
      this._threshold = value.threshold;
    }
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // instructions - computed: true, optional: true, required: false
  private _instructions?: string; 
  public get instructions() {
    return this.getStringAttribute('instructions');
  }
  public set instructions(value: string) {
    this._instructions = value;
  }
  public resetInstructions() {
    this._instructions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instructionsInput() {
    return this._instructions;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // threshold - computed: true, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDeny {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#armor_rule GuardrailPolicyModeration#armor_rule}
  */
  readonly armorRule?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRule;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#str GuardrailPolicyModeration#str}
  */
  readonly str?: string;
}

export function guardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyToTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    armor_rule: guardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRuleToTerraform(struct!.armorRule),
    str: cdktf.stringToTerraform(struct!.str),
  }
}


export function guardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyToHclTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    armor_rule: {
      value: guardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRuleToHclTerraform(struct!.armorRule),
      isBlock: true,
      type: "struct",
      storageClassType: "GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRule",
    },
    str: {
      value: cdktf.stringToHclTerraform(struct!.str),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDeny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._armorRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.armorRule = this._armorRule?.internalValue;
    }
    if (this._str !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDeny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._armorRule.internalValue = undefined;
      this._str = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._armorRule.internalValue = value.armorRule;
      this._str = value.str;
    }
  }

  // armor_rule - computed: true, optional: true, required: false
  private _armorRule = new GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRuleOutputReference(this, "armor_rule");
  public get armorRule() {
    return this._armorRule;
  }
  public putArmorRule(value: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRule) {
    this._armorRule.internalValue = value;
  }
  public resetArmorRule() {
    this._armorRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get armorRuleInput() {
    return this._armorRule.internalValue;
  }

  // str - computed: true, optional: true, required: false
  private _str?: string; 
  public get str() {
    return this.getStringAttribute('str');
  }
  public set str(value: string) {
    this._str = value;
  }
  public resetStr() {
    this._str = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str;
  }
}

export class GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyList extends cdktf.ComplexList {
  public internalValue? : GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDeny[] | cdktf.IResolvable

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
  public get(index: number): GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyOutputReference {
    return new GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GuardrailPolicyModerationConfigArmorClassifierContextAutoMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#allow GuardrailPolicyModeration#allow}
  */
  readonly allow?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllow[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#environment GuardrailPolicyModeration#environment}
  */
  readonly environment?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironment[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#hard_deny GuardrailPolicyModeration#hard_deny}
  */
  readonly hardDeny?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDeny[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#soft_deny GuardrailPolicyModeration#soft_deny}
  */
  readonly softDeny?: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDeny[] | cdktf.IResolvable;
}

export function guardrailPolicyModerationConfigArmorClassifierContextAutoModeToTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContextAutoMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.listMapper(guardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowToTerraform, false)(struct!.allow),
    environment: cdktf.listMapper(guardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentToTerraform, false)(struct!.environment),
    hard_deny: cdktf.listMapper(guardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyToTerraform, false)(struct!.hardDeny),
    soft_deny: cdktf.listMapper(guardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyToTerraform, false)(struct!.softDeny),
  }
}


export function guardrailPolicyModerationConfigArmorClassifierContextAutoModeToHclTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContextAutoMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.listMapperHcl(guardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowToHclTerraform, false)(struct!.allow),
      isBlock: true,
      type: "list",
      storageClassType: "GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowList",
    },
    environment: {
      value: cdktf.listMapperHcl(guardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentToHclTerraform, false)(struct!.environment),
      isBlock: true,
      type: "list",
      storageClassType: "GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentList",
    },
    hard_deny: {
      value: cdktf.listMapperHcl(guardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyToHclTerraform, false)(struct!.hardDeny),
      isBlock: true,
      type: "list",
      storageClassType: "GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyList",
    },
    soft_deny: {
      value: cdktf.listMapperHcl(guardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyToHclTerraform, false)(struct!.softDeny),
      isBlock: true,
      type: "list",
      storageClassType: "GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardrailPolicyModerationConfigArmorClassifierContextAutoModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GuardrailPolicyModerationConfigArmorClassifierContextAutoMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._hardDeny?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardDeny = this._hardDeny?.internalValue;
    }
    if (this._softDeny?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.softDeny = this._softDeny?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardrailPolicyModerationConfigArmorClassifierContextAutoMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
      this._environment.internalValue = undefined;
      this._hardDeny.internalValue = undefined;
      this._softDeny.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
      this._environment.internalValue = value.environment;
      this._hardDeny.internalValue = value.hardDeny;
      this._softDeny.internalValue = value.softDeny;
    }
  }

  // allow - computed: true, optional: true, required: false
  private _allow = new GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowList(this, "allow", false);
  public get allow() {
    return this._allow;
  }
  public putAllow(value: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllow[] | cdktf.IResolvable) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // environment - computed: true, optional: true, required: false
  private _environment = new GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironment[] | cdktf.IResolvable) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // hard_deny - computed: true, optional: true, required: false
  private _hardDeny = new GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyList(this, "hard_deny", false);
  public get hardDeny() {
    return this._hardDeny;
  }
  public putHardDeny(value: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDeny[] | cdktf.IResolvable) {
    this._hardDeny.internalValue = value;
  }
  public resetHardDeny() {
    this._hardDeny.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardDenyInput() {
    return this._hardDeny.internalValue;
  }

  // soft_deny - computed: true, optional: true, required: false
  private _softDeny = new GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyList(this, "soft_deny", false);
  public get softDeny() {
    return this._softDeny;
  }
  public putSoftDeny(value: GuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDeny[] | cdktf.IResolvable) {
    this._softDeny.internalValue = value;
  }
  public resetSoftDeny() {
    this._softDeny.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get softDenyInput() {
    return this._softDeny.internalValue;
  }
}
export interface GuardrailPolicyModerationConfigArmorClassifierContext {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#additional_properties GuardrailPolicyModeration#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#auto_mode GuardrailPolicyModeration#auto_mode}
  */
  readonly autoMode?: GuardrailPolicyModerationConfigArmorClassifierContextAutoMode;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#v GuardrailPolicyModeration#v}
  */
  readonly v?: number;
}

export function guardrailPolicyModerationConfigArmorClassifierContextToTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    auto_mode: guardrailPolicyModerationConfigArmorClassifierContextAutoModeToTerraform(struct!.autoMode),
    v: cdktf.numberToTerraform(struct!.v),
  }
}


export function guardrailPolicyModerationConfigArmorClassifierContextToHclTerraform(struct?: GuardrailPolicyModerationConfigArmorClassifierContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    auto_mode: {
      value: guardrailPolicyModerationConfigArmorClassifierContextAutoModeToHclTerraform(struct!.autoMode),
      isBlock: true,
      type: "struct",
      storageClassType: "GuardrailPolicyModerationConfigArmorClassifierContextAutoMode",
    },
    v: {
      value: cdktf.numberToHclTerraform(struct!.v),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardrailPolicyModerationConfigArmorClassifierContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GuardrailPolicyModerationConfigArmorClassifierContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._autoMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoMode = this._autoMode?.internalValue;
    }
    if (this._v !== undefined) {
      hasAnyValues = true;
      internalValueResult.v = this._v;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardrailPolicyModerationConfigArmorClassifierContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._autoMode.internalValue = undefined;
      this._v = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._autoMode.internalValue = value.autoMode;
      this._v = value.v;
    }
  }

  // additional_properties - computed: true, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // auto_mode - computed: true, optional: true, required: false
  private _autoMode = new GuardrailPolicyModerationConfigArmorClassifierContextAutoModeOutputReference(this, "auto_mode");
  public get autoMode() {
    return this._autoMode;
  }
  public putAutoMode(value: GuardrailPolicyModerationConfigArmorClassifierContextAutoMode) {
    this._autoMode.internalValue = value;
  }
  public resetAutoMode() {
    this._autoMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoModeInput() {
    return this._autoMode.internalValue;
  }

  // v - computed: true, optional: true, required: false
  private _v?: number; 
  public get v() {
    return this.getNumberAttribute('v');
  }
  public set v(value: number) {
    this._v = value;
  }
  public resetV() {
    this._v = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vInput() {
    return this._v;
  }
}
export interface GuardrailPolicyModerationConfigArmor {
  /**
  * The Armor context: Claude Code's `classifier_context` (v1), with `auto_mode.{hard_deny,soft_deny,allow}` rules as strings or `{ id, instructions, threshold? }` objects and `auto_mode.environment` entries as `"Name: value"` strings or `{ name, value }` objects. `threshold` applies when Armor evaluates; when the provider evaluates natively (Anthropic dangerous-tool-use beta) rules are judged at the provider's own boundary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#classifier_context GuardrailPolicyModeration#classifier_context}
  */
  readonly classifierContext?: GuardrailPolicyModerationConfigArmorClassifierContext;
  /**
  * `enforce` withholds blocked calls; `audit` evaluates and reports the same verdicts without withholding any calls, regardless of `on_error`. Default `enforce`. must be one of ["enforce", "audit"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#mode GuardrailPolicyModeration#mode}
  */
  readonly mode?: string;
  /**
  * When the classifier cannot answer (timeout, upstream error, context too long) the call is reported `unavailable`; `block` rejects it and `log` releases it. Default `block`. must be one of ["log", "block"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#on_error GuardrailPolicyModeration#on_error}
  */
  readonly onError?: string;
  /**
  * Prepend Claude Code's built-in auto-mode rule set (1 hard-deny, 72 soft-deny, 17 allow, 21 environment slots) ahead of every configured rule. Defaults to true on the Anthropic Messages API and false elsewhere.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#use_cc_style_default_rules GuardrailPolicyModeration#use_cc_style_default_rules}
  */
  readonly useCcStyleDefaultRules?: boolean | cdktf.IResolvable;
}

export function guardrailPolicyModerationConfigArmorToTerraform(struct?: GuardrailPolicyModerationConfigArmor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classifier_context: guardrailPolicyModerationConfigArmorClassifierContextToTerraform(struct!.classifierContext),
    mode: cdktf.stringToTerraform(struct!.mode),
    on_error: cdktf.stringToTerraform(struct!.onError),
    use_cc_style_default_rules: cdktf.booleanToTerraform(struct!.useCcStyleDefaultRules),
  }
}


export function guardrailPolicyModerationConfigArmorToHclTerraform(struct?: GuardrailPolicyModerationConfigArmor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classifier_context: {
      value: guardrailPolicyModerationConfigArmorClassifierContextToHclTerraform(struct!.classifierContext),
      isBlock: true,
      type: "struct",
      storageClassType: "GuardrailPolicyModerationConfigArmorClassifierContext",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_error: {
      value: cdktf.stringToHclTerraform(struct!.onError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_cc_style_default_rules: {
      value: cdktf.booleanToHclTerraform(struct!.useCcStyleDefaultRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardrailPolicyModerationConfigArmorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GuardrailPolicyModerationConfigArmor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classifierContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classifierContext = this._classifierContext?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._onError !== undefined) {
      hasAnyValues = true;
      internalValueResult.onError = this._onError;
    }
    if (this._useCcStyleDefaultRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.useCcStyleDefaultRules = this._useCcStyleDefaultRules;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardrailPolicyModerationConfigArmor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classifierContext.internalValue = undefined;
      this._mode = undefined;
      this._onError = undefined;
      this._useCcStyleDefaultRules = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classifierContext.internalValue = value.classifierContext;
      this._mode = value.mode;
      this._onError = value.onError;
      this._useCcStyleDefaultRules = value.useCcStyleDefaultRules;
    }
  }

  // classifier_context - computed: true, optional: true, required: false
  private _classifierContext = new GuardrailPolicyModerationConfigArmorClassifierContextOutputReference(this, "classifier_context");
  public get classifierContext() {
    return this._classifierContext;
  }
  public putClassifierContext(value: GuardrailPolicyModerationConfigArmorClassifierContext) {
    this._classifierContext.internalValue = value;
  }
  public resetClassifierContext() {
    this._classifierContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classifierContextInput() {
    return this._classifierContext.internalValue;
  }

  // mode - computed: true, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // on_error - computed: true, optional: true, required: false
  private _onError?: string; 
  public get onError() {
    return this.getStringAttribute('on_error');
  }
  public set onError(value: string) {
    this._onError = value;
  }
  public resetOnError() {
    this._onError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onErrorInput() {
    return this._onError;
  }

  // use_cc_style_default_rules - computed: true, optional: true, required: false
  private _useCcStyleDefaultRules?: boolean | cdktf.IResolvable; 
  public get useCcStyleDefaultRules() {
    return this.getBooleanAttribute('use_cc_style_default_rules');
  }
  public set useCcStyleDefaultRules(value: boolean | cdktf.IResolvable) {
    this._useCcStyleDefaultRules = value;
  }
  public resetUseCcStyleDefaultRules() {
    this._useCcStyleDefaultRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCcStyleDefaultRulesInput() {
    return this._useCcStyleDefaultRules;
  }
}
export interface GuardrailPolicyModerationConfigContentFilterBuiltins {
  /**
  * Not Null; must be one of ["redact", "block", "flag"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#action GuardrailPolicyModeration#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#label GuardrailPolicyModeration#label}
  */
  readonly label?: string;
  /**
  * must be one of ["user_only", "all_messages"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#scan_scope GuardrailPolicyModeration#scan_scope}
  */
  readonly scanScope?: string;
  /**
  * Not Null; must be one of ["email", "phone", "ssn", "credit-card", "ip-address", "secrets", "person-name", "address", "regex-prompt-injection"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#slug GuardrailPolicyModeration#slug}
  */
  readonly slug?: string;
}

export function guardrailPolicyModerationConfigContentFilterBuiltinsToTerraform(struct?: GuardrailPolicyModerationConfigContentFilterBuiltins | cdktf.IResolvable): any {
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


export function guardrailPolicyModerationConfigContentFilterBuiltinsToHclTerraform(struct?: GuardrailPolicyModerationConfigContentFilterBuiltins | cdktf.IResolvable): any {
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

export class GuardrailPolicyModerationConfigContentFilterBuiltinsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GuardrailPolicyModerationConfigContentFilterBuiltins | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GuardrailPolicyModerationConfigContentFilterBuiltins | cdktf.IResolvable | undefined) {
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

export class GuardrailPolicyModerationConfigContentFilterBuiltinsList extends cdktf.ComplexList {
  public internalValue? : GuardrailPolicyModerationConfigContentFilterBuiltins[] | cdktf.IResolvable

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
  public get(index: number): GuardrailPolicyModerationConfigContentFilterBuiltinsOutputReference {
    return new GuardrailPolicyModerationConfigContentFilterBuiltinsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GuardrailPolicyModerationConfigContentFilters {
  /**
  * Not Null; must be one of ["redact", "block", "flag"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#action GuardrailPolicyModeration#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#label GuardrailPolicyModeration#label}
  */
  readonly label?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#pattern GuardrailPolicyModeration#pattern}
  */
  readonly pattern?: string;
}

export function guardrailPolicyModerationConfigContentFiltersToTerraform(struct?: GuardrailPolicyModerationConfigContentFilters | cdktf.IResolvable): any {
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


export function guardrailPolicyModerationConfigContentFiltersToHclTerraform(struct?: GuardrailPolicyModerationConfigContentFilters | cdktf.IResolvable): any {
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

export class GuardrailPolicyModerationConfigContentFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GuardrailPolicyModerationConfigContentFilters | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GuardrailPolicyModerationConfigContentFilters | cdktf.IResolvable | undefined) {
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

export class GuardrailPolicyModerationConfigContentFiltersList extends cdktf.ComplexList {
  public internalValue? : GuardrailPolicyModerationConfigContentFilters[] | cdktf.IResolvable

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
  public get(index: number): GuardrailPolicyModerationConfigContentFiltersOutputReference {
    return new GuardrailPolicyModerationConfigContentFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GuardrailPolicyModerationConfigPiiFilters {
  /**
  * Not Null; must be one of ["redact", "block", "flag"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#action GuardrailPolicyModeration#action}
  */
  readonly action?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#entity_type GuardrailPolicyModeration#entity_type}
  */
  readonly entityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#score_threshold GuardrailPolicyModeration#score_threshold}
  */
  readonly scoreThreshold?: number;
}

export function guardrailPolicyModerationConfigPiiFiltersToTerraform(struct?: GuardrailPolicyModerationConfigPiiFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    entity_type: cdktf.stringToTerraform(struct!.entityType),
    score_threshold: cdktf.numberToTerraform(struct!.scoreThreshold),
  }
}


export function guardrailPolicyModerationConfigPiiFiltersToHclTerraform(struct?: GuardrailPolicyModerationConfigPiiFilters | cdktf.IResolvable): any {
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
    entity_type: {
      value: cdktf.stringToHclTerraform(struct!.entityType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    score_threshold: {
      value: cdktf.numberToHclTerraform(struct!.scoreThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardrailPolicyModerationConfigPiiFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GuardrailPolicyModerationConfigPiiFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._entityType !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityType = this._entityType;
    }
    if (this._scoreThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.scoreThreshold = this._scoreThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardrailPolicyModerationConfigPiiFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._entityType = undefined;
      this._scoreThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._entityType = value.entityType;
      this._scoreThreshold = value.scoreThreshold;
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

  // entity_type - computed: true, optional: true, required: false
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  public resetEntityType() {
    this._entityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // score_threshold - computed: true, optional: true, required: false
  private _scoreThreshold?: number; 
  public get scoreThreshold() {
    return this.getNumberAttribute('score_threshold');
  }
  public set scoreThreshold(value: number) {
    this._scoreThreshold = value;
  }
  public resetScoreThreshold() {
    this._scoreThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreThresholdInput() {
    return this._scoreThreshold;
  }
}

export class GuardrailPolicyModerationConfigPiiFiltersList extends cdktf.ComplexList {
  public internalValue? : GuardrailPolicyModerationConfigPiiFilters[] | cdktf.IResolvable

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
  public get(index: number): GuardrailPolicyModerationConfigPiiFiltersOutputReference {
    return new GuardrailPolicyModerationConfigPiiFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GuardrailPolicyModerationConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#armor GuardrailPolicyModeration#armor}
  */
  readonly armor?: GuardrailPolicyModerationConfigArmor;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#broadcast_model_armor_flagged_requests GuardrailPolicyModeration#broadcast_model_armor_flagged_requests}
  */
  readonly broadcastModelArmorFlaggedRequests?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#content_filter_blocks_requests GuardrailPolicyModeration#content_filter_blocks_requests}
  */
  readonly contentFilterBlocksRequests?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#content_filter_builtins GuardrailPolicyModeration#content_filter_builtins}
  */
  readonly contentFilterBuiltins?: GuardrailPolicyModerationConfigContentFilterBuiltins[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#content_filter_patterns GuardrailPolicyModeration#content_filter_patterns}
  */
  readonly contentFilterPatterns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#content_filters GuardrailPolicyModeration#content_filters}
  */
  readonly contentFilters?: GuardrailPolicyModerationConfigContentFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#enable_model_armor_injection_protection GuardrailPolicyModeration#enable_model_armor_injection_protection}
  */
  readonly enableModelArmorInjectionProtection?: boolean | cdktf.IResolvable;
  /**
  * must be one of ["block", "flag"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#lakera_injection_protection_mode GuardrailPolicyModeration#lakera_injection_protection_mode}
  */
  readonly lakeraInjectionProtectionMode?: string;
  /**
  * must be one of ["low", "medium", "high"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#model_armor_injection_confidence_level GuardrailPolicyModeration#model_armor_injection_confidence_level}
  */
  readonly modelArmorInjectionConfidenceLevel?: string;
  /**
  * must be one of ["block", "flag"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#model_armor_injection_protection_mode GuardrailPolicyModeration#model_armor_injection_protection_mode}
  */
  readonly modelArmorInjectionProtectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#pii_filters GuardrailPolicyModeration#pii_filters}
  */
  readonly piiFilters?: GuardrailPolicyModerationConfigPiiFilters[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#platform_image_moderated_providers GuardrailPolicyModeration#platform_image_moderated_providers}
  */
  readonly platformImageModeratedProviders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#platform_moderated_providers GuardrailPolicyModeration#platform_moderated_providers}
  */
  readonly platformModeratedProviders?: string[];
}

export function guardrailPolicyModerationConfigAToTerraform(struct?: GuardrailPolicyModerationConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    armor: guardrailPolicyModerationConfigArmorToTerraform(struct!.armor),
    broadcast_model_armor_flagged_requests: cdktf.booleanToTerraform(struct!.broadcastModelArmorFlaggedRequests),
    content_filter_blocks_requests: cdktf.booleanToTerraform(struct!.contentFilterBlocksRequests),
    content_filter_builtins: cdktf.listMapper(guardrailPolicyModerationConfigContentFilterBuiltinsToTerraform, false)(struct!.contentFilterBuiltins),
    content_filter_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentFilterPatterns),
    content_filters: cdktf.listMapper(guardrailPolicyModerationConfigContentFiltersToTerraform, false)(struct!.contentFilters),
    enable_model_armor_injection_protection: cdktf.booleanToTerraform(struct!.enableModelArmorInjectionProtection),
    lakera_injection_protection_mode: cdktf.stringToTerraform(struct!.lakeraInjectionProtectionMode),
    model_armor_injection_confidence_level: cdktf.stringToTerraform(struct!.modelArmorInjectionConfidenceLevel),
    model_armor_injection_protection_mode: cdktf.stringToTerraform(struct!.modelArmorInjectionProtectionMode),
    pii_filters: cdktf.listMapper(guardrailPolicyModerationConfigPiiFiltersToTerraform, false)(struct!.piiFilters),
    platform_image_moderated_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.platformImageModeratedProviders),
    platform_moderated_providers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.platformModeratedProviders),
  }
}


export function guardrailPolicyModerationConfigAToHclTerraform(struct?: GuardrailPolicyModerationConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    armor: {
      value: guardrailPolicyModerationConfigArmorToHclTerraform(struct!.armor),
      isBlock: true,
      type: "struct",
      storageClassType: "GuardrailPolicyModerationConfigArmor",
    },
    broadcast_model_armor_flagged_requests: {
      value: cdktf.booleanToHclTerraform(struct!.broadcastModelArmorFlaggedRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content_filter_blocks_requests: {
      value: cdktf.booleanToHclTerraform(struct!.contentFilterBlocksRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    content_filter_builtins: {
      value: cdktf.listMapperHcl(guardrailPolicyModerationConfigContentFilterBuiltinsToHclTerraform, false)(struct!.contentFilterBuiltins),
      isBlock: true,
      type: "list",
      storageClassType: "GuardrailPolicyModerationConfigContentFilterBuiltinsList",
    },
    content_filter_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contentFilterPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    content_filters: {
      value: cdktf.listMapperHcl(guardrailPolicyModerationConfigContentFiltersToHclTerraform, false)(struct!.contentFilters),
      isBlock: true,
      type: "list",
      storageClassType: "GuardrailPolicyModerationConfigContentFiltersList",
    },
    enable_model_armor_injection_protection: {
      value: cdktf.booleanToHclTerraform(struct!.enableModelArmorInjectionProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lakera_injection_protection_mode: {
      value: cdktf.stringToHclTerraform(struct!.lakeraInjectionProtectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_armor_injection_confidence_level: {
      value: cdktf.stringToHclTerraform(struct!.modelArmorInjectionConfidenceLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_armor_injection_protection_mode: {
      value: cdktf.stringToHclTerraform(struct!.modelArmorInjectionProtectionMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pii_filters: {
      value: cdktf.listMapperHcl(guardrailPolicyModerationConfigPiiFiltersToHclTerraform, false)(struct!.piiFilters),
      isBlock: true,
      type: "list",
      storageClassType: "GuardrailPolicyModerationConfigPiiFiltersList",
    },
    platform_image_moderated_providers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.platformImageModeratedProviders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    platform_moderated_providers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.platformModeratedProviders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GuardrailPolicyModerationConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GuardrailPolicyModerationConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._armor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.armor = this._armor?.internalValue;
    }
    if (this._broadcastModelArmorFlaggedRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcastModelArmorFlaggedRequests = this._broadcastModelArmorFlaggedRequests;
    }
    if (this._contentFilterBlocksRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentFilterBlocksRequests = this._contentFilterBlocksRequests;
    }
    if (this._contentFilterBuiltins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentFilterBuiltins = this._contentFilterBuiltins?.internalValue;
    }
    if (this._contentFilterPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentFilterPatterns = this._contentFilterPatterns;
    }
    if (this._contentFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentFilters = this._contentFilters?.internalValue;
    }
    if (this._enableModelArmorInjectionProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableModelArmorInjectionProtection = this._enableModelArmorInjectionProtection;
    }
    if (this._lakeraInjectionProtectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.lakeraInjectionProtectionMode = this._lakeraInjectionProtectionMode;
    }
    if (this._modelArmorInjectionConfidenceLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelArmorInjectionConfidenceLevel = this._modelArmorInjectionConfidenceLevel;
    }
    if (this._modelArmorInjectionProtectionMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelArmorInjectionProtectionMode = this._modelArmorInjectionProtectionMode;
    }
    if (this._piiFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.piiFilters = this._piiFilters?.internalValue;
    }
    if (this._platformImageModeratedProviders !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformImageModeratedProviders = this._platformImageModeratedProviders;
    }
    if (this._platformModeratedProviders !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformModeratedProviders = this._platformModeratedProviders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GuardrailPolicyModerationConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._armor.internalValue = undefined;
      this._broadcastModelArmorFlaggedRequests = undefined;
      this._contentFilterBlocksRequests = undefined;
      this._contentFilterBuiltins.internalValue = undefined;
      this._contentFilterPatterns = undefined;
      this._contentFilters.internalValue = undefined;
      this._enableModelArmorInjectionProtection = undefined;
      this._lakeraInjectionProtectionMode = undefined;
      this._modelArmorInjectionConfidenceLevel = undefined;
      this._modelArmorInjectionProtectionMode = undefined;
      this._piiFilters.internalValue = undefined;
      this._platformImageModeratedProviders = undefined;
      this._platformModeratedProviders = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._armor.internalValue = value.armor;
      this._broadcastModelArmorFlaggedRequests = value.broadcastModelArmorFlaggedRequests;
      this._contentFilterBlocksRequests = value.contentFilterBlocksRequests;
      this._contentFilterBuiltins.internalValue = value.contentFilterBuiltins;
      this._contentFilterPatterns = value.contentFilterPatterns;
      this._contentFilters.internalValue = value.contentFilters;
      this._enableModelArmorInjectionProtection = value.enableModelArmorInjectionProtection;
      this._lakeraInjectionProtectionMode = value.lakeraInjectionProtectionMode;
      this._modelArmorInjectionConfidenceLevel = value.modelArmorInjectionConfidenceLevel;
      this._modelArmorInjectionProtectionMode = value.modelArmorInjectionProtectionMode;
      this._piiFilters.internalValue = value.piiFilters;
      this._platformImageModeratedProviders = value.platformImageModeratedProviders;
      this._platformModeratedProviders = value.platformModeratedProviders;
    }
  }

  // armor - computed: false, optional: true, required: false
  private _armor = new GuardrailPolicyModerationConfigArmorOutputReference(this, "armor");
  public get armor() {
    return this._armor;
  }
  public putArmor(value: GuardrailPolicyModerationConfigArmor) {
    this._armor.internalValue = value;
  }
  public resetArmor() {
    this._armor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get armorInput() {
    return this._armor.internalValue;
  }

  // broadcast_model_armor_flagged_requests - computed: true, optional: true, required: false
  private _broadcastModelArmorFlaggedRequests?: boolean | cdktf.IResolvable; 
  public get broadcastModelArmorFlaggedRequests() {
    return this.getBooleanAttribute('broadcast_model_armor_flagged_requests');
  }
  public set broadcastModelArmorFlaggedRequests(value: boolean | cdktf.IResolvable) {
    this._broadcastModelArmorFlaggedRequests = value;
  }
  public resetBroadcastModelArmorFlaggedRequests() {
    this._broadcastModelArmorFlaggedRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastModelArmorFlaggedRequestsInput() {
    return this._broadcastModelArmorFlaggedRequests;
  }

  // content_filter_blocks_requests - computed: true, optional: true, required: false
  private _contentFilterBlocksRequests?: boolean | cdktf.IResolvable; 
  public get contentFilterBlocksRequests() {
    return this.getBooleanAttribute('content_filter_blocks_requests');
  }
  public set contentFilterBlocksRequests(value: boolean | cdktf.IResolvable) {
    this._contentFilterBlocksRequests = value;
  }
  public resetContentFilterBlocksRequests() {
    this._contentFilterBlocksRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFilterBlocksRequestsInput() {
    return this._contentFilterBlocksRequests;
  }

  // content_filter_builtins - computed: true, optional: true, required: false
  private _contentFilterBuiltins = new GuardrailPolicyModerationConfigContentFilterBuiltinsList(this, "content_filter_builtins", false);
  public get contentFilterBuiltins() {
    return this._contentFilterBuiltins;
  }
  public putContentFilterBuiltins(value: GuardrailPolicyModerationConfigContentFilterBuiltins[] | cdktf.IResolvable) {
    this._contentFilterBuiltins.internalValue = value;
  }
  public resetContentFilterBuiltins() {
    this._contentFilterBuiltins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFilterBuiltinsInput() {
    return this._contentFilterBuiltins.internalValue;
  }

  // content_filter_patterns - computed: true, optional: true, required: false
  private _contentFilterPatterns?: string[]; 
  public get contentFilterPatterns() {
    return this.getListAttribute('content_filter_patterns');
  }
  public set contentFilterPatterns(value: string[]) {
    this._contentFilterPatterns = value;
  }
  public resetContentFilterPatterns() {
    this._contentFilterPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFilterPatternsInput() {
    return this._contentFilterPatterns;
  }

  // content_filters - computed: true, optional: true, required: false
  private _contentFilters = new GuardrailPolicyModerationConfigContentFiltersList(this, "content_filters", false);
  public get contentFilters() {
    return this._contentFilters;
  }
  public putContentFilters(value: GuardrailPolicyModerationConfigContentFilters[] | cdktf.IResolvable) {
    this._contentFilters.internalValue = value;
  }
  public resetContentFilters() {
    this._contentFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentFiltersInput() {
    return this._contentFilters.internalValue;
  }

  // enable_model_armor_injection_protection - computed: true, optional: true, required: false
  private _enableModelArmorInjectionProtection?: boolean | cdktf.IResolvable; 
  public get enableModelArmorInjectionProtection() {
    return this.getBooleanAttribute('enable_model_armor_injection_protection');
  }
  public set enableModelArmorInjectionProtection(value: boolean | cdktf.IResolvable) {
    this._enableModelArmorInjectionProtection = value;
  }
  public resetEnableModelArmorInjectionProtection() {
    this._enableModelArmorInjectionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableModelArmorInjectionProtectionInput() {
    return this._enableModelArmorInjectionProtection;
  }

  // lakera_injection_protection_mode - computed: true, optional: true, required: false
  private _lakeraInjectionProtectionMode?: string; 
  public get lakeraInjectionProtectionMode() {
    return this.getStringAttribute('lakera_injection_protection_mode');
  }
  public set lakeraInjectionProtectionMode(value: string) {
    this._lakeraInjectionProtectionMode = value;
  }
  public resetLakeraInjectionProtectionMode() {
    this._lakeraInjectionProtectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lakeraInjectionProtectionModeInput() {
    return this._lakeraInjectionProtectionMode;
  }

  // model_armor_injection_confidence_level - computed: true, optional: true, required: false
  private _modelArmorInjectionConfidenceLevel?: string; 
  public get modelArmorInjectionConfidenceLevel() {
    return this.getStringAttribute('model_armor_injection_confidence_level');
  }
  public set modelArmorInjectionConfidenceLevel(value: string) {
    this._modelArmorInjectionConfidenceLevel = value;
  }
  public resetModelArmorInjectionConfidenceLevel() {
    this._modelArmorInjectionConfidenceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelArmorInjectionConfidenceLevelInput() {
    return this._modelArmorInjectionConfidenceLevel;
  }

  // model_armor_injection_protection_mode - computed: true, optional: true, required: false
  private _modelArmorInjectionProtectionMode?: string; 
  public get modelArmorInjectionProtectionMode() {
    return this.getStringAttribute('model_armor_injection_protection_mode');
  }
  public set modelArmorInjectionProtectionMode(value: string) {
    this._modelArmorInjectionProtectionMode = value;
  }
  public resetModelArmorInjectionProtectionMode() {
    this._modelArmorInjectionProtectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelArmorInjectionProtectionModeInput() {
    return this._modelArmorInjectionProtectionMode;
  }

  // pii_filters - computed: true, optional: true, required: false
  private _piiFilters = new GuardrailPolicyModerationConfigPiiFiltersList(this, "pii_filters", false);
  public get piiFilters() {
    return this._piiFilters;
  }
  public putPiiFilters(value: GuardrailPolicyModerationConfigPiiFilters[] | cdktf.IResolvable) {
    this._piiFilters.internalValue = value;
  }
  public resetPiiFilters() {
    this._piiFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get piiFiltersInput() {
    return this._piiFilters.internalValue;
  }

  // platform_image_moderated_providers - computed: true, optional: true, required: false
  private _platformImageModeratedProviders?: string[]; 
  public get platformImageModeratedProviders() {
    return this.getListAttribute('platform_image_moderated_providers');
  }
  public set platformImageModeratedProviders(value: string[]) {
    this._platformImageModeratedProviders = value;
  }
  public resetPlatformImageModeratedProviders() {
    this._platformImageModeratedProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformImageModeratedProvidersInput() {
    return this._platformImageModeratedProviders;
  }

  // platform_moderated_providers - computed: true, optional: true, required: false
  private _platformModeratedProviders?: string[]; 
  public get platformModeratedProviders() {
    return this.getListAttribute('platform_moderated_providers');
  }
  public set platformModeratedProviders(value: string[]) {
    this._platformModeratedProviders = value;
  }
  public resetPlatformModeratedProviders() {
    this._platformModeratedProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformModeratedProvidersInput() {
    return this._platformModeratedProviders;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation openrouter_guardrail_policy_moderation}
*/
export class GuardrailPolicyModeration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_guardrail_policy_moderation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GuardrailPolicyModeration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GuardrailPolicyModeration to import
  * @param importFromId The id of the existing GuardrailPolicyModeration that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GuardrailPolicyModeration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_guardrail_policy_moderation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/resources/guardrail_policy_moderation openrouter_guardrail_policy_moderation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GuardrailPolicyModerationConfig
  */
  public constructor(scope: Construct, id: string, config: GuardrailPolicyModerationConfig) {
    super(scope, id, {
      terraformResourceType: 'openrouter_guardrail_policy_moderation',
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
  private _config = new GuardrailPolicyModerationConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GuardrailPolicyModerationConfigA) {
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

  // is_account_policy - computed: true, optional: false, required: false
  public get isAccountPolicy() {
    return this.getBooleanAttribute('is_account_policy');
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
      config: guardrailPolicyModerationConfigAToTerraform(this._config.internalValue),
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
        value: guardrailPolicyModerationConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GuardrailPolicyModerationConfigA",
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
