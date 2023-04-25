//your JS code here. If required.
function validation(){
	// e.preventDefault();
    let Age= document.getElementById("age").value;
	let Name= document.getElementById("name").value;
	
	if(name.trim()=='' || age.trim()==''){
		alert("Please enter valid details");
		return;
	}
	let obj={name:Name, age:Age}
	let promise= new Promise((resolve,reject)=>{
		if(age>=18){
			resolve(obj.name)		}
		else{
			reject(obj.name);
		}
	})
	 promise.then((msg)=>{
	alert(msg)
},4000)
.catch((error)=>{
	alert(error)
})
	
	
}

