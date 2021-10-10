
import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
const Home = (props) =>{
  const handlelogout = (e) =>{
      e.preventDefault();
      props.onclicklogout();
  }

  return(
  		<div className="home_container">
      <p>Hi {props.user.name} !</p> 
      <button className="logout_btn" onClick={handlelogout}>Logout</button>
      </div>
  )
}

export default Home;