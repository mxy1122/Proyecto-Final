var i = 0,x=0,z=0,y=0,e=0,j=0,h=0;

var txt = 'Richard.johnns@gmail.com';

var speed = 50;

var dir = '7957 Bollinger Rd';

var fech = '2/7/1957';

var tel = '(829) 982-7854';

var est = 'Abogado Recibido en Harvard';

var hab = 'Liderazgo , Trabajo en equipo y Capacidad para la toma de desiciones';

var exp = '3 años en buffe en Kansas y 2 años trabajando en particular'

function Email() {

  if (i < txt.length) {

    document.getElementById("data").innerHTML += txt.charAt(i);
    
    i++;
    
    setTimeout(Email, speed);
  }
}

function Direccion(){
   
    if (x < dir.length) {

        document.getElementById("data2").innerHTML += dir.charAt(x);
        
        x++;
        
        setTimeout(Direccion, speed);
      }
}



function Nacimiento(){
   
    if (z  < fech.length) {

        document.getElementById("data3").innerHTML += fech.charAt(z);
        
        z++;
        
        setTimeout(Nacimiento, speed);
      }
}

function Telefono(){

  if (y  < tel.length) {

    document.getElementById("data4").innerHTML += tel.charAt(y);
    
    y++;
    
    setTimeout(Telefono, speed);
  }

}

function Estudios(){

  if (h  < est.length) {

    document.getElementById("data5").innerHTML += est.charAt(h);
    
    h++;
    
    setTimeout(Estudios, speed);
  }


}

function Habilidades(){

  if (j  < hab.length) {

    document.getElementById("data6").innerHTML += hab.charAt(j);
    
    j++;
    
    setTimeout(Habilidades, speed);
  }


}

function Experiencia(){

  if (e  < exp.length) {

    document.getElementById("data7").innerHTML += exp.charAt(e);
    
    e++;
    
    setTimeout(Experiencia, speed);
  }


}