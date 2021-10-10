import React , {useState} from 'react';
import { useHistory } from 'react-router-dom';

const useForm = (validateform,props) =>{

	const [values,setValues] = useState({
		name:"",
		email:"",
		dob:"",
		password:"",
		cnfrmpassword:""
	});
	const [errors,setErrors] = useState ({});

	const handleevent = (e) =>{
		const {name , value} = e.target;
			setValues((prevValues)=>{
				return{
					...prevValues,
					[name]:value
			};
		});
	};
	const handlesubmit = (e) => {
		e.preventDefault();
		const err_list = validateform(values);
		if(Object.keys(err_list).length === 0){
			setErrors(err_list);
			props.onSearchSubmit(true,values);

		}
		else{
			setErrors(err_list);
		}
	}

	return{handleevent,values,handlesubmit,errors};

}

export default useForm;