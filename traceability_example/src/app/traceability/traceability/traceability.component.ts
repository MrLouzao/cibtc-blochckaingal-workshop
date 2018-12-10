import { Component, OnInit } from '@angular/core';
import { TraceabilityService } from '../service/traceability.service';

@Component({
  selector: 'app-traceability',
  templateUrl: './traceability.component.html',
  styleUrls: ['./traceability.component.css']
})
export class TraceabilityComponent implements OnInit {
  private ready: boolean = false;
  private showNewProduct: boolean = false;
  private productToDisplay: any;

  constructor(
    private traceabilityService: TraceabilityService
  ) {

  }

  ngOnInit(): void {
    //this.traceabilityService.createContract();
    this.traceabilityService.connectToContract("0x3f6c622d32da3bc70730c9e677ec343cb5acfe68")
      .then(() => {
        this.ready = true;
      })
      .catch(err => {
        console.error(err);
      });
  }


  doDetail(elem: any){
    this.productToDisplay = elem;
  }

  doNewProduct() {
    this.showNewProduct = true;
    this.productToDisplay = null;
  }

}
