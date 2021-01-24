var angulo=function(){
    const pi=3.141593;
    var altura = parseFloat(document.getElementById('altura').value);
    var largo = parseFloat(document.getElementById('largo').value);
    var resultado1 = document.getElementById('resultado1');

    var angulo = (Math.atan(altura/largo))*180/pi;
    var grados = Math.floor(angulo);
    var minutos = Math.floor((angulo-grados)*60);
    var segundos = Math.floor((((angulo-grados)*60)-minutos)*60);

    resultado1.textContent = `Ángulo =  ${grados}° ${minutos}' ${segundos}''`; 
}

var altura=function(){
    const grav=9.8;
    var tiempo = parseFloat(document.getElementById('tiempo').value);
    var resultado2 = document.getElementById('resultado2');

    var altura = 0.5*grav*tiempo*tiempo;
    resultado2.textContent = `Altura = ${altura} m`;
}

var numero=function(){
    var numero1=parseInt(document.getElementById('numero1').value);
    var numero2=parseInt(document.getElementById('numero2').value);
    var numero3=parseInt(document.getElementById('numero3').value);
    var numero4=parseInt(document.getElementById('numero4').value);
    var numero5=parseInt(document.getElementById('numero5').value);
    var resultado3 = document.getElementById('resultado3');

    if ((numero1<0 || numero1>99999)||(numero2<0 || numero2>99999)||(numero3<0 || numero3>99999)||(numero4<0 || numero4>99999)||(numero5<0 || numero5>99999)){
        alert("No se han ingresado números adecuados")
    }else{
        var n1 = Math.floor(numero1/10000);
        var n2 = Math.floor((numero2/1000)-Math.floor(numero2/10000)*10);
        var n3 = Math.floor((numero3/100)-Math.floor(numero3/1000)*10);
        var n4 = Math.floor((numero4/10)-Math.floor(numero4/100)*10);
        var n5 = Math.floor(numero5-Math.floor(numero5/10)*10); 
    }

    resultado3.textContent = `Número resultante = ${n1}${n2}${n3}${n4}${n5}`

}