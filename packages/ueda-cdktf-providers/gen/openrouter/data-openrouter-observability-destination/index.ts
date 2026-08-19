// https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/data-sources/observability_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenrouterObservabilityDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Stable public identifier for this destination.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/data-sources/observability_destination#id DataOpenrouterObservabilityDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataOpenrouterObservabilityDestinationArizeConfig {
}

export function dataOpenrouterObservabilityDestinationArizeConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationArizeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationArizeConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationArizeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationArizeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationArizeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationArizeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }

  // space_key - computed: true, optional: false, required: false
  public get spaceKey() {
    return this.getStringAttribute('space_key');
  }
}
export interface DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRulesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationArizeFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationArizeFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationArizeFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationArizeFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationArizeFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationArizeFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationArizeFilterRulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationArizeFilterRules {
}

export function dataOpenrouterObservabilityDestinationArizeFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationArizeFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationArizeFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationArizeFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationArizeFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationArizeFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationArizeFilterRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOpenrouterObservabilityDestinationArizeFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationArize {
}

export function dataOpenrouterObservabilityDestinationArizeToTerraform(struct?: DataOpenrouterObservabilityDestinationArize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationArizeToHclTerraform(struct?: DataOpenrouterObservabilityDestinationArize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationArizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationArize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationArize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_hashes - computed: true, optional: false, required: false
  public get apiKeyHashes() {
    return this.getListAttribute('api_key_hashes');
  }

  // broadcast_generation_cost - computed: true, optional: false, required: false
  public get broadcastGenerationCost() {
    return this.getBooleanAttribute('broadcast_generation_cost');
  }

  // broadcast_generation_identity - computed: true, optional: false, required: false
  public get broadcastGenerationIdentity() {
    return this.getBooleanAttribute('broadcast_generation_identity');
  }

  // broadcast_generation_request_context - computed: true, optional: false, required: false
  public get broadcastGenerationRequestContext() {
    return this.getBooleanAttribute('broadcast_generation_request_context');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOpenrouterObservabilityDestinationArizeConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter_rules - computed: true, optional: false, required: false
  private _filterRules = new DataOpenrouterObservabilityDestinationArizeFilterRulesOutputReference(this, "filter_rules");
  public get filterRules() {
    return this._filterRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privacy_mode - computed: true, optional: false, required: false
  public get privacyMode() {
    return this.getBooleanAttribute('privacy_mode');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export interface DataOpenrouterObservabilityDestinationBraintrustConfig {
}

export function dataOpenrouterObservabilityDestinationBraintrustConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationBraintrustConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationBraintrustConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationBraintrustConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationBraintrustConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationBraintrustConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationBraintrustConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
}
export interface DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRulesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationBraintrustFilterRules {
}

export function dataOpenrouterObservabilityDestinationBraintrustFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationBraintrustFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationBraintrustFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationBraintrustFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationBraintrustFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationBraintrustFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationBraintrustFilterRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOpenrouterObservabilityDestinationBraintrustFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationBraintrust {
}

export function dataOpenrouterObservabilityDestinationBraintrustToTerraform(struct?: DataOpenrouterObservabilityDestinationBraintrust): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationBraintrustToHclTerraform(struct?: DataOpenrouterObservabilityDestinationBraintrust): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationBraintrustOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationBraintrust | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationBraintrust | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_hashes - computed: true, optional: false, required: false
  public get apiKeyHashes() {
    return this.getListAttribute('api_key_hashes');
  }

  // broadcast_generation_cost - computed: true, optional: false, required: false
  public get broadcastGenerationCost() {
    return this.getBooleanAttribute('broadcast_generation_cost');
  }

  // broadcast_generation_identity - computed: true, optional: false, required: false
  public get broadcastGenerationIdentity() {
    return this.getBooleanAttribute('broadcast_generation_identity');
  }

  // broadcast_generation_request_context - computed: true, optional: false, required: false
  public get broadcastGenerationRequestContext() {
    return this.getBooleanAttribute('broadcast_generation_request_context');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOpenrouterObservabilityDestinationBraintrustConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter_rules - computed: true, optional: false, required: false
  private _filterRules = new DataOpenrouterObservabilityDestinationBraintrustFilterRulesOutputReference(this, "filter_rules");
  public get filterRules() {
    return this._filterRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privacy_mode - computed: true, optional: false, required: false
  public get privacyMode() {
    return this.getBooleanAttribute('privacy_mode');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export interface DataOpenrouterObservabilityDestinationClickhouseConfig {
}

export function dataOpenrouterObservabilityDestinationClickhouseConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationClickhouseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationClickhouseConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationClickhouseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationClickhouseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationClickhouseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationClickhouseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRulesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationClickhouseFilterRules {
}

export function dataOpenrouterObservabilityDestinationClickhouseFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationClickhouseFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationClickhouseFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationClickhouseFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationClickhouseFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationClickhouseFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationClickhouseFilterRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOpenrouterObservabilityDestinationClickhouseFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationClickhouse {
}

export function dataOpenrouterObservabilityDestinationClickhouseToTerraform(struct?: DataOpenrouterObservabilityDestinationClickhouse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationClickhouseToHclTerraform(struct?: DataOpenrouterObservabilityDestinationClickhouse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationClickhouseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationClickhouse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationClickhouse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_hashes - computed: true, optional: false, required: false
  public get apiKeyHashes() {
    return this.getListAttribute('api_key_hashes');
  }

  // broadcast_generation_cost - computed: true, optional: false, required: false
  public get broadcastGenerationCost() {
    return this.getBooleanAttribute('broadcast_generation_cost');
  }

  // broadcast_generation_identity - computed: true, optional: false, required: false
  public get broadcastGenerationIdentity() {
    return this.getBooleanAttribute('broadcast_generation_identity');
  }

  // broadcast_generation_request_context - computed: true, optional: false, required: false
  public get broadcastGenerationRequestContext() {
    return this.getBooleanAttribute('broadcast_generation_request_context');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOpenrouterObservabilityDestinationClickhouseConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter_rules - computed: true, optional: false, required: false
  private _filterRules = new DataOpenrouterObservabilityDestinationClickhouseFilterRulesOutputReference(this, "filter_rules");
  public get filterRules() {
    return this._filterRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privacy_mode - computed: true, optional: false, required: false
  public get privacyMode() {
    return this.getBooleanAttribute('privacy_mode');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export interface DataOpenrouterObservabilityDestinationDatadogConfig {
}

export function dataOpenrouterObservabilityDestinationDatadogConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationDatadogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationDatadogConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationDatadogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationDatadogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationDatadogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationDatadogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // ml_app - computed: true, optional: false, required: false
  public get mlApp() {
    return this.getStringAttribute('ml_app');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRulesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationDatadogFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationDatadogFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationDatadogFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationDatadogFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationDatadogFilterRulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationDatadogFilterRules {
}

export function dataOpenrouterObservabilityDestinationDatadogFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationDatadogFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationDatadogFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationDatadogFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationDatadogFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationDatadogFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationDatadogFilterRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOpenrouterObservabilityDestinationDatadogFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationDatadog {
}

export function dataOpenrouterObservabilityDestinationDatadogToTerraform(struct?: DataOpenrouterObservabilityDestinationDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationDatadogToHclTerraform(struct?: DataOpenrouterObservabilityDestinationDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationDatadogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationDatadog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationDatadog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_hashes - computed: true, optional: false, required: false
  public get apiKeyHashes() {
    return this.getListAttribute('api_key_hashes');
  }

  // broadcast_generation_cost - computed: true, optional: false, required: false
  public get broadcastGenerationCost() {
    return this.getBooleanAttribute('broadcast_generation_cost');
  }

  // broadcast_generation_identity - computed: true, optional: false, required: false
  public get broadcastGenerationIdentity() {
    return this.getBooleanAttribute('broadcast_generation_identity');
  }

  // broadcast_generation_request_context - computed: true, optional: false, required: false
  public get broadcastGenerationRequestContext() {
    return this.getBooleanAttribute('broadcast_generation_request_context');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOpenrouterObservabilityDestinationDatadogConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter_rules - computed: true, optional: false, required: false
  private _filterRules = new DataOpenrouterObservabilityDestinationDatadogFilterRulesOutputReference(this, "filter_rules");
  public get filterRules() {
    return this._filterRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privacy_mode - computed: true, optional: false, required: false
  public get privacyMode() {
    return this.getBooleanAttribute('privacy_mode');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export interface DataOpenrouterObservabilityDestinationGrafanaConfig {
}

export function dataOpenrouterObservabilityDestinationGrafanaConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationGrafanaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationGrafanaConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationGrafanaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationGrafanaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationGrafanaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationGrafanaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
}
export interface DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRulesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationGrafanaFilterRules {
}

export function dataOpenrouterObservabilityDestinationGrafanaFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationGrafanaFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationGrafanaFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationGrafanaFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationGrafanaFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationGrafanaFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationGrafanaFilterRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOpenrouterObservabilityDestinationGrafanaFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationGrafana {
}

export function dataOpenrouterObservabilityDestinationGrafanaToTerraform(struct?: DataOpenrouterObservabilityDestinationGrafana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationGrafanaToHclTerraform(struct?: DataOpenrouterObservabilityDestinationGrafana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationGrafanaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationGrafana | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationGrafana | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_hashes - computed: true, optional: false, required: false
  public get apiKeyHashes() {
    return this.getListAttribute('api_key_hashes');
  }

  // broadcast_generation_cost - computed: true, optional: false, required: false
  public get broadcastGenerationCost() {
    return this.getBooleanAttribute('broadcast_generation_cost');
  }

  // broadcast_generation_identity - computed: true, optional: false, required: false
  public get broadcastGenerationIdentity() {
    return this.getBooleanAttribute('broadcast_generation_identity');
  }

  // broadcast_generation_request_context - computed: true, optional: false, required: false
  public get broadcastGenerationRequestContext() {
    return this.getBooleanAttribute('broadcast_generation_request_context');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOpenrouterObservabilityDestinationGrafanaConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter_rules - computed: true, optional: false, required: false
  private _filterRules = new DataOpenrouterObservabilityDestinationGrafanaFilterRulesOutputReference(this, "filter_rules");
  public get filterRules() {
    return this._filterRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privacy_mode - computed: true, optional: false, required: false
  public get privacyMode() {
    return this.getBooleanAttribute('privacy_mode');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export interface DataOpenrouterObservabilityDestinationLangfuseConfig {
}

export function dataOpenrouterObservabilityDestinationLangfuseConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationLangfuseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationLangfuseConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationLangfuseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationLangfuseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationLangfuseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationLangfuseConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // secret_key - computed: true, optional: false, required: false
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
}
export interface DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRulesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationLangfuseFilterRules {
}

export function dataOpenrouterObservabilityDestinationLangfuseFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationLangfuseFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationLangfuseFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationLangfuseFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationLangfuseFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationLangfuseFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationLangfuseFilterRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOpenrouterObservabilityDestinationLangfuseFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationLangfuse {
}

export function dataOpenrouterObservabilityDestinationLangfuseToTerraform(struct?: DataOpenrouterObservabilityDestinationLangfuse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationLangfuseToHclTerraform(struct?: DataOpenrouterObservabilityDestinationLangfuse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationLangfuseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationLangfuse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationLangfuse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_hashes - computed: true, optional: false, required: false
  public get apiKeyHashes() {
    return this.getListAttribute('api_key_hashes');
  }

  // broadcast_generation_cost - computed: true, optional: false, required: false
  public get broadcastGenerationCost() {
    return this.getBooleanAttribute('broadcast_generation_cost');
  }

  // broadcast_generation_identity - computed: true, optional: false, required: false
  public get broadcastGenerationIdentity() {
    return this.getBooleanAttribute('broadcast_generation_identity');
  }

  // broadcast_generation_request_context - computed: true, optional: false, required: false
  public get broadcastGenerationRequestContext() {
    return this.getBooleanAttribute('broadcast_generation_request_context');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOpenrouterObservabilityDestinationLangfuseConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter_rules - computed: true, optional: false, required: false
  private _filterRules = new DataOpenrouterObservabilityDestinationLangfuseFilterRulesOutputReference(this, "filter_rules");
  public get filterRules() {
    return this._filterRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privacy_mode - computed: true, optional: false, required: false
  public get privacyMode() {
    return this.getBooleanAttribute('privacy_mode');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export interface DataOpenrouterObservabilityDestinationLangsmithConfig {
}

export function dataOpenrouterObservabilityDestinationLangsmithConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationLangsmithConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationLangsmithConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationLangsmithConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationLangsmithConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationLangsmithConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationLangsmithConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export interface DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRulesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationLangsmithFilterRules {
}

export function dataOpenrouterObservabilityDestinationLangsmithFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationLangsmithFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationLangsmithFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationLangsmithFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationLangsmithFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationLangsmithFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationLangsmithFilterRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOpenrouterObservabilityDestinationLangsmithFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationLangsmith {
}

export function dataOpenrouterObservabilityDestinationLangsmithToTerraform(struct?: DataOpenrouterObservabilityDestinationLangsmith): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationLangsmithToHclTerraform(struct?: DataOpenrouterObservabilityDestinationLangsmith): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationLangsmithOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationLangsmith | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationLangsmith | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_hashes - computed: true, optional: false, required: false
  public get apiKeyHashes() {
    return this.getListAttribute('api_key_hashes');
  }

  // broadcast_generation_cost - computed: true, optional: false, required: false
  public get broadcastGenerationCost() {
    return this.getBooleanAttribute('broadcast_generation_cost');
  }

  // broadcast_generation_identity - computed: true, optional: false, required: false
  public get broadcastGenerationIdentity() {
    return this.getBooleanAttribute('broadcast_generation_identity');
  }

  // broadcast_generation_request_context - computed: true, optional: false, required: false
  public get broadcastGenerationRequestContext() {
    return this.getBooleanAttribute('broadcast_generation_request_context');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOpenrouterObservabilityDestinationLangsmithConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter_rules - computed: true, optional: false, required: false
  private _filterRules = new DataOpenrouterObservabilityDestinationLangsmithFilterRulesOutputReference(this, "filter_rules");
  public get filterRules() {
    return this._filterRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privacy_mode - computed: true, optional: false, required: false
  public get privacyMode() {
    return this.getBooleanAttribute('privacy_mode');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export interface DataOpenrouterObservabilityDestinationNewrelicConfig {
}

export function dataOpenrouterObservabilityDestinationNewrelicConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationNewrelicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationNewrelicConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationNewrelicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationNewrelicConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationNewrelicConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationNewrelicConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // license_key - computed: true, optional: false, required: false
  public get licenseKey() {
    return this.getStringAttribute('license_key');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}
export interface DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRulesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationNewrelicFilterRules {
}

export function dataOpenrouterObservabilityDestinationNewrelicFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationNewrelicFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationNewrelicFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationNewrelicFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationNewrelicFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationNewrelicFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationNewrelicFilterRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOpenrouterObservabilityDestinationNewrelicFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationNewrelic {
}

export function dataOpenrouterObservabilityDestinationNewrelicToTerraform(struct?: DataOpenrouterObservabilityDestinationNewrelic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationNewrelicToHclTerraform(struct?: DataOpenrouterObservabilityDestinationNewrelic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationNewrelicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationNewrelic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationNewrelic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_hashes - computed: true, optional: false, required: false
  public get apiKeyHashes() {
    return this.getListAttribute('api_key_hashes');
  }

  // broadcast_generation_cost - computed: true, optional: false, required: false
  public get broadcastGenerationCost() {
    return this.getBooleanAttribute('broadcast_generation_cost');
  }

  // broadcast_generation_identity - computed: true, optional: false, required: false
  public get broadcastGenerationIdentity() {
    return this.getBooleanAttribute('broadcast_generation_identity');
  }

  // broadcast_generation_request_context - computed: true, optional: false, required: false
  public get broadcastGenerationRequestContext() {
    return this.getBooleanAttribute('broadcast_generation_request_context');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOpenrouterObservabilityDestinationNewrelicConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter_rules - computed: true, optional: false, required: false
  private _filterRules = new DataOpenrouterObservabilityDestinationNewrelicFilterRulesOutputReference(this, "filter_rules");
  public get filterRules() {
    return this._filterRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privacy_mode - computed: true, optional: false, required: false
  public get privacyMode() {
    return this.getBooleanAttribute('privacy_mode');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export interface DataOpenrouterObservabilityDestinationOpikConfig {
}

export function dataOpenrouterObservabilityDestinationOpikConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationOpikConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationOpikConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationOpikConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationOpikConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationOpikConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationOpikConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // project_name - computed: true, optional: false, required: false
  public get projectName() {
    return this.getStringAttribute('project_name');
  }

  // workspace - computed: true, optional: false, required: false
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
}
export interface DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRulesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationOpikFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationOpikFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationOpikFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationOpikFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationOpikFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationOpikFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationOpikFilterRulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationOpikFilterRules {
}

export function dataOpenrouterObservabilityDestinationOpikFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationOpikFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationOpikFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationOpikFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationOpikFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationOpikFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationOpikFilterRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOpenrouterObservabilityDestinationOpikFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationOpik {
}

export function dataOpenrouterObservabilityDestinationOpikToTerraform(struct?: DataOpenrouterObservabilityDestinationOpik): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationOpikToHclTerraform(struct?: DataOpenrouterObservabilityDestinationOpik): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationOpikOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationOpik | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationOpik | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_hashes - computed: true, optional: false, required: false
  public get apiKeyHashes() {
    return this.getListAttribute('api_key_hashes');
  }

  // broadcast_generation_cost - computed: true, optional: false, required: false
  public get broadcastGenerationCost() {
    return this.getBooleanAttribute('broadcast_generation_cost');
  }

  // broadcast_generation_identity - computed: true, optional: false, required: false
  public get broadcastGenerationIdentity() {
    return this.getBooleanAttribute('broadcast_generation_identity');
  }

  // broadcast_generation_request_context - computed: true, optional: false, required: false
  public get broadcastGenerationRequestContext() {
    return this.getBooleanAttribute('broadcast_generation_request_context');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOpenrouterObservabilityDestinationOpikConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter_rules - computed: true, optional: false, required: false
  private _filterRules = new DataOpenrouterObservabilityDestinationOpikFilterRulesOutputReference(this, "filter_rules");
  public get filterRules() {
    return this._filterRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privacy_mode - computed: true, optional: false, required: false
  public get privacyMode() {
    return this.getBooleanAttribute('privacy_mode');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export interface DataOpenrouterObservabilityDestinationOtelCollectorConfig {
}

export function dataOpenrouterObservabilityDestinationOtelCollectorConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationOtelCollectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationOtelCollectorConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationOtelCollectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationOtelCollectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationOtelCollectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationOtelCollectorConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }
}
export interface DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRulesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationOtelCollectorFilterRules {
}

export function dataOpenrouterObservabilityDestinationOtelCollectorFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationOtelCollectorFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationOtelCollectorFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationOtelCollectorFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationOtelCollectorFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationOtelCollectorFilterRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationOtelCollector {
}

export function dataOpenrouterObservabilityDestinationOtelCollectorToTerraform(struct?: DataOpenrouterObservabilityDestinationOtelCollector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationOtelCollectorToHclTerraform(struct?: DataOpenrouterObservabilityDestinationOtelCollector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationOtelCollectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationOtelCollector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationOtelCollector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_hashes - computed: true, optional: false, required: false
  public get apiKeyHashes() {
    return this.getListAttribute('api_key_hashes');
  }

  // broadcast_generation_cost - computed: true, optional: false, required: false
  public get broadcastGenerationCost() {
    return this.getBooleanAttribute('broadcast_generation_cost');
  }

  // broadcast_generation_identity - computed: true, optional: false, required: false
  public get broadcastGenerationIdentity() {
    return this.getBooleanAttribute('broadcast_generation_identity');
  }

  // broadcast_generation_request_context - computed: true, optional: false, required: false
  public get broadcastGenerationRequestContext() {
    return this.getBooleanAttribute('broadcast_generation_request_context');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOpenrouterObservabilityDestinationOtelCollectorConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter_rules - computed: true, optional: false, required: false
  private _filterRules = new DataOpenrouterObservabilityDestinationOtelCollectorFilterRulesOutputReference(this, "filter_rules");
  public get filterRules() {
    return this._filterRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privacy_mode - computed: true, optional: false, required: false
  public get privacyMode() {
    return this.getBooleanAttribute('privacy_mode');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export interface DataOpenrouterObservabilityDestinationPosthogConfig {
}

export function dataOpenrouterObservabilityDestinationPosthogConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationPosthogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationPosthogConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationPosthogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationPosthogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationPosthogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationPosthogConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }
}
export interface DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRulesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationPosthogFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationPosthogFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationPosthogFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationPosthogFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationPosthogFilterRulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationPosthogFilterRules {
}

export function dataOpenrouterObservabilityDestinationPosthogFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationPosthogFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationPosthogFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationPosthogFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationPosthogFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationPosthogFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationPosthogFilterRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOpenrouterObservabilityDestinationPosthogFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationPosthog {
}

export function dataOpenrouterObservabilityDestinationPosthogToTerraform(struct?: DataOpenrouterObservabilityDestinationPosthog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationPosthogToHclTerraform(struct?: DataOpenrouterObservabilityDestinationPosthog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationPosthogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationPosthog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationPosthog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_hashes - computed: true, optional: false, required: false
  public get apiKeyHashes() {
    return this.getListAttribute('api_key_hashes');
  }

  // broadcast_generation_cost - computed: true, optional: false, required: false
  public get broadcastGenerationCost() {
    return this.getBooleanAttribute('broadcast_generation_cost');
  }

  // broadcast_generation_identity - computed: true, optional: false, required: false
  public get broadcastGenerationIdentity() {
    return this.getBooleanAttribute('broadcast_generation_identity');
  }

  // broadcast_generation_request_context - computed: true, optional: false, required: false
  public get broadcastGenerationRequestContext() {
    return this.getBooleanAttribute('broadcast_generation_request_context');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOpenrouterObservabilityDestinationPosthogConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter_rules - computed: true, optional: false, required: false
  private _filterRules = new DataOpenrouterObservabilityDestinationPosthogFilterRulesOutputReference(this, "filter_rules");
  public get filterRules() {
    return this._filterRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privacy_mode - computed: true, optional: false, required: false
  public get privacyMode() {
    return this.getBooleanAttribute('privacy_mode');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export interface DataOpenrouterObservabilityDestinationRampConfig {
}

export function dataOpenrouterObservabilityDestinationRampConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationRampConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationRampConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationRampConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationRampConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationRampConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationRampConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }
}
export interface DataOpenrouterObservabilityDestinationRampFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationRampFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationRampFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationRampFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationRampFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationRampFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationRampFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationRampFilterRulesGroupsRulesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataOpenrouterObservabilityDestinationRampFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationRampFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationRampFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationRampFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationRampFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationRampFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationRampFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationRampFilterRulesGroupsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataOpenrouterObservabilityDestinationRampFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationRampFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationRampFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationRampFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationRampFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationRampFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationRampFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationRampFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationRampFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationRampFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationRampFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationRampFilterRulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOpenrouterObservabilityDestinationRampFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationRampFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationRampFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationRampFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationRampFilterRules {
}

export function dataOpenrouterObservabilityDestinationRampFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationRampFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationRampFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationRampFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationRampFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationRampFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationRampFilterRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOpenrouterObservabilityDestinationRampFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationRamp {
}

export function dataOpenrouterObservabilityDestinationRampToTerraform(struct?: DataOpenrouterObservabilityDestinationRamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationRampToHclTerraform(struct?: DataOpenrouterObservabilityDestinationRamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationRampOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationRamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationRamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_hashes - computed: true, optional: false, required: false
  public get apiKeyHashes() {
    return this.getListAttribute('api_key_hashes');
  }

  // broadcast_generation_cost - computed: true, optional: false, required: false
  public get broadcastGenerationCost() {
    return this.getBooleanAttribute('broadcast_generation_cost');
  }

  // broadcast_generation_identity - computed: true, optional: false, required: false
  public get broadcastGenerationIdentity() {
    return this.getBooleanAttribute('broadcast_generation_identity');
  }

  // broadcast_generation_request_context - computed: true, optional: false, required: false
  public get broadcastGenerationRequestContext() {
    return this.getBooleanAttribute('broadcast_generation_request_context');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOpenrouterObservabilityDestinationRampConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter_rules - computed: true, optional: false, required: false
  private _filterRules = new DataOpenrouterObservabilityDestinationRampFilterRulesOutputReference(this, "filter_rules");
  public get filterRules() {
    return this._filterRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privacy_mode - computed: true, optional: false, required: false
  public get privacyMode() {
    return this.getBooleanAttribute('privacy_mode');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export interface DataOpenrouterObservabilityDestinationS3Config {
}

export function dataOpenrouterObservabilityDestinationS3ConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationS3ConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationS3ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationS3Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationS3Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_key_id - computed: true, optional: false, required: false
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // path_template - computed: true, optional: false, required: false
  public get pathTemplate() {
    return this.getStringAttribute('path_template');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // secret_access_key - computed: true, optional: false, required: false
  public get secretAccessKey() {
    return this.getStringAttribute('secret_access_key');
  }

  // session_token - computed: true, optional: false, required: false
  public get sessionToken() {
    return this.getStringAttribute('session_token');
  }
}
export interface DataOpenrouterObservabilityDestinationS3FilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationS3FilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationS3FilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationS3FilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationS3FilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationS3FilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationS3FilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationS3FilterRulesGroupsRulesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataOpenrouterObservabilityDestinationS3FilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationS3FilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationS3FilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationS3FilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationS3FilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationS3FilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationS3FilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationS3FilterRulesGroupsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataOpenrouterObservabilityDestinationS3FilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationS3FilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationS3FilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationS3FilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationS3FilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationS3FilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationS3FilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationS3FilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationS3FilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationS3FilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationS3FilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationS3FilterRulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOpenrouterObservabilityDestinationS3FilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationS3FilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationS3FilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationS3FilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationS3FilterRules {
}

export function dataOpenrouterObservabilityDestinationS3FilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationS3FilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationS3FilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationS3FilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationS3FilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationS3FilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationS3FilterRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOpenrouterObservabilityDestinationS3FilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationS3 {
}

export function dataOpenrouterObservabilityDestinationS3ToTerraform(struct?: DataOpenrouterObservabilityDestinationS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationS3ToHclTerraform(struct?: DataOpenrouterObservabilityDestinationS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_hashes - computed: true, optional: false, required: false
  public get apiKeyHashes() {
    return this.getListAttribute('api_key_hashes');
  }

  // broadcast_generation_cost - computed: true, optional: false, required: false
  public get broadcastGenerationCost() {
    return this.getBooleanAttribute('broadcast_generation_cost');
  }

  // broadcast_generation_identity - computed: true, optional: false, required: false
  public get broadcastGenerationIdentity() {
    return this.getBooleanAttribute('broadcast_generation_identity');
  }

  // broadcast_generation_request_context - computed: true, optional: false, required: false
  public get broadcastGenerationRequestContext() {
    return this.getBooleanAttribute('broadcast_generation_request_context');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOpenrouterObservabilityDestinationS3ConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter_rules - computed: true, optional: false, required: false
  private _filterRules = new DataOpenrouterObservabilityDestinationS3FilterRulesOutputReference(this, "filter_rules");
  public get filterRules() {
    return this._filterRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privacy_mode - computed: true, optional: false, required: false
  public get privacyMode() {
    return this.getBooleanAttribute('privacy_mode');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export interface DataOpenrouterObservabilityDestinationSentryConfig {
}

export function dataOpenrouterObservabilityDestinationSentryConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationSentryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationSentryConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationSentryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationSentryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationSentryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationSentryConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dsn - computed: true, optional: false, required: false
  public get dsn() {
    return this.getStringAttribute('dsn');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // otlp_endpoint - computed: true, optional: false, required: false
  public get otlpEndpoint() {
    return this.getStringAttribute('otlp_endpoint');
  }
}
export interface DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRulesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationSentryFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationSentryFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationSentryFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationSentryFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationSentryFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationSentryFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationSentryFilterRulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationSentryFilterRules {
}

export function dataOpenrouterObservabilityDestinationSentryFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationSentryFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationSentryFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationSentryFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationSentryFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationSentryFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationSentryFilterRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOpenrouterObservabilityDestinationSentryFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationSentry {
}

export function dataOpenrouterObservabilityDestinationSentryToTerraform(struct?: DataOpenrouterObservabilityDestinationSentry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationSentryToHclTerraform(struct?: DataOpenrouterObservabilityDestinationSentry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationSentryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationSentry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationSentry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_hashes - computed: true, optional: false, required: false
  public get apiKeyHashes() {
    return this.getListAttribute('api_key_hashes');
  }

  // broadcast_generation_cost - computed: true, optional: false, required: false
  public get broadcastGenerationCost() {
    return this.getBooleanAttribute('broadcast_generation_cost');
  }

  // broadcast_generation_identity - computed: true, optional: false, required: false
  public get broadcastGenerationIdentity() {
    return this.getBooleanAttribute('broadcast_generation_identity');
  }

  // broadcast_generation_request_context - computed: true, optional: false, required: false
  public get broadcastGenerationRequestContext() {
    return this.getBooleanAttribute('broadcast_generation_request_context');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOpenrouterObservabilityDestinationSentryConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter_rules - computed: true, optional: false, required: false
  private _filterRules = new DataOpenrouterObservabilityDestinationSentryFilterRulesOutputReference(this, "filter_rules");
  public get filterRules() {
    return this._filterRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privacy_mode - computed: true, optional: false, required: false
  public get privacyMode() {
    return this.getBooleanAttribute('privacy_mode');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export interface DataOpenrouterObservabilityDestinationSnowflakeConfig {
}

export function dataOpenrouterObservabilityDestinationSnowflakeConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationSnowflakeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationSnowflakeConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationSnowflakeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationSnowflakeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationSnowflakeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationSnowflakeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // table - computed: true, optional: false, required: false
  public get table() {
    return this.getStringAttribute('table');
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // warehouse - computed: true, optional: false, required: false
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
}
export interface DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRulesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationSnowflakeFilterRules {
}

export function dataOpenrouterObservabilityDestinationSnowflakeFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationSnowflakeFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationSnowflakeFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationSnowflakeFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationSnowflakeFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationSnowflakeFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationSnowflakeFilterRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOpenrouterObservabilityDestinationSnowflakeFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationSnowflake {
}

export function dataOpenrouterObservabilityDestinationSnowflakeToTerraform(struct?: DataOpenrouterObservabilityDestinationSnowflake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationSnowflakeToHclTerraform(struct?: DataOpenrouterObservabilityDestinationSnowflake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationSnowflakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationSnowflake | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationSnowflake | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_hashes - computed: true, optional: false, required: false
  public get apiKeyHashes() {
    return this.getListAttribute('api_key_hashes');
  }

  // broadcast_generation_cost - computed: true, optional: false, required: false
  public get broadcastGenerationCost() {
    return this.getBooleanAttribute('broadcast_generation_cost');
  }

  // broadcast_generation_identity - computed: true, optional: false, required: false
  public get broadcastGenerationIdentity() {
    return this.getBooleanAttribute('broadcast_generation_identity');
  }

  // broadcast_generation_request_context - computed: true, optional: false, required: false
  public get broadcastGenerationRequestContext() {
    return this.getBooleanAttribute('broadcast_generation_request_context');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOpenrouterObservabilityDestinationSnowflakeConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter_rules - computed: true, optional: false, required: false
  private _filterRules = new DataOpenrouterObservabilityDestinationSnowflakeFilterRulesOutputReference(this, "filter_rules");
  public get filterRules() {
    return this._filterRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privacy_mode - computed: true, optional: false, required: false
  public get privacyMode() {
    return this.getBooleanAttribute('privacy_mode');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export interface DataOpenrouterObservabilityDestinationWeaveConfig {
}

export function dataOpenrouterObservabilityDestinationWeaveConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationWeaveConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationWeaveConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationWeaveConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationWeaveConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationWeaveConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationWeaveConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // entity - computed: true, optional: false, required: false
  public get entity() {
    return this.getStringAttribute('entity');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }
}
export interface DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRulesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationWeaveFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationWeaveFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationWeaveFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationWeaveFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationWeaveFilterRulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationWeaveFilterRules {
}

export function dataOpenrouterObservabilityDestinationWeaveFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationWeaveFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationWeaveFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationWeaveFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationWeaveFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationWeaveFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationWeaveFilterRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOpenrouterObservabilityDestinationWeaveFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationWeave {
}

export function dataOpenrouterObservabilityDestinationWeaveToTerraform(struct?: DataOpenrouterObservabilityDestinationWeave): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationWeaveToHclTerraform(struct?: DataOpenrouterObservabilityDestinationWeave): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationWeaveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationWeave | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationWeave | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_hashes - computed: true, optional: false, required: false
  public get apiKeyHashes() {
    return this.getListAttribute('api_key_hashes');
  }

  // broadcast_generation_cost - computed: true, optional: false, required: false
  public get broadcastGenerationCost() {
    return this.getBooleanAttribute('broadcast_generation_cost');
  }

  // broadcast_generation_identity - computed: true, optional: false, required: false
  public get broadcastGenerationIdentity() {
    return this.getBooleanAttribute('broadcast_generation_identity');
  }

  // broadcast_generation_request_context - computed: true, optional: false, required: false
  public get broadcastGenerationRequestContext() {
    return this.getBooleanAttribute('broadcast_generation_request_context');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOpenrouterObservabilityDestinationWeaveConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter_rules - computed: true, optional: false, required: false
  private _filterRules = new DataOpenrouterObservabilityDestinationWeaveFilterRulesOutputReference(this, "filter_rules");
  public get filterRules() {
    return this._filterRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privacy_mode - computed: true, optional: false, required: false
  public get privacyMode() {
    return this.getBooleanAttribute('privacy_mode');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}
export interface DataOpenrouterObservabilityDestinationWebhookConfig {
}

export function dataOpenrouterObservabilityDestinationWebhookConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationWebhookConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationWebhookConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationWebhookConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationWebhookConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationWebhookConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationWebhookConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRulesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getNumberAttribute('number');
  }

  // str - computed: true, optional: false, required: false
  public get str() {
    return this.getStringAttribute('str');
  }
}
export interface DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationWebhookFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationWebhookFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationWebhookFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationWebhookFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationWebhookFilterRulesGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // logic - computed: true, optional: false, required: false
  public get logic() {
    return this.getStringAttribute('logic');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationWebhookFilterRules {
}

export function dataOpenrouterObservabilityDestinationWebhookFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationWebhookFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationWebhookFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationWebhookFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationWebhookFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationWebhookFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationWebhookFilterRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // groups - computed: true, optional: false, required: false
  private _groups = new DataOpenrouterObservabilityDestinationWebhookFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationWebhook {
}

export function dataOpenrouterObservabilityDestinationWebhookToTerraform(struct?: DataOpenrouterObservabilityDestinationWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationWebhookToHclTerraform(struct?: DataOpenrouterObservabilityDestinationWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationWebhook | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // api_key_hashes - computed: true, optional: false, required: false
  public get apiKeyHashes() {
    return this.getListAttribute('api_key_hashes');
  }

  // broadcast_generation_cost - computed: true, optional: false, required: false
  public get broadcastGenerationCost() {
    return this.getBooleanAttribute('broadcast_generation_cost');
  }

  // broadcast_generation_identity - computed: true, optional: false, required: false
  public get broadcastGenerationIdentity() {
    return this.getBooleanAttribute('broadcast_generation_identity');
  }

  // broadcast_generation_request_context - computed: true, optional: false, required: false
  public get broadcastGenerationRequestContext() {
    return this.getBooleanAttribute('broadcast_generation_request_context');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataOpenrouterObservabilityDestinationWebhookConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filter_rules - computed: true, optional: false, required: false
  private _filterRules = new DataOpenrouterObservabilityDestinationWebhookFilterRulesOutputReference(this, "filter_rules");
  public get filterRules() {
    return this._filterRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privacy_mode - computed: true, optional: false, required: false
  public get privacyMode() {
    return this.getBooleanAttribute('privacy_mode');
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/data-sources/observability_destination openrouter_observability_destination}
*/
export class DataOpenrouterObservabilityDestination extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_observability_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenrouterObservabilityDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenrouterObservabilityDestination to import
  * @param importFromId The id of the existing DataOpenrouterObservabilityDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/data-sources/observability_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenrouterObservabilityDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_observability_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/data-sources/observability_destination openrouter_observability_destination} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenrouterObservabilityDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpenrouterObservabilityDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'openrouter_observability_destination',
      terraformGeneratorMetadata: {
        providerName: 'openrouter',
        providerVersion: '0.2.30'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arize - computed: true, optional: false, required: false
  private _arize = new DataOpenrouterObservabilityDestinationArizeOutputReference(this, "arize");
  public get arize() {
    return this._arize;
  }

  // braintrust - computed: true, optional: false, required: false
  private _braintrust = new DataOpenrouterObservabilityDestinationBraintrustOutputReference(this, "braintrust");
  public get braintrust() {
    return this._braintrust;
  }

  // broadcast_generation_cost - computed: true, optional: false, required: false
  public get broadcastGenerationCost() {
    return this.getBooleanAttribute('broadcast_generation_cost');
  }

  // broadcast_generation_identity - computed: true, optional: false, required: false
  public get broadcastGenerationIdentity() {
    return this.getBooleanAttribute('broadcast_generation_identity');
  }

  // broadcast_generation_request_context - computed: true, optional: false, required: false
  public get broadcastGenerationRequestContext() {
    return this.getBooleanAttribute('broadcast_generation_request_context');
  }

  // clickhouse - computed: true, optional: false, required: false
  private _clickhouse = new DataOpenrouterObservabilityDestinationClickhouseOutputReference(this, "clickhouse");
  public get clickhouse() {
    return this._clickhouse;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // datadog - computed: true, optional: false, required: false
  private _datadog = new DataOpenrouterObservabilityDestinationDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // grafana - computed: true, optional: false, required: false
  private _grafana = new DataOpenrouterObservabilityDestinationGrafanaOutputReference(this, "grafana");
  public get grafana() {
    return this._grafana;
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

  // langfuse - computed: true, optional: false, required: false
  private _langfuse = new DataOpenrouterObservabilityDestinationLangfuseOutputReference(this, "langfuse");
  public get langfuse() {
    return this._langfuse;
  }

  // langsmith - computed: true, optional: false, required: false
  private _langsmith = new DataOpenrouterObservabilityDestinationLangsmithOutputReference(this, "langsmith");
  public get langsmith() {
    return this._langsmith;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // newrelic - computed: true, optional: false, required: false
  private _newrelic = new DataOpenrouterObservabilityDestinationNewrelicOutputReference(this, "newrelic");
  public get newrelic() {
    return this._newrelic;
  }

  // opik - computed: true, optional: false, required: false
  private _opik = new DataOpenrouterObservabilityDestinationOpikOutputReference(this, "opik");
  public get opik() {
    return this._opik;
  }

  // otel_collector - computed: true, optional: false, required: false
  private _otelCollector = new DataOpenrouterObservabilityDestinationOtelCollectorOutputReference(this, "otel_collector");
  public get otelCollector() {
    return this._otelCollector;
  }

  // posthog - computed: true, optional: false, required: false
  private _posthog = new DataOpenrouterObservabilityDestinationPosthogOutputReference(this, "posthog");
  public get posthog() {
    return this._posthog;
  }

  // privacy_mode - computed: true, optional: false, required: false
  public get privacyMode() {
    return this.getBooleanAttribute('privacy_mode');
  }

  // ramp - computed: true, optional: false, required: false
  private _ramp = new DataOpenrouterObservabilityDestinationRampOutputReference(this, "ramp");
  public get ramp() {
    return this._ramp;
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataOpenrouterObservabilityDestinationS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }

  // sampling_rate - computed: true, optional: false, required: false
  public get samplingRate() {
    return this.getNumberAttribute('sampling_rate');
  }

  // sentry - computed: true, optional: false, required: false
  private _sentry = new DataOpenrouterObservabilityDestinationSentryOutputReference(this, "sentry");
  public get sentry() {
    return this._sentry;
  }

  // snowflake - computed: true, optional: false, required: false
  private _snowflake = new DataOpenrouterObservabilityDestinationSnowflakeOutputReference(this, "snowflake");
  public get snowflake() {
    return this._snowflake;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // weave - computed: true, optional: false, required: false
  private _weave = new DataOpenrouterObservabilityDestinationWeaveOutputReference(this, "weave");
  public get weave() {
    return this._weave;
  }

  // webhook - computed: true, optional: false, required: false
  private _webhook = new DataOpenrouterObservabilityDestinationWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
