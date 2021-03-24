// import 'babel-polyfill';
//web3 instance is automaically available on test file: just call eth3.getBalance ...

const StarNotary = artifacts.require('./StarNotary.sol'); // a json representation of the contract, from the compile command

let accounts; // List of development accounts provided by Truffle
var owner; // Global variable use it in the tests cases


// truffle will redeploy all of the migrations at the beginning of every test file
// This called the StartNotary Smart contract and initialize it
//contract is same as describe, but enables truffle clean room features, it also provides a list of accounts
contract('StarNotary', async (accs) => {
    accounts = accs; // Assigning test accounts
    owner = accounts[0]; // Assigning the owner test account
});

it('has correct name', async() => {
    //One difference is that you can't declare a global instance variable of the contract, you will need to create an instance in each test case.
    let instance = await StarNotary.deployed(); // Making sure the Smart Contract is deployed and getting the instance.
   
    let starName = await instance.starName.call(); // Calling the starName property
    assert.equal(starName, "Awesome Udacity Star"); // Assert if the starName property was initialized correctly
})