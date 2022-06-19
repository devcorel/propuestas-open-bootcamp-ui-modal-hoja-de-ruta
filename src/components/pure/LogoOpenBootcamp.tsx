import React from 'react';

import logo from '../../assets/op-logo-twitter_400x400.png';

export const LogoOpenBootcamp = () => {
   return (
      <div className="flex justify-center gap-3 items-center h-full w-full">
         <div className="bg-blue-900 rounded-2xl p-2 w-28 h-28 ">
            <img src={logo} alt="Open Bootcamp" />
         </div>
         <div className="flex flex-col text-zinc-200 text-3xl font-bold">
            <span>Open</span>
            <span>Bootcamp</span>
         </div>
      </div>
   );
};
