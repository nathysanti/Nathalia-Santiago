$(document).ready(function(){
    $("btn_iniciar").click(function(){
        var jog1 = $("input[name=jogador1]").val();

        var jog2= $("input[name=jogador2]").val();

        alert(jog1);
        alert(jog2);

        if(jog1.trim().length >0 && jog2.trim().length >0){
            IniciarJogo();
        }else{
            alert("Nome(s) não preenchidos");
        }

    });

});




function IniciarJogo(){

}


