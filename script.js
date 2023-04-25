//your JS code here. If required.
function validation(){
	// e.preventDefault();
    let age= document.getElementById("age").value;
	let name= document.getElementById("name").value;
	
	if(name.trim()=='' || age.trim()==''){
		alert('inputs can not be empty');
		return;
	}
	
	let promise= new Promise((resolve,reject)=>{
		if(age>=18){
			resolve(`Welcome,${name}. You can vote.`);
		}
		else{
			reject(`Oh sorry ${name}. You aren't old enough.`);
		}
	})
	 promise.then((msg)=>{
	alert(msg)
},4000)
.catch((error)=>{
	alert(error)
})
	
	
}

