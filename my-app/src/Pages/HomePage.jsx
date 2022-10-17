import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from "axios";
import Navbar from '../Components/Navbar';
import BookCard from '../Components/BookCard';

const HomePage = () => {

    const [data, setData] = useState([]);

    const getData = () => {
        axios.get("https://cart-data-server.herokuapp.com/books")
        .then((res)=> setData(res.data))
        .catch((err)=> console.log(err))

    }
    useEffect(()=>{
        getData();

    },[])
    console.log(data);

  return (
    <div>
        <Navbar/>
        <h1>Books</h1>

        <div>
            {data.map((elem, index)=>  <BookCard key={index} {...elem}/>)}

        </div>


      
    </div>
  )
}

export default HomePage
