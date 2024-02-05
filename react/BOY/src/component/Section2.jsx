import React, { useState } from 'react';
import './main.css/'
const Section2 = () => {
    const [hover, setHover] = useState(null);

    const handleHover = (e) => {
        setHover(e);
    };

    const handleMouseLeave = () => {
        setHover(null);
    };
    return (
        <>
            <div className='container'>
                <div>
                    <div style={{ textAlign: 'center', padding: '20px', margin: '20px' }}><span class="text1-sec1">My</span> <span
                        class="text2-sec1">Skills</span></div>
                </div>
                <div class="flex1-sec2">
                    <div class="grid-skills ">
                        <div class='tex6-sec2'
                            className={hover === 1 ? 'hover' : ' tex6-sec2'}
                            onMouseEnter={() => handleHover(1)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div class="center">
                                <img src="/img/git.png" alt="" class="img11-sec1" />
                                <p>Git</p>
                            </div>
                        </div>
                        <div class="tex6-sec2"
                            className={hover === 2 ? 'hover' : ' tex6-sec2'}
                            onMouseEnter={() => handleHover(2)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div class="center"><img src="/img/js.png" alt="" class="img11-sec1" />
                                <p>Javascript</p>
                            </div>

                        </div>
                        <div class="tex6-sec2"
                            className={hover === 3 ? 'hover' : ' tex6-sec2'}
                            onMouseEnter={() => handleHover(3)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div class="center"><img src="/img/sass.png" alt="" class="img11-sec1" />
                                <p>Sass/Scss</p>
                            </div>

                        </div>
                        <div class="tex6-sec2 "
                            className={hover === 4 ? 'hover' : ' tex6-sec2'}
                            onMouseEnter={() => handleHover(4)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div class="center"><img src="/img/nest-black.png" alt="" class="img11-sec1" />
                                <p>Nest.Js</p>
                            </div>

                        </div>
                        <div class="tex6-sec2 "
                            className={hover === 5 ? 'hover' : ' tex6-sec2'}
                            onMouseEnter={() => handleHover(5)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div class="center">
                                <img src="/img/storybook-black.png" alt="" class="img11-sec1" />
                                <p>Storybook</p>
                            </div>

                        </div>
                    </div>
                    <div class="grid-skills">
                        <div class="tex6-sec2"
                            className={hover === 6 ? 'hover' : ' tex6-sec2'}
                            onMouseEnter={() => handleHover(6)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div class="center">
                                <img src="/img/nest-black.png" alt="" class="img11-sec1" />
                                <p >Nest.Js</p>
                            </div>
                        </div>
                        <div class="tex6-sec2"
                            className={hover === 7 ? 'hover' : ' tex6-sec2'}
                            onMouseEnter={() => handleHover(7)}
                            onMouseLeave={handleMouseLeave} >
                            <div class="center">
                                <img src="/img/git.png" alt="" class="img11-sec1" />
                                <p>Git</p>
                            </div>
                        </div>
                        <div class="tex6-sec2"
                            className={hover === 8 ? 'hover' : ' tex6-sec2'}
                            onMouseEnter={() => handleHover(8)}
                            onMouseLeave={handleMouseLeave} >
                            <div class="center">
                                <img src="/img/storybook-black.png" alt="" class="img11-sec1" />
                                <p>Storybook</p>
                            </div>

                        </div>
                        <div class="tex6-sec2"
                            className={hover === 9 ? 'hover' : ' tex6-sec2'}
                            onMouseEnter={() => handleHover(9)}
                            onMouseLeave={handleMouseLeave} >
                            <div class="center">
                                <img src="/img/socket-blackt.png" alt="" class="img11-sec1" />
                                <p>Socket.Io</p>
                            </div>
                        </div>
                        <div class="tex6-sec2"
                            className={hover === 10 ? 'hover' : ' tex6-sec2'}
                            onMouseEnter={() => handleHover(10)}
                            onMouseLeave={handleMouseLeave} >
                            <div class="center">
                                <img src="/img/sass.png" alt="" class="img11-sec1" />
                                <p>Sass/Scss</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2