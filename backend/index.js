import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import route from "./routes/route.js"
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const CONNECTION_URI = process.env.CONNECTION_URI;
mongoose.connect(CONNECTION_URI, {useNewUrlParser: true, useUnifiedTopology: true})
                .then( () => 
                    app.listen(PORT, () => {
                        console.log(`Local host running on : http://localhost:${PORT}`);
                    })
                )
                .catch( (err)=> {
                    console.log(`${err} not able to connect the db`);
                })
app.use(route);
// app.use('/posts', postsRoute);
// app.use("/users", userRoute);
// app.get('/',(req,res) => {
//     res.status(200).json({msg:"Home"});
// });



