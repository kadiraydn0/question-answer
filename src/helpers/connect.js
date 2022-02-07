import mongoose from "mongoose";

function connect() {
    return mongoose
        .connect(process.env.DB_URI, {
            useNewUrlParser: true
        })
        .then(() => {
            console.log("Database Connected");
        })
        .catch((error) => {
            console.log("Mongo Connect Error", error)
            process.exit(1);
        });
}

export default connect;