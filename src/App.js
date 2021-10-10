import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import Form from './component/Form.js';
import Home from './component/Home.js';

import validateform from './utils/validateform.js';
import {Redirect,BrowserRouter, Route,Switch} from 'react-router-dom';

class App extends React.Component{
  state ={user: [],islogged:""}
   onSearchSubmit=async (isvalidate,resp) =>{ 
      console.log(isvalidate,resp)
      await this.setState((prevState)=>{return{...prevState, user: resp, islogged:isvalidate}})

      console.log(this.state.islogged)
    }
    onclicklogout = () =>{
          this.setState((prevState) =>{return{...prevState, islogged: ""}})
    }
render(){ 
  return(

    <div>
    {this.state.islogged ?  <Home user = {this.state.user} onclicklogout={this.onclicklogout} /> : <Form onSearchSubmit={this.onSearchSubmit}/> }
     
    </div>

  )
}
}

export default App;