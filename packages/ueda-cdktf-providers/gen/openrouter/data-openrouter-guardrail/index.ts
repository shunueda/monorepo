// https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/guardrail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenrouterGuardrailConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier for the guardrail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/guardrail#id DataOpenrouterGuardrail#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataOpenrouterGuardrailContentFilterBuiltins {
}

export function dataOpenrouterGuardrailContentFilterBuiltinsToTerraform(struct?: DataOpenrouterGuardrailContentFilterBuiltins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailContentFilterBuiltinsToHclTerraform(struct?: DataOpenrouterGuardrailContentFilterBuiltins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailContentFilterBuiltinsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterGuardrailContentFilterBuiltins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailContentFilterBuiltins | undefined) {
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

export class DataOpenrouterGuardrailContentFilterBuiltinsList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterGuardrailContentFilterBuiltinsOutputReference {
    return new DataOpenrouterGuardrailContentFilterBuiltinsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterGuardrailContentFilters {
}

export function dataOpenrouterGuardrailContentFiltersToTerraform(struct?: DataOpenrouterGuardrailContentFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterGuardrailContentFiltersToHclTerraform(struct?: DataOpenrouterGuardrailContentFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterGuardrailContentFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterGuardrailContentFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterGuardrailContentFilters | undefined) {
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

export class DataOpenrouterGuardrailContentFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterGuardrailContentFiltersOutputReference {
    return new DataOpenrouterGuardrailContentFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/guardrail openrouter_guardrail}
*/
export class DataOpenrouterGuardrail extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_guardrail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenrouterGuardrail resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenrouterGuardrail to import
  * @param importFromId The id of the existing DataOpenrouterGuardrail that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/guardrail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenrouterGuardrail to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_guardrail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/guardrail openrouter_guardrail} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenrouterGuardrailConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpenrouterGuardrailConfig) {
    super(scope, id, {
      terraformResourceType: 'openrouter_guardrail',
      terraformGeneratorMetadata: {
        providerName: 'openrouter',
        providerVersion: '0.1.22'
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

  // allowed_models - computed: true, optional: false, required: false
  public get allowedModels() {
    return this.getListAttribute('allowed_models');
  }

  // allowed_providers - computed: true, optional: false, required: false
  public get allowedProviders() {
    return this.getListAttribute('allowed_providers');
  }

  // content_filter_builtins - computed: true, optional: false, required: false
  private _contentFilterBuiltins = new DataOpenrouterGuardrailContentFilterBuiltinsList(this, "content_filter_builtins", false);
  public get contentFilterBuiltins() {
    return this._contentFilterBuiltins;
  }

  // content_filters - computed: true, optional: false, required: false
  private _contentFilters = new DataOpenrouterGuardrailContentFiltersList(this, "content_filters", false);
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
