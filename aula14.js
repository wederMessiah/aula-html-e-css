function mostrar_dados() {
    // Pega o valor NAME
    var n1 = document.form1.txtnome.value;
    alert(n1);
    
    // Pega o valor pelo ID
    var n2 = document.getElementById("txtnome").value;
    alert(n2);
}

function calcular() {
    var num1 = document.getElementById('txtn1').value;
    var num2 = document.getElementById('txtn2').value;

    num1 = Number(num1);
    num2 = Number(num2);

    var soma = num1 + num2;
    document.getElementById('txtres').value = soma;
}
