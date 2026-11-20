// https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/data-sources/guardrail_policy_moderation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenrouterGuardrailPolicyModerationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Policy ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/data-sources/guardrail_policy_moderation#id DataOpenrouterGuardrailPolicyModeration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Workspace the policy belongs to. Required for an organization management key; a workspace-scoped key defaults to its own workspace and gets 403 for any other.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/data-sources/guardrail_policy_moderation#workspace_id DataOpenrouterGuardrailPolicyModeration#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRule {
}

export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRuleToTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRuleToHclTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instructions - computed: true, optional: false, required: false
  public get instructions() {
    return this.getStringAttribute('instructions');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}
export interface DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllow {
}

export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowToTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowToHclTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // armor_rule - computed: true, optional: false, required: false
  private _armorRule = new DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowArmorRuleOutputReference(this, "armor_rule");
  public get armorRule() {
    return this._armorRule;
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}

export class DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowOutputReference {
    return new DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntry {
}

export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntryToTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntryToHclTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export interface DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironment {
}

export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentToTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentToHclTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // armor_environment_entry - computed: true, optional: false, required: false
  private _armorEnvironmentEntry = new DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentArmorEnvironmentEntryOutputReference(this, "armor_environment_entry");
  public get armorEnvironmentEntry() {
    return this._armorEnvironmentEntry;
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}

export class DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentOutputReference {
    return new DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRule {
}

export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRuleToTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRuleToHclTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instructions - computed: true, optional: false, required: false
  public get instructions() {
    return this.getStringAttribute('instructions');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}
export interface DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDeny {
}

export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyToTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDeny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyToHclTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDeny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDeny | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDeny | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // armor_rule - computed: true, optional: false, required: false
  private _armorRule = new DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyArmorRuleOutputReference(this, "armor_rule");
  public get armorRule() {
    return this._armorRule;
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}

export class DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyOutputReference {
    return new DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRule {
}

export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRuleToTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRuleToHclTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instructions - computed: true, optional: false, required: false
  public get instructions() {
    return this.getStringAttribute('instructions');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}
export interface DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDeny {
}

export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyToTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDeny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyToHclTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDeny): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDeny | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDeny | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // armor_rule - computed: true, optional: false, required: false
  private _armorRule = new DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyArmorRuleOutputReference(this, "armor_rule");
  public get armorRule() {
    return this._armorRule;
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}

export class DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyOutputReference {
    return new DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoMode {
}

export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeToTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeToHclTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow - computed: true, optional: false, required: false
  private _allow = new DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeAllowList(this, "allow", false);
  public get allow() {
    return this._allow;
  }

  // environment - computed: true, optional: false, required: false
  private _environment = new DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeEnvironmentList(this, "environment", false);
  public get environment() {
    return this._environment;
  }

  // hard_deny - computed: true, optional: false, required: false
  private _hardDeny = new DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeHardDenyList(this, "hard_deny", false);
  public get hardDeny() {
    return this._hardDeny;
  }

  // soft_deny - computed: true, optional: false, required: false
  private _softDeny = new DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeSoftDenyList(this, "soft_deny", false);
  public get softDeny() {
    return this._softDeny;
  }
}
export interface DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContext {
}

export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextToTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextToHclTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new cdktf.StringMap(this, "additional_properties");
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // auto_mode - computed: true, optional: false, required: false
  private _autoMode = new DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextAutoModeOutputReference(this, "auto_mode");
  public get autoMode() {
    return this._autoMode;
  }

  // v - computed: true, optional: false, required: false
  public get v() {
    return this.getNumberAttribute('v');
  }
}
export interface DataOpenrouterGuardrailPolicyModerationConfigArmor {
}

export function dataOpenrouterGuardrailPolicyModerationConfigArmorToTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailPolicyModerationConfigArmorToHclTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigArmor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailPolicyModerationConfigArmorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterGuardrailPolicyModerationConfigArmor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailPolicyModerationConfigArmor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // classifier_context - computed: true, optional: false, required: false
  private _classifierContext = new DataOpenrouterGuardrailPolicyModerationConfigArmorClassifierContextOutputReference(this, "classifier_context");
  public get classifierContext() {
    return this._classifierContext;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // on_error - computed: true, optional: false, required: false
  public get onError() {
    return this.getStringAttribute('on_error');
  }

  // use_cc_style_default_rules - computed: true, optional: false, required: false
  public get useCcStyleDefaultRules() {
    return this.getBooleanAttribute('use_cc_style_default_rules');
  }
}
export interface DataOpenrouterGuardrailPolicyModerationConfigContentFilterBuiltins {
}

export function dataOpenrouterGuardrailPolicyModerationConfigContentFilterBuiltinsToTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigContentFilterBuiltins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailPolicyModerationConfigContentFilterBuiltinsToHclTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigContentFilterBuiltins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailPolicyModerationConfigContentFilterBuiltinsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpenrouterGuardrailPolicyModerationConfigContentFilterBuiltins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailPolicyModerationConfigContentFilterBuiltins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // scan_scope - computed: true, optional: false, required: false
  public get scanScope() {
    return this.getStringAttribute('scan_scope');
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }
}

export class DataOpenrouterGuardrailPolicyModerationConfigContentFilterBuiltinsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterGuardrailPolicyModerationConfigContentFilterBuiltinsOutputReference {
    return new DataOpenrouterGuardrailPolicyModerationConfigContentFilterBuiltinsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterGuardrailPolicyModerationConfigContentFilters {
}

export function dataOpenrouterGuardrailPolicyModerationConfigContentFiltersToTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigContentFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailPolicyModerationConfigContentFiltersToHclTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigContentFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailPolicyModerationConfigContentFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpenrouterGuardrailPolicyModerationConfigContentFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailPolicyModerationConfigContentFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // pattern - computed: true, optional: false, required: false
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
}

export class DataOpenrouterGuardrailPolicyModerationConfigContentFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterGuardrailPolicyModerationConfigContentFiltersOutputReference {
    return new DataOpenrouterGuardrailPolicyModerationConfigContentFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterGuardrailPolicyModerationConfigPiiFilters {
}

export function dataOpenrouterGuardrailPolicyModerationConfigPiiFiltersToTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigPiiFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailPolicyModerationConfigPiiFiltersToHclTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigPiiFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailPolicyModerationConfigPiiFiltersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOpenrouterGuardrailPolicyModerationConfigPiiFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailPolicyModerationConfigPiiFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // score_threshold - computed: true, optional: false, required: false
  public get scoreThreshold() {
    return this.getNumberAttribute('score_threshold');
  }
}

export class DataOpenrouterGuardrailPolicyModerationConfigPiiFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterGuardrailPolicyModerationConfigPiiFiltersOutputReference {
    return new DataOpenrouterGuardrailPolicyModerationConfigPiiFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterGuardrailPolicyModerationConfigA {
}

export function dataOpenrouterGuardrailPolicyModerationConfigAToTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailPolicyModerationConfigAToHclTerraform(struct?: DataOpenrouterGuardrailPolicyModerationConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailPolicyModerationConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterGuardrailPolicyModerationConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailPolicyModerationConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // armor - computed: true, optional: false, required: false
  private _armor = new DataOpenrouterGuardrailPolicyModerationConfigArmorOutputReference(this, "armor");
  public get armor() {
    return this._armor;
  }

  // broadcast_model_armor_flagged_requests - computed: true, optional: false, required: false
  public get broadcastModelArmorFlaggedRequests() {
    return this.getBooleanAttribute('broadcast_model_armor_flagged_requests');
  }

  // content_filter_blocks_requests - computed: true, optional: false, required: false
  public get contentFilterBlocksRequests() {
    return this.getBooleanAttribute('content_filter_blocks_requests');
  }

  // content_filter_builtins - computed: true, optional: false, required: false
  private _contentFilterBuiltins = new DataOpenrouterGuardrailPolicyModerationConfigContentFilterBuiltinsList(this, "content_filter_builtins", false);
  public get contentFilterBuiltins() {
    return this._contentFilterBuiltins;
  }

  // content_filter_patterns - computed: true, optional: false, required: false
  public get contentFilterPatterns() {
    return this.getListAttribute('content_filter_patterns');
  }

  // content_filters - computed: true, optional: false, required: false
  private _contentFilters = new DataOpenrouterGuardrailPolicyModerationConfigContentFiltersList(this, "content_filters", false);
  public get contentFilters() {
    return this._contentFilters;
  }

  // enable_model_armor_injection_protection - computed: true, optional: false, required: false
  public get enableModelArmorInjectionProtection() {
    return this.getBooleanAttribute('enable_model_armor_injection_protection');
  }

  // lakera_injection_protection_mode - computed: true, optional: false, required: false
  public get lakeraInjectionProtectionMode() {
    return this.getStringAttribute('lakera_injection_protection_mode');
  }

  // model_armor_injection_confidence_level - computed: true, optional: false, required: false
  public get modelArmorInjectionConfidenceLevel() {
    return this.getStringAttribute('model_armor_injection_confidence_level');
  }

  // model_armor_injection_protection_mode - computed: true, optional: false, required: false
  public get modelArmorInjectionProtectionMode() {
    return this.getStringAttribute('model_armor_injection_protection_mode');
  }

  // pii_filters - computed: true, optional: false, required: false
  private _piiFilters = new DataOpenrouterGuardrailPolicyModerationConfigPiiFiltersList(this, "pii_filters", false);
  public get piiFilters() {
    return this._piiFilters;
  }

  // platform_image_moderated_providers - computed: true, optional: false, required: false
  public get platformImageModeratedProviders() {
    return this.getListAttribute('platform_image_moderated_providers');
  }

  // platform_moderated_providers - computed: true, optional: false, required: false
  public get platformModeratedProviders() {
    return this.getListAttribute('platform_moderated_providers');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/data-sources/guardrail_policy_moderation openrouter_guardrail_policy_moderation}
*/
export class DataOpenrouterGuardrailPolicyModeration extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_guardrail_policy_moderation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenrouterGuardrailPolicyModeration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenrouterGuardrailPolicyModeration to import
  * @param importFromId The id of the existing DataOpenrouterGuardrailPolicyModeration that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/data-sources/guardrail_policy_moderation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenrouterGuardrailPolicyModeration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_guardrail_policy_moderation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.280/docs/data-sources/guardrail_policy_moderation openrouter_guardrail_policy_moderation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenrouterGuardrailPolicyModerationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpenrouterGuardrailPolicyModerationConfig) {
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
  private _config = new DataOpenrouterGuardrailPolicyModerationConfigAOutputReference(this, "config");
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

  // is_account_policy - computed: true, optional: false, required: false
  public get isAccountPolicy() {
    return this.getBooleanAttribute('is_account_policy');
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
