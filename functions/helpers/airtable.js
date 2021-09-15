const Airtable = require('airtable');

Airtable.configure({
    apiKey: 'keyjSkeH7g5vv2oHe',
});

const base = Airtable.base('appZMYz8cn1L7Li1s');
const table = base.table('courses');

module.exports = { table };