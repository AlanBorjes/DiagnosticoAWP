

async function obtener() {
    var html = "";
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    var user = data.data;
    user.forEach(element => {
        html += '<tr>       <th scope="row">' + element.id + '</th>      <th scope="row">' + element.email + '</th>            <td>' + element.first_name + '</td>            <td>' + element.last_name + '</td>            <td><img src="' + element.avatar + '" alt=""> </td>      <td>    <button type="button" class="btn btn-danger" onclick="eliminar(' + element.id + ')" >Eliminar</button> <button type="button" onclick="actualizar(' + element.id + ')" class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#actualizar">Actualizar</button> </td> </td> </tr>';
    })
    var documento2 = document.getElementById("table2");
    document.getElementById("table2").innerHTML = html;
}

async function crear() {
    let _datos = {
        name: document.getElementById("name").value,
        job: document.getElementById("job").value
    }
    console.log(_datos);
    const response = await fetch('https://reqres.in/api/users', {
        method: "POST",
        body: JSON.stringify(_datos),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    });
    console.log(response);
    if (response.status = 201) {
        alert("Se creo un nuevo usuario")
    } else {
        alert("ups Hubo un Error intentelo mas tarde")

    }
    document.getElementById("exampleModal").hidden;
}

async function actualizar(id) {

    const response = await fetch('https://reqres.in/api/users/' + id);
    const data = await response.json();

    document.getElementById("name2").value = data.data.first_name;
    document.getElementById("id2").value = data.data.id;

}

async function eliminar(id) {
    const response = await fetch('https://reqres.in/api/users/' + id, { method: 'DELETE' });
    console.log(response);
    if (response.status == 204) {
        alert("Se elimino correctamente el usuario")
    } else {
        alert("ups Hubo un Error intentelo mas tarde")
    }
}

async function update(id) {
    var id = document.getElementById("id2").value;
    let _datos = {
        name: document.getElementById("name2").value,
        job: document.getElementById("job2").value
    }
    console.log(_datos);
    const response = await fetch('https://reqres.in/api/users/' + id, {
        method: "PUT",
        body: JSON.stringify(_datos),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    });
    console.log(response);
    if (response.status = 202) {
        alert("Se Actualizo el usuario")
    } else {
        alert("ups Hubo un Error intentelo mas tarde")

    }
}

obtener();