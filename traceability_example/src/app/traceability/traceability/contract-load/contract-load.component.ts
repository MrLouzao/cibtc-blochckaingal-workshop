import { Component, Output, EventEmitter } from '@angular/core';
import { TraceabilityService } from '../../service/traceability.service';
import { LocalStorageBlockchainData } from '../../../app-common/local-storage-blockchain-data';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'contract-load',
  templateUrl: './contract-load.component.html',
  styleUrls: ['./contract-load.component.css']
})
export class ContractLoadComponent {

  @Output() contractLoaded: EventEmitter<any> = new EventEmitter<any>();
  private showAddrField: boolean = false;
  private contractAddressToTry;

  constructor(
    private traceabilityService: TraceabilityService,
    private blockchainData: LocalStorageBlockchainData,
    private snackbar: MatSnackBar
  ) {

  }


  performNewContract() {
    this.traceabilityService.createContract()
      .then(res => {
        console.log(res);
        this.blockchainData.setContractAddress(res.address);
        this.contractLoaded.emit();
      })
      .catch(err => {
        console.error(err);
        this.snackbar.open("Produciuse un erro ao conectar co contrato", "Fechar", {duration: 3000});
      });
  }



  performLocalStorage(){
    let addressFromData = this.blockchainData.getContractAddress();
    if(addressFromData && addressFromData !== 'no-addr'){
      this.connectToContract(addressFromData);
    }
  }


  performFromInput(){
    if(this.contractAddressToTry){
      console.log("Try connect to: " + this.contractAddressToTry);
      this.connectToContract(this.contractAddressToTry);
    }
  }


  private connectToContract(addr: string){
    this.traceabilityService.connectToContract(addr)
      .then(() => {
        this.blockchainData.setContractAddress(addr);
        this.contractLoaded.emit();
      })
      .catch(err => {
        console.error(err);
        this.snackbar.open("Produciuse un erro ao conectar co contrato", "Fechar", {duration: 3000});
      });
  }


}
