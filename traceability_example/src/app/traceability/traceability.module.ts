import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule, MatSnackBarModule, MatTableModule, MatIconModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UtilModule} from '../util/util.module';
import {RouterModule} from '@angular/router';
import { TraceabilityComponent } from './traceability/traceability.component';
import { ProductListComponent } from './traceability/product-list/product-list.component';
import { ProductDetailComponent } from './traceability/product-detail/product-detail.component';
import { ProductRegisterComponent } from './traceability/product-register/product-register.component';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatSnackBarModule,
        RouterModule,
        UtilModule,
        MatTableModule,
        MatIconModule,
        NgxQRCodeModule
      ],
      declarations: [TraceabilityComponent, ProductListComponent, ProductDetailComponent, ProductRegisterComponent],
      exports: [TraceabilityComponent]
})
export class TraceabilityModule {
}
