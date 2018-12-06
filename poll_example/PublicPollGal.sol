pragma solidity ^0.4.25;

contract TraceabilityGal {
    
    
    address owner;
    string public pollQuestion;
    uint8 public numberOfAnswers;
    string[] public answers;
    mapping(uint8 => uint32) public votesForAnswer;
    
    
    constructor(string question) public {
        owner = msg.sender;
        pollQuestion = question;
        numberOfAnswers = 0;
    }
    
    
    // Only owner of contract can call to the marked function
    modifier ownerCall {
        require(msg.sender == owner);
        _;
    }
    
    
    function addAnswer(string answerToAdd) public ownerCall {
        answers.push(answerToAdd);
        numberOfAnswers++;
        votesForAnswer[numberOfAnswers-1]=0;
    }
    
    
    function voteForAnswer(uint8 answerIndex) public {
        require(answerIndex < numberOfAnswers);
        votesForAnswer[answerIndex] = votesForAnswer[answerIndex] + 1;
    }
    
}