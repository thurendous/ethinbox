pragma solidity ^0.4.17;

contract Inbox {
    // public means it's acessible for anyone in the world
    string public message;

    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}
