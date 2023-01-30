var i = 0,x=0,z=0,y=0;

var txt = 'Richard.johnns@gmail.com';

var speed = 50;

var dir = '7957 Bollinger Rd';

var fech = '2/7/1957';

var tel = '(829) 982-7854';

function Datos() {

  if (i < txt.length) {

    document.getElementById("data").innerHTML += txt.charAt(i);
    
    i++;
    
    setTimeout(Datos, speed);
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