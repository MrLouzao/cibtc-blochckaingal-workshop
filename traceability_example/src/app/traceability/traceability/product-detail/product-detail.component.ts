import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TraceabilityService } from '../../service/traceability.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() productId: string; 
  @Output() hide: EventEmitter<any> = new EventEmitter<any>();

  private showNewTrace: boolean = false;
  private newTraceToSave;
  private productTraces: string[];

  private elementType : 'url' | 'canvas' | 'img' = 'url';

  constructor(
    private traceabilityService: TraceabilityService,
    private snackbar: MatSnackBar
  ) {
    this.productTraces = [];
  }


  ngOnInit() {
    this.traceabilityService.getProductTraces(Number(this.productId))
      .then(traces => {
        console.log(traces);
        this.productTraces = traces;
      })
      .catch(err => {
        console.error(err);
        this.snackbar.open("Producíuse un erro ao obter as trazas do producto", "Fechar", {duration: 3000});
      })
  }


  saveNewTrace() {
    console.log("Trace to save = " + this.newTraceToSave);
    if(this.newTraceToSave){
      let now = new Date();
      let msg = `[${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}] ${this.newTraceToSave}`;

      this.traceabilityService.createProductTrace(Number(this.productId), msg)
        .then(res => {
          this.productTraces.push(msg);
          this.showNewTrace = false;
        })
        .catch(err => {
          console.error(err);
          this.snackbar.open("Producíuse un erro no gardado da traza", "Fechar", {duration: 3000});
        })
    }
  }

}
