// https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/data-sources/providers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpenrouterProvidersConfig extends cdktf.TerraformMetaArguments {
}
export interface DataOpenrouterProvidersData {
}

export function dataOpenrouterProvidersDataToTerraform(struct?: DataOpenrouterProvidersData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpenrouterProvidersDataToHclTerraform(struct?: DataOpenrouterProvidersData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpenrouterProvidersDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOpenrouterProvidersData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpenrouterProvidersData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // datacenters - computed: true, optional: false, required: false
  public get datacenters() {
    return this.getListAttribute('datacenters');
  }

  // headquarters - computed: true, optional: false, required: false
  public get headquarters() {
    return this.getStringAttribute('headquarters');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // privacy_policy_url - computed: true, optional: false, required: false
  public get privacyPolicyUrl() {
    return this.getStringAttribute('privacy_policy_url');
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // status_page_url - computed: true, optional: false, required: false
  public get statusPageUrl() {
    return this.getStringAttribute('status_page_url');
  }

  // terms_of_service_url - computed: true, optional: false, required: false
  public get termsOfServiceUrl() {
    return this.getStringAttribute('terms_of_service_url');
  }
}

export class DataOpenrouterProvidersDataList extends cdktf.ComplexList {

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
  public get(index: number): DataOpenrouterProvidersDataOutputReference {
    return new DataOpenrouterProvidersDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/data-sources/providers openrouter_providers}
*/
export class DataOpenrouterProviders extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "openrouter_providers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpenrouterProviders resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpenrouterProviders to import
  * @param importFromId The id of the existing DataOpenrouterProviders that should be imported. Refer to the {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/data-sources/providers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpenrouterProviders to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "openrouter_providers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/openrouterteam/openrouter/0.2.30/docs/data-sources/providers openrouter_providers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpenrouterProvidersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOpenrouterProvidersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'openrouter_providers',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataOpenrouterProvidersDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
