//your JS code here. If required.
function validation(e){
	e.preventDefault();
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
	 return promise;
	
	
}

validation().then((m)=>{
	alert(m)
},4000)
.catch((e)=>{
	alert(e)
})