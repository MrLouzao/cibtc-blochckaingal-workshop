import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TraceabilityService } from '../../service/traceability.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})
export class ProductRegisterComponent {

  @Output() hide: EventEmitter<any> = new EventEmitter<any>();

  _form: FormGroup;

  constructor(
    @Inject(FormBuilder) fb: FormBuilder,
    private traceabilityService: TraceabilityService,
    private snackbar: MatSnackBar
  ) {
    this._form = fb.group({
      productId: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)] ]
    });
  }
  

  performSubmit(): void {
    if(this._form.valid){
      let productId = this._form.value.productId;

      this.traceabilityService.createProduct(productId)
        .then(txResult => {
          console.log(txResult);
          this.hide.emit();
        }).catch(err => {
          console.error(err);
          this.snackbar.open("Produciuse un erro ao gardar o producto", "Fechar", {duration: 3000} );
        });
    }
  }
  

}
