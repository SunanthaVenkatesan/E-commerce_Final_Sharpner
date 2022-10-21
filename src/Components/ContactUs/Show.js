import React from 'react';


import './Show.css';
import NewContact from './NewContact';

function Show(props){
    async function addPersonHandler(person) {
        //by default sends a GET request,so we have to define a post request to add the movie
     const response=  await fetch('https://e-commerce-http-default-rtdb.firebaseio.com/person.json/',{
       method:'POST',
       body:JSON.stringify(person) ,
       headers:{
         'Content-Type':'application/json'
       }
   })
   const data=await response.json()
   console.log(data)
 }

 return (
    <React.Fragment>
      <section>
      <NewContact onAddPerson={addPersonHandler} />
     
      </section>
      </React.Fragment>
 )
}
export default Show