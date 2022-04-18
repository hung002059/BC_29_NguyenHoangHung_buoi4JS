document.getElementById("enterExc_1").onclick = function(){
    var numb_1 = document.getElementById("num_1").value;
    var numb_2 = document.getElementById("num_2").value;
    var numb_3 = document.getElementById("num_3").value;
    numb_1 = parseFloat(numb_1);
    numb_2 = parseFloat(numb_2);
    numb_3 = parseFloat(numb_3);
    if (numb_1 < numb_2 && numb_1 < numb_3){
        if (numb_2 < numb_3)
            document.getElementById("resultExc_1").innerHTML ="Dãy số tăng dần: "+numb_1+" "+numb_2+" "+numb_3;
        else
            document.getElementById("resultExc_1").innerHTML ="Dãy số tăng dần: "+numb_1+" "+numb_3+" "+numb_2;
    }
    else if (numb_2 < numb_1 && numb_2 < numb_3){
        if (numb_1 < numb_3)
        document.getElementById("resultExc_1").innerHTML ="Dãy số tăng dần: "+numb_2+" "+numb_1+" "+numb_3;
        else
        document.getElementById("resultExc_1").innerHTML ="Dãy số tăng dần: "+numb_2+" "+numb_3+" "+numb_1;
    }
        else if (numb_3 < numb_1 && numb_3 < numb_2){
            if (numb_1 < numb_2)
            document.getElementById("resultExc_1").innerHTML ="Dãy số tăng dần: "+numb_3+" "+numb_1+" "+numb_2;
            else
            document.getElementById("resultExc_1").innerHTML ="Dãy số tăng dần: "+numb_3+" "+numb_2+" "+numb_1;
        }
}
document.getElementById("enterExc_2").onclick = function(){
    var userName = document.getElementById("user").value;
    if (userName === "B")
        document.getElementById("resultExc_2").innerHTML = "Hello Dad";
    else if(userName === "M")
        document.getElementById("resultExc_2").innerHTML = "Hello Mom";
        else if(userName === "A")
        document.getElementById("resultExc_2").innerHTML = "Hello Anh";
            else if(userName === "E")
                document.getElementById("resultExc_2").innerHTML = "Hello Em";
                else
                document.getElementById("resultExc_2").innerHTML = "Nhập lại";
}
document.getElementById("enterExc_3").onclick = function(){
    var number = document.getElementById("inputNumber").value;
    number = parseInt(number);
    if(number%2===0)
        document.getElementById("resultExc_3").innerHTML = "Số vừa nhập là số chẵn";
    else
        document.getElementById("resultExc_3").innerHTML = "Số vừa nhập là số lẻ";
}
document.getElementById("enterExc_4").onclick = function(){
    var AB = document.getElementById("inputAB").value;
    var AC = document.getElementById("inputAC").value;
    var BC = document.getElementById("inputBC").value;
    AB = parseFloat(AB);
    AC = parseFloat(AC);
    BC = parseFloat(BC);
    if(AB === AC && AB === BC && AC === BC)
        document.getElementById("resultExc_4").innerHTML = "Tam giác đều";
    if(AB === AC)
        document.getElementById("resultExc_4").innerHTML = "Tam giác cân tại A";
    else if(AB === BC)
        document.getElementById("resultExc_4").innerHTML = "Tam giác cân tại B";
        else if(BC === AC)
            document.getElementById("resultExc_4").innerHTML = "Tam giác cân tại C";
    if(BC === Math.sqrt(AB*AB+AC*AC))
        document.getElementById("resultExc_4").innerHTML = "Tam giác vuông tại A";
    else if(AC === Math.sqrt(AB*AB+BC*BC))
            document.getElementById("resultExc_4").innerHTML = "Tam giác vuông tại B";
        else if(AB === Math.sqrt(AC*AC+BC*BC))
                document.getElementById("resultExc_4").innerHTML = "Tam giác vuông tại C";
}