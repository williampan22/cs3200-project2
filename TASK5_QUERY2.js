import { MongoClient } from "mongodb";

const agg = [
    { $unwind: "$diningHalls" },
    { $unwind: "$diningHalls.foodDishes" },
    { $unwind: "$diningHalls.foodDishes.servings" },
    { $unwind: "$diningHalls.foodDishes.servings.ratings" },
    {
      $match: {
        $or: [
          { "diningHalls.foodDishes.type": "VEGETARIAN" },
          { "diningHalls.foodDishes.servings.ratings.rating": { $lt: 2 } }
        ]
      }
    },
    {
      $project: {
        "Dining Hall": "$diningHalls.name",
        "Dish": "$diningHalls.foodDishes.name",
        "Type": "$diningHalls.foodDishes.type",
        "Rating": "$diningHalls.foodDishes.servings.ratings.rating", 
        _id: 0
      }
    }
  ];

const client = await MongoClient.connect("mongodb://localhost:27017/");
const coll = client.db("project2").collection("college_dininghalls");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
console.log(result);
await client.close();

// [
//     {
//       'Dining Hall': 'Levine Hall Dining',
//       Dish: 'Caesar Salad',
//       Type: 'NONE',
//       Rating: 1
//     },
//     {
//       'Dining Hall': 'Levine Hall Dining',
//       Dish: 'Caesar Salad',
//       Type: 'NONE',
//       Rating: 1
//     },
//     {
//       'Dining Hall': "John Harvard's Kitchen",
//       Dish: 'Harvard Beet Salad',
//       Type: 'VEGETARIAN',
//       Rating: 4
//     }
//   ]