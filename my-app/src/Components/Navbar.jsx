import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className="navbarDiv">
      <div>
        <ul>
          <li onClick={()=> navigate('/')}>Home</li>
          <li onClick={()=> navigate('/add')}>Add Data</li>
        </ul>
      </div>

      <div>
        <input placeholder="search Data" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Navbar;
