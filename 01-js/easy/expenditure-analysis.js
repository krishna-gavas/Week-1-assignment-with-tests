/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  // Define a map to store category and associated total price
  const spent = new Map();

  // Define an array to store the keys in an unordered fashion
  const keys = [];

  for (const transaction of transactions) {
    if(spent.has(transaction.category)){
      // If the category is observed previously, retrieve the old price
      // and add it with current price
      const oldPrice = spent.get(transaction.category);
      spent.delete(transaction.category);
      spent.set(transaction.category, oldPrice + transaction.price);
    }
    else{
      // If category is observed for first time, make an entry into the map
      // and also add the category to keys
      spent.set(transaction.category, transaction.price);
      keys.push(transaction.category);
    }
  }

  const outputArray = [];

  for(key of keys) {
    const obj = {category: key, totalSpent: spent.get(key) };
    outputArray.push(obj);
  }

  return outputArray;
}

module.exports = calculateTotalSpentByCategory;
