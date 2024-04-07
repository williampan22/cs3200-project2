// QUERY 3: COUNTING DOCUMENTS FOR A SPECIFIC USER (one should be counting documents for an specific user)
// Count how many servings of dishes the first student/user (student ID 1) has rated.

// ========================== RESULTS FROM QUERY =========================================
// [ { totalRatingsByStudentId1: 4 } ]
// INTERPRETATION: The first student (William Pan) has rated 4 servings of dishes total.

import { MongoClient } from "mongodb";

const agg = [
  { $unwind: "$diningHalls" },
  { $unwind: "$diningHalls.foodDishes" },
  { $unwind: "$diningHalls.foodDishes.servings" },
  { $unwind: "$diningHalls.foodDishes.servings.ratings" },
  {
    $match: {
      "diningHalls.foodDishes.servings.ratings.student_id": "student-id-1",
    },
  },
  {
    $count: "totalRatingsByStudentId1",
  },
];

const client = await MongoClient.connect("mongodb://localhost:27017/");
const coll = client.db("project2").collection("college_dininghalls");
const cursor = coll.aggregate(agg);
const result = await cursor.toArray();
console.log(result);
await client.close();
