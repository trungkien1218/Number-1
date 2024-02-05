import React, { useState } from 'react';
import './main.css';
const Header = () => {
    const [onNavi, setOnNavi] = useState(false);
    const toggleCode = () => {
        setOnNavi(!onNavi);
    }
    return (
        <>
            <div class="container flex-header">
                <div class="flex2-head">
                    <div> <img src="img/logo.png" alt="" class="img1-head" /></div>
                    <span class="text1-head ">Personal</span>
                </div>
                <div onClick={toggleCode} className='hamberger'>
                    <img src="img/hamberger.png" alt="" />
                </div>
                {onNavi && <div class=" main-nav  ">
                    <div class="navigation ">
                        <div class="option-1">About me</div>
                        <div class="option-1">Skills</div>
                        <div class="option-1">Project</div>
                        <div class="option-1">Contact Me</div>
                    </div>
                    <div class="overlay" onClick={toggleCode}></div>
                </div>}
                <div class="navigation-1 ">
                        <div class="option-1">About me</div>
                        <div class="option-1">Skills</div>
                        <div class="option-1">Project</div>
                        <div class="option-1">Contact Me</div>
                    </div>
                <div className='resume'>
                    <a href="#" class="option BG-resume">
                        <div style={{color: 'white'}}>Resume</div>
                        <div class="download"><img src="img/download.png" alt=""/></div>
                    </a>
                </div>
            </div>

        </>
    )
}

export default Header