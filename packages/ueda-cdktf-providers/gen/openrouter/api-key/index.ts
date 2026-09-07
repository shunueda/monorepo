// https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/api_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional user ID of the key creator. Only meaningful for organization-owned keys where a specific member is creating the key. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/api_key#creator_user_id ApiKey#creator_user_id}
  */
  readonly creatorUserId?: string;
  /**
  * Whether to disable the API key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/api_key#disabled ApiKey#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Optional ISO 8601 UTC expiration timestamp. Must include seconds (YYYY-MM-DDTHH:MM:SSZ; fractional seconds allowed); minute-precision timestamps are rejected. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/api_key#expires_at ApiKey#expires_at}
  */
  readonly expiresAt?: string;
  /**
  * Optional partner-defined identity associated with the created API key. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/api_key#external ApiKey#external}
  */
  readonly external?: ApiKeyExternal;
  /**
  * Whether to include BYOK usage in the limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/api_key#include_byok_in_limit ApiKey#include_byok_in_limit}
  */
  readonly includeByokInLimit?: boolean | cdktf.IResolvable;
  /**
  * New spending limit for the API key in USD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/api_key#limit ApiKey#limit}
  */
  readonly limit?: number;
  /**
  * New limit reset type for the API key (daily, weekly, monthly, or null for no reset). Resets happen automatically at midnight UTC, and weeks are Monday through Sunday. must be one of ["daily", "weekly", "monthly"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/api_key#limit_reset ApiKey#limit_reset}
  */
  readonly limitReset?: string;
  /**
  * New name for the API key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/api_key#name ApiKey#name}
  */
  readonly name: string;
  /**
  * The workspace to create the API key in. Defaults to the default workspace if not provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/api_key#workspace_id ApiKey#workspace_id}
  */
  readonly workspaceId?: string;
}
export interface ApiKeyExternal {
  /**
  * Optional partner-supplied API key with a minimum length of 32 characters and sufficient entropy. Stored as a SHA-256 hash and never returned. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/api_key#api_key ApiKey#api_key}
  */
  readonly apiKey?: string;
  /**
  * Partner's end-user identifier for attribution. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/api_key#user ApiKey#user}
  */
  readonly user: string;
}

export function apiKeyExternalToTerraform(struct?: ApiKeyExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.stringToTerraform(struct!.apiKey),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function apiKeyExternalToHclTerraform(struct?: ApiKeyExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.stringToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiKeyExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiKeyExternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiKeyExternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiKey = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiKey = value.apiKey;
      this._user = value.user;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/api_key openrouter_api_key}
*/
export class ApiKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_api_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiKey to import
  * @param importFromId The id of the existing ApiKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/api_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_api_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.103/docs/resources/api_key openrouter_api_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiKeyConfig
  */
  public constructor(scope: Construct, id: string, config: ApiKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'openrouter_api_key',
      terraformGeneratorMetadata: {
        providerName: 'openrouter',
        providerVersion: '0.2.103'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._creatorUserId = config.creatorUserId;
    this._disabled = config.disabled;
    this._expiresAt = config.expiresAt;
    this._external.internalValue = config.external;
    this._includeByokInLimit = config.includeByokInLimit;
    this._limit = config.limit;
    this._limitReset = config.limitReset;
    this._name = config.name;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // byok_usage - computed: true, optional: false, required: false
  public get byokUsage() {
    return this.getNumberAttribute('byok_usage');
  }

  // byok_usage_daily - computed: true, optional: false, required: false
  public get byokUsageDaily() {
    return this.getNumberAttribute('byok_usage_daily');
  }

  // byok_usage_monthly - computed: true, optional: false, required: false
  public get byokUsageMonthly() {
    return this.getNumberAttribute('byok_usage_monthly');
  }

  // byok_usage_weekly - computed: true, optional: false, required: false
  public get byokUsageWeekly() {
    return this.getNumberAttribute('byok_usage_weekly');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // creator_user_id - computed: true, optional: true, required: false
  private _creatorUserId?: string; 
  public get creatorUserId() {
    return this.getStringAttribute('creator_user_id');
  }
  public set creatorUserId(value: string) {
    this._creatorUserId = value;
  }
  public resetCreatorUserId() {
    this._creatorUserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorUserIdInput() {
    return this._creatorUserId;
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

  // expires_at - computed: true, optional: true, required: false
  private _expiresAt?: string; 
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }
  public set expiresAt(value: string) {
    this._expiresAt = value;
  }
  public resetExpiresAt() {
    this._expiresAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresAtInput() {
    return this._expiresAt;
  }

  // external - computed: false, optional: true, required: false
  private _external = new ApiKeyExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: ApiKeyExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // external_user - computed: true, optional: false, required: false
  public get externalUser() {
    return this.getStringAttribute('external_user');
  }

  // hash - computed: true, optional: false, required: false
  public get hash() {
    return this.getStringAttribute('hash');
  }

  // include_byok_in_limit - computed: true, optional: true, required: false
  private _includeByokInLimit?: boolean | cdktf.IResolvable; 
  public get includeByokInLimit() {
    return this.getBooleanAttribute('include_byok_in_limit');
  }
  public set includeByokInLimit(value: boolean | cdktf.IResolvable) {
    this._includeByokInLimit = value;
  }
  public resetIncludeByokInLimit() {
    this._includeByokInLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeByokInLimitInput() {
    return this._includeByokInLimit;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // limit - computed: true, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // limit_remaining - computed: true, optional: false, required: false
  public get limitRemaining() {
    return this.getNumberAttribute('limit_remaining');
  }

  // limit_reset - computed: true, optional: true, required: false
  private _limitReset?: string; 
  public get limitReset() {
    return this.getStringAttribute('limit_reset');
  }
  public set limitReset(value: string) {
    this._limitReset = value;
  }
  public resetLimitReset() {
    this._limitReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitResetInput() {
    return this._limitReset;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getNumberAttribute('usage');
  }

  // usage_daily - computed: true, optional: false, required: false
  public get usageDaily() {
    return this.getNumberAttribute('usage_daily');
  }

  // usage_monthly - computed: true, optional: false, required: false
  public get usageMonthly() {
    return this.getNumberAttribute('usage_monthly');
  }

  // usage_weekly - computed: true, optional: false, required: false
  public get usageWeekly() {
    return this.getNumberAttribute('usage_weekly');
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
      creator_user_id: cdktf.stringToTerraform(this._creatorUserId),
      disabled: cdktf.booleanToTerraform(this._disabled),
      expires_at: cdktf.stringToTerraform(this._expiresAt),
      external: apiKeyExternalToTerraform(this._external.internalValue),
      include_byok_in_limit: cdktf.booleanToTerraform(this._includeByokInLimit),
      limit: cdktf.numberToTerraform(this._limit),
      limit_reset: cdktf.stringToTerraform(this._limitReset),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      creator_user_id: {
        value: cdktf.stringToHclTerraform(this._creatorUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expires_at: {
        value: cdktf.stringToHclTerraform(this._expiresAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external: {
        value: apiKeyExternalToHclTerraform(this._external.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiKeyExternal",
      },
      include_byok_in_limit: {
        value: cdktf.booleanToHclTerraform(this._includeByokInLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_reset: {
        value: cdktf.stringToHclTerraform(this._limitReset),
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
