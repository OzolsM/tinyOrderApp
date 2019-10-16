import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ExternalOrder } from '../../models/external-order';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  @Input() products: Array<Product>;
  @Input() order: ExternalOrder;
  @Input() totalPrice: Number;

  constructor() { }

  ngOnInit() {}

}
