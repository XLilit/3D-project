import React from 'react';
import {HashLoader} from "react-spinners";
import './style.scss'
import usePreloader from '../../hook/usePreloader';

const Preloader = () => {
    const {isLoading} = usePreloader()
    return isLoading && (
        <div className='P-isLoading G-flex G-flex-column G-justify-center G-align-center'>
       
            <HashLoader size={66} color={'#6B85BF'} loading={isLoading}/>
        </div>
    );
};

export default Preloader;