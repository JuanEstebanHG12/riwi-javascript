

class Project {
    constructor(name, city, longitude, latitude, state) {
        this.name = name
        this.city = city
        this.longitude = longitude
        this.latitude = latitude
        this.state = state
    }
}

async function createProject(name, city, longitude, latitude, state) {
    const project = new Project(name, city, longitude, latitude, state)
    try {
        const response = await fetch('http://localhost:3000/projects', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(project)
        })
        if (!response.ok) throw new Error('Error to create project')

            const success = document.querySelector('.form-message.success')
            success.classList.remove('hidden')
    } catch (error) {
        const err = document.querySelector('.form-message.error')
        err.classList.remove('hidden')


        console.error(error);
    }
}

async function getProjects() {
    try {
        const response = await fetch('http://localhost:3000/projects')
        const data = await response.json()
        sessionStorage.setItem('projects', JSON.stringify(data))

        return data
    } catch (error) {
        console.log(error);
    }
}

/* async function filterProjects(status,name) {
    let projects = await getProjects()
    
    return projects.filter(p => p.status == status && p.name.toLowerCase().includes(name.toLowerCase()))
    
} */
async function filterProjects(status) {
    let projects = await getProjects()
    switch (status) {
        case 'active':
            return projects.filter(a => a.state == 'active')
            break;
        case 'pending':
            return projects.filter(a => a.state == 'pending')
            break;
        case 'finished':
            return projects.filter(a => a.state == 'finished')
            break;
    
        default:            
            return projects
            break;
    }
}

export {
    getProjects,
    filterProjects,
    createProject
}