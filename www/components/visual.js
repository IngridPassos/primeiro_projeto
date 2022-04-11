window.onload = function(){
    document.querySelector("#tristan").addEventListener("click", function(){
        function retorno(){
        }
        navigator.notification.alert("Meu nome é Tristan e eu tenho 17 anos.", retorno, "Olá", "Olá Tristan!");
    });
    document.querySelector("#kyle").addEventListener("click", function(){
        function retorno(){
        }
        navigator.notification.alert("Prazer em te conhecer! Eu sou uma jovem artísta, tenho 21 anos.", retorno, "Meu nome é Kyle!", "Incrível Kyle!");
    });
    document.querySelector("#chris").addEventListener("click", function(){
        function retorno(){
        }
        navigator.notification.alert("Gosto de video games, animes e tenho 15 anos..", retorno, "Eu meu chamo Chris", "Que legal.");
    });
    document.querySelector("#sair").addEventListener("click", function(){
        function retorno(buttonIndex){
            if(buttonIndex == 1){
                navigator.vibrate(3000);
                navigator.app.exitApp();
            }else{
                return false;
            }
        }
        navigator.notification.confirm("Deseja realmente sair?", retorno, "Sair do Projeto", ['Sim','Não']);
    });
}