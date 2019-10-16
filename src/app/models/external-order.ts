import { Product} from './product';

export interface ExternalOrder {
  id: number;
  product_count: number;
  customer_name: string;
  customer_address: string;
  sku: string;
  order_volume: string;
  products: Array<Product>;
}
