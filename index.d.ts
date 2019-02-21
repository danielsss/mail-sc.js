type Options = object;

export interface decomposeAddressResponse {
  name: string;
  address: string;
}

export interface Delivery {
  send(options: Options): Promise<any>;
  sendTemplate(options: Options): Promise<any>;
  sendCalendar(options: Options): Promise<any>;
  taskInfo(options: Options): Promise<any>;
}

export interface Template {
  batchQuery(options: Options): Promise<any>;
  query(options: Options): Promise<any>;
  add(options: Options): Promise<any>;
  delete(options: Options): Promise<any>;
  update(options: Options): Promise<any>;
}

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

export class SendCloud {
  public delivery: Delivery;
  public template: Template;
  public addressList: AddressList;
}

export function decomposeAddress(address: string): decomposeAddressResponse;
export function addressParser(addresses: string | string[], tag: string): string;
export default function createClient(options: SendCouldStaticOptions): SendCloud;
