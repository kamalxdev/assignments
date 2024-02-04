/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {

  let CalculateTotalSpent = -[];
  for (let i = 0; i < transactions.length; i++) {
    let ta = transactions[i]
    if (!CalculateTotalSpent) {
      CalculateTotalSpent = [{ category: ta.category, totalSpent: ta.price }]
    }
    else {
      let mapped = false
      CalculateTotalSpent.map((spent, index) => {
        if (spent?.category == ta.category) {
          CalculateTotalSpent[index].totalSpent += ta.price;
          mapped = true
        }
      })
      if (
        !mapped
      ) {
        CalculateTotalSpent = [...CalculateTotalSpent, { category: ta.category, totalSpent: ta.price }]

      }
    }
  }
  return CalculateTotalSpent || [];
}


module.exports = calculateTotalSpentByCategory;
