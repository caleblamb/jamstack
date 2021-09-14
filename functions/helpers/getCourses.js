const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    const courses = await table.select().firstPage();
    const formattedCourses = courses.map((course) => ({
        id: course.id,
        ...course.fields,
    }));
    return {
      statusCode: 200,
      body: JSON.stringify(formattedReturn),
    };
};