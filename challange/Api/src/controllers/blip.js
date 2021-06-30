const axios = require('axios');

const goRepo = async (req, resp) => {
    try {
    const { data } = await axios.get('https://api.github.com/users/takenet/repos')
    const formatDate = data.filter(repo => repo.language == 'C#' 
    ).sort((a, b) => {
     return new Date(b.created_at) - new Date(a.created_at)
      
})
    return formatDate;
  } catch (error) {
    console.log(error)
    return error
  }
}

module.exports = goRepo;
