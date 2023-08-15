import { useState } from "react";


const ToggleButton = () => {
      const [activeRole, setActiveRole] = useState('jobSeeker');

      const handleToggle = () => {
            if (activeRole === 'jobSeeker') {
                  setActiveRole('jobPoster');
            } else {
                  setActiveRole('jobSeeker');
            }
      }
      return (
            <div className="toggle-container">
                  <button
                        className={activeRole === 'jobSeeker' ? 'active' : ''}
                        onClick={handleToggle}
                  >
                        Job Seeker
                  </button>
                  <button
                        className={activeRole === 'jobPoster' ? 'active' : ''}
                        onClick={handleToggle}
                  >
                        Job Poster
                  </button>
            </div>
      );
};

export default ToggleButton;