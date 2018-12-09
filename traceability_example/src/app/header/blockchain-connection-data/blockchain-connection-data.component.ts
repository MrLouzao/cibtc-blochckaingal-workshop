import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blockchain-connection-data',
  templateUrl: './blockchain-connection-data.component.html',
  styleUrls: ['./blockchain-connection-data.component.css']
})
export class BlockchainConnectionDataComponent implements OnInit {

  /** TODO: connect to local storage to obtain the contract address and display connection data */
  private _netState = true;

  constructor() { }

  ngOnInit() {
  }

  getNetworkStatus

}
