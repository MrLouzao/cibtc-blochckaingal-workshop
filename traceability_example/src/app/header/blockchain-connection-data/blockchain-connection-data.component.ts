import { Component } from '@angular/core';
import { LocalStorageBlockchainData } from '../../app-common/local-storage-blockchain-data';

@Component({
  selector: 'blockchain-connection-data',
  templateUrl: './blockchain-connection-data.component.html',
  styleUrls: ['./blockchain-connection-data.component.css']
})
export class BlockchainConnectionDataComponent {

  /** TODO: connect to local storage to obtain the contract address and display connection data */
  private _netState = true;

  private _network: string;
  private _address: string;

  constructor(
    private bgData: LocalStorageBlockchainData
  ) {
    let bgNetwork = bgData.getNetwork();
    let bgAddr = bgData.getContractAddress();
    if(!bgNetwork || !bgAddr){
      this.saveDefaultSettingsForBlockchainData();
    } else {
      this._network = bgNetwork;
      this._address = bgAddr;
    }
  }

  saveDefaultSettingsForBlockchainData() {
    this._network = "Ropsten";
    this._address = "no-addr";
    this.bgData.setNetwork(this._network);
    this.bgData.setContractAddress(this._address);
  }

}
