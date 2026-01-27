//obtener toda la lista de usuarios
async function getUsers() {
    try {
        const response = await fetch('http://localhost:3000/users')
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error);
        throw error;
    }
}

//Buscar un usuario
async function getUser(user) {
    try {
        const data = await getUsers()
        const userFind = data.find(u => u.name === user)
        return userFind

    } catch (error) {
        console.error(error);
        throw error;
    }
}

//Funcion del botón de login
async function login(name, pass) {
    try {
        const user = await getUser(name)
        if (!user) throw new Error('fill out all the fields')

        if (user.name == name && user.password == pass) {
            const userCopia = {...user} // crear copia del usuario para eliminas contraseña
            delete userCopia.password // eliminar contraseña para enviar a sessionStorage
            sessionStorage.setItem('user', JSON.stringify(userCopia)) //enviar la copia que no tiene el password
            location.hash = '#/dashboard'
        }
        else {
            throw new Error('incorrect username or password')
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export {
    login
}

