function comparacao() {
    var data1 = new Date(document.getElementById("data1comp").value);
    var data2 = new Date(document.getElementById("data2comp").value);

    var resultado = (data1 > data2) ? "A primeira data é maior." : ((data1 < data2) ? "A segunda data é maior." : "As datas são iguais.");
    document.getElementById("final").innerHTML = resultado;
    
}

function dataatual() {
    
    var now = new Date();
    var formatarData =  now.getDate() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear();
  
    document.getElementById("final").textContent = formatarData;
}

function intervalo() {
    
    var data1 = new Date(document.getElementById("data1comp").value + "T00:00:00");
    var data2 = new Date(document.getElementById("data2comp").value + "T00:00:00");

    if (data1 > data2) {
        var temp = data1;
        data1 = data2;
        data2 = temp;
    }
    
    var intervaloMs = Math.abs(data2 - data1);
  
    var intervaloDias = intervaloMs / (1000 * 60 * 60 * 24);

    document.getElementById("final").innerText = "O intervalo é de: " + intervaloDias + " Dias.";
}
