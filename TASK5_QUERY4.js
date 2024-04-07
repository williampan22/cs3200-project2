// QUERY 4: UPDATING A DOCUMENT BASED ON A QUERY (one must be updating a document based on a query parameter)
// Update all the names of students who attend college at Northeastern Univeristy to "John Alexis Guerra Gomez Student"

// ========================== RESULTS FROM QUERY =========================================
// THERE ARE NO RESULTS FROM THIS QUERY SINCE IT DOES NOT FIND DOCUMENTS, BUT UPDATES THEM
// IF YOU LOOK AT MongoDBCompass THE NAMES OF STUDENTS AT NORTHEASTERN WILL BE CHANGED
// I HAVE PROVIDED AN IMAGE IN THE GITHUB FOR PROOF

// NOTE: I used this link while researching how to update many attributes in a list. 
// https://stackoverflow.com/questions/51206841/update-multiple-elements-in-an-array-in-mongodb

import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

try {
  await client.connect();
  const database = client.db("project2");
  const collection = database.collection("college_dininghalls");

  const updateResult = await collection.updateOne(
    { _id: "college-id-1" },
    { $set: { "students.$[].name": "John Alexis Guerra Gomez Student" } }
  );

  console.log(updateResult);
} finally {
  await client.close();
}
