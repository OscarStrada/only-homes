import React, { useState, useEffect } from 'react';

export const ScrollBar = () => {
  const [scrollBar, setScrollBar] = useState(0);

  useEffect(() => {
    const progressBar = () => {
      const heightTotal = window.document.body.clientHeight;
      const heightView = window.innerHeight;
      if (window.scrollY > 0) {
        setScrollBar((scrollY / (heightTotal - heightView)) * 100);
      } else {
        setScrollBar(0);
      }
    };
    window.addEventListener('scroll', progressBar);
  }, []);

  return (
    <div className="hidden md:flex w-20 h-[calc(100%-80px)] fixed top-20 flex-col justify-center items-center border-r-[1px] border-[#e9e9e9] z-10">
      <div className="w-full h-full flex-1 py-16 flex justify-center items-center">
        <div className="h-full w-[3px] flex rounded-2xl bg-[#e9e9e9] opacity-60">
          <div
            className="bg-[#657048] w-[3px] rounded-2xl"
            style={{ height: `${scrollBar}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
