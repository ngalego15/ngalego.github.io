document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("boton").addEventListener("click", function () {
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fecha = document.getElementById("date").value;

        const data = {
            nombre: nombre,
            apellido: apellido,
            fecha: fecha
        };

        const url = "https://jsonplaceholder.typicode.com/users"; 

        fetch(url, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (response.ok) {
                console.log("Los datos fueron enviados.");
            } else {
                console.error("Hubo un error al enviar los datos.");
            }
        })
        .catch(error => {
            console.error("Error en la solicitud: ", error);
        });
    });
});

