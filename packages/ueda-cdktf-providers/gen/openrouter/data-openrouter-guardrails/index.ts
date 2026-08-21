// https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.43/docs/data-sources/guardrails
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenrouterGuardrailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter guardrails by workspace ID. By default, guardrails in the default workspace are returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.43/docs/data-sources/guardrails#workspace_id DataOpenrouterGuardrails#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface DataOpenrouterGuardrailsDataContentFilterBuiltins {
}

export function dataOpenrouterGuardrailsDataContentFilterBuiltinsToTerraform(struct?: DataOpenrouterGuardrailsDataContentFilterBuiltins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailsDataContentFilterBuiltinsToHclTerraform(struct?: DataOpenrouterGuardrailsDataContentFilterBuiltins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailsDataContentFilterBuiltinsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterGuardrailsDataContentFilterBuiltins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailsDataContentFilterBuiltins | undefined) {
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

export class DataOpenrouterGuardrailsDataContentFilterBuiltinsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterGuardrailsDataContentFilterBuiltinsOutputReference {
    return new DataOpenrouterGuardrailsDataContentFilterBuiltinsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterGuardrailsDataContentFilters {
}

export function dataOpenrouterGuardrailsDataContentFiltersToTerraform(struct?: DataOpenrouterGuardrailsDataContentFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailsDataContentFiltersToHclTerraform(struct?: DataOpenrouterGuardrailsDataContentFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailsDataContentFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterGuardrailsDataContentFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailsDataContentFilters | undefined) {
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

export class DataOpenrouterGuardrailsDataContentFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterGuardrailsDataContentFiltersOutputReference {
    return new DataOpenrouterGuardrailsDataContentFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterGuardrailsData {
}

export function dataOpenrouterGuardrailsDataToTerraform(struct?: DataOpenrouterGuardrailsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailsDataToHclTerraform(struct?: DataOpenrouterGuardrailsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterGuardrailsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_models - computed: true, optional: false, required: false
  public get allowedModels() {
    return this.getListAttribute('allowed_models');
  }

  // allowed_providers - computed: true, optional: false, required: false
  public get allowedProviders() {
    return this.getListAttribute('allowed_providers');
  }

  // content_filter_builtins - computed: true, optional: false, required: false
  private _contentFilterBuiltins = new DataOpenrouterGuardrailsDataContentFilterBuiltinsList(this, "content_filter_builtins", false);
  public get contentFilterBuiltins() {
    return this._contentFilterBuiltins;
  }

  // content_filters - computed: true, optional: false, required: false
  private _contentFilters = new DataOpenrouterGuardrailsDataContentFiltersList(this, "content_filters", false);
  public get contentFilters() {
    return this._contentFilters;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignored_models - computed: true, optional: false, required: false
  public get ignoredModels() {
    return this.getListAttribute('ignored_models');
  }

  // ignored_providers - computed: true, optional: false, required: false
  public get ignoredProviders() {
    return this.getListAttribute('ignored_providers');
  }

  // include_byok_in_budgets - computed: true, optional: false, required: false
  public get includeByokInBudgets() {
    return this.getBooleanAttribute('include_byok_in_budgets');
  }

  // limit_usd - computed: true, optional: false, required: false
  public get limitUsd() {
    return this.getNumberAttribute('limit_usd');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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
}

export class DataOpenrouterGuardrailsDataList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterGuardrailsDataOutputReference {
    return new DataOpenrouterGuardrailsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.43/docs/data-sources/guardrails openrouter_guardrails}
*/
export class DataOpenrouterGuardrails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_guardrails";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenrouterGuardrails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenrouterGuardrails to import
  * @param importFromId The id of the existing DataOpenrouterGuardrails that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.43/docs/data-sources/guardrails#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenrouterGuardrails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_guardrails", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.43/docs/data-sources/guardrails openrouter_guardrails} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenrouterGuardrailsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpenrouterGuardrailsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'openrouter_guardrails',
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
  private _data = new DataOpenrouterGuardrailsDataList(this, "data", false);
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
