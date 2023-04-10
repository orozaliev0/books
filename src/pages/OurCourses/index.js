import React from 'react';
import MayCourses from "./maynCours/MaynCours";
import Last from "./lastr/Last";

import Review from "./Review/review";
import PageBooks from "../PageBooks";
import Books from "../../components/main/Books";
import CreatingCommand from "./CreatingCommand";
const OurCourses = () => {
    return (
        <>
            <MayCourses/>
            <CreatingCommand/>
            <Review/>
            <Last/>

        </>
    );
};

export default OurCourses;