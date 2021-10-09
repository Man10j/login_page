import React from 'react';
import ReactDOM from 'react-dom';
import './Form.css';
import useForm from '../hooks/useForm.js';
import validateform from '../utils/validateform.js';

const Form = () =>{

	const {handleevent,values,handlesubmit,errors} = useForm(validateform);
		
  return(
    <div className="form_container">
     <h1 className="form_header">Login</h1>
	    <form className='form' onSubmit={handlesubmit}>
		    <div className="form_field">
		    	<label className="form_label" htmlFor='name'>Enter your Name</label>
		    	<input type="text" name='name' placeholder="name here...."
		    	value={values.name} onChange={handleevent} className="form_input"></input>
		    	{errors.name && <div className="error_msg">{errors.name}</div>}
		    </div>
		    <div className="form_field">
		    	<label className="form_label" htmlFor='email'>Enter your email address</label>
		    	<input name='email' placeholder='email here...'
		    	value={values.email} onChange={handleevent} className="form_input"></input>
		    	{errors.email && <div className="error_msg">{errors.email}</div>}
		    </div>
		   <div className="form_field">
		    	<label className="form_label" htmlFor='dob'>Enter your Birthdate</label>
		    	<input name='dob' type='date'
		    	value={values.dob} onChange={handleevent} className="form_input"></input>
		    	{errors.dob && <div className="error_msg">{errors.dob}</div>}
		    </div>
		     <div className="form_field">
		    	<label className="form_label" htmlFor='password'>Enter your password</label>
		    	<input name='password' type='password'
		    	value={values.password} onChange={handleevent} className="form_input"></input>
		    	{errors.password && <div className="error_msg">{errors.password}</div>}
		    </div>
		     <div className="form_field">
		    	<label className="form_label" htmlFor='cnfrmpassword'>Confirm password</label>
		    	<input name='cnfrmpassword' type='password'
		    	value={values.cnfrmpassword} onChange={handleevent} className="form_input"></input>
		    	{errors.cnfrmpassword && <div className="error_msg">{errors.cnfrmpassword}</div>}
		    	
		    </div>
		    <button className="btn" type='submit'>sign up</button>
	    </form>
    </div>
  )
}

export default Form;