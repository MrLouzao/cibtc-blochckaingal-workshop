import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() productId: string; 
  @Output() hide: EventEmitter<any> = new EventEmitter<any>();

  private elementType : 'url' | 'canvas' | 'img' = 'url';

  constructor() { }

  ngOnInit() {


  }

}
