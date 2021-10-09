
const validateform = (values) =>{
	let errors= {};
		
	if(!values.name){
		errors.name = "enter name";
	}

	if(!values.email){
		errors.email = "enter email";
	}else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
		errors.email ="enter email in correct format";
	}

	if(!values.dob){
		errors.dob = "enter dob";
	}

	if(!values.password){
		errors.password = "enter password";
	}else if(values.password.length<7){
		errors.password = "password should be more than 6 in length";
	}

	if(!values.cnfrmpassword){
		errors.cnfrmpassword = "enter cnfrmpassword";
	}else if(values.cnfrmpassword !== values.password){
		errors.cnfrmpassword = "it should be match with password";
	}

	return errors;
}
export default validateform;