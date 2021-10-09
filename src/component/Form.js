import React from 'react';
import ReactDOM from 'react-dom';
import './Form.css';
import useForm from '../hooks/useForm.js';
import validateform from '../utils/validateform.js';

const Form = () =>{
	const {handleevent,values,handlesubmit,errors} = useForm(validateform);
	
  return(
    <div>
	    <form className='form' onSubmit={handlesubmit}>
		    <div>
		    	<label className="form_label" htmlFor='name'>Enter your Name</label>
		    	<input type="text" name='name' placeholder="name here...."
		    	value={values.name} onChange={handleevent}></input>
		    	{errors.name && <div>{errors.name}</div>}
		    </div>
		    <div>
		    	<label className="form_label" htmlFor='email'>Enter your email address</label>
		    	<input name='email' placeholder='email here...'
		    	value={values.email} onChange={handleevent}></input>
		    	{errors.email && <div>{errors.email}</div>}
		    </div>
		    <div>
		    	<label className="form_label" htmlFor='dob'>Enter your Birthdate</label>
		    	<input name='dob' type='date'
		    	value={values.dob} onChange={handleevent}></input>
		    	{errors.dob && <div>{errors.dob}</div>}
		    </div>
		     <div>
		    	<label className="form_label" htmlFor='password'>Enter your password</label>
		    	<input name='password' type='password'
		    	value={values.password} onChange={handleevent}></input>
		    	{errors.password && <div>{errors.password}</div>}
		    </div>
		    <div>
		    	<label className="form_label" htmlFor='cnfrmpassword'>Confirm password</label>
		    	<input name='cnfrmpassword' type='password'
		    	value={values.cnfrmpassword} onChange={handleevent}></input>
		    	{errors.cnfrmpassword && <div>{errors.cnfrmpassword}</div>}
		    	
		    </div>
		    <button type='submit'>sign up</button>
	    </form>
    </div>
  )
}

export default Form;