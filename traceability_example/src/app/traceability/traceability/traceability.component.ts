import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traceability',
  templateUrl: './traceability.component.html',
  styleUrls: ['./traceability.component.css']
})
export class TraceabilityComponent implements OnInit {

  private showNewProduct: boolean = false;
  private productToDisplay: any;


  constructor() { }

  ngOnInit() {
  }


  doDetail(elem: any){
    this.productToDisplay = elem;
  }

  doNewProduct() {
    this.showNewProduct = true;
    this.productToDisplay = null;
  }

}
