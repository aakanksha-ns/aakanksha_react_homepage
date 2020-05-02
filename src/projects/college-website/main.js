function alertfunction(){
window.alert("Page not ready yet.\n Please come back later");
}

function submitreply(){
	window.alert("Invalid Username or Password!");
}

function formverify(){
var name=document.forms["contact"]["name"].value;
var subject=document.forms["contact"]["subject"].value;
var content=document.forms["contact"]["content"].value;
console.log(name);
console.log(subject);
console.log(content);
if(name==null||name=="")
{
	window.alert("Name not entered!");
	return false;
}
else if(subject==null||subject=="")
{
	window.alert("Subject not entered!");
	return false;
}
else if(content==null||content=="")
{
	window.alert("Content not entered!");
	return false;
}
else
{ window.alert("Mail Sent!");	
return true;
}

}