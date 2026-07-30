// https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenrouterModelsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter models by architecture/model family (e.g. GPT, Claude, Gemini, Llama).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#arch DataOpenrouterModels#arch}
  */
  readonly arch?: string;
  /**
  * Filter models by use case category. must be one of ["programming", "roleplay", "marketing", "marketing/seo", "technology", "science", "translation", "legal", "finance", "health", "trivia", "academia"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#category DataOpenrouterModels#category}
  */
  readonly category?: string;
  /**
  * Minimum context length (tokens). Models with smaller context are excluded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#context DataOpenrouterModels#context}
  */
  readonly context?: number;
  /**
  * Filter by distillation capability. "true" returns only distillable models, "false" excludes them. must be one of ["true", "false"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#distillable DataOpenrouterModels#distillable}
  */
  readonly distillable?: string;
  /**
  * Filter models by input modality. Comma-separated list of: text, image, audio, file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#input_modalities DataOpenrouterModels#input_modalities}
  */
  readonly inputModalities?: string;
  /**
  * Maximum model age in days since its creation date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#max_age_days DataOpenrouterModels#max_age_days}
  */
  readonly maxAgeDays?: number;
  /**
  * Maximum Artificial Analysis agentic index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#max_agentic_index DataOpenrouterModels#max_agentic_index}
  */
  readonly maxAgenticIndex?: number;
  /**
  * Maximum Artificial Analysis coding index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#max_coding_index DataOpenrouterModels#max_coding_index}
  */
  readonly maxCodingIndex?: number;
  /**
  * Maximum Artificial Analysis intelligence index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#max_intelligence_index DataOpenrouterModels#max_intelligence_index}
  */
  readonly maxIntelligenceIndex?: number;
  /**
  * Maximum completion (output) price in $/M tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#max_output_price DataOpenrouterModels#max_output_price}
  */
  readonly maxOutputPrice?: number;
  /**
  * Maximum prompt price in $/M tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#max_price DataOpenrouterModels#max_price}
  */
  readonly maxPrice?: number;
  /**
  * Maximum tool-calling success rate, as a fraction in [0, 1].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#max_tool_success_rate DataOpenrouterModels#max_tool_success_rate}
  */
  readonly maxToolSuccessRate?: number;
  /**
  * Minimum model age in days since its creation date.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#min_age_days DataOpenrouterModels#min_age_days}
  */
  readonly minAgeDays?: number;
  /**
  * Minimum Artificial Analysis agentic index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#min_agentic_index DataOpenrouterModels#min_agentic_index}
  */
  readonly minAgenticIndex?: number;
  /**
  * Minimum Artificial Analysis coding index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#min_coding_index DataOpenrouterModels#min_coding_index}
  */
  readonly minCodingIndex?: number;
  /**
  * Minimum Artificial Analysis intelligence index.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#min_intelligence_index DataOpenrouterModels#min_intelligence_index}
  */
  readonly minIntelligenceIndex?: number;
  /**
  * Minimum completion (output) price in $/M tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#min_output_price DataOpenrouterModels#min_output_price}
  */
  readonly minOutputPrice?: number;
  /**
  * Minimum prompt price in $/M tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#min_price DataOpenrouterModels#min_price}
  */
  readonly minPrice?: number;
  /**
  * Minimum tool-calling success rate, as a fraction in [0, 1] (e.g. 0.9 = 90% of requests finishing with a tool_calls finish reason).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#min_tool_success_rate DataOpenrouterModels#min_tool_success_rate}
  */
  readonly minToolSuccessRate?: number;
  /**
  * Filter models by the organization that created the model. Comma-separated list of author slugs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#model_authors DataOpenrouterModels#model_authors}
  */
  readonly modelAuthors?: string;
  /**
  * Filter models by output modality. Accepts a comma-separated list of modalities (text, image, audio, embeddings) or "all" to include all models. Defaults to "text".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#output_modalities DataOpenrouterModels#output_modalities}
  */
  readonly outputModalities?: string;
  /**
  * Filter models by hosting provider. Comma-separated list of provider names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#providers DataOpenrouterModels#providers}
  */
  readonly providers?: string;
  /**
  * Free-text search by model name or slug.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#q DataOpenrouterModels#q}
  */
  readonly q?: string;
  /**
  * Filter to models with endpoints in the given data region. Currently only "eu" is supported. must be "eu"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#region DataOpenrouterModels#region}
  */
  readonly region?: string;
  /**
  * Sort the returned models server-side. Prefer this over fetching the full list and sorting client-side. Options: pricing-low-to-high, pricing-high-to-low (average prompt/completion price), context-high-to-low (context length), throughput-high-to-low, latency-low-to-high (recent median performance), most-popular, top-weekly (tokens processed in the last week), newest (creation date), intelligence-high-to-low, coding-high-to-low, agentic-high-to-low (Artificial Analysis indices), design-arena-elo-high-to-low (best Design Arena ELO across arenas). Models without a score for the chosen benchmark are placed last. When omitted, the existing default ordering is preserved. must be one of ["most-popular", "newest", "top-weekly", "pricing-low-to-high", "pricing-high-to-low", "context-high-to-low", "throughput-high-to-low", "latency-low-to-high", "intelligence-high-to-low", "coding-high-to-low", "agentic-high-to-low", "design-arena-elo-high-to-low"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#sort DataOpenrouterModels#sort}
  */
  readonly sort?: string;
  /**
  * Filter models by supported parameter (comma-separated)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#supported_parameters DataOpenrouterModels#supported_parameters}
  */
  readonly supportedParameters?: string;
  /**
  * Return results as RSS feed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#use_rss DataOpenrouterModels#use_rss}
  */
  readonly useRss?: string;
  /**
  * Use chat links in RSS feed items
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#use_rss_chat_links DataOpenrouterModels#use_rss_chat_links}
  */
  readonly useRssChatLinks?: string;
  /**
  * When set to "true", return only models with zero data retention endpoints. must be "true"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#zdr DataOpenrouterModels#zdr}
  */
  readonly zdr?: string;
}
export interface DataOpenrouterModelsDataArchitecture {
}

export function dataOpenrouterModelsDataArchitectureToTerraform(struct?: DataOpenrouterModelsDataArchitecture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelsDataArchitectureToHclTerraform(struct?: DataOpenrouterModelsDataArchitecture): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelsDataArchitectureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelsDataArchitecture | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelsDataArchitecture | undefined) {
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
export interface DataOpenrouterModelsDataBenchmarksArtificialAnalysis {
}

export function dataOpenrouterModelsDataBenchmarksArtificialAnalysisToTerraform(struct?: DataOpenrouterModelsDataBenchmarksArtificialAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelsDataBenchmarksArtificialAnalysisToHclTerraform(struct?: DataOpenrouterModelsDataBenchmarksArtificialAnalysis): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelsDataBenchmarksArtificialAnalysisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelsDataBenchmarksArtificialAnalysis | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelsDataBenchmarksArtificialAnalysis | undefined) {
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
export interface DataOpenrouterModelsDataBenchmarksDesignArena {
}

export function dataOpenrouterModelsDataBenchmarksDesignArenaToTerraform(struct?: DataOpenrouterModelsDataBenchmarksDesignArena): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelsDataBenchmarksDesignArenaToHclTerraform(struct?: DataOpenrouterModelsDataBenchmarksDesignArena): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelsDataBenchmarksDesignArenaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterModelsDataBenchmarksDesignArena | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelsDataBenchmarksDesignArena | undefined) {
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

export class DataOpenrouterModelsDataBenchmarksDesignArenaList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterModelsDataBenchmarksDesignArenaOutputReference {
    return new DataOpenrouterModelsDataBenchmarksDesignArenaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterModelsDataBenchmarks {
}

export function dataOpenrouterModelsDataBenchmarksToTerraform(struct?: DataOpenrouterModelsDataBenchmarks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelsDataBenchmarksToHclTerraform(struct?: DataOpenrouterModelsDataBenchmarks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelsDataBenchmarksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelsDataBenchmarks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelsDataBenchmarks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // artificial_analysis - computed: true, optional: false, required: false
  private _artificialAnalysis = new DataOpenrouterModelsDataBenchmarksArtificialAnalysisOutputReference(this, "artificial_analysis");
  public get artificialAnalysis() {
    return this._artificialAnalysis;
  }

  // design_arena - computed: true, optional: false, required: false
  private _designArena = new DataOpenrouterModelsDataBenchmarksDesignArenaList(this, "design_arena", false);
  public get designArena() {
    return this._designArena;
  }
}
export interface DataOpenrouterModelsDataDefaultParameters {
}

export function dataOpenrouterModelsDataDefaultParametersToTerraform(struct?: DataOpenrouterModelsDataDefaultParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelsDataDefaultParametersToHclTerraform(struct?: DataOpenrouterModelsDataDefaultParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelsDataDefaultParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelsDataDefaultParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelsDataDefaultParameters | undefined) {
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
export interface DataOpenrouterModelsDataLinks {
}

export function dataOpenrouterModelsDataLinksToTerraform(struct?: DataOpenrouterModelsDataLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelsDataLinksToHclTerraform(struct?: DataOpenrouterModelsDataLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelsDataLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelsDataLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelsDataLinks | undefined) {
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
export interface DataOpenrouterModelsDataPerRequestLimits {
}

export function dataOpenrouterModelsDataPerRequestLimitsToTerraform(struct?: DataOpenrouterModelsDataPerRequestLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelsDataPerRequestLimitsToHclTerraform(struct?: DataOpenrouterModelsDataPerRequestLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelsDataPerRequestLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelsDataPerRequestLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelsDataPerRequestLimits | undefined) {
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
export interface DataOpenrouterModelsDataPricingOverrides {
}

export function dataOpenrouterModelsDataPricingOverridesToTerraform(struct?: DataOpenrouterModelsDataPricingOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelsDataPricingOverridesToHclTerraform(struct?: DataOpenrouterModelsDataPricingOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelsDataPricingOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterModelsDataPricingOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelsDataPricingOverrides | undefined) {
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

export class DataOpenrouterModelsDataPricingOverridesList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterModelsDataPricingOverridesOutputReference {
    return new DataOpenrouterModelsDataPricingOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterModelsDataPricing {
}

export function dataOpenrouterModelsDataPricingToTerraform(struct?: DataOpenrouterModelsDataPricing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelsDataPricingToHclTerraform(struct?: DataOpenrouterModelsDataPricing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelsDataPricingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelsDataPricing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelsDataPricing | undefined) {
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
  private _overrides = new DataOpenrouterModelsDataPricingOverridesList(this, "overrides", false);
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
export interface DataOpenrouterModelsDataReasoning {
}

export function dataOpenrouterModelsDataReasoningToTerraform(struct?: DataOpenrouterModelsDataReasoning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelsDataReasoningToHclTerraform(struct?: DataOpenrouterModelsDataReasoning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelsDataReasoningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelsDataReasoning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelsDataReasoning | undefined) {
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
export interface DataOpenrouterModelsDataTopProvider {
}

export function dataOpenrouterModelsDataTopProviderToTerraform(struct?: DataOpenrouterModelsDataTopProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelsDataTopProviderToHclTerraform(struct?: DataOpenrouterModelsDataTopProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelsDataTopProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelsDataTopProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelsDataTopProvider | undefined) {
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
export interface DataOpenrouterModelsData {
}

export function dataOpenrouterModelsDataToTerraform(struct?: DataOpenrouterModelsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelsDataToHclTerraform(struct?: DataOpenrouterModelsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelsDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterModelsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // architecture - computed: true, optional: false, required: false
  private _architecture = new DataOpenrouterModelsDataArchitectureOutputReference(this, "architecture");
  public get architecture() {
    return this._architecture;
  }

  // benchmarks - computed: true, optional: false, required: false
  private _benchmarks = new DataOpenrouterModelsDataBenchmarksOutputReference(this, "benchmarks");
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
  private _defaultParameters = new DataOpenrouterModelsDataDefaultParametersOutputReference(this, "default_parameters");
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
  private _links = new DataOpenrouterModelsDataLinksOutputReference(this, "links");
  public get links() {
    return this._links;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // per_request_limits - computed: true, optional: false, required: false
  private _perRequestLimits = new DataOpenrouterModelsDataPerRequestLimitsOutputReference(this, "per_request_limits");
  public get perRequestLimits() {
    return this._perRequestLimits;
  }

  // pricing - computed: true, optional: false, required: false
  private _pricing = new DataOpenrouterModelsDataPricingOutputReference(this, "pricing");
  public get pricing() {
    return this._pricing;
  }

  // reasoning - computed: true, optional: false, required: false
  private _reasoning = new DataOpenrouterModelsDataReasoningOutputReference(this, "reasoning");
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
  private _topProvider = new DataOpenrouterModelsDataTopProviderOutputReference(this, "top_provider");
  public get topProvider() {
    return this._topProvider;
  }
}

export class DataOpenrouterModelsDataList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterModelsDataOutputReference {
    return new DataOpenrouterModelsDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOpenrouterModelsLinks {
}

export function dataOpenrouterModelsLinksToTerraform(struct?: DataOpenrouterModelsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterModelsLinksToHclTerraform(struct?: DataOpenrouterModelsLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterModelsLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpenrouterModelsLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterModelsLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // next - computed: true, optional: false, required: false
  public get next() {
    return this.getStringAttribute('next');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models openrouter_models}
*/
export class DataOpenrouterModels extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_models";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenrouterModels resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenrouterModels to import
  * @param importFromId The id of the existing DataOpenrouterModels that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenrouterModels to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_models", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/data-sources/models openrouter_models} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenrouterModelsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpenrouterModelsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'openrouter_models',
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
    this._arch = config.arch;
    this._category = config.category;
    this._context = config.context;
    this._distillable = config.distillable;
    this._inputModalities = config.inputModalities;
    this._maxAgeDays = config.maxAgeDays;
    this._maxAgenticIndex = config.maxAgenticIndex;
    this._maxCodingIndex = config.maxCodingIndex;
    this._maxIntelligenceIndex = config.maxIntelligenceIndex;
    this._maxOutputPrice = config.maxOutputPrice;
    this._maxPrice = config.maxPrice;
    this._maxToolSuccessRate = config.maxToolSuccessRate;
    this._minAgeDays = config.minAgeDays;
    this._minAgenticIndex = config.minAgenticIndex;
    this._minCodingIndex = config.minCodingIndex;
    this._minIntelligenceIndex = config.minIntelligenceIndex;
    this._minOutputPrice = config.minOutputPrice;
    this._minPrice = config.minPrice;
    this._minToolSuccessRate = config.minToolSuccessRate;
    this._modelAuthors = config.modelAuthors;
    this._outputModalities = config.outputModalities;
    this._providers = config.providers;
    this._q = config.q;
    this._region = config.region;
    this._sort = config.sort;
    this._supportedParameters = config.supportedParameters;
    this._useRss = config.useRss;
    this._useRssChatLinks = config.useRssChatLinks;
    this._zdr = config.zdr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arch - computed: false, optional: true, required: false
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  public resetArch() {
    this._arch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // context - computed: false, optional: true, required: false
  private _context?: number; 
  public get context() {
    return this.getNumberAttribute('context');
  }
  public set context(value: number) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // data - computed: true, optional: false, required: false
  private _data = new DataOpenrouterModelsDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // distillable - computed: false, optional: true, required: false
  private _distillable?: string; 
  public get distillable() {
    return this.getStringAttribute('distillable');
  }
  public set distillable(value: string) {
    this._distillable = value;
  }
  public resetDistillable() {
    this._distillable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distillableInput() {
    return this._distillable;
  }

  // input_modalities - computed: false, optional: true, required: false
  private _inputModalities?: string; 
  public get inputModalities() {
    return this.getStringAttribute('input_modalities');
  }
  public set inputModalities(value: string) {
    this._inputModalities = value;
  }
  public resetInputModalities() {
    this._inputModalities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputModalitiesInput() {
    return this._inputModalities;
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataOpenrouterModelsLinksOutputReference(this, "links");
  public get links() {
    return this._links;
  }

  // max_age_days - computed: false, optional: true, required: false
  private _maxAgeDays?: number; 
  public get maxAgeDays() {
    return this.getNumberAttribute('max_age_days');
  }
  public set maxAgeDays(value: number) {
    this._maxAgeDays = value;
  }
  public resetMaxAgeDays() {
    this._maxAgeDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeDaysInput() {
    return this._maxAgeDays;
  }

  // max_agentic_index - computed: false, optional: true, required: false
  private _maxAgenticIndex?: number; 
  public get maxAgenticIndex() {
    return this.getNumberAttribute('max_agentic_index');
  }
  public set maxAgenticIndex(value: number) {
    this._maxAgenticIndex = value;
  }
  public resetMaxAgenticIndex() {
    this._maxAgenticIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgenticIndexInput() {
    return this._maxAgenticIndex;
  }

  // max_coding_index - computed: false, optional: true, required: false
  private _maxCodingIndex?: number; 
  public get maxCodingIndex() {
    return this.getNumberAttribute('max_coding_index');
  }
  public set maxCodingIndex(value: number) {
    this._maxCodingIndex = value;
  }
  public resetMaxCodingIndex() {
    this._maxCodingIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCodingIndexInput() {
    return this._maxCodingIndex;
  }

  // max_intelligence_index - computed: false, optional: true, required: false
  private _maxIntelligenceIndex?: number; 
  public get maxIntelligenceIndex() {
    return this.getNumberAttribute('max_intelligence_index');
  }
  public set maxIntelligenceIndex(value: number) {
    this._maxIntelligenceIndex = value;
  }
  public resetMaxIntelligenceIndex() {
    this._maxIntelligenceIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIntelligenceIndexInput() {
    return this._maxIntelligenceIndex;
  }

  // max_output_price - computed: false, optional: true, required: false
  private _maxOutputPrice?: number; 
  public get maxOutputPrice() {
    return this.getNumberAttribute('max_output_price');
  }
  public set maxOutputPrice(value: number) {
    this._maxOutputPrice = value;
  }
  public resetMaxOutputPrice() {
    this._maxOutputPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOutputPriceInput() {
    return this._maxOutputPrice;
  }

  // max_price - computed: false, optional: true, required: false
  private _maxPrice?: number; 
  public get maxPrice() {
    return this.getNumberAttribute('max_price');
  }
  public set maxPrice(value: number) {
    this._maxPrice = value;
  }
  public resetMaxPrice() {
    this._maxPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPriceInput() {
    return this._maxPrice;
  }

  // max_tool_success_rate - computed: false, optional: true, required: false
  private _maxToolSuccessRate?: number; 
  public get maxToolSuccessRate() {
    return this.getNumberAttribute('max_tool_success_rate');
  }
  public set maxToolSuccessRate(value: number) {
    this._maxToolSuccessRate = value;
  }
  public resetMaxToolSuccessRate() {
    this._maxToolSuccessRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxToolSuccessRateInput() {
    return this._maxToolSuccessRate;
  }

  // min_age_days - computed: false, optional: true, required: false
  private _minAgeDays?: number; 
  public get minAgeDays() {
    return this.getNumberAttribute('min_age_days');
  }
  public set minAgeDays(value: number) {
    this._minAgeDays = value;
  }
  public resetMinAgeDays() {
    this._minAgeDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAgeDaysInput() {
    return this._minAgeDays;
  }

  // min_agentic_index - computed: false, optional: true, required: false
  private _minAgenticIndex?: number; 
  public get minAgenticIndex() {
    return this.getNumberAttribute('min_agentic_index');
  }
  public set minAgenticIndex(value: number) {
    this._minAgenticIndex = value;
  }
  public resetMinAgenticIndex() {
    this._minAgenticIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAgenticIndexInput() {
    return this._minAgenticIndex;
  }

  // min_coding_index - computed: false, optional: true, required: false
  private _minCodingIndex?: number; 
  public get minCodingIndex() {
    return this.getNumberAttribute('min_coding_index');
  }
  public set minCodingIndex(value: number) {
    this._minCodingIndex = value;
  }
  public resetMinCodingIndex() {
    this._minCodingIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCodingIndexInput() {
    return this._minCodingIndex;
  }

  // min_intelligence_index - computed: false, optional: true, required: false
  private _minIntelligenceIndex?: number; 
  public get minIntelligenceIndex() {
    return this.getNumberAttribute('min_intelligence_index');
  }
  public set minIntelligenceIndex(value: number) {
    this._minIntelligenceIndex = value;
  }
  public resetMinIntelligenceIndex() {
    this._minIntelligenceIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIntelligenceIndexInput() {
    return this._minIntelligenceIndex;
  }

  // min_output_price - computed: false, optional: true, required: false
  private _minOutputPrice?: number; 
  public get minOutputPrice() {
    return this.getNumberAttribute('min_output_price');
  }
  public set minOutputPrice(value: number) {
    this._minOutputPrice = value;
  }
  public resetMinOutputPrice() {
    this._minOutputPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minOutputPriceInput() {
    return this._minOutputPrice;
  }

  // min_price - computed: false, optional: true, required: false
  private _minPrice?: number; 
  public get minPrice() {
    return this.getNumberAttribute('min_price');
  }
  public set minPrice(value: number) {
    this._minPrice = value;
  }
  public resetMinPrice() {
    this._minPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPriceInput() {
    return this._minPrice;
  }

  // min_tool_success_rate - computed: false, optional: true, required: false
  private _minToolSuccessRate?: number; 
  public get minToolSuccessRate() {
    return this.getNumberAttribute('min_tool_success_rate');
  }
  public set minToolSuccessRate(value: number) {
    this._minToolSuccessRate = value;
  }
  public resetMinToolSuccessRate() {
    this._minToolSuccessRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minToolSuccessRateInput() {
    return this._minToolSuccessRate;
  }

  // model_authors - computed: false, optional: true, required: false
  private _modelAuthors?: string; 
  public get modelAuthors() {
    return this.getStringAttribute('model_authors');
  }
  public set modelAuthors(value: string) {
    this._modelAuthors = value;
  }
  public resetModelAuthors() {
    this._modelAuthors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelAuthorsInput() {
    return this._modelAuthors;
  }

  // output_modalities - computed: false, optional: true, required: false
  private _outputModalities?: string; 
  public get outputModalities() {
    return this.getStringAttribute('output_modalities');
  }
  public set outputModalities(value: string) {
    this._outputModalities = value;
  }
  public resetOutputModalities() {
    this._outputModalities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputModalitiesInput() {
    return this._outputModalities;
  }

  // providers - computed: false, optional: true, required: false
  private _providers?: string; 
  public get providers() {
    return this.getStringAttribute('providers');
  }
  public set providers(value: string) {
    this._providers = value;
  }
  public resetProviders() {
    this._providers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providersInput() {
    return this._providers;
  }

  // q - computed: false, optional: true, required: false
  private _q?: string; 
  public get q() {
    return this.getStringAttribute('q');
  }
  public set q(value: string) {
    this._q = value;
  }
  public resetQ() {
    this._q = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qInput() {
    return this._q;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // supported_parameters - computed: false, optional: true, required: false
  private _supportedParameters?: string; 
  public get supportedParameters() {
    return this.getStringAttribute('supported_parameters');
  }
  public set supportedParameters(value: string) {
    this._supportedParameters = value;
  }
  public resetSupportedParameters() {
    this._supportedParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedParametersInput() {
    return this._supportedParameters;
  }

  // total_count - computed: true, optional: false, required: false
  public get totalCount() {
    return this.getNumberAttribute('total_count');
  }

  // use_rss - computed: false, optional: true, required: false
  private _useRss?: string; 
  public get useRss() {
    return this.getStringAttribute('use_rss');
  }
  public set useRss(value: string) {
    this._useRss = value;
  }
  public resetUseRss() {
    this._useRss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRssInput() {
    return this._useRss;
  }

  // use_rss_chat_links - computed: false, optional: true, required: false
  private _useRssChatLinks?: string; 
  public get useRssChatLinks() {
    return this.getStringAttribute('use_rss_chat_links');
  }
  public set useRssChatLinks(value: string) {
    this._useRssChatLinks = value;
  }
  public resetUseRssChatLinks() {
    this._useRssChatLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRssChatLinksInput() {
    return this._useRssChatLinks;
  }

  // zdr - computed: false, optional: true, required: false
  private _zdr?: string; 
  public get zdr() {
    return this.getStringAttribute('zdr');
  }
  public set zdr(value: string) {
    this._zdr = value;
  }
  public resetZdr() {
    this._zdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zdrInput() {
    return this._zdr;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arch: cdktf.stringToTerraform(this._arch),
      category: cdktf.stringToTerraform(this._category),
      context: cdktf.numberToTerraform(this._context),
      distillable: cdktf.stringToTerraform(this._distillable),
      input_modalities: cdktf.stringToTerraform(this._inputModalities),
      max_age_days: cdktf.numberToTerraform(this._maxAgeDays),
      max_agentic_index: cdktf.numberToTerraform(this._maxAgenticIndex),
      max_coding_index: cdktf.numberToTerraform(this._maxCodingIndex),
      max_intelligence_index: cdktf.numberToTerraform(this._maxIntelligenceIndex),
      max_output_price: cdktf.numberToTerraform(this._maxOutputPrice),
      max_price: cdktf.numberToTerraform(this._maxPrice),
      max_tool_success_rate: cdktf.numberToTerraform(this._maxToolSuccessRate),
      min_age_days: cdktf.numberToTerraform(this._minAgeDays),
      min_agentic_index: cdktf.numberToTerraform(this._minAgenticIndex),
      min_coding_index: cdktf.numberToTerraform(this._minCodingIndex),
      min_intelligence_index: cdktf.numberToTerraform(this._minIntelligenceIndex),
      min_output_price: cdktf.numberToTerraform(this._minOutputPrice),
      min_price: cdktf.numberToTerraform(this._minPrice),
      min_tool_success_rate: cdktf.numberToTerraform(this._minToolSuccessRate),
      model_authors: cdktf.stringToTerraform(this._modelAuthors),
      output_modalities: cdktf.stringToTerraform(this._outputModalities),
      providers: cdktf.stringToTerraform(this._providers),
      q: cdktf.stringToTerraform(this._q),
      region: cdktf.stringToTerraform(this._region),
      sort: cdktf.stringToTerraform(this._sort),
      supported_parameters: cdktf.stringToTerraform(this._supportedParameters),
      use_rss: cdktf.stringToTerraform(this._useRss),
      use_rss_chat_links: cdktf.stringToTerraform(this._useRssChatLinks),
      zdr: cdktf.stringToTerraform(this._zdr),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arch: {
        value: cdktf.stringToHclTerraform(this._arch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: cdktf.numberToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distillable: {
        value: cdktf.stringToHclTerraform(this._distillable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_modalities: {
        value: cdktf.stringToHclTerraform(this._inputModalities),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_age_days: {
        value: cdktf.numberToHclTerraform(this._maxAgeDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_agentic_index: {
        value: cdktf.numberToHclTerraform(this._maxAgenticIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_coding_index: {
        value: cdktf.numberToHclTerraform(this._maxCodingIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_intelligence_index: {
        value: cdktf.numberToHclTerraform(this._maxIntelligenceIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_output_price: {
        value: cdktf.numberToHclTerraform(this._maxOutputPrice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_price: {
        value: cdktf.numberToHclTerraform(this._maxPrice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_tool_success_rate: {
        value: cdktf.numberToHclTerraform(this._maxToolSuccessRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_age_days: {
        value: cdktf.numberToHclTerraform(this._minAgeDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_agentic_index: {
        value: cdktf.numberToHclTerraform(this._minAgenticIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_coding_index: {
        value: cdktf.numberToHclTerraform(this._minCodingIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_intelligence_index: {
        value: cdktf.numberToHclTerraform(this._minIntelligenceIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_output_price: {
        value: cdktf.numberToHclTerraform(this._minOutputPrice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_price: {
        value: cdktf.numberToHclTerraform(this._minPrice),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_tool_success_rate: {
        value: cdktf.numberToHclTerraform(this._minToolSuccessRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      model_authors: {
        value: cdktf.stringToHclTerraform(this._modelAuthors),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_modalities: {
        value: cdktf.stringToHclTerraform(this._outputModalities),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      providers: {
        value: cdktf.stringToHclTerraform(this._providers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      q: {
        value: cdktf.stringToHclTerraform(this._q),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort: {
        value: cdktf.stringToHclTerraform(this._sort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_parameters: {
        value: cdktf.stringToHclTerraform(this._supportedParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_rss: {
        value: cdktf.stringToHclTerraform(this._useRss),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_rss_chat_links: {
        value: cdktf.stringToHclTerraform(this._useRssChatLinks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zdr: {
        value: cdktf.stringToHclTerraform(this._zdr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
