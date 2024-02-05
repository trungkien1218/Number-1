import React, { useState } from 'react';
import './main.css/'
const Section1 = () => {
  const [hovered, setHovered] = useState(null);

  const handleHover = (e) => {
    setHovered(e);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };
  return (
    <>
      <div className='container'>
        <div className='flex1-sec1'>
          <div className='img123-sec1'>
            <img src="/img/main.png" alt=""/>
          </div>
          <div class="intro center">
            <p><span class="text1-sec1">Hello I'am</span> <span class="text2-sec1">Evren Shah.</span></p>
            <p><span class="text2-sec1">Frontend</span> <span class="text3-sec1">Developer</span></p>
            <span class="text1-sec1">Based In</span> <span class="text2-sec1">India</span>
            <p class="text4-sec1">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to specimen book.</p>
            <div class="flex11-sec1 ">

              <div
                className={hovered === 1 ? 'hovered' : ' four-button'}
                onMouseEnter={() => handleHover(1)}
                onMouseLeave={handleMouseLeave}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" class="bi bi-facebook center " viewBox="0 0 16 16">
                  <path
                    d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </div>

              <div
                className={hovered === 2 ? 'hovered' : ' four-button'}
                onMouseEnter={() => handleHover(2)}
                onMouseLeave={handleMouseLeave}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" class="bi bi-reddit center" viewBox="0 0 16 16">
                  <path
                    d="M6.167 8a.83.83 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661m1.843 3.647c.315 0 1.403-.038 1.976-.611a.23.23 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83s.83-.381.83-.83a.831.831 0 0 0-1.66 0z" />
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.2.2 0 0 0-.153.028.2.2 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224q-.03.17-.029.353c0 1.795 2.091 3.256 4.669 3.256s4.668-1.451 4.668-3.256c0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165" />
                </svg>
              </div>
              <div
                className={hovered === 3 ? 'hovered' : ' four-button'}
                onMouseEnter={() => handleHover(3)}
                onMouseLeave={handleMouseLeave}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" class="bi bi-twitter center" viewBox="0 0 16 16">
                  <path
                    d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                </svg>
              </div>

              <div
                className={hovered === 4 ? 'hovered' : ' four-button'}
                onMouseEnter={() => handleHover(4)}
                onMouseLeave={handleMouseLeave}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                  fill="currentColor" class="bi bi-discord center" viewBox="0 0 16 16">
                  <path
                    d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1