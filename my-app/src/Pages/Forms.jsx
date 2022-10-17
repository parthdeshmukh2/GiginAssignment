import axios from "axios";
import React, { useState } from "react";
import Navbar from "../Components/Navbar";

const Forms = () => {
  const [bookId, setBookID] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [AuthorID, setAuthorID] = useState("");
  const [Publisher, setPublisher] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [Category, setCategory] = useState("");
  const [Price, setPrice] = useState("");
  const [SoldCount, setSoldCount] = useState("");

  const [authorID, setauthorID] = useState("");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [deathDate, setDeathDate] = useState("");

  const handleAuthorData = () => {
    if ((authorID, name, phone, birthDate, deathDate)) {
      const body = {
        Author_ID: authorID,
        Name: name,
        id:name,
        Phone: phone,
        Birth_Date: birthDate,
        Death_Date: deathDate,
      };

      axios
        .post("https://cart-data-server.herokuapp.com/author", body)
        .then((res) => alert("Data Added Successfully"))
        .catch((err) => console.log(err));
    }
  };

  const handleBooksData = () => {
    if (
      (bookId,
      bookTitle,
      AuthorID,
      Publisher,
      publishedDate,
      Category,
      Price,
      SoldCount)
    ) {
      const body = {
        Book_id: bookId,
        id:bookTitle,
        Title: bookTitle,
        Author_ID: AuthorID,
        Publisher: Publisher,
        Publish_Date: publishedDate,
        Category: Category,
        Price: Price,
        Sold_Count: SoldCount,
      };
      axios
        .post("https://cart-data-server.herokuapp.com/books", body)
        .then((res) => alert("Data added Successfully"))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>
      <Navbar />
      <div className="formDiv">
        <div className="firstDiv">
          <h1>Add Book Data</h1>
          <input
            type="text"
            placeholder="Enter Book ID"
            onChange={(e) => setBookID(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Title"
            onChange={(e) => setBookTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Author ID"
            onChange={(e) => setAuthorID(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Publisher"
            onChange={(e) => setPublisher(e.target.value)}
          />
          <input
            type="date"
            placeholder="Enter Published Date"
            onChange={(e) => setPublishedDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Sold Count"
            onChange={(e) => setSoldCount(e.target.value)}
          />
          <button className="btn" onClick={handleBooksData}>
            Submit
          </button>
        </div>
        <div className="firstDiv">
          <h1>Add Author Data</h1>
          <input
            type="text"
            placeholder="Enter AuthorId "
            onChange={(e) => setauthorID(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="date"
            placeholder="Enter Birth Date"
            onChange={(e) => setBirthDate(e.target.value)}
          />
          <input
            type="date"
            placeholder="Enter Death Date"
            onChange={(e) => setDeathDate(e.target.value)}
          />

          <button className="btn" onClick={handleAuthorData}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forms;
