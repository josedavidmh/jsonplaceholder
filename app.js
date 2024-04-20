function buscar(){
    let cuerpo_tabla=document.getElementById("contenido")
   
        url = "https://jsonplaceholder.typicode.com/users"
                   fetch(url)
                  .then( response => response.json())
                  .then( data =>  visualizar(data) )
                  .catch( error => console.log(error))
              const visualizar = (data => {
                console.log(data)   
                for (i=0;i<data.length;i++){
                    cuerpo_tabla.innerHTML+=`<tr><td>${data[i].id}</td><td>${data[i].name}</td><td>${data[i].username}</td><td>${data[i].email}</td><td>${data[i].address.city}</td><td>${data[i].address.street}</td><td>${data[i].address.suite}</td></tr>`
                }
                //cadena=`<strong>Nombre:</strong> ${data.name}` 
               // cadena+=`<img src=${data.sprites.front_default} width="300" height="300"></img>`
              //document.getElementById("contenido").innerHTML=cadena
              $(document).ready( function () {
                $('#table_id').DataTable();
            } );     
       }  ) 
    }
