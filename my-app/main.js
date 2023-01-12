document.getElementById("calculator1").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) + parseInt(num2);
    document.getElementById("result").innerHTML = "SUM :" +sum;
});

document.getElementById("calculator2").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) - parseInt(num2);
    document.getElementById("result1").innerHTML = "SUM :" +sum;
});

document.getElementById("calculator3").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) * parseInt(num2);
    document.getElementById("result2").innerHTML = "SUM :" +sum;
});

document.getElementById("calculator4").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) / parseInt(num2);
    document.getElementById("result3").innerHTML = "SUM :" +sum;
});

function myalert(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1) + parseInt(num2);
    alert(sum)
}

document.getElementById("calculator5").addEventListener("click",function(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = num1 / 100;
    var sum1 = num2 / (sum * sum);
    alert(sum1.toFixed(2))
});

const img = document.createElement("img"); //ประกาศตัวแปรและใช้คำสั่ง createElement
img.src = "img/273414270_2159935967518212_198692794444998042_nn.jpg"
img.style.width = "200px"

document.getElementById("myDiv").appendChild(img); //นำตัวElement เรียกใช้งานโดยใช้คำสั่ง appendChil(ตัวแปร Element ที่สร้าง = img)