pragma solidity ^0.4.25;

contract CopyrightGal {
    
    
    struct CopyrightEntry {
        string name;
        string description;
        string license;
    }
    
    
    mapping(address => CopyrightEntry[]) copyrightRegistry;
    mapping(address => uint32) copyrightEntries;
    
    
    constructor() public {
    }
    
    
    function getNumberOfRegistersForAddress(address addrToCheck) public view returns (uint32) {
        return copyrightEntries[addrToCheck];
    }
    
    
    function addCopyrightRegister(string name, string description, string license) public {
        CopyrightEntry memory registerToAdd = CopyrightEntry(name, description, license);
        copyrightRegistry[msg.sender].push(registerToAdd);
        copyrightEntries[msg.sender] = copyrightEntries[msg.sender] + 1;
    }
    
    
    function getCopyrightRegistryForAddressAndIndex(address addrToRequest, uint32 index) public view returns(string, string, string) {
        require(index < copyrightEntries[addrToRequest]);
        CopyrightEntry[] memory entriesForAddr = copyrightRegistry[addrToRequest];
        CopyrightEntry memory entryToRet = entriesForAddr[index];
        return (entryToRet.name, entryToRet.description, entryToRet.license);
    }
    
    
}