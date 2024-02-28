import React, { useState } from 'react'
import './main.css/'
                   
const Section3 = () => {
    const [hoversec3, setHoversec3] = useState(null)

    const handleHover = (e) => {
        setHoversec3(e);
    };

    const handleMouseLeave = () => {
        setHoversec3(null);
    };
    return (
        <>
            <div style={{ backgroundColor: 'black', color: '#FFFFFF'}} >
                <div className="container">
                    <div className='text111-sec3'><span className="text11-sec3">My</span> <span
                        className="text22-sec3">Experience</span>
                    </div>
                    <div
                        className={hoversec3 === 1 ? 'hoversec3' : 'pad-sec3'}
                        onMouseEnter={() => handleHover(1)}
                        onMouseLeave={handleMouseLeave}>
                        <div>
                            <div className="flex-sec3">
                                <div className='flex1-sec3'>
                                    <div className='text12-sec'>
                                        <img src="img/google.png" alt="" />
                                    </div>
                                    <span className="text1-sec3">Lead Software Engineer at Google</span>
                                </div>
                                <p className="text2-sec3">Nov 2019 - Present</p>
                            </div>
                            <p className="text3-sec3">As a Senior Software Engineer at Google, I played a pivotal role in developing
                                innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of
                                engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user
                                experiences for millions of users worldwide.</p>
                        </div>
                    </div>
                    <div className={hoversec3 === 2 ? 'hoversec3' : 'pad-sec3'}
                        onMouseEnter={() => handleHover(2)}
                        onMouseLeave={handleMouseLeave}>
                        <div>
                            <div className="flex-sec3">
                                <div className='flex1-sec3'>
                                    <div className='text12-sec'><img src="img/youtube.png" alt="" /></div>
                                    <span className="text1-sec3">Software Engineer at Youtube </span>
                                </div>
                                <p className="text2-sec3">Jan 2017 - Oct 2019</p>
                            </div>
                            <p className="text3-sec3">At Youtube, I served as a Software Engineer, focusing on the design and
                                implementation of backend systems for the social media giant's dynamic platform. Working on
                                projects
                                that involved large-scale data processing and user engagement features, I leveraged my expertise
                                to
                                ensure seamless functionality and scalability.</p>
                        </div>
                    </div>
                    <div className={hoversec3 === 3 ? 'hoversec3' : 'pad-sec3'}
                        onMouseEnter={() => handleHover(3)}
                        onMouseLeave={handleMouseLeave}>
                        <div>
                            <div className="flex-sec3">
                                <div className='flex1-sec3'>
                                    <div className='text12-sec'><img src="img/apple.png" alt="" /></div>
                                    <span className="text1-sec3">Junior Software Engineer at Apple </span>
                                </div>
                                <p className="text2-sec3">Jan 2016 - Dec 2017 </p>
                            </div>
                            <p className="text3-sec3">During my tenure at Apple, I held the role of Software Architect, where I
                                played a
                                key role in shaping the architecture of mission-critical software projects. Responsible for
                                designing scalable and efficient systems, I provided technical leadership to a cross-functional
                                team.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section3