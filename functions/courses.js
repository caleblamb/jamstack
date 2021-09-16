const formattedReturn = require('./helpers/formattedReturn');
const getCourses = require('./helpers/getCourses');
const createCourse = require('./helpers/createCourse');
const deleteCourse = require('./helpers/deleteCourse');
const updateCourse = require('./helpers/updateCourse');
exports.handler = async (event) => {
    if (event.httpMethod === 'GET') {
        return getCourses(event);
    } else if (event.httpMethod === 'POST') {
        return createCourse(event);
    } else if (event.httpMethod === 'PUT') {
        return updateCourse(event);
    } else if (event.httpMethod === 'DELETE') {
        return deleteCourse(event);
    } else {
        return formattedReturn(405, {});
    }
};
