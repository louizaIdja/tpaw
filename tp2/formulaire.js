function validation ()
{



if (document.getElementById("Nom").value==""||document.getElementById("Nom").value.length<5) {



    document.getElementById("error").innerHTML = "saisir le nom";
    
} else if ( document.getElementById("Prenom").value==""||document.getElementById("Prenom").value.length<5){



    document.getElementById("error").innerHTML = "saisir le prenom";} 


    else if (document.getElementById("date").value==""||document.getElementById("date").value.length<5) {
        document.getElementById("error").innerHTML = "saisir la date";

        
    } else if (document.getElementById("Adresse").value==""||document.getElementById("Adresse").value.length<5) {
            document.getElementById("error").innerHTML = "saisir l'adresse";
            
        } else if (document.getElementById("email").value==""||document.getElementById("email").value.length<5) {

                document.getElementById("error").innerHTML = "sair l'email";
                
            } 
        else{
            
        }
}









