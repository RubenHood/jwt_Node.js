fetch('http://localhost:3001')
    .then(res => res.json())
    .then(res => {
        console.log(res.token);
        // localStorage.setItem('authToken', res.token);
    })
    .catch(e => console.log())

// fetch(`http://localhost:3001/updateProfile/${userID}`, {
//         headers: {
//             authenticate: localStorage.getItem('authToken'),
//             "Content-Type": "application/json"
//         },
//         method: "PATCH",
//         body: JSON.stringify({
//             nombre: "nuevoNombre"
//         })
//     })
//     .then()
//     .catch(console.log)