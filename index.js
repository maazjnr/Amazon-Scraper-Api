const express = require("express");
const app = express();
const request = require("request-promise");
const apiKey = '960cd019cd1568d0d87103b2bc782df1';

const baseUrl = `http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Welcome to amazon scraper Api");
  });

//Getting Product Details
app.get("/products/:productId", async (req, res) => {
  const { productId } = req.params;

  try {
    const response = await request(
      `${baseUrl}&url=https://www.amazon.com/dp/${productId}`
    );
    res.json(JSON.parse(response));
  } catch (err) {
    res.json(err);
  }

});


app.listen(PORT, () => console.log(`Server running on port ${PORT} `));




