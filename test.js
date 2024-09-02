const fs = require('fs');
const path = require('path');

// Path to your data.json file
const filePath = path.join(__dirname, 'data.json');

// Function to generate random hiring trends, salaries, and top entities
const generateRandomData = () => {
    const years = Array.from({ length: 10 }, (_, i) => 2014 + i);
    const hiringTrends = {};
    const salaries = {};
    const topCountries = [];
    const topCompanies = [];

    for (const year of years) {
        hiringTrends[`Year_${year}`] = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        salaries[`Year_${year}`] = Math.floor(Math.random() * (120000 - 30000 + 1)) + 30000;
    }

    // Random top countries
    for (let i = 0; i < 6; i++) {
        topCountries.push(`Country_${Math.floor(Math.random() * 100)}`);
    }

    // Random top companies
    for (let i = 0; i < 6; i++) {
        topCompanies.push(`Company_${Math.floor(Math.random() * 100)}`);
    }

    return {
        hiringTrends,
        salaries,
        topCountries,
        topCompanies
    };
};

// Load existing data
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;

    // Parse existing data
    const jsonData = JSON.parse(data);

    // Generate new random data
    const newData = generateRandomData();

    // Append the new data to existing data
    jsonData.push(newData);

    // Save the updated data back to data.json
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 4), 'utf8', (err) => {
        if (err) throw err;
        console.log('Data has been updated');
    });
});
