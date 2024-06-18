const express = require("express");
const userUrlRoutes = require("./routes/url");
const {connectMongoDb} = require("./connect");
const URL = require("./models/url");

const app = express();
const PORT = 8001;
app.use(express.json());

app.use("/url", userUrlRoutes);

connectMongoDb("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("mongoDb connected"))
  .catch((err) => console.log("mongo error", err));

app.get('/:shortId', async (req, res) =>{
    const shortId = req.params.shortId;
    const entry =await URL.findOneAndUpdate({
        shortId
    }, {$push:{
        visitHistory:{
            timestamp: Date.now(),
        }
    }})

    res.redirect(entry.redirectURL);
})


app.listen(PORT, () => console.log(`server is started on port: ${PORT}`));
