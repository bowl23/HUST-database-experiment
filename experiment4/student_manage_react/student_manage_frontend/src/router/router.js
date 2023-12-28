//router.js
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Student from "../pages/student";
import Sc from "../pages/sc";
import Course from "../pages/course";
import Statistics from "../pages/statistics/idnex";
import PersonalGrade from "../pages/personalGrade";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: 'student',
        element: <Student />
    },
    {
        path: 'sc',
        element: <Sc />
    },
    {
        path: 'course',
        element: <Course />
    },
    {
        path: 'statistics',
        element: <Statistics />
    },
    {
        path: 'personalGrade',
        element: <PersonalGrade />
    }
])

export default router;