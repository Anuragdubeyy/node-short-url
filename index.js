const express = require("express");
const userUrlRoutes = require("./routes/url");
const {connectMongoDb} = require("./connect");
const URL = require("./models/url");
 const path  = require('path');
 const staticRoute = require('./routes/staticRouter');

const app = express();
const PORT = 8001;
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/url", userUrlRoutes);
app.use("/", staticRoute);

connectMongoDb("mongodb://127.0.0.1:27017/short-url")
  .then(() => console.log("mongoDb connected"))
  .catch((err) => console.log("mongo error", err));


  app.set('view engine', 'ejs');
  app.set('views', path.resolve('./views'));

//   app.get('/test', async (req, res) => {
//     const allUrl = await URL.find({});
//     return res.render("home", {urls: allUrl})

//   })

app.get('/url/:shortId', async (req, res) =>{
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
