pragma solidity ^0.4.25;

contract TraceabilityGal {
    
    uint public countedProducts;
    uint32[] public products;
    mapping(uint32 => string[]) private traces;
    mapping(uint32 => uint32) private numberOfTracesStored;
    
    
    constructor() public {
        countedProducts = 0;
    }
    
    
    function addProduct(uint32 productId) public {
        require(productId != 0);
        require(!productExist(productId));
        products.push(productId);
        numberOfTracesStored[productId] = 0;
        countedProducts++;
    }
    
    
    function addTraceToProduct(uint32 productId, string trace) public {
        require(productExist(productId));
        traces[productId].push(trace);
        numberOfTracesStored[productId] = numberOfTracesStored[productId] + 1;
    }
    
    
    function getNumberOfProductTraces(uint32 productId) public view returns(uint32) {
        assert(productId != 0);
        assert(productExist(productId));
        return numberOfTracesStored[productId];
    }
    
    
    function getTraceForProduct(uint32 productId, uint32 traceNumber) public view returns(string){
        assert(productId != 0);
        assert(productExist(productId));
        require(traceNumber < numberOfTracesStored[productId]);
        
        string[] memory tracesForProduct = traces[productId];
        return tracesForProduct[traceNumber];
    }

    
    function productExist(uint32 productId) public view returns(bool){
        for(uint i=0; i<countedProducts; i++){
            if(products[i] == productId){
                return true;
            }
        }
        return false;
    }
    
}