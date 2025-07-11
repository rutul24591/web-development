const { MongoClient, ObjectId } = require("mongodb");

const MONGO_URL =
    "mongodb+srv://rutulaminra:QjTbw6VZvcytCmPP@tinder-cluster.0jisren.mongodb.net/?retryWrites=true&w=majority&appName=tinder-cluster";

const dbName = "sample_mflix";
const client = new MongoClient(MONGO_URL);

const run = async () => {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });

        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );

        const db = client.db(dbName);
        const collection = db.collection("comments");

        /** INSERT A RECORD */
        const data = {
            name: "Rutul Amin",
            email: "rutualamin@rediffmail.com",
            movie_id: {
                $oid: "573a1390f29313caabcd4eaf",
            },
            text: "Insert new record for  RRR",
            date: {
                $date: new Date(),
            },
        };

        const insertRecord = await collection.insertOne(data);

        console.log(`InsertRecord: `, insertRecord);

        /** FIND A RECORD */
        const fetchComments = await collection.findOne({});
        console.log("DATA:", fetchComments);

        const countComments = await collection.countDocuments();
        console.log("COUNT COMMENTS DATA:", countComments);

        /** DELETE */
        // _id : 5a9427648b0beebeb6957a21
        const _id = new ObjectId("5a9427648b0beebeb6957a21");
        const query = { _id: _id };

        // const query = { name: "Mercedes Tyler" };
        const removeData = await collection.deleteOne(query);
        console.log(`REMOVED DATA: `, removeData);

        /** UPDATE */
        const updateData = await collection.updateOne(
            { name: "Taylor Scott" },
            { $set: { text: "Iure laboriosam quo et necessitatibus RRR" } },
            { upsert: true }
        );

        console.log("Update data: ", updateData);
    } catch (error) {
        console.log(`ERROR connecting to MONGO DB: ${error}`);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
};

run();
