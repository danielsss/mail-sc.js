declare namespace __NSP__ {
  /**
   * The method options
   */
  type Options = {[index: string]: any};

  export interface decomposeAddressResponse {
    name: string;
    address: string;
  }

  /**
   * @description Delivery proxy
   */
  export interface Delivery {
    send(options: Options): Promise<any>;
    sendTemplate(options: Options): Promise<any>;
    sendCalendar(options: Options): Promise<any>;
    taskInfo(options: Options): Promise<any>;
  }


  /**
   * @description Template proxy
   */
  export interface Template {
    batchQuery(options: Options): Promise<any>;
    query(options: Options): Promise<any>;
    add(options: Options): Promise<any>;
    delete(options: Options): Promise<any>;
    update(options: Options): Promise<any>;
  }

  /**
   * @description Address list proxy
   */
  export interface AddressList {
    // list
    batchQueryAddress(options: Options): Promise<any>;
    addAddress(options: Options): Promise<any>;
    deleteAddress(options: Options): Promise<any>;
    updateAddress(options: Options): Promise<any>;

    // members
    batchQueryMember(options: Options): Promise<any>;
    queryMember(options: Options): Promise<any>;
    addMember(options: Options): Promise<any>;
    updateMember(options: Options): Promise<any>;
    deleteMember(options: Options): Promise<any>;
  }

  /**
   * @description Email label proxy
   */
  export interface EmailLabel {
    add(optionds: Options): Promise<any>;
    batchQuery(optionds: Options): Promise<any>;
    delete(optionds: Options): Promise<any>;
    getLabel(optionds: Options): Promise<any>;
    update(optionds: Options): Promise<any>;
  }

  /**
   * @description SendCloud options
   */
  export interface SendCouldStaticOptions {
    apiUser: string;
    apiKey: string;
    timeout?: number;
    host?: string;
    endpoint?: string;
    protocol?: string;
    port?: number;
    retry?: number;
    proxy?: object;
  }

  /**
   * @description The main class SendCloud
   */
  export class SendCloud {
    /* Getters of proxy */
    public delivery: Proxy<Delivery>;
    public template: Proxy<Template>;
    public addressList: Proxy<AddressList>;
    public emailLabel: Proxy<EmailLabel>;

    /**
     * @constructor
     * @param {SendCouldStaticOptions} opts - an option object 
     */
    constructor(opts: SendCouldStaticOptions): SendCloud {};
  }

  export function decomposeAddress(address: string): decomposeAddressResponse;
  export function addressParser(addresses: string | string[], tag: string): string;
  export function createClient(options: SendCouldStaticOptions): SendCloud;
}


export = __NSP__;