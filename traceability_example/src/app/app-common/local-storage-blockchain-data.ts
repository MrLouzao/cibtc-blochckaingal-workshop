import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';


@Injectable()
export class LocalStorageBlockchainData {

    private static BCG_REGISTRY_NETWORK: string = 'bcg-registry-network';
    private static BCG_REGISTRY_ADDRESS: string = 'bcg-registry-addr';

    private observeAddress : Subject<string> = new Subject<string>();

    constructor() {
    }

    /** Network interface */
    getNetwork(): string{
        return localStorage.getItem(LocalStorageBlockchainData.BCG_REGISTRY_NETWORK);
    }

    setNetwork(network: string) {
        localStorage.setItem(LocalStorageBlockchainData.BCG_REGISTRY_NETWORK, network);
    }

    removeNetwork() {
        localStorage.removeItem(LocalStorageBlockchainData.BCG_REGISTRY_NETWORK);
    }


    /** Contract address */
    getContractAddress(): string{
        return localStorage.getItem(LocalStorageBlockchainData.BCG_REGISTRY_ADDRESS);
    }

    setContractAddress(address: string){
        localStorage.setItem(LocalStorageBlockchainData.BCG_REGISTRY_ADDRESS, address);
        this.observeAddress.next(address);
    }

    removeContractAddress() {
        localStorage.removeItem(LocalStorageBlockchainData.BCG_REGISTRY_ADDRESS);
    }

    
    getObservableAddress(): Subject<string> {
        return this.observeAddress;
    }

}