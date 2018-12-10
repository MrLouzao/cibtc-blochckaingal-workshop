import { Injectable } from '@angular/core';
import { Observable,  of } from 'rxjs';
import { Web3Service } from '../../util/web3.service';
import { LocalStorageBlockchainData } from '../../app-common/local-storage-blockchain-data';

declare let require: any;
const traceability_gal_artifact = require('../../../../build/contracts/TraceabilityGal.json');


@Injectable({
  providedIn: 'root'
})
export class TraceabilityService {

  // Contract instance
  private TraceabilityGalDef: any;
  private traceabilityInstance: any;
  private accounts: any;


  constructor(
    private web3Service: Web3Service
  ) {
    this.watchAccount();
  }


  private watchAccount() {
    this.web3Service.accountsObservable.subscribe((accounts) => {
      this.accounts = accounts;
    });
  }


  public connectToContract(addr: string) {
    return this.web3Service.artifactsToContract(traceability_gal_artifact)
      .then((TraceabilityAbstraction) => {
        this.TraceabilityGalDef = TraceabilityAbstraction;
        return this.TraceabilityGalDef.at(addr);
      })
      .then(instance => {
        this.traceabilityInstance = instance;
        console.log("successfully connected to " + addr);
        return;
      });
  }
  

  public createContract() {
    return this.web3Service.artifactsToContract(traceability_gal_artifact)
      .then((TraceabilityAbstraction) => {
        this.TraceabilityGalDef = TraceabilityAbstraction;
        return this.TraceabilityGalDef.new({
          from: this.accounts[0]
        })
      })
      .then( instance => {
        console.log("Creado novo contrato!");
        console.log(instance);
        this.traceabilityInstance = instance;
        return instance;
      }
    );;
  }


  public checkConnectionState(): boolean {
    return this.traceabilityInstance !== undefined;
  }


  public createProduct(productId: string): Promise<any> {
    let idAsNumber = Number(productId);
    return this.traceabilityInstance.addProduct(idAsNumber, {
      from: this.accounts[0]
    });
  }


  obtainProducts(): Promise<any> {
    if(this.traceabilityInstance){

      return this.traceabilityInstance.countedProducts.call()
        .then((res)=> {
        
          let numberOfProducts = res.toNumber();
          let promisesToExecute = [];

          for(let i=0; i<numberOfProducts; i++){
            promisesToExecute.push( this.traceabilityInstance.products.call(i) );
          }

          return Promise.all(promisesToExecute);
        });

    } else {
      return undefined;
    }
  }


  getProductTraces(productId: number): Promise<any> {
    return this.traceabilityInstance.getNumberOfProductTraces.call(productId)
      .then(numOfTraces => {
        let numberOfTraces = numOfTraces.toNumber();

        if(numberOfTraces == 0){
          return [];
        }
        
        else {
          let tracesFromPromise = [];
          for(let i=0; i<numberOfTraces; i++){
            tracesFromPromise.push( this.traceabilityInstance.getTraceForProduct.call(productId, i) );
          }
          return Promise.all(tracesFromPromise);
        }

      });
  }


  createProductTrace(productId: number, trace: string): Promise<any> {
    return this.traceabilityInstance.addTraceToProduct(productId, trace, {
      from: this.accounts[0]
    });
  }

  
}
