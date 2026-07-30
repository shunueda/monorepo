// https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/resources/byok_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ByokKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional allowlist of model slugs this credential may be used for. `null` means no restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/resources/byok_key#allowed_models ByokKey#allowed_models}
  */
  readonly allowedModels?: string[];
  /**
  * Optional allowlist of user IDs that may use this credential. `null` means no restriction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/resources/byok_key#allowed_user_ids ByokKey#allowed_user_ids}
  */
  readonly allowedUserIds?: string[];
  /**
  * Whether this credential should be created in a disabled state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/resources/byok_key#disabled ByokKey#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Whether this credential is treated as a fallback — used only after non-fallback keys for the same provider have been tried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/resources/byok_key#is_fallback ByokKey#is_fallback}
  */
  readonly isFallback?: boolean | cdktf.IResolvable;
  /**
  * The raw provider API key or credential. This value is encrypted at rest and never returned in API responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/resources/byok_key#key ByokKey#key}
  */
  readonly key: string;
  /**
  * Optional human-readable name for the credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/resources/byok_key#name ByokKey#name}
  */
  readonly name?: string;
  /**
  * The upstream provider this credential authenticates against, as a lowercase slug (e.g. `openai`, `anthropic`, `amazon-bedrock`). must be one of ["ai21", "aion-labs", "akashml", "alibaba", "amazon-bedrock", "amazon-nova", "ambient", "anthropic", "arcee-ai", "atlas-cloud", "avian", "azure", "baidu", "baseten", "black-forest-labs", "byteplus", "cerebras", "chutes", "cirrascale", "clarifai", "cloudflare", "cohere", "coreweave", "crusoe", "darkbloom", "decart", "deepgram", "deepinfra", "deepseek", "dekallm", "digitalocean", "featherless", "fireworks", "fish-audio", "friendli", "gmicloud", "google-ai-studio", "google-vertex", "groq", "heygen", "inception", "inceptron", "inferact-vllm", "inference-net", "infermatic", "inflection", "io-net", "ionstream", "krea", "liquid", "mancer", "mara", "meta", "minimax", "mistral", "modal", "modelrun", "modular", "moonshotai", "morph", "ncompass", "nebius", "nex-agi", "nextbit", "novita", "nvidia", "open-inference", "openai", "parasail", "perceptron", "perplexity", "phala", "poolside", "quiver", "recraft", "reka", "relace", "runway", "sail-research", "sakana", "sakana-ai", "sambanova", "seed", "siliconflow", "sourceful", "stepfun", "streamlake", "switchpoint", "tencent", "tenstorrent", "together", "upstage", "venice", "wafer", "wandb", "wandb-legacy", "xai", "xiaomi", "z-ai"]; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/resources/byok_key#provider_slug ByokKey#provider_slug}
  */
  readonly providerSlug: string;
  /**
  * Optional workspace ID. Defaults to the authenticated entity's default workspace. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/resources/byok_key#workspace_id ByokKey#workspace_id}
  */
  readonly workspaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/resources/byok_key openrouter_byok_key}
*/
export class ByokKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_byok_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ByokKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ByokKey to import
  * @param importFromId The id of the existing ByokKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/resources/byok_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ByokKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_byok_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.1.22/docs/resources/byok_key openrouter_byok_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ByokKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ByokKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'openrouter_byok_key',
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
    this._allowedModels = config.allowedModels;
    this._allowedUserIds = config.allowedUserIds;
    this._disabled = config.disabled;
    this._isFallback = config.isFallback;
    this._key = config.key;
    this._name = config.name;
    this._providerSlug = config.providerSlug;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_api_key_hashes - computed: true, optional: false, required: false
  public get allowedApiKeyHashes() {
    return this.getListAttribute('allowed_api_key_hashes');
  }

  // allowed_models - computed: true, optional: true, required: false
  private _allowedModels?: string[]; 
  public get allowedModels() {
    return this.getListAttribute('allowed_models');
  }
  public set allowedModels(value: string[]) {
    this._allowedModels = value;
  }
  public resetAllowedModels() {
    this._allowedModels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedModelsInput() {
    return this._allowedModels;
  }

  // allowed_user_ids - computed: true, optional: true, required: false
  private _allowedUserIds?: string[]; 
  public get allowedUserIds() {
    return this.getListAttribute('allowed_user_ids');
  }
  public set allowedUserIds(value: string[]) {
    this._allowedUserIds = value;
  }
  public resetAllowedUserIds() {
    this._allowedUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUserIdsInput() {
    return this._allowedUserIds;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_fallback - computed: true, optional: true, required: false
  private _isFallback?: boolean | cdktf.IResolvable; 
  public get isFallback() {
    return this.getBooleanAttribute('is_fallback');
  }
  public set isFallback(value: boolean | cdktf.IResolvable) {
    this._isFallback = value;
  }
  public resetIsFallback() {
    this._isFallback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFallbackInput() {
    return this._isFallback;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
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

  // sort_order - computed: true, optional: false, required: false
  public get sortOrder() {
    return this.getNumberAttribute('sort_order');
  }

  // workspace_id - computed: true, optional: true, required: false
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
      allowed_models: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedModels),
      allowed_user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedUserIds),
      disabled: cdktf.booleanToTerraform(this._disabled),
      is_fallback: cdktf.booleanToTerraform(this._isFallback),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      provider_slug: cdktf.stringToTerraform(this._providerSlug),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_models: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedModels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      allowed_user_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedUserIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_fallback: {
        value: cdktf.booleanToHclTerraform(this._isFallback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_slug: {
        value: cdktf.stringToHclTerraform(this._providerSlug),
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
