import React from 'react';
import MayCourses from "./maynCours/MaynCours";
import Last from "./lastr/Last";

import Review from "./Review/review";
import PageBooks from "../PageBooks";
import Books from "../../components/main/Books";
import CreatingCommand from "./CreatingCommand";
import Courses from "./Courses/Courses";
const OurCourses = () => {
    return (
        <>
            <MayCourses/>
            <CreatingCommand/>
            <Courses/>
            <Last/>
            <Review/>
            <Last/>

        </>
    );
};

export default OurCourses;