import React , {useState} from 'react';

const useForm = (validateform) =>{

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
		setErrors(validateform(values));
	}

	return{handleevent,values,handlesubmit,errors};

}

export default useForm;