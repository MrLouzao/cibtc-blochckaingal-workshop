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
  ) {
    this.service.getAllProducts().subscribe(
      data => {
        this.products = data;
        this.redisplayTable();
      }
    );
  }

  ngOnInit() {
    this.redisplayTable();
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