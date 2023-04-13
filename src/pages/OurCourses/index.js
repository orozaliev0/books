import React from 'react';
import MayCourses from "./maynCours/MaynCours";
import Last from "./lastr/Last";

import Review from "./Review/review";
import Courses from "./Courses/Courses";
const OurCourses = () => {
    return (
        <>
            <MayCourses/>
            <Courses/>
            <Review/>
        </>
    );
};

export default OurCourses;