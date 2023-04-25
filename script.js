//your JS code here. If required.
function validation(){
	// e.preventDefault();
    let age= document.getElementById("age").value;
	let name= document.getElementById("name").value;
	
	if(name.trim()=='' || age.trim()==''){
		alert("Please enter valid details");
		return;
	}
	let obj={msg1:`Welcome,${name}. You can vote.`, msg2:`Oh sorry ${name}. You aren't old enough.`}
	let promise= new Promise((resolve,reject)=>{
		if(age>=18){
			resolve(obj.msg1)		}
		else{
			reject(obj.msg2);
		}
	})
	 promise.then((msg)=>{
	alert(msg)
},4000)
.catch((error)=>{
	alert(error)
})
	
	
}

