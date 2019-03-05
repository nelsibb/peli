        class administrador {
   constructor(
        NOMBRE,
        CLAVE,
        EMAIL,
        IMAGEN,
        ESTADO,
        SALT
            ) {
    this.NOMBRE = NOMBRE;
    this.CLAVE  = CLAVE;
    this.EMAIL  = EMAIL;
    this.IMAGEN = IMAGEN;
    this.ESTADO = ESTADO;
    this.SALT   = SALT;
   }
Guardar() {  //Guarda una pelicula
   var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/nuevapelicula');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
}
    
 Modificar() {  //Modifica un dato
	
       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/Modificapelicula');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}   
    
    Eliminar() {  //Elimina un dato

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/Eliminapelicula');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}
Seleccionartodos() {  //Selecciona todos los elementos
	
       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionartodos');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}
    
    Seleccionarporfecha() {  //Busca los elementos por su fecha 

       var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionarporfecha');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
    
}
    
    Seleccionarporid() {  //Lama a los objetos mediante su id
	
      var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionarpeliculaporid');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
}
    
    Seleccionarpornombre() {  //Seleciona por nombre los datos

    
    
      var objetoaenviar = this;
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
       
      try {
           
               var xhr = new XMLHttpRequest();
xhr.open('POST', 'http://localhost:8080/api/seleccionarpornombre');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
    }
    else
        {
           reject(xhr); 
        }
};
xhr.send(JSON.stringify(objetoaenviar));   
          
          
          
}
catch(err) {
     reject(err.message);

}
    });
    
}
            
            
   peliculaspormesyanno(mes,anno)
            { //Este proceso recoje el mes y el año ingresados
                var objetoaenviar = this; //Iguala el obejto a si mismo
                var vectordepeliculasfiltradas = [];
                //Return a new promise
                return new Promise(function(resolve,reject){
                    //Do the usual XHR stuff
                   try{
                       var xhr = new XMLHttpRequest();
                       xhr.open('POST','http://localhost:8080/api/seleccionarpelicula');
                       xhr.setRequestHeader('Content-Type', 'application/json');
                       xhr.onload = function(){
                            if(xhr.status === 200){
                                var peliculas = JSON.parse(xhr.responseText);
                                
                                for(var elemento in peliculas){
                                    var fechadelapelicula = new Date(peliculas[elemento].FECHA);
                                    if((fechadelapelicula.getMonth()+1 == mes) && (fechadelapelicula.getFullYear() == anno)){ //Ciclo para recoger los datos
                                        vectordepeliculasfiltradas.push(peliculas[elemento]);
                                    }
                                }
                                    resolve(vectordepeliculasfiltradas);
                            }   
                                else
                                    {
                                        reject(xhr);
                                    }
                                
                        };
                       xhr.send(JSON.stringify(objetoaenviar));
                   }
                       catch(err){
                           reject(err.message);
                       }
                });
            }
}
            
let imagenenbase64 = "";  //Guarda una imagen convirtiendola en texto
      $("#imgpeli").change(function(){
       readURL(this);
 });
    
        function readURL(input) {

                    if (input.files && input.files[0]) {
                        var reader = new FileReader();

                        reader.onload = function (e) {

                            imagenenbase64=e.target.result;

                        
                          
                        }

                        reader.readAsDataURL(input.files[0]);
                    }
                }


             
            
        function botonguardarclick() //Funcion que ingresa los datos solicitados a la base de mongodb
            {
                var administradorinstanciada = new _Administrador(0,
                document.getElementById("name").value,
                 document.getElementById("email").value,
                document.getElementById("contrasenia").value,
               document.getElementById("contrasenia2").value,
                document.getElementById("foto").value,
       
          imagenenbase64,
                );
                                                        
                administradorinstanciada.Guardar().then(function(response) {
  console.log("Success!", response);
            alert("Guardado con exito");
              
}, function(error) {
  console.error("Failed!", error);
             alert("Error " + error);
           
});                                       
                                                        
            }
