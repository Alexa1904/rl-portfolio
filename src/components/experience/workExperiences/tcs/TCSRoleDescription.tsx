'use client';
import React from 'react';

interface TCSRoleDescriptionProps {
  roleDescription: {
    title: string;
    currentRole: {
      name: string;
      value: string;
    };
    hightestRole: {
      name: string;
      value: string;
    };
    text1: string;
    boldedText: string;
    text2: string;
    text3: string;
    text4: string;
  };
}

export default function TCSRoleDescription({
  roleDescription,
}: TCSRoleDescriptionProps) {
  return (
    <div className="w-[92%] text-black h-[92%] bg-tcs-background bg-cover border-[8px] border-white rounded-md shadow-md relative">
      <div className="w-9/12 h-full bg-white/70 backdrop-blur-lg flex justify-center font-roboto overflow-y-scroll pb-6">
        <div className="w-11/12 py-3 relative">
          <p className="w-full text-center text-xl font-sairaStencilOne text-pink-600">
            {roleDescription.title}
          </p>
          <div className="w-full flex flex-row items-center mt-3">
            <p className="w-1/2">
              <span className="text-pink-500 font-sairaStencilOne">
                {roleDescription?.currentRole?.name}
              </span>{' '}
              {roleDescription?.currentRole?.value}
            </p>
            <p className="w-1/2 text-right">
              <span className="text-pink-500 font-sairaStencilOne">
                {roleDescription?.hightestRole?.name}
              </span>{' '}
              {roleDescription?.hightestRole?.value}
            </p>
          </div>
          <p className="w-full mt-6 text-justify text-lg">
            {roleDescription?.text1}{' '}
            <span className="font-bold">{roleDescription?.boldedText}</span>{' '}
            {roleDescription?.text2}
            <span className="text-pink-500 font-bold">
              {' '}
              Tata Consultancy Services
            </span>
            , {roleDescription?.text3}
          </p>
          <p className="w-full mt-4 text-justify text-lg">
            {roleDescription?.text4}
          </p>
        </div>
      </div>
    </div>
  );
}
