pragma solidity ^0.4.18;

contract article
{
    address public Owner;
    uint256 public _like;
    
    function article() {
        Owner = msg.sender;
        _like = 0;
    }
    function()payable{}
    function get_like() returns(uint256 totallike)
    {
        return _like;
    }
    function I_like()
    payable
    {
        if(msg.value <=0 ) revert();
        _like++;
        Owner.transfer(msg.value);
    }
}
