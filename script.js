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
		if(Age>=18){
			resolve(obj)		}
		else{
			reject(obj.name);
		}
	})
	 promise.then((data)=>{
	alert(`Welcome, ${data.name}. You can vote.`)
},4000)
.catch((error)=>{
	alert(`Oh sorry ${error.name}. You aren't old enough.`)
})
	
	
}

