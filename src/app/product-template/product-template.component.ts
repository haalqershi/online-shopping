import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.css']
})
export class ProductTemplateComponent implements OnInit {

  @Input('product') product: any;
  @Input('show-actions') showActions = true;

  constructor() { }

  ngOnInit(): void {
  }

}
