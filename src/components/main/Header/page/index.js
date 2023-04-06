import React from 'react';
import "./account.scss"
import imageBook from '../../../../img/coco.svg'
import Avtorizatsiya from "../../../../pages/Avtorizatsiya";

const Account = () => {
    return (
        <div>
            <div className="w-full h-full  z-50 fixed account">
                <div className="flex justify-center items-center flex-col">
                    <img src={imageBook} alt=""/>
                    <h1 className="h">SELF DEVELOPING SCHOOL</h1>
                    <Avtorizatsiya/>
                </div>
            </div>

        </div>
    );
};

export default Account;