import React, { FC } from 'react';

export const MainTitle: FC<{ text: string }> = ({ text }) => {
   return (
      <div className="text-center text-2xl text-zinc-200 font-bold p-4 border-b  border-stone-600 w-full">
         {text}
      </div>
   );
};
