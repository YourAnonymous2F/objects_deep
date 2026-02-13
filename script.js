// Question 1: Methods vs Seperate Functions

// Approach A
const product = { name: "Laptop", price: 999 };
function getDisplayPrice(product) {
return "$" + product.price.toFixed(2);
}
getDisplayPrice(product);

// Approach B
// const product = {
// name: "Laptop",
// price: 999,
// getDisplayPrice: function() {
// return "$" + this.price.toFixed(2);
// }
// };
// product.getDisplayPrice();

// Part A
// In the approach B, the this keyword allows the method to access the object other properties without needing to pass them as parameters. It works without passing the object as parameter because it already understands that the this method is trying to access a property in the object

// Part B
// Approach B is considered is considered better organized because instead of explicitly creating another function outside the object, this can be done directly inside the object and it will still give us the same output and it more efficient because with the this keyword in the approach B, it will instantly understand that we are accessing its property.

// Question 2: The This Keyword and Arrow Functions
// const user = {
//     name: "Alice",
//     greet: () => {
//         return "Hello, " + this.name;
//     }
// };
// console.log(user.greet()); 
// Part A:
// The code returns undefined when using the arrow function because it inherit this from surrounding context. The arrow function is more appropriate to use with arrays

// Part B:
// The fix for the code is to write the function as normal function and no parameter is passed to the function when declaring it. The correct code for the arrow function using the normal function is below:
const user = {
    name: "Alice",
    greet: function () {
        return "Hello, " + this.name
    }
}
console.log(user.greet())
// When deciding to use arrow functions or regular functions with objects, the approved method is to use regular funtions.

// Question 3: Reference vs Value
// const settings = { theme: "dark", fontSize: 14 };
// const backup = settings;
// settings.theme = "light";
// console.log(backup.theme);
// Part A
// The backup.theme shows light even though the theme value was only changed in setting because of the way it is being used. another constant was declared named backup and it was directly assigned the object of settings by saying the value of the constant backup is directly settings and not that it was referenced for it to create it as another object, so any changes made to either of the constants, either the former or later; it will automatiaclly reflect for each const object

// Part B
// The developer misunderstood because the developer thought the backup he created was only making use of the original value of what he was backing up meanwhile it's the same thing because both the main object the developer created and the backup are both pointing or making use of the same property of the object, so a change in property will affect the other which was created and vice versa. The correct way to fix this is to make use of the spread operator (...) which will allow the backup to know that it's operating independently from the property of the inital object created but it's making us of it's inital value. So any changes after to the initial object created will not affect the backup with the spread operator. The method to use the spread operator is below:
const settings = { theme: "dark", fontSize: 14};
// settings.theme = "light";
const backup = {...settings};
settings.theme = "light";
console.log(backup.theme)
// the only time the value of the backup can change is if we change the propety of the initial object before making use of it with the spread operator in the backup

// Part C
// The limitation to the spread operator is that it does not fully works for an object with nested objects. An example is below:
const userInfo = {
    name: "Alice",
    characteristics: {
        complexion: "light",
        height: "short"
    }
}
const userInfo2 = {...userInfo}
userInfo2.characteristics.height = "tall"
console.log(userInfo.characteristics.height)

// Question 4: Factory Functions
function createCounter(startValue) {
    return {
        count: startValue,
        increment: function() { this.count++; },
        reset: function() { this.count = startValue; }
    };
}

const counterA = createCounter(0);
const counterB = createCounter(10);
counterA.increment();
counterA.increment();
counterB.increment();
console.log(counterA.count);
console.log(counterB.count);

// Part A
// counterA and counterB have independent count values because the function we created we didn't create it to have a fixed value, instead we passed it value as a parameter and whenever the function is called, different arguement can be passed to it when it's called 

// Part B
// The reset method remembers the startValue because the startvalue was passed as a parameter to the function we declared and the way it access the start value which was passed as an object property is that it makes use of the this method of object to access it

// Question 5
function createAccount(owner, balance) {
    return {
        owner: owner,
        balance: balance,
        deposit: function(amount) {
        this.balance += amount;
        },
        withdraw: function(amount) {
            if (amount <= this.balance) {
            this.balance -= amount;
            }
        }
    };
}

const accountA = createAccount("Alice", 500);
const accountB = accountA;
const accountC = { ...accountA };
accountA.deposit(100);
accountB.withdraw(200);
accountC.deposit(50);

// Part A and Part B
// accountA balance = 400, accountB balance = 400, accountC balance = 400

// The balance of accountA is 400, the balance of accountB is 400 and the balance of accountC is 550. The balance of accountA and accountB are the same because accountA and accountB are both dependent on each other. Any changes made to accountB will affect accountA and vice versa; this is because we directly assigned the object property of accountA to accountB. The value of accountC is different because the spread operator was used, which means that it is creating another object but still making use of the object property of accountA but they are independent of each other. This simply implies that a change in accountC object property won't affect accountA except there is a limitation of the spread operator like a nested property in the object.

