// https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs/resources/domain_records
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainRecordsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Purchased available domain name on your account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs/resources/domain_records#domain DomainRecords#domain}
  */
  readonly domain: string;
  /**
  * Possible values: NONE, MXE, MX, FWD, OX, GMAIL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs/resources/domain_records#email_type DomainRecords#email_type}
  */
  readonly emailType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs/resources/domain_records#id DomainRecords#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Possible values: MERGE (default), OVERWRITE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs/resources/domain_records#mode DomainRecords#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs/resources/domain_records#nameservers DomainRecords#nameservers}
  */
  readonly nameservers?: string[];
  /**
  * record block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs/resources/domain_records#record DomainRecords#record}
  */
  readonly record?: DomainRecordsRecord[] | cdktf.IResolvable;
}
export interface DomainRecordsRecord {
  /**
  * Possible values are URL or IP address. The value for this parameter is based on record type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs/resources/domain_records#address DomainRecords#address}
  */
  readonly address: string;
  /**
  * Sub-domain/hostname to create the record for
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs/resources/domain_records#hostname DomainRecords#hostname}
  */
  readonly hostname: string;
  /**
  * MX preference for host. Applicable for MX records only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs/resources/domain_records#mx_pref DomainRecords#mx_pref}
  */
  readonly mxPref?: number;
  /**
  * Time to live for all record types. Possible values: any value between 60 to 60000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs/resources/domain_records#ttl DomainRecords#ttl}
  */
  readonly ttl?: number;
  /**
  * Possible values: A, AAAA, ALIAS, CAA, CNAME, MX, MXE, NS, TXT, URL, URL301, FRAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs/resources/domain_records#type DomainRecords#type}
  */
  readonly type: string;
}

export function domainRecordsRecordToTerraform(struct?: DomainRecordsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    mx_pref: cdktf.numberToTerraform(struct!.mxPref),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function domainRecordsRecordToHclTerraform(struct?: DomainRecordsRecord | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mx_pref: {
      value: cdktf.numberToHclTerraform(struct!.mxPref),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DomainRecordsRecordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DomainRecordsRecord | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._mxPref !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxPref = this._mxPref;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainRecordsRecord | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._hostname = undefined;
      this._mxPref = undefined;
      this._ttl = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._hostname = value.hostname;
      this._mxPref = value.mxPref;
      this._ttl = value.ttl;
      this._type = value.type;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // mx_pref - computed: false, optional: true, required: false
  private _mxPref?: number; 
  public get mxPref() {
    return this.getNumberAttribute('mx_pref');
  }
  public set mxPref(value: number) {
    this._mxPref = value;
  }
  public resetMxPref() {
    this._mxPref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxPrefInput() {
    return this._mxPref;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DomainRecordsRecordList extends cdktf.ComplexList {
  public internalValue? : DomainRecordsRecord[] | cdktf.IResolvable

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
  public get(index: number): DomainRecordsRecordOutputReference {
    return new DomainRecordsRecordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs/resources/domain_records namecheap_domain_records}
*/
export class DomainRecords extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "namecheap_domain_records";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DomainRecords resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DomainRecords to import
  * @param importFromId The id of the existing DomainRecords that should be imported. Refer to the {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs/resources/domain_records#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DomainRecords to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "namecheap_domain_records", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/namecheap/namecheap/2.3.5/docs/resources/domain_records namecheap_domain_records} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainRecordsConfig
  */
  public constructor(scope: Construct, id: string, config: DomainRecordsConfig) {
    super(scope, id, {
      terraformResourceType: 'namecheap_domain_records',
      terraformGeneratorMetadata: {
        providerName: 'namecheap',
        providerVersion: '2.3.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._emailType = config.emailType;
    this._id = config.id;
    this._mode = config.mode;
    this._nameservers = config.nameservers;
    this._record.internalValue = config.record;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // email_type - computed: false, optional: true, required: false
  private _emailType?: string; 
  public get emailType() {
    return this.getStringAttribute('email_type');
  }
  public set emailType(value: string) {
    this._emailType = value;
  }
  public resetEmailType() {
    this._emailType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailTypeInput() {
    return this._emailType;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // nameservers - computed: false, optional: true, required: false
  private _nameservers?: string[]; 
  public get nameservers() {
    return cdktf.Fn.tolist(this.getListAttribute('nameservers'));
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  public resetNameservers() {
    this._nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // record - computed: false, optional: true, required: false
  private _record = new DomainRecordsRecordList(this, "record", true);
  public get record() {
    return this._record;
  }
  public putRecord(value: DomainRecordsRecord[] | cdktf.IResolvable) {
    this._record.internalValue = value;
  }
  public resetRecord() {
    this._record.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordInput() {
    return this._record.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      email_type: cdktf.stringToTerraform(this._emailType),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nameservers),
      record: cdktf.listMapper(domainRecordsRecordToTerraform, true)(this._record.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_type: {
        value: cdktf.stringToHclTerraform(this._emailType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nameservers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nameservers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      record: {
        value: cdktf.listMapperHcl(domainRecordsRecordToHclTerraform, true)(this._record.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DomainRecordsRecordList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
