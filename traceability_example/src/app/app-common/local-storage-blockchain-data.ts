import { Injectable } from '@angular/core';


@Injectable()
export class LocalStorageBlockchainData {

    private static BCG_REGISTRY_NETWORK: string = 'bcg-registry-network';
    private static BCG_REGISTRY_ADDRESS: string = 'bcg-registry-addr';

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
    }

    removeContractAddress() {
        localStorage.removeItem(LocalStorageBlockchainData.BCG_REGISTRY_ADDRESS);
    }


}