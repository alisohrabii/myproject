import React from 'react';
import LoadingSniper2 from './component/LoadingSniper2';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const Tests = () => {
    return (
        <div style={{width:'14%',height:"300px",backgroundColor:'blue'}} >
        <LoadingSniper2/>
        </div>
    );
};

export default Tests;