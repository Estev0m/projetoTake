const express = require('express');
const app = express();
const axios = require('axios');
app.use(express.json())
app.get("/repository", async (req, resp) => {
  try {
    const { data } = await axios.get('https://api.github.com/users/takenet/repos')
    const formatDate = data.filter(repo => repo.language == 'C#' 
    ).sort((a, b) => {
     return new Date(b.created_at) - new Date(a.created_at)
      
})
    return resp.json(formatDate)
  } catch (error) {
    console.log(error)
  }

})
app.listen(process.env.PORT || 10000, console.log('Server Online'));

