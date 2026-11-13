// https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/data-sources/private_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenrouterPrivateEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Stable identifier of the private endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/data-sources/private_endpoint#id DataOpenrouterPrivateEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataOpenrouterPrivateEndpointPricing {
}

export function dataOpenrouterPrivateEndpointPricingToTerraform(struct?: DataOpenrouterPrivateEndpointPricing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterPrivateEndpointPricingToHclTerraform(struct?: DataOpenrouterPrivateEndpointPricing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterPrivateEndpointPricingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterPrivateEndpointPricing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterPrivateEndpointPricing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cache_read - computed: true, optional: false, required: false
  public get cacheRead() {
    return this.getStringAttribute('cache_read');
  }

  // cache_write - computed: true, optional: false, required: false
  public get cacheWrite() {
    return this.getStringAttribute('cache_write');
  }

  // completion - computed: true, optional: false, required: false
  public get completion() {
    return this.getStringAttribute('completion');
  }

  // prompt - computed: true, optional: false, required: false
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
}
export interface DataOpenrouterPrivateEndpointSettingsCompletions {
}

export function dataOpenrouterPrivateEndpointSettingsCompletionsToTerraform(struct?: DataOpenrouterPrivateEndpointSettingsCompletions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterPrivateEndpointSettingsCompletionsToHclTerraform(struct?: DataOpenrouterPrivateEndpointSettingsCompletions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterPrivateEndpointSettingsCompletionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterPrivateEndpointSettingsCompletions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterPrivateEndpointSettingsCompletions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // chat - computed: true, optional: false, required: false
  public get chat() {
    return this.getBooleanAttribute('chat');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getBooleanAttribute('text');
  }
}
export interface DataOpenrouterPrivateEndpointSettingsInputs {
}

export function dataOpenrouterPrivateEndpointSettingsInputsToTerraform(struct?: DataOpenrouterPrivateEndpointSettingsInputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterPrivateEndpointSettingsInputsToHclTerraform(struct?: DataOpenrouterPrivateEndpointSettingsInputs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterPrivateEndpointSettingsInputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterPrivateEndpointSettingsInputs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterPrivateEndpointSettingsInputs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio - computed: true, optional: false, required: false
  public get audio() {
    return this.getBooleanAttribute('audio');
  }

  // base64_files - computed: true, optional: false, required: false
  public get base64Files() {
    return this.getBooleanAttribute('base64_files');
  }

  // base64_images - computed: true, optional: false, required: false
  public get base64Images() {
    return this.getBooleanAttribute('base64_images');
  }

  // file_urls - computed: true, optional: false, required: false
  public get fileUrls() {
    return this.getBooleanAttribute('file_urls');
  }

  // image_urls - computed: true, optional: false, required: false
  public get imageUrls() {
    return this.getBooleanAttribute('image_urls');
  }
}
export interface DataOpenrouterPrivateEndpointSettingsReasoning {
}

export function dataOpenrouterPrivateEndpointSettingsReasoningToTerraform(struct?: DataOpenrouterPrivateEndpointSettingsReasoning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterPrivateEndpointSettingsReasoningToHclTerraform(struct?: DataOpenrouterPrivateEndpointSettingsReasoning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterPrivateEndpointSettingsReasoningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterPrivateEndpointSettingsReasoning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterPrivateEndpointSettingsReasoning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // return_mechanism - computed: true, optional: false, required: false
  public get returnMechanism() {
    return this.getStringAttribute('return_mechanism');
  }

  // supported - computed: true, optional: false, required: false
  public get supported() {
    return this.getBooleanAttribute('supported');
  }
}
export interface DataOpenrouterPrivateEndpointSettingsToolChoice {
}

export function dataOpenrouterPrivateEndpointSettingsToolChoiceToTerraform(struct?: DataOpenrouterPrivateEndpointSettingsToolChoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterPrivateEndpointSettingsToolChoiceToHclTerraform(struct?: DataOpenrouterPrivateEndpointSettingsToolChoice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterPrivateEndpointSettingsToolChoiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterPrivateEndpointSettingsToolChoice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterPrivateEndpointSettingsToolChoice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auto - computed: true, optional: false, required: false
  public get auto() {
    return this.getBooleanAttribute('auto');
  }

  // function - computed: true, optional: false, required: false
  public get function() {
    return this.getBooleanAttribute('function');
  }

  // none - computed: true, optional: false, required: false
  public get none() {
    return this.getBooleanAttribute('none');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }
}
export interface DataOpenrouterPrivateEndpointSettings {
}

export function dataOpenrouterPrivateEndpointSettingsToTerraform(struct?: DataOpenrouterPrivateEndpointSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterPrivateEndpointSettingsToHclTerraform(struct?: DataOpenrouterPrivateEndpointSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterPrivateEndpointSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterPrivateEndpointSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterPrivateEndpointSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // completions - computed: true, optional: false, required: false
  private _completions = new DataOpenrouterPrivateEndpointSettingsCompletionsOutputReference(this, "completions");
  public get completions() {
    return this._completions;
  }

  // context_length - computed: true, optional: false, required: false
  public get contextLength() {
    return this.getNumberAttribute('context_length');
  }

  // excluded_parameters - computed: true, optional: false, required: false
  public get excludedParameters() {
    return this.getListAttribute('excluded_parameters');
  }

  // inputs - computed: true, optional: false, required: false
  private _inputs = new DataOpenrouterPrivateEndpointSettingsInputsOutputReference(this, "inputs");
  public get inputs() {
    return this._inputs;
  }

  // max_completion_tokens - computed: true, optional: false, required: false
  public get maxCompletionTokens() {
    return this.getNumberAttribute('max_completion_tokens');
  }

  // max_prompt_tokens - computed: true, optional: false, required: false
  public get maxPromptTokens() {
    return this.getNumberAttribute('max_prompt_tokens');
  }

  // quantization - computed: true, optional: false, required: false
  public get quantization() {
    return this.getStringAttribute('quantization');
  }

  // reasoning - computed: true, optional: false, required: false
  private _reasoning = new DataOpenrouterPrivateEndpointSettingsReasoningOutputReference(this, "reasoning");
  public get reasoning() {
    return this._reasoning;
  }

  // tool_choice - computed: true, optional: false, required: false
  private _toolChoice = new DataOpenrouterPrivateEndpointSettingsToolChoiceOutputReference(this, "tool_choice");
  public get toolChoice() {
    return this._toolChoice;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/data-sources/private_endpoint openrouter_private_endpoint}
*/
export class DataOpenrouterPrivateEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_private_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenrouterPrivateEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenrouterPrivateEndpoint to import
  * @param importFromId The id of the existing DataOpenrouterPrivateEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/data-sources/private_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenrouterPrivateEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_private_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/data-sources/private_endpoint openrouter_private_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenrouterPrivateEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpenrouterPrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'openrouter_private_endpoint',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // declared_parameters - computed: true, optional: false, required: false
  public get declaredParameters() {
    return this.getListAttribute('declared_parameters');
  }

  // declared_region - computed: true, optional: false, required: false
  public get declaredRegion() {
    return this.getStringAttribute('declared_region');
  }

  // declared_zdr - computed: true, optional: false, required: false
  public get declaredZdr() {
    return this.getBooleanAttribute('declared_zdr');
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

  // max_completion_tokens - computed: true, optional: false, required: false
  public get maxCompletionTokens() {
    return this.getNumberAttribute('max_completion_tokens');
  }

  // model_name - computed: true, optional: false, required: false
  public get modelName() {
    return this.getStringAttribute('model_name');
  }

  // model_permaslug - computed: true, optional: false, required: false
  public get modelPermaslug() {
    return this.getStringAttribute('model_permaslug');
  }

  // model_slug - computed: true, optional: false, required: false
  public get modelSlug() {
    return this.getStringAttribute('model_slug');
  }

  // pricing - computed: true, optional: false, required: false
  private _pricing = new DataOpenrouterPrivateEndpointPricingOutputReference(this, "pricing");
  public get pricing() {
    return this._pricing;
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // provider_slug - computed: true, optional: false, required: false
  public get providerSlug() {
    return this.getStringAttribute('provider_slug');
  }

  // settings - computed: true, optional: false, required: false
  private _settings = new DataOpenrouterPrivateEndpointSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tested_parameters - computed: true, optional: false, required: false
  public get testedParameters() {
    return this.getListAttribute('tested_parameters');
  }

  // upstream_model_id - computed: true, optional: false, required: false
  public get upstreamModelId() {
    return this.getStringAttribute('upstream_model_id');
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
