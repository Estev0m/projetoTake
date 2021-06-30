const axios = require('axios');

const goRepo = async (req, resp) => {
    try {
    const { data } = await axios.get('https://api.github.com/users/takenet/repos',{params:{"sort": "created","direction": "asc" }})
    const formatDate = data.filter(repo => repo.language == 'C#') 

    return formatDate;
  } catch (error) {
    console.log(error)
    return error
  }
}

module.exports = goRepo;
