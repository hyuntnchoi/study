var bankAccount = function(initialBalance) {
    // Let's initialise the balance with the value 
    // passed as an argument to the function

    var balance = initialBalance;

    return {
        getBalance: function() {
            return balance
        },
        deposit: function(amount) {
            // Let's add the amount to what we already
            // have in the balance.
            balance += amount;
            // Return the new balance
            console.log(balance);
            return balance;
        },
        withdraw: function(amount) {
            // Check if we have enough money to
            // withdraw all that.
            if(amount <= balance) {
                balance -= amount;
                console.log(balance);
                return true;
            } else {
                console.log("not enough deposit");
                return false;
            }
        }
    }
}

var marceloAccount = bankAccount(100);

marceloAccount.deposit(10);
//console.log(marceloAccount.getBalance);
marceloAccount.withdraw(80);
//console.log(marceloAccount.getBalance);
marceloAccount.withdraw(80);
//console.log(marceloAccount.getBalance);
