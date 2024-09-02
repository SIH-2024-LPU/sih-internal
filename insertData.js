const axios = require('axios');
const fs = require('fs');

const insertData = async () => {
  try {
    const rawData = fs.readFileSync('./data.json', 'utf8');
    const careerData = JSON.parse(rawData);

    const response = await axios.post('http://localhost:3000/api/careers/insert', careerData);
    console.log(response.data);
  } catch (error) {
    console.error('Error inserting data:', error.response ? error.response.data : error.message);
  }
};

insertData();