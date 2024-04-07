// QUERY 5: AGGREGATION + FINDING DOCUMENTS WITH SPECIFIC CRITERIA
// Find all the dining halls that have servings of dishes that are rated 4 or higher. Then list all the names of those dishes
// that are rated 4 or higher.

// ========================== RESULTS FROM QUERY =========================================
// [
//     {
//       _id: 'MIT Main Cafeteria',
//       highRatedDishes: [ "Engineer's Enchiladas" ]
//     },
//     {
//       _id: "John Harvard's Kitchen",
//       highRatedDishes: [ 'New England Clam Chowder' ]
//     },
//     {
//       _id: 'Curry Student Center',
//       highRatedDishes: [ 'Veggie Omelet', 'Chicken Salad' ]
//     },
//     { _id: 'Levine Hall Dining', highRatedDishes: [ 'Quinoa Bowl' ] }
//   ]

import { MongoClient } from "mongodb";

const agg = [
  { $unwind: "$diningHalls" },
  { $unwind: "$diningHalls.foodDishes" },
  { $unwind: "$diningHalls.foodDishes.servings" },
  { $unwind: "$diningHalls.foodDishes.servings.ratings" },
  { $match: { "diningHalls.foodDishes.servings.ratings.rating": { $gt: 4 } } },
  {
    $group: {
      _id: "$diningHalls.name",
      highRatedDishes: { $addToSet: "$diningHalls.foodDishes.name" },
    },
  },
];

const client = await MongoClient.connect("mongodb://localhost:27017/");
const coll = client.db("project2").collection("college_dininghalls");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
console.log(result);
await client.close();
