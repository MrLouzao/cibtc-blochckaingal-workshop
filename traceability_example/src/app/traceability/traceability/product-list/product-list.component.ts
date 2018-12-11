import { Component, OnInit, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TraceabilityService } from '../../service/traceability.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Output() onDetail: EventEmitter<string> = new EventEmitter<string>();
  @Output() onNewProduct: EventEmitter<any> = new EventEmitter<any>();

  private products: any = [];
  private displayedColums = DISPLAYED_COLUMNS;
  private tableData;


  constructor(
    private service: TraceabilityService
  ) { }


  ngOnInit() {
    this.displayProductsFromBlockchain();
    this.redisplayTable();
  }


  private displayProductsFromBlockchain(){
    this.service.obtainProducts()
    .then(res => {
      this.products = [];
      res.forEach(product => {
        this.service.getLastTraceForProduct(product.toNumber())
          .then(val => {
            this.products.push({id: product.toNumber().toString(), lastState: val});
            this.redisplayTable();
          })
          .catch(err => {
            console.error(err);
            console.log("erro ao obter a traza do producto " + product.toNumber());
          });
        
      });
 
      this.redisplayTable();
    });
  }


  ngOnChanges(changes: SimpleChanges) {
    this.redisplayTable();
  }

  private redisplayTable(): void{
    this.tableData = new MatTableDataSource(this.products);
  }


  detailProduct(elem: any){
    this.onDetail.emit(elem.id);
  }

  newProduct() {
    this.onNewProduct.emit();
  }
  

}

const DISPLAYED_COLUMNS = [
  'id',
  'lastState'
];