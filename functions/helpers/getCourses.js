import LogRocket from 'logrocket';
const { table } = require('./airtable');
const formattedReturn = require('./formattedReturn');
module.exports = async (event) => {
    console.log();
    const courses = await table.select().firstPage();
    console.log();
    const formattedCourses = courses.map((course) => ({
        id: course.id,
        ...course.fields,
    }));
    console.log();
    return formattedReturn(200, formattedCourses);
};
LogRocket.init('zwdu1u/digital-labs');