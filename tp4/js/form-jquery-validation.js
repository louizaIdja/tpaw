j = 0;

$(document).ready(function(){
  $("#firstname").keypress(function(){
    $("#2").text(j += 1);
  });
});
i=0;
$(document).ready(function(){
  $("#name").keypress(function(){
    $("#1").text(i += 1);
  });
});

var x = document.getElementById("gps");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = position.coords.latitude , position.coords.longitude; 
}

function validation (){
    
            if ($("#name").val() == ""){alert("veuillez saisir votre nom")}
            else if ($("#firstname").val() == ""){alert("veuillez saisir votre prenom")}
             else if ($("#birth").val() == ""){alert("veuillez saisir votre date de naissance")}
             else if ($("#adresse").val() == ""){alert("veuillez saisir votre adresse")}
             else if ($("#mail").val() == "") {alert("veuillez saisir votre mail")}
           else {
            alert("Votre Formulaire est valide Vous pouvez continuer")

            var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
            +$("#adresse").val()+"&zoom=14&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg";
            
            $("#map").html("<img src='"+img_url+"'>");
            
            
            }
  
    
            
    
    
    
                
      
            }
    