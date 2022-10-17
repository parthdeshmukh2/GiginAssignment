import React from 'react'

const BookCard = (elem) => {
  return (
    <div>
        <p>Name:- {elem.Title}</p>
        <p> AuthorId:- {elem.Author_ID}</p>
        <p>Publication:-  {elem.Publisher}</p>
        <p>Published Date:-  {elem.Publish_Date}</p>
        <p>Category:-  {elem.Category}</p>
        <p>Price:-  {elem.Price}</p>
        <p>Sold Count:-  { elem.Sold_Count}</p>
      
    </div>
  )
}

export default BookCard
