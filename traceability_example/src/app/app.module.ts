import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatTableModule,
  MatIconModule
} from '@angular/material';
import { TraceabilityModule } from './traceability/traceability.module';
import { CdkTableModule } from '@angular/cdk/table';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { LocalStorageBlockchainData } from './app-common/local-storage-blockchain-data';
import { HeaderModule } from './header/header.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    CdkTableModule,
    MatTableModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TraceabilityModule,
    NgxQRCodeModule,
    MatIconModule,
    CommonModule,
    HeaderModule
  ],
  providers: [
    LocalStorageBlockchainData
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
