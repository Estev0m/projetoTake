const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.json())
app.get("/repository", async (req, resp) => {
  try {
    const { data } = await axios.get('https://api.github.com/users/takenet/repos')
    const formatDate = data.filter(repo => repo.language == 'C#' 
)
    return resp.json(formatDate)
  } catch (error) {
    console.log(error)
  }

})
app.listen(10000, () => {
    console.log('API Gateway running!');
});
