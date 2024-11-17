import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB!!");
  } catch (err: any) {
    console.error(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
