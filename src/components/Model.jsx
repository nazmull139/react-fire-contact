import React from 'react'
import { createPortal } from "react-dom"
import { AiOutlineClose } from "react-icons/ai";
const Model = ({onClose,isOpen,children}) => {
  return createPortal (
    <>
     {isOpen && (

     <div className='grid place-items-center absolute top-0 z-40 h-screen w-screen backdrop-blur'> 
     
     <div className='relative m-auto  z-50 min-h-[200px] max-w-[80%] bg-white p-4'>
        <div className='flex justify-end'>
        <AiOutlineClose onClick={onClose} className='self-end text-2xl cursor-pointer'/>
        </div>
        {children}
     </div>
    
        
        
        </div>
    
    
    
    )}
    
    </>,

    document.getElementById("modal-root")
  );
};

export default Model