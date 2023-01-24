require('dotenv').config();
var Airtable = require('airtable');
var base = new Airtable({ apiKey: process.env.REACT_APP_MY_API_TOKEN }).base(process.env.REACT_APP_AIRTABLE_BASE_ID);
const table = base(process.env.REACT_APP_AIRTABLE_TABLE_NAME);

module.exports = { table };

