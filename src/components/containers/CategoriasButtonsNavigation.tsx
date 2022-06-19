import React, { FC } from 'react';
import { ButtonNavigation } from '../pure/ButtonNavigation';

interface CategoriasButtonsNavigationProps {
   container: React.RefObject<HTMLDivElement>;
}

export const CategoriasButtonsNavigation: FC<
   CategoriasButtonsNavigationProps
> = ({ container }) => {
   const handleClick = (dir: string) => {
      const $container = container.current;
      if ($container) {
         if (dir === 'left') {
            //$container.scrollLeft -= $container.offsetWidth;
            $container.scrollLeft -= 250;
         } else {
            //$container.scrollLeft += $container.offsetWidth;
            $container.scrollLeft += 250;
         }
         //$container.scrollLeft += 100;
      }
   };

   return (
      <div className="hidden lg:block">
         <div
            className={`
               hidden lg:block 
               scale-90
               absolute top-9 left-1
            `}
         >
            <ButtonNavigation
               direction="left"
               onClick={() => handleClick('left')}
            />
         </div>

         <div
            className={`
               hidden lg:block 
               scale-90
               absolute top-9 right-1
            `}
         >
            <ButtonNavigation
               direction="right"
               onClick={() => handleClick('right')}
            />
         </div>
      </div>
   );
};
