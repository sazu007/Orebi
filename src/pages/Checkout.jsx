import React, { useEffect,updateStarCount,postElement, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import Container from '../components/Container';

const Checkout = () => {
  const db = getDatabase();
  let [data, setData] = useState([]);
  useEffect(()=>{
    const starCountRef = ref(db, 'users/');
    onValue(starCountRef, (snapshot) => {
    snapshot.forEach((item)=>{
    setData(item.val());
    });
    });
  },[]);
  
  return (

    <>  
    <div className=""> 
    <Container> 
    <h2>{data.userName}</h2>
    <h2>{data.email}</h2>
    </Container>
    </div>
    </>
  )
}

export default Checkout