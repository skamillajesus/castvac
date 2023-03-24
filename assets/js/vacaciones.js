const calcular = () => {
    var empleado=document.querySelector("#empleado").value;
    var img=document.querySelector("#img");
    var vac=document.querySelector("#vac");
    
 var vacaciones = 0;

 img.innerHTML=`<img src="./assets/img/${empleado}.png" width=350>`;
    
switch(empleado){
    case "empleado1": vacaciones= 19.20;break;
    case "empleado2": vacaciones= 15.30;break;
    case "empleado3": vacaciones= 12.40;break;
    case "empleado4": vacaciones= 0.00;break;
    case "empleado5": vacaciones= 12.50;break;
    case "empleado6": vacaciones= 12.50;break;
    case "empleado7": vacaciones= 12.50;break;
    case "empleado8": vacaciones= 12.50;break;
    case "empleado9": vacaciones= 12.50;break;
    case "empleado10": vacaciones= 12.50;break;
    
}
vac.innerHTML=`<h3>Vacaciones disponibles:   ${vacaciones.toFixed(2)} Dias  </h3>`;


}