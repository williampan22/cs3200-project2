// QUERY 1: AGGREGATION (At least one query must use the aggregation framework)
// Calculate the average ratings for each dining hall
// (for each dining hall, sum up the average ratings for the food served at that dining hall)

// ========================== RESULTS FROM QUERY =========================================
// [
//   {
//     averageRating: 4.333333333333333,
//     diningHallName: "John Harvard's Kitchen"
//   },
//   { averageRating: 4.75, diningHallName: 'Curry Student Center' },
//   {
//     averageRating: 3.6666666666666665,
//     diningHallName: 'BU Food Court'
//   },
//   { averageRating: 4.5, diningHallName: 'MIT Main Cafeteria' },
//   {
//     averageRating: 2.5833333333333335,
//     diningHallName: 'Levine Hall Dining'
//   }
// ]

// NOTE: I used this stack overflow article to help me with this and the next queries: 
// https://stackoverflow.com/questions/35326089/can-i-aggregate-embedded-documents-in-mongodb-by-using-dot-notation
// https://www.mongodb.com/docs/manual/reference/operator/aggregation/project/

import { MongoClient } from "mongodb";

const agg = [
  { $unwind: "$diningHalls" },
  { $unwind: "$diningHalls.foodDishes" },
  { $unwind: "$diningHalls.foodDishes.servings" },
  { $unwind: "$diningHalls.foodDishes.servings.ratings" },
  {
    $group: {
      _id: {
        diningHallId: "$diningHalls._id",
        diningHallName: "$diningHalls.name",
      },
      averageRating: {
        $avg: "$diningHalls.foodDishes.servings.ratings.rating",
      },
    },
  },
  {
    $project: {
      diningHallName: "$_id.diningHallName",
      averageRating: 1,
      _id: 0,
    },
  },
];

const client = await MongoClient.connect("mongodb://localhost:27017/");
const coll = client.db("project2").collection("college_dininghalls");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
console.log(result);
await client.close();
