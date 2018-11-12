$( document ).ready(function() {
   
    $("#valider").on("click",function(event) {

         event.preventDefault();
         if($('#Nom').val().length == 0 && $('#Prenom').val().length == 0 && $('#Date').val().length  == 0 && $('#Adresse').val().length == 0 && $('#Mail').val().length == 0)
           { $('.modal-header').text("Veuillez remplir  les champs svp");
            $('#myModal').modal("show");}
        else { 
                $('.modal-header').text(" Bienvenue " + $("#Nom").val());
            $('#myModal').modal("show");
            $('.modal-body').text(" vous etes née le  " + $("#Date").val()  +  "et vous habitez à "+ $("#Adresse").val());
            $('#myModal').modal("show");
            $('.carte').html('<img src="https://maps.googleapis.com/maps/api/staticmap?markers=paris&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"></img>');
           
            $('')
            $('#myModal').modal("show");


            }







            });
    // Y mettre le code jQuery pour valider tous les champs du formulaire
});


     


