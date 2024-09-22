import React, { useEffect, useState } from 'react';
import { leftlogo1, my, rec } from '../assets';

const Skill = () => {
  // State for skill progress bars
  const [skills, setSkills] = useState({
    html: 0,
    css: 0,
    js: 0,
    react: 0,
  });

  useEffect(() => {
    // Simulate loading skill progress with staggered animation for each skill
    const loadSkills = () => {
      const skillTimeouts = [
        setTimeout(() => setSkills((prev) => ({ ...prev, html: 90 })), 500),
        setTimeout(() => setSkills((prev) => ({ ...prev, css: 85 })), 1000),
        setTimeout(() => setSkills((prev) => ({ ...prev, js: 80 })), 1500),
        setTimeout(() => setSkills((prev) => ({ ...prev, react: 75 })), 2000),
      ];

      return () => {
        skillTimeouts.forEach(clearTimeout);
      };
    };

    loadSkills();

    // Cleanup to clear timeouts on unmount
    return () => {
      loadSkills();
    };
  }, []);

  return (
    <>
      <div className="w-full p-5 max-sm:p-5 max-sm:pl-7 flex max-sm:flex-col h-screen max-sm:mt-10 relative">
        {/* Left Section */}
        <div className="absolute left-17 max-sm:right-0">
          <img src={leftlogo1} alt="" width={100} />
        </div>
        <div className="absolute right-0 max-sm:right-0 bottom-6 max-sm:hidden">
          <img src={rec} alt="" width={200} />
        </div>

        <div className="w-[50%] max-sm:w-full flex-col pt-[4rem] max-sm:pt-0 pl-32 max-sm:p-0">
          {/* Header */}
          <div className="max-sm:flex">
            <h1 className="primary_text text-[#F75023] font-sans text-[22px]">
              Develop is Life
            </h1>
          </div>

          {/* Sub-header */}
          <div className="max-sm:w-full max-sm:flex justify-center">
            <h1 className="primary_text1 text-[33px] font-semibold mt-5">
              I Develop Skills Regularly to Keep Me Updated
            </h1>
          </div>

          {/* Description */}
          <div className="mt-5">
            <p className="text-[#6F6B80] text-[18px] font-serif text-pretty max-sm:mb-7">
              The most common methods for designing websites that work well on
              desktop include responsive and adaptive design.
            </p>
          </div>

          {/* Skill Progress Bars */}
          <div className="w-[85%] max-sm:w-full flex-col justify-center items-center">
            <SkillBar label="HTML" percentage={skills.html} />
            <SkillBar label="CSS" percentage={skills.css} />
            <SkillBar label="JavaScript" percentage={skills.js} />
            <SkillBar label="React.js" percentage={skills.react} />
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-[50%] max-sm:w-full">
          <div className="flex justify-center mt-7 max-sm:hidden">
            <img src={my} alt="Developer Image" width={300} height={300} />
          </div>
        </div>
      </div>
    </>
  );
};

const SkillBar = ({ label, percentage }) => {
  return (
    <div className="mb-0 mt-5 max-sm:mt-2">
      {/* Label and Percentage */}
      <div className="flex justify-between">
        <p className="text-[#6F6B80] text-[10px] font-semibold">{label}</p>
        <p className="text-[#F75023]">{percentage}%</p>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div
          className="bg-[#F75023] h-2 rounded-full transition-all duration-500 ease-in-out"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skill;
