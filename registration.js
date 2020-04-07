function formValidation(){
	var email=document.registration.email;
	var nights=document.registration.nights;
	var firstname=document.registration.firstname;
	var lastname=document.registration.lastname;
	var phone=document.registration.phone;
	var date=document.registration.date;
	var comment=document.registration.comment;
	var adult= document.registration.adult;
	var child=document.registration.child;

	if(validateFirst(firstname)){
		if(validateLast(lastname)){
			if(validateEmail(email)){
				if(validateTelephone(phone)){
					if(validateAdult(adult)){
						if (validateChild(child)) {
							if (validateNight(nights)) {
								if(validateComment(comment)){}
							}
						}
					}
				}
			}
		}
	}return false;

function validateFirst(firstname){
	var letters = /^[A-Za-z]+$/;
	if(firstname.value.match(letters)&& firstname!=null){
		return true;
	}else{
		alert('Name must have alphabet characters only');
		firstname.focus();
		return false;
	}
}

function validateLast(lastname){
	var letters = /^[A-Za-z]+$/;
	if(lastname.value.match(letters)&& lastname!=null){
		return true;
	}else{
		alert('Name must have alphabet characters only');
		lastname.focus();
		return false;
	}
}

function validateTelephone(phone){
	var numbers = /^[0-9]+$/;
		if(phone.value.match(numbers)&&phone!=null){
		return true;
		}else{
			alert('Phone number must have numeric characters only');
			phone.focus();
			return false;
			}
}

function validateAdult(adult){
	var numbers = /^[0-9]+$/;
	if(adult!=null&& adult.value.match(numbers)){
			return true;
	}else{
		alert('Number of adults must have numeric characters!');
		adult.focus();
		return false;
	}
}

function validateChild(child){
	var numbers = /^[0-9]+$/;
	if(child!=null&& child.value.match(numbers)){
			return true;
	}else{
		alert('Number of children must have numeric characters!');
		child.focus();
		return false;
	}
}

function validateNight(nights){
	if(nights>0 && nights<15 && nights!=null){
		return true;
	}else{
		alert("You have entered an nights!");
	nights.focus();
	return false;
	}
}

function validateEmail(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
email.focus();
return false;
}
}

function validateComment(comment){
	if(comment!=null){
		return true;
	}else{
		alert("You have to fill the comments!")
		comment.focus();
		return false;
	}
}

}