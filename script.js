//your JS code here. If required.
function validation(e){
	e.preventDefault();

	if(name.trim()=='' || age.trim()==''){
		alert('Enter all fields');
		return;
	}
	let age= document.getElementById("age").value;
	let name= document.getElementById("name").value;
	let promise= new Promise((resolve,reject)=>{
		if(age>=18){
			resolve(`Welcome,${name}. You can vote.`);
		}
		else{
			reject(`Oh sorry ${name}. You aren't old enough.`);
		}
	})
	 promise.then((msg)=>{
	alert(m)
},4000)
.catch((error)=>{
	alert(error)
})
	
	
}

