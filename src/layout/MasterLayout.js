import React from 'react';
import Navbar from "../components/navigation/Navbar";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";

const MasterLayout = () => {
    return (
        <div>
            {/*Header*/}
            <Navbar/>
            {/*Content*/}
            <Outlet/>
            {/*Footer*/}
            <Footer/>
        </div>
    );
};

export default MasterLayout;