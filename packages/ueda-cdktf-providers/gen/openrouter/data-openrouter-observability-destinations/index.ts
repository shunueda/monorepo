// https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.43/docs/data-sources/observability_destinations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenrouterObservabilityDestinationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional workspace ID to filter by. Defaults to the authenticated entity's default workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.43/docs/data-sources/observability_destinations#workspace_id DataOpenrouterObservabilityDestinations#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface DataOpenrouterObservabilityDestinationsDataArizeConfig {
}

export function dataOpenrouterObservabilityDestinationsDataArizeConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataArizeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataArizeConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataArizeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataArizeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataArizeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataArizeConfig | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRulesValue | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRules | undefined) {
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
  private _value = new DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroups | undefined) {
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
  private _rules = new DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataArizeFilterRules {
}

export function dataOpenrouterObservabilityDestinationsDataArizeFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataArizeFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataArizeFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataArizeFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataArizeFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataArizeFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataArizeFilterRules | undefined) {
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
  private _groups = new DataOpenrouterObservabilityDestinationsDataArizeFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationsDataArize {
}

export function dataOpenrouterObservabilityDestinationsDataArizeToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataArize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataArizeToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataArize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataArizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataArize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataArize | undefined) {
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
  private _config = new DataOpenrouterObservabilityDestinationsDataArizeConfigOutputReference(this, "config");
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
  private _filterRules = new DataOpenrouterObservabilityDestinationsDataArizeFilterRulesOutputReference(this, "filter_rules");
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
export interface DataOpenrouterObservabilityDestinationsDataBraintrustConfig {
}

export function dataOpenrouterObservabilityDestinationsDataBraintrustConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataBraintrustConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataBraintrustConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataBraintrustConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataBraintrustConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataBraintrustConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataBraintrustConfig | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRulesValue | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRules | undefined) {
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
  private _value = new DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroups | undefined) {
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
  private _rules = new DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataBraintrustFilterRules {
}

export function dataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataBraintrustFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataBraintrustFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataBraintrustFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataBraintrustFilterRules | undefined) {
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
  private _groups = new DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationsDataBraintrust {
}

export function dataOpenrouterObservabilityDestinationsDataBraintrustToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataBraintrust): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataBraintrustToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataBraintrust): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataBraintrustOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataBraintrust | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataBraintrust | undefined) {
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
  private _config = new DataOpenrouterObservabilityDestinationsDataBraintrustConfigOutputReference(this, "config");
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
  private _filterRules = new DataOpenrouterObservabilityDestinationsDataBraintrustFilterRulesOutputReference(this, "filter_rules");
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
export interface DataOpenrouterObservabilityDestinationsDataClickhouseConfig {
}

export function dataOpenrouterObservabilityDestinationsDataClickhouseConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataClickhouseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataClickhouseConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataClickhouseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataClickhouseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataClickhouseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataClickhouseConfig | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRulesValue | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRules | undefined) {
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
  private _value = new DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroups | undefined) {
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
  private _rules = new DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataClickhouseFilterRules {
}

export function dataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataClickhouseFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataClickhouseFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataClickhouseFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataClickhouseFilterRules | undefined) {
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
  private _groups = new DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationsDataClickhouse {
}

export function dataOpenrouterObservabilityDestinationsDataClickhouseToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataClickhouse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataClickhouseToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataClickhouse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataClickhouseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataClickhouse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataClickhouse | undefined) {
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
  private _config = new DataOpenrouterObservabilityDestinationsDataClickhouseConfigOutputReference(this, "config");
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
  private _filterRules = new DataOpenrouterObservabilityDestinationsDataClickhouseFilterRulesOutputReference(this, "filter_rules");
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
export interface DataOpenrouterObservabilityDestinationsDataDatadogConfig {
}

export function dataOpenrouterObservabilityDestinationsDataDatadogConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataDatadogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataDatadogConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataDatadogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataDatadogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataDatadogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataDatadogConfig | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRulesValue | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRules | undefined) {
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
  private _value = new DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroups | undefined) {
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
  private _rules = new DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataDatadogFilterRules {
}

export function dataOpenrouterObservabilityDestinationsDataDatadogFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataDatadogFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataDatadogFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataDatadogFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataDatadogFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataDatadogFilterRules | undefined) {
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
  private _groups = new DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationsDataDatadog {
}

export function dataOpenrouterObservabilityDestinationsDataDatadogToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataDatadogToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataDatadog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataDatadogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataDatadog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataDatadog | undefined) {
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
  private _config = new DataOpenrouterObservabilityDestinationsDataDatadogConfigOutputReference(this, "config");
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
  private _filterRules = new DataOpenrouterObservabilityDestinationsDataDatadogFilterRulesOutputReference(this, "filter_rules");
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
export interface DataOpenrouterObservabilityDestinationsDataGrafanaConfig {
}

export function dataOpenrouterObservabilityDestinationsDataGrafanaConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataGrafanaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataGrafanaConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataGrafanaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataGrafanaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataGrafanaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataGrafanaConfig | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRulesValue | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRules | undefined) {
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
  private _value = new DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroups | undefined) {
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
  private _rules = new DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataGrafanaFilterRules {
}

export function dataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataGrafanaFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataGrafanaFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataGrafanaFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataGrafanaFilterRules | undefined) {
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
  private _groups = new DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationsDataGrafana {
}

export function dataOpenrouterObservabilityDestinationsDataGrafanaToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataGrafana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataGrafanaToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataGrafana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataGrafanaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataGrafana | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataGrafana | undefined) {
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
  private _config = new DataOpenrouterObservabilityDestinationsDataGrafanaConfigOutputReference(this, "config");
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
  private _filterRules = new DataOpenrouterObservabilityDestinationsDataGrafanaFilterRulesOutputReference(this, "filter_rules");
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
export interface DataOpenrouterObservabilityDestinationsDataLangfuseConfig {
}

export function dataOpenrouterObservabilityDestinationsDataLangfuseConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangfuseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataLangfuseConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangfuseConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataLangfuseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataLangfuseConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataLangfuseConfig | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRulesValue | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRules | undefined) {
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
  private _value = new DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroups | undefined) {
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
  private _rules = new DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataLangfuseFilterRules {
}

export function dataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangfuseFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangfuseFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataLangfuseFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataLangfuseFilterRules | undefined) {
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
  private _groups = new DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationsDataLangfuse {
}

export function dataOpenrouterObservabilityDestinationsDataLangfuseToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangfuse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataLangfuseToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangfuse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataLangfuseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataLangfuse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataLangfuse | undefined) {
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
  private _config = new DataOpenrouterObservabilityDestinationsDataLangfuseConfigOutputReference(this, "config");
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
  private _filterRules = new DataOpenrouterObservabilityDestinationsDataLangfuseFilterRulesOutputReference(this, "filter_rules");
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
export interface DataOpenrouterObservabilityDestinationsDataLangsmithConfig {
}

export function dataOpenrouterObservabilityDestinationsDataLangsmithConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangsmithConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataLangsmithConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangsmithConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataLangsmithConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataLangsmithConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataLangsmithConfig | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRulesValue | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRules | undefined) {
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
  private _value = new DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroups | undefined) {
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
  private _rules = new DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataLangsmithFilterRules {
}

export function dataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangsmithFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangsmithFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataLangsmithFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataLangsmithFilterRules | undefined) {
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
  private _groups = new DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationsDataLangsmith {
}

export function dataOpenrouterObservabilityDestinationsDataLangsmithToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangsmith): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataLangsmithToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataLangsmith): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataLangsmithOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataLangsmith | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataLangsmith | undefined) {
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
  private _config = new DataOpenrouterObservabilityDestinationsDataLangsmithConfigOutputReference(this, "config");
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
  private _filterRules = new DataOpenrouterObservabilityDestinationsDataLangsmithFilterRulesOutputReference(this, "filter_rules");
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
export interface DataOpenrouterObservabilityDestinationsDataNewrelicConfig {
}

export function dataOpenrouterObservabilityDestinationsDataNewrelicConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataNewrelicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataNewrelicConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataNewrelicConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataNewrelicConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataNewrelicConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataNewrelicConfig | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRulesValue | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRules | undefined) {
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
  private _value = new DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroups | undefined) {
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
  private _rules = new DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataNewrelicFilterRules {
}

export function dataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataNewrelicFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataNewrelicFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataNewrelicFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataNewrelicFilterRules | undefined) {
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
  private _groups = new DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationsDataNewrelic {
}

export function dataOpenrouterObservabilityDestinationsDataNewrelicToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataNewrelic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataNewrelicToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataNewrelic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataNewrelicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataNewrelic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataNewrelic | undefined) {
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
  private _config = new DataOpenrouterObservabilityDestinationsDataNewrelicConfigOutputReference(this, "config");
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
  private _filterRules = new DataOpenrouterObservabilityDestinationsDataNewrelicFilterRulesOutputReference(this, "filter_rules");
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
export interface DataOpenrouterObservabilityDestinationsDataOpikConfig {
}

export function dataOpenrouterObservabilityDestinationsDataOpikConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOpikConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataOpikConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOpikConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataOpikConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataOpikConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataOpikConfig | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRulesValue | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRules | undefined) {
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
  private _value = new DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroups | undefined) {
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
  private _rules = new DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataOpikFilterRules {
}

export function dataOpenrouterObservabilityDestinationsDataOpikFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOpikFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataOpikFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOpikFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataOpikFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataOpikFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataOpikFilterRules | undefined) {
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
  private _groups = new DataOpenrouterObservabilityDestinationsDataOpikFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationsDataOpik {
}

export function dataOpenrouterObservabilityDestinationsDataOpikToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOpik): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataOpikToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOpik): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataOpikOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataOpik | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataOpik | undefined) {
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
  private _config = new DataOpenrouterObservabilityDestinationsDataOpikConfigOutputReference(this, "config");
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
  private _filterRules = new DataOpenrouterObservabilityDestinationsDataOpikFilterRulesOutputReference(this, "filter_rules");
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
export interface DataOpenrouterObservabilityDestinationsDataOtelCollectorConfig {
}

export function dataOpenrouterObservabilityDestinationsDataOtelCollectorConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOtelCollectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataOtelCollectorConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOtelCollectorConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataOtelCollectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataOtelCollectorConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataOtelCollectorConfig | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRulesValue | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRules | undefined) {
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
  private _value = new DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroups | undefined) {
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
  private _rules = new DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRules {
}

export function dataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRules | undefined) {
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
  private _groups = new DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationsDataOtelCollector {
}

export function dataOpenrouterObservabilityDestinationsDataOtelCollectorToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOtelCollector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataOtelCollectorToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataOtelCollector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataOtelCollectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataOtelCollector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataOtelCollector | undefined) {
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
  private _config = new DataOpenrouterObservabilityDestinationsDataOtelCollectorConfigOutputReference(this, "config");
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
  private _filterRules = new DataOpenrouterObservabilityDestinationsDataOtelCollectorFilterRulesOutputReference(this, "filter_rules");
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
export interface DataOpenrouterObservabilityDestinationsDataPosthogConfig {
}

export function dataOpenrouterObservabilityDestinationsDataPosthogConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataPosthogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataPosthogConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataPosthogConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataPosthogConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataPosthogConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataPosthogConfig | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRulesValue | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRules | undefined) {
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
  private _value = new DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroups | undefined) {
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
  private _rules = new DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataPosthogFilterRules {
}

export function dataOpenrouterObservabilityDestinationsDataPosthogFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataPosthogFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataPosthogFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataPosthogFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataPosthogFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataPosthogFilterRules | undefined) {
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
  private _groups = new DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationsDataPosthog {
}

export function dataOpenrouterObservabilityDestinationsDataPosthogToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataPosthog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataPosthogToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataPosthog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataPosthogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataPosthog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataPosthog | undefined) {
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
  private _config = new DataOpenrouterObservabilityDestinationsDataPosthogConfigOutputReference(this, "config");
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
  private _filterRules = new DataOpenrouterObservabilityDestinationsDataPosthogFilterRulesOutputReference(this, "filter_rules");
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
export interface DataOpenrouterObservabilityDestinationsDataRampConfig {
}

export function dataOpenrouterObservabilityDestinationsDataRampConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataRampConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataRampConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataRampConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataRampConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataRampConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataRampConfig | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRulesValue | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRules | undefined) {
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
  private _value = new DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroups | undefined) {
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
  private _rules = new DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataRampFilterRules {
}

export function dataOpenrouterObservabilityDestinationsDataRampFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataRampFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataRampFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataRampFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataRampFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataRampFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataRampFilterRules | undefined) {
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
  private _groups = new DataOpenrouterObservabilityDestinationsDataRampFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationsDataRamp {
}

export function dataOpenrouterObservabilityDestinationsDataRampToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataRamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataRampToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataRamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataRampOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataRamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataRamp | undefined) {
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
  private _config = new DataOpenrouterObservabilityDestinationsDataRampConfigOutputReference(this, "config");
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
  private _filterRules = new DataOpenrouterObservabilityDestinationsDataRampFilterRulesOutputReference(this, "filter_rules");
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
export interface DataOpenrouterObservabilityDestinationsDataS3Config {
}

export function dataOpenrouterObservabilityDestinationsDataS3ConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataS3ConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataS3Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataS3ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataS3Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataS3Config | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRulesValue | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRules | undefined) {
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
  private _value = new DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroups | undefined) {
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
  private _rules = new DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataS3FilterRules {
}

export function dataOpenrouterObservabilityDestinationsDataS3FilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataS3FilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataS3FilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataS3FilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataS3FilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataS3FilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataS3FilterRules | undefined) {
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
  private _groups = new DataOpenrouterObservabilityDestinationsDataS3FilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationsDataS3 {
}

export function dataOpenrouterObservabilityDestinationsDataS3ToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataS3ToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataS3 | undefined) {
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
  private _config = new DataOpenrouterObservabilityDestinationsDataS3ConfigOutputReference(this, "config");
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
  private _filterRules = new DataOpenrouterObservabilityDestinationsDataS3FilterRulesOutputReference(this, "filter_rules");
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
export interface DataOpenrouterObservabilityDestinationsDataSentryConfig {
}

export function dataOpenrouterObservabilityDestinationsDataSentryConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSentryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataSentryConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSentryConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataSentryConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataSentryConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataSentryConfig | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRulesValue | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRules | undefined) {
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
  private _value = new DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroups | undefined) {
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
  private _rules = new DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataSentryFilterRules {
}

export function dataOpenrouterObservabilityDestinationsDataSentryFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSentryFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataSentryFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSentryFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataSentryFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataSentryFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataSentryFilterRules | undefined) {
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
  private _groups = new DataOpenrouterObservabilityDestinationsDataSentryFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationsDataSentry {
}

export function dataOpenrouterObservabilityDestinationsDataSentryToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSentry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataSentryToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSentry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataSentryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataSentry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataSentry | undefined) {
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
  private _config = new DataOpenrouterObservabilityDestinationsDataSentryConfigOutputReference(this, "config");
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
  private _filterRules = new DataOpenrouterObservabilityDestinationsDataSentryFilterRulesOutputReference(this, "filter_rules");
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
export interface DataOpenrouterObservabilityDestinationsDataSnowflakeConfig {
}

export function dataOpenrouterObservabilityDestinationsDataSnowflakeConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSnowflakeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataSnowflakeConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSnowflakeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataSnowflakeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataSnowflakeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataSnowflakeConfig | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRulesValue | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRules | undefined) {
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
  private _value = new DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroups | undefined) {
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
  private _rules = new DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRules {
}

export function dataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRules | undefined) {
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
  private _groups = new DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationsDataSnowflake {
}

export function dataOpenrouterObservabilityDestinationsDataSnowflakeToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSnowflake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataSnowflakeToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataSnowflake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataSnowflakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataSnowflake | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataSnowflake | undefined) {
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
  private _config = new DataOpenrouterObservabilityDestinationsDataSnowflakeConfigOutputReference(this, "config");
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
  private _filterRules = new DataOpenrouterObservabilityDestinationsDataSnowflakeFilterRulesOutputReference(this, "filter_rules");
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
export interface DataOpenrouterObservabilityDestinationsDataWeaveConfig {
}

export function dataOpenrouterObservabilityDestinationsDataWeaveConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWeaveConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataWeaveConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWeaveConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataWeaveConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataWeaveConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataWeaveConfig | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRulesValue | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRules | undefined) {
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
  private _value = new DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroups | undefined) {
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
  private _rules = new DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataWeaveFilterRules {
}

export function dataOpenrouterObservabilityDestinationsDataWeaveFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWeaveFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataWeaveFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWeaveFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataWeaveFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataWeaveFilterRules | undefined) {
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
  private _groups = new DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationsDataWeave {
}

export function dataOpenrouterObservabilityDestinationsDataWeaveToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWeave): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataWeaveToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWeave): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataWeaveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataWeave | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataWeave | undefined) {
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
  private _config = new DataOpenrouterObservabilityDestinationsDataWeaveConfigOutputReference(this, "config");
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
  private _filterRules = new DataOpenrouterObservabilityDestinationsDataWeaveFilterRulesOutputReference(this, "filter_rules");
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
export interface DataOpenrouterObservabilityDestinationsDataWebhookConfig {
}

export function dataOpenrouterObservabilityDestinationsDataWebhookConfigToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWebhookConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataWebhookConfigToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWebhookConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataWebhookConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataWebhookConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataWebhookConfig | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRulesValue {
}

export function dataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRulesValueToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRulesValueToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRulesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRulesValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRulesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRulesValue | undefined) {
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
export interface DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRules {
}

export function dataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRules | undefined) {
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
  private _value = new DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRulesValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
}

export class DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRulesOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroups {
}

export function dataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroups | undefined) {
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
  private _rules = new DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterObservabilityDestinationsDataWebhookFilterRules {
}

export function dataOpenrouterObservabilityDestinationsDataWebhookFilterRulesToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWebhookFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataWebhookFilterRulesToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWebhookFilterRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataWebhookFilterRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataWebhookFilterRules | undefined) {
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
  private _groups = new DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
}
export interface DataOpenrouterObservabilityDestinationsDataWebhook {
}

export function dataOpenrouterObservabilityDestinationsDataWebhookToTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataWebhookToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsDataWebhook): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterObservabilityDestinationsDataWebhook | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsDataWebhook | undefined) {
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
  private _config = new DataOpenrouterObservabilityDestinationsDataWebhookConfigOutputReference(this, "config");
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
  private _filterRules = new DataOpenrouterObservabilityDestinationsDataWebhookFilterRulesOutputReference(this, "filter_rules");
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
export interface DataOpenrouterObservabilityDestinationsData {
}

export function dataOpenrouterObservabilityDestinationsDataToTerraform(struct?: DataOpenrouterObservabilityDestinationsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterObservabilityDestinationsDataToHclTerraform(struct?: DataOpenrouterObservabilityDestinationsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterObservabilityDestinationsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterObservabilityDestinationsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterObservabilityDestinationsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arize - computed: true, optional: false, required: false
  private _arize = new DataOpenrouterObservabilityDestinationsDataArizeOutputReference(this, "arize");
  public get arize() {
    return this._arize;
  }

  // braintrust - computed: true, optional: false, required: false
  private _braintrust = new DataOpenrouterObservabilityDestinationsDataBraintrustOutputReference(this, "braintrust");
  public get braintrust() {
    return this._braintrust;
  }

  // clickhouse - computed: true, optional: false, required: false
  private _clickhouse = new DataOpenrouterObservabilityDestinationsDataClickhouseOutputReference(this, "clickhouse");
  public get clickhouse() {
    return this._clickhouse;
  }

  // datadog - computed: true, optional: false, required: false
  private _datadog = new DataOpenrouterObservabilityDestinationsDataDatadogOutputReference(this, "datadog");
  public get datadog() {
    return this._datadog;
  }

  // grafana - computed: true, optional: false, required: false
  private _grafana = new DataOpenrouterObservabilityDestinationsDataGrafanaOutputReference(this, "grafana");
  public get grafana() {
    return this._grafana;
  }

  // langfuse - computed: true, optional: false, required: false
  private _langfuse = new DataOpenrouterObservabilityDestinationsDataLangfuseOutputReference(this, "langfuse");
  public get langfuse() {
    return this._langfuse;
  }

  // langsmith - computed: true, optional: false, required: false
  private _langsmith = new DataOpenrouterObservabilityDestinationsDataLangsmithOutputReference(this, "langsmith");
  public get langsmith() {
    return this._langsmith;
  }

  // newrelic - computed: true, optional: false, required: false
  private _newrelic = new DataOpenrouterObservabilityDestinationsDataNewrelicOutputReference(this, "newrelic");
  public get newrelic() {
    return this._newrelic;
  }

  // opik - computed: true, optional: false, required: false
  private _opik = new DataOpenrouterObservabilityDestinationsDataOpikOutputReference(this, "opik");
  public get opik() {
    return this._opik;
  }

  // otel_collector - computed: true, optional: false, required: false
  private _otelCollector = new DataOpenrouterObservabilityDestinationsDataOtelCollectorOutputReference(this, "otel_collector");
  public get otelCollector() {
    return this._otelCollector;
  }

  // posthog - computed: true, optional: false, required: false
  private _posthog = new DataOpenrouterObservabilityDestinationsDataPosthogOutputReference(this, "posthog");
  public get posthog() {
    return this._posthog;
  }

  // ramp - computed: true, optional: false, required: false
  private _ramp = new DataOpenrouterObservabilityDestinationsDataRampOutputReference(this, "ramp");
  public get ramp() {
    return this._ramp;
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataOpenrouterObservabilityDestinationsDataS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }

  // sentry - computed: true, optional: false, required: false
  private _sentry = new DataOpenrouterObservabilityDestinationsDataSentryOutputReference(this, "sentry");
  public get sentry() {
    return this._sentry;
  }

  // snowflake - computed: true, optional: false, required: false
  private _snowflake = new DataOpenrouterObservabilityDestinationsDataSnowflakeOutputReference(this, "snowflake");
  public get snowflake() {
    return this._snowflake;
  }

  // weave - computed: true, optional: false, required: false
  private _weave = new DataOpenrouterObservabilityDestinationsDataWeaveOutputReference(this, "weave");
  public get weave() {
    return this._weave;
  }

  // webhook - computed: true, optional: false, required: false
  private _webhook = new DataOpenrouterObservabilityDestinationsDataWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
}

export class DataOpenrouterObservabilityDestinationsDataList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterObservabilityDestinationsDataOutputReference {
    return new DataOpenrouterObservabilityDestinationsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.43/docs/data-sources/observability_destinations openrouter_observability_destinations}
*/
export class DataOpenrouterObservabilityDestinations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_observability_destinations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenrouterObservabilityDestinations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenrouterObservabilityDestinations to import
  * @param importFromId The id of the existing DataOpenrouterObservabilityDestinations that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.43/docs/data-sources/observability_destinations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenrouterObservabilityDestinations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_observability_destinations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.43/docs/data-sources/observability_destinations openrouter_observability_destinations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenrouterObservabilityDestinationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpenrouterObservabilityDestinationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'openrouter_observability_destinations',
      terraformGeneratorMetadata: {
        providerName: 'openrouter',
        providerVersion: '0.2.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataOpenrouterObservabilityDestinationsDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
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
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
