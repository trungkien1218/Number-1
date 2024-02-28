import React, { useState } from 'react';
import './main.css';
const Header = () => {
    const [onNavi, setOnNavi] = useState(false);
    const toggleCode = () => {
        setOnNavi(!onNavi);
    }
    return (
        <>
            <div className="container flex-header">
                <div className="flex2-head">
                    <div> <img src="img/logo.png" alt="" className="img1-head" /></div>
                    <span className="text1-head ">Personal</span>
                </div>
                <div onClick={toggleCode} className='hamberger'>
                    <img src="img/hamberger.png" alt="" />
                </div>
                {onNavi && <div className="main-nav">
                    <div className="navigation">
                        <div className="option-1">About me</div>
                        <div className="option-1">Skills</div>
                        <div className="option-1">Project</div>
                        <div className="option-1">Contact Me</div>
                    </div>
                    <div className="overlay" onClick={toggleCode}></div>
                </div>}
                <div className="navigation-1">
                    <div className="option-1">About me</div>
                    <div className="option-1">Skills</div>
                    <div className="option-1">Project</div>
                    <div className="option-1">Contact Me</div>
                </div> 
                <div className='resume'>
                    <a href="#" className="option BG-resume">
                        <div style={{ color: 'white' }}>Resume</div>
                        <div className="download"><img src="img/download.png" alt="" /></div>
                    </a>
                </div>
            </div>

        </>
    )
}

export default Header