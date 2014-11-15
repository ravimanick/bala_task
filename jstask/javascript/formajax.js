//contact name validation
function cpnameval(){
function ajexdata{
if(document.name.st_name.value=="")--- empty condition
     	{
     	    document.getElementById("st_name_err").innerHTML="Please enter contact person Name";  //---user ku v r telling contact kodu nu
     	    document.st_name.focus(); // - cursor focus panrom
     		return false;  //--ithoda mudiyanum apdikirathukaha
         	}
     	else if(document.st_name.value!="")//----if suppose empty illama v r giving contact name
     	{
     	    document.getElementById("st_name_err").innerHTML=""; // --- apa antha box la eathum koduka mattom so ""
     	}
     	return true; //---then tab key press pannuna aduthu pogum so given true
		
		}
//ipa value irukirum apadikira condition intha else if inga than ama ajax call start pannanum

$.ajax({
		type : "POST",
		url : "Formmodel1.html",
		success : function(data) {
		var stname=$('#st_name_err').val();// ---jquery la contact name edukirom
		var stname=document.getElementById("st_name_err").value;//---javascript la contact name edukirom
		document.getElementById("st_name_err").innerHTML=contatname;
		                  or
			$('#st_name_err').text(contatname);  - 
		}
		error:function(data){
		
		}
	});



}