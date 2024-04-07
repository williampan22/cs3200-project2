import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const database = client.db("project2");
        const collection = database.collection("college_dininghalls");

        const updateResult = await collection.updateOne(
            { "_id": "college-id-1" },
            { $set: { "students.$[].name": "John Alexis Guerra Gomez Student" } }
        );
        
        console.log(updateResult);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);