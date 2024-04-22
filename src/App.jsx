import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";

import { collection,getDocs, onSnapshot } from 'firebase/firestore';
import { db } from "./config/firebase";
import ContactCard from './components/ContactCard';
import Model from './components/Model';
import AddAndUpdateContact from './components/AddAndUpdateContact';
import useDisclose from './hooks/useDisclose';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotFoundContact from './components/NotFoundContact';



const App = () => {

    const filterContacts = (e) =>{
      const value = e.target.value;

      const contactsRef = collection(db , "contacts");

      //const contactSnapShot = await getDocs(contactsRef);
      
      onSnapshot(contactsRef,(snapshot)=>{
      
      const contactList =snapshot.docs.map((doc)=>{
      
        return{
          id : doc.id,
          ...doc.data(),
        }
      });

      const filteredContacts = contactList.filter((contact)=>
      contact.name.toLowerCase().includes(value.toLowerCase())
    )

      setContacts(filteredContacts);
        return filteredContacts
      })
      

    }



  const [contacts , setContacts] = useState([]);
  const {isOpen , onOpen ,onClose} = useDisclose()

  useEffect(()=>{

    const getContacts = async() =>{

 try {

 const contactsRef = collection(db , "contacts");

//const contactSnapShot = await getDocs(contactsRef);

onSnapshot(contactsRef,(snapshot)=>{

const contactList =snapshot.docs.map((doc)=>{

  return{
    id : doc.id,
    ...doc.data(),
  }
});
setContacts(contactList);
  return contactList
})


  
 } catch (error) {
  
 }

    }
getContacts();


  },[])



  return (

    <>
    <div className='max-w-[370px] mx-auto px-4'>
      <NavBar></NavBar>
    <div className='flex gap-2 '>
    <div className='flex relative items-center flex-grow' >
    <FiSearch className=' ml-1 absolute text-3xl text-white' />
      <input onChange={filterContacts} type='text' className='h-10 flex-grow rounded-md border border-white pl-9
       bg-transparent text-white'></input>
    </div>
  
    <FaCirclePlus onClick={onOpen} className='text-5xl text-white cursor-pointer' />
    

</div>
<div className='mt-4 flex flex-col gap-4'>
{
  contacts.length <= 0 ?<NotFoundContact></NotFoundContact> : contacts.map((contact)=>(

    <ContactCard key={contact.id} contact={contact}></ContactCard>

  ))

}

</div>
    </div>

    <AddAndUpdateContact 
      isOpen={isOpen}
      onClose={onClose}
    
    ></AddAndUpdateContact>
    <ToastContainer
      position='bottom-center'
    ></ToastContainer>
   </>
  )
}

export default App