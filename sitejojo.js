function majProfil(pseudo){

    $.get("http://localhost/site/api/getProfil.php?name="+pseudo)
    .done( function(data){
        profil = jQuery.parseJSON(data);
        //$( "#result" ).text(profil.name );
        console.log(profil);
        //console.log(profil.name);
        //console.log(profil.summonerLevel);
        //console.log(profil.name + " est niveau " + profil.summonerLevel)
    
        $("#pseudo").text(profil.name);
        $("#niveau").text("lvl: "+profil.summonerLevel);    
    });
}




$ (document).ready(function() {
    majProfil("toto");


    $("#imput_button").click(function(){

        console.log(   $("#input_text").val() );
        var pseudo =$("#input_text").val();
        majProfil(pseudo);
    });
});