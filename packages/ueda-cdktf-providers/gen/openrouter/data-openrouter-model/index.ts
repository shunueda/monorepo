// https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.32/docs/data-sources/model
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenrouterModelConfig extends cdktf.TerraformMetaArguments {
  /**
  * The author/organization of the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.32/docs/data-sources/model#author DataOpenrouterModel#author}
  */
  readonly author: string;
  /**
  * The model slug, optionally including a variant suffix (e.g. gpt-4 or gpt-4:free)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.32/docs/data-sources/model#slug DataOpenrouterModel#slug}
  */
  readonly slug: string;
}
export interface DataOpenrouterModelDataAliasTarget {
}

export function dataOpenrouterModelDataAliasTargetToTerraform(struct?: DataOpenrouterModelDataAliasTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelDataAliasTargetToHclTerraform(struct?: DataOpenrouterModelDataAliasTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelDataAliasTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelDataAliasTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelDataAliasTarget | undefined) {
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

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }
}
export interface DataOpenrouterModelDataArchitecture {
}

export function dataOpenrouterModelDataArchitectureToTerraform(struct?: DataOpenrouterModelDataArchitecture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelDataArchitectureToHclTerraform(struct?: DataOpenrouterModelDataArchitecture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelDataArchitectureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelDataArchitecture | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelDataArchitecture | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // input_modalities - computed: true, optional: false, required: false
  public get inputModalities() {
    return this.getListAttribute('input_modalities');
  }

  // instruct_type - computed: true, optional: false, required: false
  public get instructType() {
    return this.getStringAttribute('instruct_type');
  }

  // modality - computed: true, optional: false, required: false
  public get modality() {
    return this.getStringAttribute('modality');
  }

  // output_modalities - computed: true, optional: false, required: false
  public get outputModalities() {
    return this.getListAttribute('output_modalities');
  }

  // tokenizer - computed: true, optional: false, required: false
  public get tokenizer() {
    return this.getStringAttribute('tokenizer');
  }
}
export interface DataOpenrouterModelDataBenchmarksArtificialAnalysis {
}

export function dataOpenrouterModelDataBenchmarksArtificialAnalysisToTerraform(struct?: DataOpenrouterModelDataBenchmarksArtificialAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelDataBenchmarksArtificialAnalysisToHclTerraform(struct?: DataOpenrouterModelDataBenchmarksArtificialAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelDataBenchmarksArtificialAnalysisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelDataBenchmarksArtificialAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelDataBenchmarksArtificialAnalysis | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agentic_index - computed: true, optional: false, required: false
  public get agenticIndex() {
    return this.getNumberAttribute('agentic_index');
  }

  // coding_index - computed: true, optional: false, required: false
  public get codingIndex() {
    return this.getNumberAttribute('coding_index');
  }

  // intelligence_index - computed: true, optional: false, required: false
  public get intelligenceIndex() {
    return this.getNumberAttribute('intelligence_index');
  }
}
export interface DataOpenrouterModelDataBenchmarksDesignArena {
}

export function dataOpenrouterModelDataBenchmarksDesignArenaToTerraform(struct?: DataOpenrouterModelDataBenchmarksDesignArena): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelDataBenchmarksDesignArenaToHclTerraform(struct?: DataOpenrouterModelDataBenchmarksDesignArena): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelDataBenchmarksDesignArenaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterModelDataBenchmarksDesignArena | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelDataBenchmarksDesignArena | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arena - computed: true, optional: false, required: false
  public get arena() {
    return this.getStringAttribute('arena');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // elo - computed: true, optional: false, required: false
  public get elo() {
    return this.getNumberAttribute('elo');
  }

  // rank - computed: true, optional: false, required: false
  public get rank() {
    return this.getNumberAttribute('rank');
  }

  // win_rate - computed: true, optional: false, required: false
  public get winRate() {
    return this.getNumberAttribute('win_rate');
  }
}

export class DataOpenrouterModelDataBenchmarksDesignArenaList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterModelDataBenchmarksDesignArenaOutputReference {
    return new DataOpenrouterModelDataBenchmarksDesignArenaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterModelDataBenchmarks {
}

export function dataOpenrouterModelDataBenchmarksToTerraform(struct?: DataOpenrouterModelDataBenchmarks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelDataBenchmarksToHclTerraform(struct?: DataOpenrouterModelDataBenchmarks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelDataBenchmarksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelDataBenchmarks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelDataBenchmarks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // artificial_analysis - computed: true, optional: false, required: false
  private _artificialAnalysis = new DataOpenrouterModelDataBenchmarksArtificialAnalysisOutputReference(this, "artificial_analysis");
  public get artificialAnalysis() {
    return this._artificialAnalysis;
  }

  // design_arena - computed: true, optional: false, required: false
  private _designArena = new DataOpenrouterModelDataBenchmarksDesignArenaList(this, "design_arena", false);
  public get designArena() {
    return this._designArena;
  }
}
export interface DataOpenrouterModelDataDefaultParameters {
}

export function dataOpenrouterModelDataDefaultParametersToTerraform(struct?: DataOpenrouterModelDataDefaultParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelDataDefaultParametersToHclTerraform(struct?: DataOpenrouterModelDataDefaultParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelDataDefaultParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelDataDefaultParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelDataDefaultParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // frequency_penalty - computed: true, optional: false, required: false
  public get frequencyPenalty() {
    return this.getNumberAttribute('frequency_penalty');
  }

  // presence_penalty - computed: true, optional: false, required: false
  public get presencePenalty() {
    return this.getNumberAttribute('presence_penalty');
  }

  // repetition_penalty - computed: true, optional: false, required: false
  public get repetitionPenalty() {
    return this.getNumberAttribute('repetition_penalty');
  }

  // temperature - computed: true, optional: false, required: false
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }

  // top_k - computed: true, optional: false, required: false
  public get topK() {
    return this.getNumberAttribute('top_k');
  }

  // top_p - computed: true, optional: false, required: false
  public get topP() {
    return this.getNumberAttribute('top_p');
  }
}
export interface DataOpenrouterModelDataLinks {
}

export function dataOpenrouterModelDataLinksToTerraform(struct?: DataOpenrouterModelDataLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelDataLinksToHclTerraform(struct?: DataOpenrouterModelDataLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelDataLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelDataLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelDataLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }
}
export interface DataOpenrouterModelDataPerRequestLimits {
}

export function dataOpenrouterModelDataPerRequestLimitsToTerraform(struct?: DataOpenrouterModelDataPerRequestLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelDataPerRequestLimitsToHclTerraform(struct?: DataOpenrouterModelDataPerRequestLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelDataPerRequestLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelDataPerRequestLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelDataPerRequestLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // completion_tokens - computed: true, optional: false, required: false
  public get completionTokens() {
    return this.getNumberAttribute('completion_tokens');
  }

  // prompt_tokens - computed: true, optional: false, required: false
  public get promptTokens() {
    return this.getNumberAttribute('prompt_tokens');
  }
}
export interface DataOpenrouterModelDataPricingOverrides {
}

export function dataOpenrouterModelDataPricingOverridesToTerraform(struct?: DataOpenrouterModelDataPricingOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelDataPricingOverridesToHclTerraform(struct?: DataOpenrouterModelDataPricingOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelDataPricingOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterModelDataPricingOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelDataPricingOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio - computed: true, optional: false, required: false
  public get audio() {
    return this.getStringAttribute('audio');
  }

  // completion - computed: true, optional: false, required: false
  public get completion() {
    return this.getStringAttribute('completion');
  }

  // input_audio_cache - computed: true, optional: false, required: false
  public get inputAudioCache() {
    return this.getStringAttribute('input_audio_cache');
  }

  // input_cache_read - computed: true, optional: false, required: false
  public get inputCacheRead() {
    return this.getStringAttribute('input_cache_read');
  }

  // input_cache_write - computed: true, optional: false, required: false
  public get inputCacheWrite() {
    return this.getStringAttribute('input_cache_write');
  }

  // input_cache_write_1h - computed: true, optional: false, required: false
  public get inputCacheWrite1H() {
    return this.getStringAttribute('input_cache_write_1h');
  }

  // min_prompt_tokens - computed: true, optional: false, required: false
  public get minPromptTokens() {
    return this.getNumberAttribute('min_prompt_tokens');
  }

  // prompt - computed: true, optional: false, required: false
  public get prompt() {
    return this.getStringAttribute('prompt');
  }

  // utc_end - computed: true, optional: false, required: false
  public get utcEnd() {
    return this.getNumberAttribute('utc_end');
  }

  // utc_start - computed: true, optional: false, required: false
  public get utcStart() {
    return this.getNumberAttribute('utc_start');
  }
}

export class DataOpenrouterModelDataPricingOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterModelDataPricingOverridesOutputReference {
    return new DataOpenrouterModelDataPricingOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterModelDataPricing {
}

export function dataOpenrouterModelDataPricingToTerraform(struct?: DataOpenrouterModelDataPricing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelDataPricingToHclTerraform(struct?: DataOpenrouterModelDataPricing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelDataPricingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelDataPricing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelDataPricing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audio - computed: true, optional: false, required: false
  public get audio() {
    return this.getStringAttribute('audio');
  }

  // audio_output - computed: true, optional: false, required: false
  public get audioOutput() {
    return this.getStringAttribute('audio_output');
  }

  // completion - computed: true, optional: false, required: false
  public get completion() {
    return this.getStringAttribute('completion');
  }

  // discount - computed: true, optional: false, required: false
  public get discount() {
    return this.getNumberAttribute('discount');
  }

  // image - computed: true, optional: false, required: false
  public get image() {
    return this.getStringAttribute('image');
  }

  // image_output - computed: true, optional: false, required: false
  public get imageOutput() {
    return this.getStringAttribute('image_output');
  }

  // image_token - computed: true, optional: false, required: false
  public get imageToken() {
    return this.getStringAttribute('image_token');
  }

  // input_audio_cache - computed: true, optional: false, required: false
  public get inputAudioCache() {
    return this.getStringAttribute('input_audio_cache');
  }

  // input_cache_read - computed: true, optional: false, required: false
  public get inputCacheRead() {
    return this.getStringAttribute('input_cache_read');
  }

  // input_cache_write - computed: true, optional: false, required: false
  public get inputCacheWrite() {
    return this.getStringAttribute('input_cache_write');
  }

  // input_cache_write_1h - computed: true, optional: false, required: false
  public get inputCacheWrite1H() {
    return this.getStringAttribute('input_cache_write_1h');
  }

  // internal_reasoning - computed: true, optional: false, required: false
  public get internalReasoning() {
    return this.getStringAttribute('internal_reasoning');
  }

  // overrides - computed: true, optional: false, required: false
  private _overrides = new DataOpenrouterModelDataPricingOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }

  // prompt - computed: true, optional: false, required: false
  public get prompt() {
    return this.getStringAttribute('prompt');
  }

  // request - computed: true, optional: false, required: false
  public get request() {
    return this.getStringAttribute('request');
  }

  // web_search - computed: true, optional: false, required: false
  public get webSearch() {
    return this.getStringAttribute('web_search');
  }
}
export interface DataOpenrouterModelDataReasoning {
}

export function dataOpenrouterModelDataReasoningToTerraform(struct?: DataOpenrouterModelDataReasoning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelDataReasoningToHclTerraform(struct?: DataOpenrouterModelDataReasoning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelDataReasoningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelDataReasoning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelDataReasoning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_effort - computed: true, optional: false, required: false
  public get defaultEffort() {
    return this.getStringAttribute('default_effort');
  }

  // default_enabled - computed: true, optional: false, required: false
  public get defaultEnabled() {
    return this.getBooleanAttribute('default_enabled');
  }

  // mandatory - computed: true, optional: false, required: false
  public get mandatory() {
    return this.getBooleanAttribute('mandatory');
  }

  // supported_efforts - computed: true, optional: false, required: false
  public get supportedEfforts() {
    return this.getListAttribute('supported_efforts');
  }

  // supports_max_tokens - computed: true, optional: false, required: false
  public get supportsMaxTokens() {
    return this.getBooleanAttribute('supports_max_tokens');
  }
}
export interface DataOpenrouterModelDataTopProvider {
}

export function dataOpenrouterModelDataTopProviderToTerraform(struct?: DataOpenrouterModelDataTopProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelDataTopProviderToHclTerraform(struct?: DataOpenrouterModelDataTopProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelDataTopProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelDataTopProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelDataTopProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // context_length - computed: true, optional: false, required: false
  public get contextLength() {
    return this.getNumberAttribute('context_length');
  }

  // is_moderated - computed: true, optional: false, required: false
  public get isModerated() {
    return this.getBooleanAttribute('is_moderated');
  }

  // max_completion_tokens - computed: true, optional: false, required: false
  public get maxCompletionTokens() {
    return this.getNumberAttribute('max_completion_tokens');
  }
}
export interface DataOpenrouterModelData {
}

export function dataOpenrouterModelDataToTerraform(struct?: DataOpenrouterModelData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelDataToHclTerraform(struct?: DataOpenrouterModelData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alias_target - computed: true, optional: false, required: false
  private _aliasTarget = new DataOpenrouterModelDataAliasTargetOutputReference(this, "alias_target");
  public get aliasTarget() {
    return this._aliasTarget;
  }

  // architecture - computed: true, optional: false, required: false
  private _architecture = new DataOpenrouterModelDataArchitectureOutputReference(this, "architecture");
  public get architecture() {
    return this._architecture;
  }

  // benchmarks - computed: true, optional: false, required: false
  private _benchmarks = new DataOpenrouterModelDataBenchmarksOutputReference(this, "benchmarks");
  public get benchmarks() {
    return this._benchmarks;
  }

  // canonical_slug - computed: true, optional: false, required: false
  public get canonicalSlug() {
    return this.getStringAttribute('canonical_slug');
  }

  // context_length - computed: true, optional: false, required: false
  public get contextLength() {
    return this.getNumberAttribute('context_length');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getNumberAttribute('created');
  }

  // default_parameters - computed: true, optional: false, required: false
  private _defaultParameters = new DataOpenrouterModelDataDefaultParametersOutputReference(this, "default_parameters");
  public get defaultParameters() {
    return this._defaultParameters;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // hugging_face_id - computed: true, optional: false, required: false
  public get huggingFaceId() {
    return this.getStringAttribute('hugging_face_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // knowledge_cutoff - computed: true, optional: false, required: false
  public get knowledgeCutoff() {
    return this.getStringAttribute('knowledge_cutoff');
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataOpenrouterModelDataLinksOutputReference(this, "links");
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // per_request_limits - computed: true, optional: false, required: false
  private _perRequestLimits = new DataOpenrouterModelDataPerRequestLimitsOutputReference(this, "per_request_limits");
  public get perRequestLimits() {
    return this._perRequestLimits;
  }

  // pricing - computed: true, optional: false, required: false
  private _pricing = new DataOpenrouterModelDataPricingOutputReference(this, "pricing");
  public get pricing() {
    return this._pricing;
  }

  // reasoning - computed: true, optional: false, required: false
  private _reasoning = new DataOpenrouterModelDataReasoningOutputReference(this, "reasoning");
  public get reasoning() {
    return this._reasoning;
  }

  // supported_parameters - computed: true, optional: false, required: false
  public get supportedParameters() {
    return this.getListAttribute('supported_parameters');
  }

  // supported_voices - computed: true, optional: false, required: false
  public get supportedVoices() {
    return this.getListAttribute('supported_voices');
  }

  // top_provider - computed: true, optional: false, required: false
  private _topProvider = new DataOpenrouterModelDataTopProviderOutputReference(this, "top_provider");
  public get topProvider() {
    return this._topProvider;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.32/docs/data-sources/model openrouter_model}
*/
export class DataOpenrouterModel extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_model";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenrouterModel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenrouterModel to import
  * @param importFromId The id of the existing DataOpenrouterModel that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.32/docs/data-sources/model#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenrouterModel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_model", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.32/docs/data-sources/model openrouter_model} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenrouterModelConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpenrouterModelConfig) {
    super(scope, id, {
      terraformResourceType: 'openrouter_model',
      terraformGeneratorMetadata: {
        providerName: 'openrouter',
        providerVersion: '0.1.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._author = config.author;
    this._slug = config.slug;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // author - computed: false, optional: false, required: true
  private _author?: string; 
  public get author() {
    return this.getStringAttribute('author');
  }
  public set author(value: string) {
    this._author = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorInput() {
    return this._author;
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataOpenrouterModelDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      author: cdktf.stringToTerraform(this._author),
      slug: cdktf.stringToTerraform(this._slug),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      author: {
        value: cdktf.stringToHclTerraform(this._author),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
