//===================LEER DATOS DE UN ARCHIVO JSON LOCAL=========================================
document.querySelector('#boton2').addEventListener('click',traerDatos);
function traerDatos(){
    const xhttp=new XMLHttpRequest();
    xhttp.open('GET','catalogo.json',true);
    xhttp.send();
    xhttp.onreadystatechange=function(){
        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            let datos=JSON.parse(this.responseText);
            //console.log(datos);
            let res=document.querySelector('#res');
            res.innerHTML='';

            for(let item of datos){
                //console.log(item.artista);
                res.innerHTML += `
                    <tx>
                        <td>${item.titulo}</td>
                        <td>${item.artista}</td>
                    </tx>
                ` 
            }
        }
    }
}

//===================LEER DATOS DE UN ARCHIVO JSON REMOTO=========================================
document.querySelector('#boton3').addEventListener('click',leerDatos);
function leerDatos(){
    const xhttp=new XMLHttpRequest();
    xhttp.open('GET','http://127.0.0.1:5500/item.json',true);
    xhttp.send();
    xhttp.onreadystatechange=function(){
        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            let datos=JSON.parse(this.responseText);
            //console.log(datos);
            let res=document.querySelector('#resp');
            res.innerHTML='';

            for(let item of datos){
                //console.log(item.artista);
                res.innerHTML += `
                    <tx>
                        <td>${item.name}</td>
                        <td>${item.item}</td>
                        <td>${item.price}</td>
                    </tx>
                ` 
            }
        }
    }
}

//=================================LEER DATOS DE UN ARCHIVO DE TEXTO LOCAL===========================
document.querySelector('#boton1').addEventListener('click',cargarTXT);
function cargarTXT(){
    fetch('nombre.txt')
        .then(function(res){
            return res.text();
        })
        .then(function(empleados){
            console.log(empleados);
            document.getElementById('resultado').innerHTML=empleados;
            //document.log(empleados);
        })
}

//=================================LEER DATOS DE UN ARCHIVO DE TEXTO REMOTO===========================
document.querySelector('#boton4').addEventListener('click',txtRemoto);
function txtRemoto(){
    fetch('http://127.0.0.1:5500/numeros.txt')
        .then(function(res){
            return res.text();
        })
        .then(function(empleados){
            console.log(empleados);
            document.getElementById('respu').innerHTML=empleados;
            //document.log(empleados);
        })
}
