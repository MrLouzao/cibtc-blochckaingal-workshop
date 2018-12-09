import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.css']
})
export class ProductRegisterComponent {

  @Output() hide: EventEmitter<any> = new EventEmitter<any>();

  _form: FormGroup;

  constructor(
    @Inject(FormBuilder) fb: FormBuilder
  ) {
    this._form = fb.group({
      productId: ['', Validators.required]
    });
  }
  

  performSubmit(): void {
    console.log("Submit")
  }
  

}
