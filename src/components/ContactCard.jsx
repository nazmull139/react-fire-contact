import React from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi2'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { db } from "../config/firebase";
import { deleteDoc, doc } from 'firebase/firestore';
import useDisclose from '../hooks/useDisclose';
import AddAndUpdateContact from './AddAndUpdateContact';


const ContactCard = ({contact}) => {

  const {isOpen , onOpen ,onClose} = useDisclose();


 const deleteContact =async (id) =>{

try {

  await deleteDoc(doc(db , "contacts", id))

  
} catch (error) {
    console.log(error)
}


 }


  return (
    <>
    <div key={contact.id} className='bg-yellow flex justify-around items-center rounded-lg p-2'>
      <div className='flex gap-2'>
        <HiOutlineUserCircle className='text-orange text-4xl' />
        <div className=''>

            <h2 className='font-medium' >{contact.name}</h2>
            <p className='text-sm'>{contact.email}</p>

        </div>
        </div>
        <div className='flex text-3xl'>
        <RiEditCircleLine onClick={onOpen} className='cursor-pointer' />
        <IoMdTrash onClick={()=>deleteContact(contact.id)} className='text-orange '/>

        </div>

    </div>
    <AddAndUpdateContact isUpdate isOpen={isOpen} onClose={onClose} contact={contact}></AddAndUpdateContact>
    </>

    
  )
}

export default ContactCard