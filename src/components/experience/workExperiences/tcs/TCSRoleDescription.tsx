import React from 'react';

interface TCSRoleDescriptionProps {
  title: string;
}

export default function TCSRoleDescription({ title }: TCSRoleDescriptionProps) {
  return (
    <div className="w-[92%] text-black h-[92%] bg-tcs-background bg-cover border-[8px] border-white rounded-md shadow-md relative">
      <div className="w-9/12 h-full bg-white/70 backdrop-blur-lg flex justify-center font-roboto">
        <div className="w-11/12 py-3 relative">
          <p className="w-full text-center text-xl font-sairaStencilOne text-pink-600">
            {title}
          </p>
          <div className="w-full flex flex-row items-center mt-3">
            <p className="w-1/2">
              <span className="text-pink-500 font-sairaStencilOne">
                Current role:
              </span>{' '}
              Junior Analyst
            </p>
            <p className="w-1/2 text-right">
              <span className="text-pink-500 font-sairaStencilOne">
                Hightest role:
              </span>{' '}
              Junior Analyst
            </p>
          </div>
          <p className="w-full mt-6 text-justify text-lg">
            In my role as a{' '}
            <span className="font-bold">Full Stack Software Engineer</span> at
            <span className="text-pink-500 font-bold">
              {' '}
              Tata Consultancy Services
            </span>
            , I am responsible for developing and maintaining enterprise-level
            applications that cater to diverse client needs across various
            industries. My work involves utilizing a wide range of technologies,
            including React, Next.js and Angular and back-end frameworks like
            Node.js and Express.js to create efficient, user-centric solutions.
          </p>
          <p className="w-full mt-4 text-justify text-lg">
            My experience at TCS has equipped me with a strong foundation in
            full stack development while honing my problem-solving skills and
            ability to work effectively in dynamic team environments. I am
            dedicated to continuous learning and leveraging emerging
            technologies to drive innovation and improve application
            functionality.
          </p>
        </div>
      </div>
    </div>
  );
}
