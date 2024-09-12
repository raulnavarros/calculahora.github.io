
function calcular() {
  // Obtener los valores de los inputs
  let valorBruto = document.getElementById('valor1').value;
  let cantiadHoras = document.getElementById('valor2').value;
  let cantidadHoras50 = document.getElementById('valor3').value;
  let cantidadHoras100 = document.getElementById('valor4').value;

  if(valorBruto==="" || cantiadHoras==="" || cantidadHoras50==="" || cantidadHoras100===""){
    alert("Por favor, complete ambos campos antes de calcular.");
  }else{
    const valorHora =  valorBruto/200;
    const valorHora50 = valorHora*1.5;
    const valorHora100 =  valorHora*2;
 
  // Realizar algunos cálculos (Ejemplo: suma y promedio)
    let resultadoHoras = cantiadHoras*valorHora;
    let resultadoHoras50 = cantidadHoras50*valorHora50;
    let resultadoHoras100 = cantidadHoras100*valorHora100;
    let total = resultadoHoras+resultadoHoras50+resultadoHoras100;

  // Mostrar los resultados en el div de resultados
    document.getElementById('resultado').innerHTML = `
        <strong>Resultados:</strong><br><br>
        Valor de la hora: ${valorHora} <br><br>
        Valor de la hora al 50%: ${valorHora50} <br><br>
        Valor de la hora al 100%: ${valorHora100} <br><br>
        Horas extras a cobrar: ${total.toFixed(2)}
    `;
  }

}
