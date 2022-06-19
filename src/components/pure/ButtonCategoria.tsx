import React, { FC, useEffect, useRef } from 'react';
import { ICategoria } from '../../models/categoria.class';
import { TStackType } from '../../models/hojaRuta.class';

import { BiCodeBlock } from 'react-icons/bi';
import { ImMobile, ImStack } from 'react-icons/im';
import { CgGames, CgScreen } from 'react-icons/cg';
import { FiDatabase } from 'react-icons/fi';

interface ButtonCategoriaProps {
   categoria: ICategoria;
   isSelected: boolean;
   index: number;
   container: React.RefObject<HTMLDivElement>;
   onSelect: (categoria: ICategoria) => void;
}
export const ButtonCategoria: FC<ButtonCategoriaProps> = ({
   categoria,
   isSelected,
   onSelect,
   index,
   container: $container,
}) => {
   const $buttonRef = useRef<any[] | null>([]);
   const isClicked = useRef(false);

   // BUG... :'<
   // useEffect(() => {
   //    if (isSelected) {
   //       if ($buttonRef.current) $buttonRef.current[index]!.scrollIntoView({behavior: 'smooth'});
   //    }
   // }, [isSelected]);

   const handleClick = (categoria: ICategoria) => {
      onSelect(categoria);
      isClicked.current = true;
   };
   useEffect(() => {
      //if (window.innerWidth < 1024) {
      if (isSelected) {
         if (!isClicked.current) {
            let toLeft = $buttonRef.current![index].offsetLeft;
            $container.current!.scrollLeft = toLeft;
         } else {
            isClicked.current = false;
         }
      }
      //}
   }, [isSelected]);

   return (
      <button
         ref={(el) => ($buttonRef.current![index] = el)}
         onClick={() => handleClick(categoria)}
         className={`
                  flex-shrink-0
                  bg-stone-600 p-2 rounded-lg pl-3 pr-3 
                  flex items-center justify-space-between gap-2
                  ${
                     isSelected
                        ? 'bg-zinc-800 border border-teal-500'
                        : 'hover:bg-zinc-500'
                  }
               `}
      >
         <div className="text-white text-lg">
            <GetIcon type={categoria.type} />
         </div>
         <span className="text-zinc-300 text-sm font-bold ">
            {categoria.name}
         </span>
      </button>
   );
};

function GetIcon({ type }: { type: TStackType }) {
   switch (type) {
      case '0dev':
         return <BiCodeBlock />;
      case 'fullstack':
         return <ImStack />;
      case 'frontend':
         return <CgScreen />;
      case 'backend':
         return <FiDatabase />;
      case 'mobile':
         return <ImMobile />;
      case 'videogames':
         return <CgGames />;

      default:
         return <></>;
   }
}
