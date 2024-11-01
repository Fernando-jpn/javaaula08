function verde(){
    document.getElementById("corpo").style.backgroundColor = "#0f0";
}
function azul(){
    document.getElementById("corpo").style.backgroundColor = "#00f";
}
function amarelo(){
    document.getElementById("corpo").style.backgroundColor = "#ff0";
}
function nome(){
    if(document.getElementById("cxnome") && document.getElementById("cxemail").value==""){
        alert("digite um valor, campo em branco");
    }
    else{
        alert("Gravado com sucesso!");
    }
}