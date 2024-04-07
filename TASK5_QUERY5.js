import { MongoClient } from "mongodb";

const agg = [
    { $unwind: "$diningHalls" },
    { $unwind: "$diningHalls.foodDishes" },
    { $unwind: "$diningHalls.foodDishes.servings" },
    { $unwind: "$diningHalls.foodDishes.servings.ratings" },
    { $match: { "diningHalls.foodDishes.servings.ratings.rating": { $gt: 4 } } },
    { $group: { _id: "$diningHalls.name", highRatedDishes: { $addToSet: "$diningHalls.foodDishes.name" } } }
  ];

const client = await MongoClient.connect("mongodb://localhost:27017/");
const coll = client.db("project2").collection("college_dininghalls");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
console.log(result);
await client.close();

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