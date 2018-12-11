import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageBlockchainData } from './local-storage-blockchain-data';

@NgModule({
  declarations: [
    LocalStorageBlockchainData
  ],
  imports: [
    CommonModule
  ],
  providers: [
    LocalStorageBlockchainData
  ],
  exports: [
    LocalStorageBlockchainData
  ]
})
export class AppCommonModule { }
