// https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Validate and activate the endpoint as part of create. Only sent when the endpoint is created; if validation fails, the provider deletes the draft the API kept and reports the failed checks. Later changes are recorded in state without calling the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#activate PrivateEndpoint#activate}
  */
  readonly activate?: PrivateEndpointActivate;
  /**
  * HTTPS base URL of your deployment. Required unless the provider derives its URL from the BYOK credential (Azure, Amazon Bedrock, Google Vertex).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#base_url PrivateEndpoint#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Parameters the upstream supports beyond the tested ones. Replaces the earlier declaration; tested parameters stay. The order configured here is the order state keeps, and a repeated name is rejected before a request is sent, so the list holds at most as many entries as there are declarable parameters. `tool_choice` requires `tools` to be tested or declared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#declared_parameters PrivateEndpoint#declared_parameters}
  */
  readonly declaredParameters?: string[];
  /**
  * Attest where this deployment processes data. must be one of ["global", "europe", "us"]; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#declared_region PrivateEndpoint#declared_region}
  */
  readonly declaredRegion?: string;
  /**
  * Attest that this deployment retains no prompt or completion data. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#declared_zdr PrivateEndpoint#declared_zdr}
  */
  readonly declaredZdr?: boolean | cdktf.IResolvable;
  /**
  * Retry-safe create: a repeated create with the same key from the same organization returns the endpoint the first request created instead of creating another. The endpoint is returned as it is now. Reusing a key with a different request body (model, provider, base URL, upstream model ID, declared ZDR or region, pricing, or declared parameters) is rejected with 422 `idempotency_key_reused`. Declared parameters are compared as a set, so a retry that reorders or repeats a name replays the endpoint. `activate` and `settings` are not compared, and later edits to the endpoint do not affect the comparison. `settings` is still validated before the replay, so a retry with invalid settings returns 400 `settings_invalid` instead of the endpoint. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#idempotency_key PrivateEndpoint#idempotency_key}
  */
  readonly idempotencyKey?: string;
  /**
  * Permanent slug of the model this endpoint serves. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#model_permaslug PrivateEndpoint#model_permaslug}
  */
  readonly modelPermaslug: string;
  /**
  * Negotiated per-token rates reported for requests routed to this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#pricing PrivateEndpoint#pricing}
  */
  readonly pricing?: PrivateEndpointPricing;
  /**
  * Slug of the upstream provider. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#provider_slug PrivateEndpoint#provider_slug}
  */
  readonly providerSlug: string;
  /**
  * Capabilities and limits to set over the ones copied from the public endpoint for this model and provider (or from the model). Omitted fields keep the copied values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#settings PrivateEndpoint#settings}
  */
  readonly settings?: PrivateEndpointSettings;
  /**
  * Model or deployment identifier sent to the upstream provider. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#upstream_model_id PrivateEndpoint#upstream_model_id}
  */
  readonly upstreamModelId: string;
}
export interface PrivateEndpointActivate {
  /**
  * Workspace whose BYOK credential is used for the live validation call. The workspace must belong to your account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#workspace_id PrivateEndpoint#workspace_id}
  */
  readonly workspaceId: string;
}

export function privateEndpointActivateToTerraform(struct?: PrivateEndpointActivate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    workspace_id: cdktf.stringToTerraform(struct!.workspaceId),
  }
}


export function privateEndpointActivateToHclTerraform(struct?: PrivateEndpointActivate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    workspace_id: {
      value: cdktf.stringToHclTerraform(struct!.workspaceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateEndpointActivateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateEndpointActivate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._workspaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceId = this._workspaceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateEndpointActivate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._workspaceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._workspaceId = value.workspaceId;
    }
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
}
export interface PrivateEndpointPricing {
  /**
  * USD per cache-read prompt token, as a decimal string. When omitted, inherited from the public endpoint of the same model and provider: scaled by its cache-read to prompt ratio, or left at the pricing strategy default when it publishes no cache-read rate. Required when there is no such endpoint and the provider bills cache reads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#cache_read PrivateEndpoint#cache_read}
  */
  readonly cacheRead?: string;
  /**
  * USD per cache-write prompt token, as a decimal string. When omitted, inherited from the public endpoint of the same model and provider: scaled by its cache-write to prompt ratio, or left at the pricing strategy default when it publishes no cache-write rate. Required when there is no such endpoint and the provider bills cache writes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#cache_write PrivateEndpoint#cache_write}
  */
  readonly cacheWrite?: string;
  /**
  * USD per completion token, as a decimal string. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#completion PrivateEndpoint#completion}
  */
  readonly completion?: string;
  /**
  * USD per prompt token, as a decimal string. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#prompt PrivateEndpoint#prompt}
  */
  readonly prompt?: string;
}

export function privateEndpointPricingToTerraform(struct?: PrivateEndpointPricing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_read: cdktf.stringToTerraform(struct!.cacheRead),
    cache_write: cdktf.stringToTerraform(struct!.cacheWrite),
    completion: cdktf.stringToTerraform(struct!.completion),
    prompt: cdktf.stringToTerraform(struct!.prompt),
  }
}


export function privateEndpointPricingToHclTerraform(struct?: PrivateEndpointPricing | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_read: {
      value: cdktf.stringToHclTerraform(struct!.cacheRead),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cache_write: {
      value: cdktf.stringToHclTerraform(struct!.cacheWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    completion: {
      value: cdktf.stringToHclTerraform(struct!.completion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prompt: {
      value: cdktf.stringToHclTerraform(struct!.prompt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateEndpointPricingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateEndpointPricing | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheRead = this._cacheRead;
    }
    if (this._cacheWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheWrite = this._cacheWrite;
    }
    if (this._completion !== undefined) {
      hasAnyValues = true;
      internalValueResult.completion = this._completion;
    }
    if (this._prompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.prompt = this._prompt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateEndpointPricing | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheRead = undefined;
      this._cacheWrite = undefined;
      this._completion = undefined;
      this._prompt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheRead = value.cacheRead;
      this._cacheWrite = value.cacheWrite;
      this._completion = value.completion;
      this._prompt = value.prompt;
    }
  }

  // cache_read - computed: true, optional: true, required: false
  private _cacheRead?: string; 
  public get cacheRead() {
    return this.getStringAttribute('cache_read');
  }
  public set cacheRead(value: string) {
    this._cacheRead = value;
  }
  public resetCacheRead() {
    this._cacheRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheReadInput() {
    return this._cacheRead;
  }

  // cache_write - computed: true, optional: true, required: false
  private _cacheWrite?: string; 
  public get cacheWrite() {
    return this.getStringAttribute('cache_write');
  }
  public set cacheWrite(value: string) {
    this._cacheWrite = value;
  }
  public resetCacheWrite() {
    this._cacheWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheWriteInput() {
    return this._cacheWrite;
  }

  // completion - computed: true, optional: true, required: false
  private _completion?: string; 
  public get completion() {
    return this.getStringAttribute('completion');
  }
  public set completion(value: string) {
    this._completion = value;
  }
  public resetCompletion() {
    this._completion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completionInput() {
    return this._completion;
  }

  // prompt - computed: true, optional: true, required: false
  private _prompt?: string; 
  public get prompt() {
    return this.getStringAttribute('prompt');
  }
  public set prompt(value: string) {
    this._prompt = value;
  }
  public resetPrompt() {
    this._prompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promptInput() {
    return this._prompt;
  }
}
export interface PrivateEndpointSettingsCompletions {
  /**
  * Serves `/chat/completions`. `null` means the endpoint uses the provider default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#chat PrivateEndpoint#chat}
  */
  readonly chat?: boolean | cdktf.IResolvable;
  /**
  * Serves `/completions`. `null` means the endpoint uses the provider default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#text PrivateEndpoint#text}
  */
  readonly text?: boolean | cdktf.IResolvable;
}

export function privateEndpointSettingsCompletionsToTerraform(struct?: PrivateEndpointSettingsCompletions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chat: cdktf.booleanToTerraform(struct!.chat),
    text: cdktf.booleanToTerraform(struct!.text),
  }
}


export function privateEndpointSettingsCompletionsToHclTerraform(struct?: PrivateEndpointSettingsCompletions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chat: {
      value: cdktf.booleanToHclTerraform(struct!.chat),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    text: {
      value: cdktf.booleanToHclTerraform(struct!.text),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateEndpointSettingsCompletionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateEndpointSettingsCompletions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chat !== undefined) {
      hasAnyValues = true;
      internalValueResult.chat = this._chat;
    }
    if (this._text !== undefined) {
      hasAnyValues = true;
      internalValueResult.text = this._text;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateEndpointSettingsCompletions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chat = undefined;
      this._text = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chat = value.chat;
      this._text = value.text;
    }
  }

  // chat - computed: true, optional: true, required: false
  private _chat?: boolean | cdktf.IResolvable; 
  public get chat() {
    return this.getBooleanAttribute('chat');
  }
  public set chat(value: boolean | cdktf.IResolvable) {
    this._chat = value;
  }
  public resetChat() {
    this._chat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chatInput() {
    return this._chat;
  }

  // text - computed: true, optional: true, required: false
  private _text?: boolean | cdktf.IResolvable; 
  public get text() {
    return this.getBooleanAttribute('text');
  }
  public set text(value: boolean | cdktf.IResolvable) {
    this._text = value;
  }
  public resetText() {
    this._text = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textInput() {
    return this._text;
  }
}
export interface PrivateEndpointSettingsInputs {
  /**
  * Accepts audio input. `null` means the endpoint uses the provider default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#audio PrivateEndpoint#audio}
  */
  readonly audio?: boolean | cdktf.IResolvable;
  /**
  * Accepts base64 file data. `null` means the endpoint uses the provider default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#base64_files PrivateEndpoint#base64_files}
  */
  readonly base64Files?: boolean | cdktf.IResolvable;
  /**
  * Accepts base64 image data. `null` means the endpoint uses the provider default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#base64_images PrivateEndpoint#base64_images}
  */
  readonly base64Images?: boolean | cdktf.IResolvable;
  /**
  * Accepts file URLs. `null` means the endpoint uses the provider default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#file_urls PrivateEndpoint#file_urls}
  */
  readonly fileUrls?: boolean | cdktf.IResolvable;
  /**
  * Accepts image URLs. `null` means the endpoint uses the provider default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#image_urls PrivateEndpoint#image_urls}
  */
  readonly imageUrls?: boolean | cdktf.IResolvable;
}

export function privateEndpointSettingsInputsToTerraform(struct?: PrivateEndpointSettingsInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio: cdktf.booleanToTerraform(struct!.audio),
    base64_files: cdktf.booleanToTerraform(struct!.base64Files),
    base64_images: cdktf.booleanToTerraform(struct!.base64Images),
    file_urls: cdktf.booleanToTerraform(struct!.fileUrls),
    image_urls: cdktf.booleanToTerraform(struct!.imageUrls),
  }
}


export function privateEndpointSettingsInputsToHclTerraform(struct?: PrivateEndpointSettingsInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio: {
      value: cdktf.booleanToHclTerraform(struct!.audio),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    base64_files: {
      value: cdktf.booleanToHclTerraform(struct!.base64Files),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    base64_images: {
      value: cdktf.booleanToHclTerraform(struct!.base64Images),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    file_urls: {
      value: cdktf.booleanToHclTerraform(struct!.fileUrls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_urls: {
      value: cdktf.booleanToHclTerraform(struct!.imageUrls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateEndpointSettingsInputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateEndpointSettingsInputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audio !== undefined) {
      hasAnyValues = true;
      internalValueResult.audio = this._audio;
    }
    if (this._base64Files !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64Files = this._base64Files;
    }
    if (this._base64Images !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64Images = this._base64Images;
    }
    if (this._fileUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUrls = this._fileUrls;
    }
    if (this._imageUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUrls = this._imageUrls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateEndpointSettingsInputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audio = undefined;
      this._base64Files = undefined;
      this._base64Images = undefined;
      this._fileUrls = undefined;
      this._imageUrls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audio = value.audio;
      this._base64Files = value.base64Files;
      this._base64Images = value.base64Images;
      this._fileUrls = value.fileUrls;
      this._imageUrls = value.imageUrls;
    }
  }

  // audio - computed: true, optional: true, required: false
  private _audio?: boolean | cdktf.IResolvable; 
  public get audio() {
    return this.getBooleanAttribute('audio');
  }
  public set audio(value: boolean | cdktf.IResolvable) {
    this._audio = value;
  }
  public resetAudio() {
    this._audio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioInput() {
    return this._audio;
  }

  // base64_files - computed: true, optional: true, required: false
  private _base64Files?: boolean | cdktf.IResolvable; 
  public get base64Files() {
    return this.getBooleanAttribute('base64_files');
  }
  public set base64Files(value: boolean | cdktf.IResolvable) {
    this._base64Files = value;
  }
  public resetBase64Files() {
    this._base64Files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64FilesInput() {
    return this._base64Files;
  }

  // base64_images - computed: true, optional: true, required: false
  private _base64Images?: boolean | cdktf.IResolvable; 
  public get base64Images() {
    return this.getBooleanAttribute('base64_images');
  }
  public set base64Images(value: boolean | cdktf.IResolvable) {
    this._base64Images = value;
  }
  public resetBase64Images() {
    this._base64Images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64ImagesInput() {
    return this._base64Images;
  }

  // file_urls - computed: true, optional: true, required: false
  private _fileUrls?: boolean | cdktf.IResolvable; 
  public get fileUrls() {
    return this.getBooleanAttribute('file_urls');
  }
  public set fileUrls(value: boolean | cdktf.IResolvable) {
    this._fileUrls = value;
  }
  public resetFileUrls() {
    this._fileUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrlsInput() {
    return this._fileUrls;
  }

  // image_urls - computed: true, optional: true, required: false
  private _imageUrls?: boolean | cdktf.IResolvable; 
  public get imageUrls() {
    return this.getBooleanAttribute('image_urls');
  }
  public set imageUrls(value: boolean | cdktf.IResolvable) {
    this._imageUrls = value;
  }
  public resetImageUrls() {
    this._imageUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlsInput() {
    return this._imageUrls;
  }
}
export interface PrivateEndpointSettingsReasoning {
  /**
  * Where the upstream puts reasoning tokens in its response: `reasoning` and `reasoning-content` are response fields, `content-string` is inline in the message, `none` returns no reasoning. `null` means the endpoint uses the provider default. must be one of ["content-string", "reasoning-content", "reasoning", "none"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#return_mechanism PrivateEndpoint#return_mechanism}
  */
  readonly returnMechanism?: string;
  /**
  * Whether requests with `reasoning` route to this endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#supported PrivateEndpoint#supported}
  */
  readonly supported?: boolean | cdktf.IResolvable;
}

export function privateEndpointSettingsReasoningToTerraform(struct?: PrivateEndpointSettingsReasoning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    return_mechanism: cdktf.stringToTerraform(struct!.returnMechanism),
    supported: cdktf.booleanToTerraform(struct!.supported),
  }
}


export function privateEndpointSettingsReasoningToHclTerraform(struct?: PrivateEndpointSettingsReasoning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    return_mechanism: {
      value: cdktf.stringToHclTerraform(struct!.returnMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supported: {
      value: cdktf.booleanToHclTerraform(struct!.supported),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateEndpointSettingsReasoningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateEndpointSettingsReasoning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._returnMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnMechanism = this._returnMechanism;
    }
    if (this._supported !== undefined) {
      hasAnyValues = true;
      internalValueResult.supported = this._supported;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateEndpointSettingsReasoning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._returnMechanism = undefined;
      this._supported = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._returnMechanism = value.returnMechanism;
      this._supported = value.supported;
    }
  }

  // return_mechanism - computed: true, optional: true, required: false
  private _returnMechanism?: string; 
  public get returnMechanism() {
    return this.getStringAttribute('return_mechanism');
  }
  public set returnMechanism(value: string) {
    this._returnMechanism = value;
  }
  public resetReturnMechanism() {
    this._returnMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnMechanismInput() {
    return this._returnMechanism;
  }

  // supported - computed: true, optional: true, required: false
  private _supported?: boolean | cdktf.IResolvable; 
  public get supported() {
    return this.getBooleanAttribute('supported');
  }
  public set supported(value: boolean | cdktf.IResolvable) {
    this._supported = value;
  }
  public resetSupported() {
    this._supported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedInput() {
    return this._supported;
  }
}
export interface PrivateEndpointSettingsToolChoice {
  /**
  * Accepts `tool_choice: "auto"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#auto PrivateEndpoint#auto}
  */
  readonly auto?: boolean | cdktf.IResolvable;
  /**
  * Accepts a named function in `tool_choice`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#function PrivateEndpoint#function}
  */
  readonly function?: boolean | cdktf.IResolvable;
  /**
  * Accepts `tool_choice: "none"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#none PrivateEndpoint#none}
  */
  readonly none?: boolean | cdktf.IResolvable;
  /**
  * Accepts `tool_choice: "required"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#required PrivateEndpoint#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function privateEndpointSettingsToolChoiceToTerraform(struct?: PrivateEndpointSettingsToolChoice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto: cdktf.booleanToTerraform(struct!.auto),
    function: cdktf.booleanToTerraform(struct!.function),
    none: cdktf.booleanToTerraform(struct!.none),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function privateEndpointSettingsToolChoiceToHclTerraform(struct?: PrivateEndpointSettingsToolChoice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto: {
      value: cdktf.booleanToHclTerraform(struct!.auto),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    function: {
      value: cdktf.booleanToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    none: {
      value: cdktf.booleanToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateEndpointSettingsToolChoiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateEndpointSettingsToolChoice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auto !== undefined) {
      hasAnyValues = true;
      internalValueResult.auto = this._auto;
    }
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateEndpointSettingsToolChoice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auto = undefined;
      this._function = undefined;
      this._none = undefined;
      this._required = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auto = value.auto;
      this._function = value.function;
      this._none = value.none;
      this._required = value.required;
    }
  }

  // auto - computed: true, optional: true, required: false
  private _auto?: boolean | cdktf.IResolvable; 
  public get auto() {
    return this.getBooleanAttribute('auto');
  }
  public set auto(value: boolean | cdktf.IResolvable) {
    this._auto = value;
  }
  public resetAuto() {
    this._auto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInput() {
    return this._auto;
  }

  // function - computed: true, optional: true, required: false
  private _function?: boolean | cdktf.IResolvable; 
  public get function() {
    return this.getBooleanAttribute('function');
  }
  public set function(value: boolean | cdktf.IResolvable) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }

  // none - computed: true, optional: true, required: false
  private _none?: boolean | cdktf.IResolvable; 
  public get none() {
    return this.getBooleanAttribute('none');
  }
  public set none(value: boolean | cdktf.IResolvable) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}
export interface PrivateEndpointSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#completions PrivateEndpoint#completions}
  */
  readonly completions?: PrivateEndpointSettingsCompletions;
  /**
  * Longest prompt plus completion, in tokens. `null` means the model default applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#context_length PrivateEndpoint#context_length}
  */
  readonly contextLength?: number;
  /**
  * Request parameters the upstream rejects even though the model supports them; requests using one do not route here. Cannot name a tested parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#excluded_parameters PrivateEndpoint#excluded_parameters}
  */
  readonly excludedParameters?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#inputs PrivateEndpoint#inputs}
  */
  readonly inputs?: PrivateEndpointSettingsInputs;
  /**
  * Longest completion the upstream returns, in tokens. `null` means the model default applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#max_completion_tokens PrivateEndpoint#max_completion_tokens}
  */
  readonly maxCompletionTokens?: number;
  /**
  * Longest prompt, in tokens. `null` means no cap below the context length. Cannot exceed `context_length`, or the model context length while `context_length` is `null`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#max_prompt_tokens PrivateEndpoint#max_prompt_tokens}
  */
  readonly maxPromptTokens?: number;
  /**
  * Weight precision the deployment runs at; `unknown` when not stated. must be one of ["int4", "int8", "fp4", "mxfp4", "nvfp4", "fp6", "fp8", "mxfp8", "fp16", "bf16", "fp32", "unknown"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#quantization PrivateEndpoint#quantization}
  */
  readonly quantization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#reasoning PrivateEndpoint#reasoning}
  */
  readonly reasoning?: PrivateEndpointSettingsReasoning;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#tool_choice PrivateEndpoint#tool_choice}
  */
  readonly toolChoice?: PrivateEndpointSettingsToolChoice;
}

export function privateEndpointSettingsToTerraform(struct?: PrivateEndpointSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    completions: privateEndpointSettingsCompletionsToTerraform(struct!.completions),
    context_length: cdktf.numberToTerraform(struct!.contextLength),
    excluded_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedParameters),
    inputs: privateEndpointSettingsInputsToTerraform(struct!.inputs),
    max_completion_tokens: cdktf.numberToTerraform(struct!.maxCompletionTokens),
    max_prompt_tokens: cdktf.numberToTerraform(struct!.maxPromptTokens),
    quantization: cdktf.stringToTerraform(struct!.quantization),
    reasoning: privateEndpointSettingsReasoningToTerraform(struct!.reasoning),
    tool_choice: privateEndpointSettingsToolChoiceToTerraform(struct!.toolChoice),
  }
}


export function privateEndpointSettingsToHclTerraform(struct?: PrivateEndpointSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    completions: {
      value: privateEndpointSettingsCompletionsToHclTerraform(struct!.completions),
      isBlock: true,
      type: "struct",
      storageClassType: "PrivateEndpointSettingsCompletions",
    },
    context_length: {
      value: cdktf.numberToHclTerraform(struct!.contextLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    excluded_parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    inputs: {
      value: privateEndpointSettingsInputsToHclTerraform(struct!.inputs),
      isBlock: true,
      type: "struct",
      storageClassType: "PrivateEndpointSettingsInputs",
    },
    max_completion_tokens: {
      value: cdktf.numberToHclTerraform(struct!.maxCompletionTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_prompt_tokens: {
      value: cdktf.numberToHclTerraform(struct!.maxPromptTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quantization: {
      value: cdktf.stringToHclTerraform(struct!.quantization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reasoning: {
      value: privateEndpointSettingsReasoningToHclTerraform(struct!.reasoning),
      isBlock: true,
      type: "struct",
      storageClassType: "PrivateEndpointSettingsReasoning",
    },
    tool_choice: {
      value: privateEndpointSettingsToolChoiceToHclTerraform(struct!.toolChoice),
      isBlock: true,
      type: "struct",
      storageClassType: "PrivateEndpointSettingsToolChoice",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivateEndpointSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivateEndpointSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._completions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.completions = this._completions?.internalValue;
    }
    if (this._contextLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextLength = this._contextLength;
    }
    if (this._excludedParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedParameters = this._excludedParameters;
    }
    if (this._inputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs?.internalValue;
    }
    if (this._maxCompletionTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCompletionTokens = this._maxCompletionTokens;
    }
    if (this._maxPromptTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPromptTokens = this._maxPromptTokens;
    }
    if (this._quantization !== undefined) {
      hasAnyValues = true;
      internalValueResult.quantization = this._quantization;
    }
    if (this._reasoning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reasoning = this._reasoning?.internalValue;
    }
    if (this._toolChoice?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolChoice = this._toolChoice?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivateEndpointSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._completions.internalValue = undefined;
      this._contextLength = undefined;
      this._excludedParameters = undefined;
      this._inputs.internalValue = undefined;
      this._maxCompletionTokens = undefined;
      this._maxPromptTokens = undefined;
      this._quantization = undefined;
      this._reasoning.internalValue = undefined;
      this._toolChoice.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._completions.internalValue = value.completions;
      this._contextLength = value.contextLength;
      this._excludedParameters = value.excludedParameters;
      this._inputs.internalValue = value.inputs;
      this._maxCompletionTokens = value.maxCompletionTokens;
      this._maxPromptTokens = value.maxPromptTokens;
      this._quantization = value.quantization;
      this._reasoning.internalValue = value.reasoning;
      this._toolChoice.internalValue = value.toolChoice;
    }
  }

  // completions - computed: true, optional: true, required: false
  private _completions = new PrivateEndpointSettingsCompletionsOutputReference(this, "completions");
  public get completions() {
    return this._completions;
  }
  public putCompletions(value: PrivateEndpointSettingsCompletions) {
    this._completions.internalValue = value;
  }
  public resetCompletions() {
    this._completions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completionsInput() {
    return this._completions.internalValue;
  }

  // context_length - computed: true, optional: true, required: false
  private _contextLength?: number; 
  public get contextLength() {
    return this.getNumberAttribute('context_length');
  }
  public set contextLength(value: number) {
    this._contextLength = value;
  }
  public resetContextLength() {
    this._contextLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextLengthInput() {
    return this._contextLength;
  }

  // excluded_parameters - computed: true, optional: true, required: false
  private _excludedParameters?: string[]; 
  public get excludedParameters() {
    return this.getListAttribute('excluded_parameters');
  }
  public set excludedParameters(value: string[]) {
    this._excludedParameters = value;
  }
  public resetExcludedParameters() {
    this._excludedParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedParametersInput() {
    return this._excludedParameters;
  }

  // inputs - computed: true, optional: true, required: false
  private _inputs = new PrivateEndpointSettingsInputsOutputReference(this, "inputs");
  public get inputs() {
    return this._inputs;
  }
  public putInputs(value: PrivateEndpointSettingsInputs) {
    this._inputs.internalValue = value;
  }
  public resetInputs() {
    this._inputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs.internalValue;
  }

  // max_completion_tokens - computed: true, optional: true, required: false
  private _maxCompletionTokens?: number; 
  public get maxCompletionTokens() {
    return this.getNumberAttribute('max_completion_tokens');
  }
  public set maxCompletionTokens(value: number) {
    this._maxCompletionTokens = value;
  }
  public resetMaxCompletionTokens() {
    this._maxCompletionTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCompletionTokensInput() {
    return this._maxCompletionTokens;
  }

  // max_prompt_tokens - computed: true, optional: true, required: false
  private _maxPromptTokens?: number; 
  public get maxPromptTokens() {
    return this.getNumberAttribute('max_prompt_tokens');
  }
  public set maxPromptTokens(value: number) {
    this._maxPromptTokens = value;
  }
  public resetMaxPromptTokens() {
    this._maxPromptTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPromptTokensInput() {
    return this._maxPromptTokens;
  }

  // quantization - computed: true, optional: true, required: false
  private _quantization?: string; 
  public get quantization() {
    return this.getStringAttribute('quantization');
  }
  public set quantization(value: string) {
    this._quantization = value;
  }
  public resetQuantization() {
    this._quantization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quantizationInput() {
    return this._quantization;
  }

  // reasoning - computed: true, optional: true, required: false
  private _reasoning = new PrivateEndpointSettingsReasoningOutputReference(this, "reasoning");
  public get reasoning() {
    return this._reasoning;
  }
  public putReasoning(value: PrivateEndpointSettingsReasoning) {
    this._reasoning.internalValue = value;
  }
  public resetReasoning() {
    this._reasoning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasoningInput() {
    return this._reasoning.internalValue;
  }

  // tool_choice - computed: true, optional: true, required: false
  private _toolChoice = new PrivateEndpointSettingsToolChoiceOutputReference(this, "tool_choice");
  public get toolChoice() {
    return this._toolChoice;
  }
  public putToolChoice(value: PrivateEndpointSettingsToolChoice) {
    this._toolChoice.internalValue = value;
  }
  public resetToolChoice() {
    this._toolChoice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolChoiceInput() {
    return this._toolChoice.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint openrouter_private_endpoint}
*/
export class PrivateEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_private_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivateEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivateEndpoint to import
  * @param importFromId The id of the existing PrivateEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivateEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_private_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.3.258/docs/resources/private_endpoint openrouter_private_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivateEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: PrivateEndpointConfig) {
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
    this._activate.internalValue = config.activate;
    this._baseUrl = config.baseUrl;
    this._declaredParameters = config.declaredParameters;
    this._declaredRegion = config.declaredRegion;
    this._declaredZdr = config.declaredZdr;
    this._idempotencyKey = config.idempotencyKey;
    this._modelPermaslug = config.modelPermaslug;
    this._pricing.internalValue = config.pricing;
    this._providerSlug = config.providerSlug;
    this._settings.internalValue = config.settings;
    this._upstreamModelId = config.upstreamModelId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate - computed: false, optional: true, required: false
  private _activate = new PrivateEndpointActivateOutputReference(this, "activate");
  public get activate() {
    return this._activate;
  }
  public putActivate(value: PrivateEndpointActivate) {
    this._activate.internalValue = value;
  }
  public resetActivate() {
    this._activate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activateInput() {
    return this._activate.internalValue;
  }

  // base_url - computed: true, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // declared_parameters - computed: true, optional: true, required: false
  private _declaredParameters?: string[]; 
  public get declaredParameters() {
    return this.getListAttribute('declared_parameters');
  }
  public set declaredParameters(value: string[]) {
    this._declaredParameters = value;
  }
  public resetDeclaredParameters() {
    this._declaredParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get declaredParametersInput() {
    return this._declaredParameters;
  }

  // declared_region - computed: true, optional: true, required: false
  private _declaredRegion?: string; 
  public get declaredRegion() {
    return this.getStringAttribute('declared_region');
  }
  public set declaredRegion(value: string) {
    this._declaredRegion = value;
  }
  public resetDeclaredRegion() {
    this._declaredRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get declaredRegionInput() {
    return this._declaredRegion;
  }

  // declared_zdr - computed: true, optional: true, required: false
  private _declaredZdr?: boolean | cdktf.IResolvable; 
  public get declaredZdr() {
    return this.getBooleanAttribute('declared_zdr');
  }
  public set declaredZdr(value: boolean | cdktf.IResolvable) {
    this._declaredZdr = value;
  }
  public resetDeclaredZdr() {
    this._declaredZdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get declaredZdrInput() {
    return this._declaredZdr;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idempotency_key - computed: false, optional: true, required: false
  private _idempotencyKey?: string; 
  public get idempotencyKey() {
    return this.getStringAttribute('idempotency_key');
  }
  public set idempotencyKey(value: string) {
    this._idempotencyKey = value;
  }
  public resetIdempotencyKey() {
    this._idempotencyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idempotencyKeyInput() {
    return this._idempotencyKey;
  }

  // max_completion_tokens - computed: true, optional: false, required: false
  public get maxCompletionTokens() {
    return this.getNumberAttribute('max_completion_tokens');
  }

  // model_name - computed: true, optional: false, required: false
  public get modelName() {
    return this.getStringAttribute('model_name');
  }

  // model_permaslug - computed: false, optional: false, required: true
  private _modelPermaslug?: string; 
  public get modelPermaslug() {
    return this.getStringAttribute('model_permaslug');
  }
  public set modelPermaslug(value: string) {
    this._modelPermaslug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelPermaslugInput() {
    return this._modelPermaslug;
  }

  // model_slug - computed: true, optional: false, required: false
  public get modelSlug() {
    return this.getStringAttribute('model_slug');
  }

  // pricing - computed: true, optional: true, required: false
  private _pricing = new PrivateEndpointPricingOutputReference(this, "pricing");
  public get pricing() {
    return this._pricing;
  }
  public putPricing(value: PrivateEndpointPricing) {
    this._pricing.internalValue = value;
  }
  public resetPricing() {
    this._pricing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingInput() {
    return this._pricing.internalValue;
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // provider_slug - computed: false, optional: false, required: true
  private _providerSlug?: string; 
  public get providerSlug() {
    return this.getStringAttribute('provider_slug');
  }
  public set providerSlug(value: string) {
    this._providerSlug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerSlugInput() {
    return this._providerSlug;
  }

  // settings - computed: true, optional: true, required: false
  private _settings = new PrivateEndpointSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: PrivateEndpointSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tested_parameters - computed: true, optional: false, required: false
  public get testedParameters() {
    return this.getListAttribute('tested_parameters');
  }

  // upstream_model_id - computed: false, optional: false, required: true
  private _upstreamModelId?: string; 
  public get upstreamModelId() {
    return this.getStringAttribute('upstream_model_id');
  }
  public set upstreamModelId(value: string) {
    this._upstreamModelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamModelIdInput() {
    return this._upstreamModelId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activate: privateEndpointActivateToTerraform(this._activate.internalValue),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      declared_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._declaredParameters),
      declared_region: cdktf.stringToTerraform(this._declaredRegion),
      declared_zdr: cdktf.booleanToTerraform(this._declaredZdr),
      idempotency_key: cdktf.stringToTerraform(this._idempotencyKey),
      model_permaslug: cdktf.stringToTerraform(this._modelPermaslug),
      pricing: privateEndpointPricingToTerraform(this._pricing.internalValue),
      provider_slug: cdktf.stringToTerraform(this._providerSlug),
      settings: privateEndpointSettingsToTerraform(this._settings.internalValue),
      upstream_model_id: cdktf.stringToTerraform(this._upstreamModelId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activate: {
        value: privateEndpointActivateToHclTerraform(this._activate.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivateEndpointActivate",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      declared_parameters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._declaredParameters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      declared_region: {
        value: cdktf.stringToHclTerraform(this._declaredRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      declared_zdr: {
        value: cdktf.booleanToHclTerraform(this._declaredZdr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      idempotency_key: {
        value: cdktf.stringToHclTerraform(this._idempotencyKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      model_permaslug: {
        value: cdktf.stringToHclTerraform(this._modelPermaslug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pricing: {
        value: privateEndpointPricingToHclTerraform(this._pricing.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivateEndpointPricing",
      },
      provider_slug: {
        value: cdktf.stringToHclTerraform(this._providerSlug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: privateEndpointSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivateEndpointSettings",
      },
      upstream_model_id: {
        value: cdktf.stringToHclTerraform(this._upstreamModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
