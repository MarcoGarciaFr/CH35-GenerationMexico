/*

Para manipular la información de un usuario, necesito crear un perfil mediante un objeto de JS.
 
*/

const user ={

    username: 'danieldlcm86',
    age: 37,
    email: 'daniel@gmail.com',
    favfilms: ['Interstellar', 'Se7en', 'Mindhunter', 'Mean Girls', 'Shrek']

}

// Crear una función que me permita ingresar el objeto del perfil en el nodo padre

const createUser = (user) =>{

    document.getElementById("username").textContent = user.username;

    document.getElementById("age").textContent = user.age;

    document.getElementById("email").textContent = user.email;

    /* 
    
        Mostrando elementos de lista en forma de lista

        Para mostrar el array en forma de lsita utilizamos un ciclo forEach, para recorrer todo el array y traer cada elemento a la lista.

    */    

    const ul = document.getElementById("fav-films");

    user.favfilms.forEach(film =>{

        const li = document.createElement("li");

        li.textContent = film;

        ul.appendChild(li);

    });

    //Modificando estilos de la ul para quitar viñetas

    ul.style.listStyleType = "none";
    ul.style.padding = "0";
    ul.style.color = "#D9B70D";

    // Mostrando elementos de la lista en forma de fila (no nos sirve porque definimos una lista desordenada 'ul' y no un párrafo).
    
    // document.getElementById("fav-films").textContent = user.favfilms;

}

// Invocando la función

createUser(user);

/*

Eventos para actualizar el username mediante el input y el botón

*/

const inputName = document.getElementById("name");

const inputEmail = document.getElementById("useremail");

const profileBtn = document.getElementById("btn-main");

const userName = document.getElementById("username");

const email = document.getElementById("email");

profileBtn.addEventListener("click", () =>{

    userName.textContent = inputName.value;

    email.textContent = inputEmail.value;

})
