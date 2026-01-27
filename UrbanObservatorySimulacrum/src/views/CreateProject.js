import { createProject } from "../services/projectsServices.js"

export function CreateProject() {
  return `
    <main class="container">
    <section class="create-project-container">

      <header class="create-header">
        <h2>Crear nuevo proyecto</h2>
        <p>Registra un proyecto urbano para monitoreo climático</p>
      </header>

      <form class="create-form" id="createProjectForm">

        <div class="form-group">
          <label for="name">Nombre del proyecto</label>
          <input type="text" id="name" placeholder="Monitoreo Ciudad de Bogotá" required />
        </div>

        <div class="form-group">
          <label for="city">Ciudad</label>
          <input type="text" id="city" placeholder="Bogotá" required />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="lat">Latitud</label>
            <input type="number" id="lat" step="any" placeholder="4.7110" required />
          </div>

          <div class="form-group">
            <label for="lon">Longitud</label>
            <input type="number" id="lon" step="any" placeholder="-74.0721" required />
          </div>
        </div>

        <div class="form-group">
          <label for="status">Estado del proyecto</label>
          <select id="status" required>
            <option value="active">Selecciona un estado</option>
            <option value="active">Activo</option>
            <option value="pending">Pendiente</option>
            <option value="finished">Finalizado</option>
          </select>
        </div>

        <div class="form-actions">
          <button id="btn-save-project" type="submit" class="btn btn-primary">
            Guardar proyecto
          </button>
          <a href="#/dashboard" class="btn btn-outline">
            Cancelar
          </a>
        </div>

        <p class="form-message success hidden">
          ✅ Proyecto creado exitosamente
        </p>

        <p class="form-message error hidden">
          ❌ Error al crear el proyecto
        </p>

      </form>

    </section>
  </main>
    `
}

/* document.addEventListener('click', (e) => {
    if (e.target.id === 'btn-save-project') {
      const form = e.target.closest('#createProjectForm')
      e.preventDefault()
        const name = form.querySelector('#name')
        const city = form.querySelector('#city')
        const lat = form.querySelector('#lat')
        const lon = form.querySelector('#lon')
        const status = form.querySelector('#status')
        

        createProject(name.value, city.value, lon.value, lat.value, status.value)
        location.hash = "#/dashboard"
    }
}) */
document.addEventListener('submit', (e) => {
  console.log(e.target);
  const btn = e.target.querySelector('#btn-save-project')
  if (e.target.id === 'createProjectForm') {
    e.preventDefault()
    const form = e.target
    const name = form.querySelector('#name')
    const city = form.querySelector('#city')
    const lat = form.querySelector('#lat')
    const lon = form.querySelector('#lon')
    const status = form.querySelector('#status')
    createProject(name.value, city.value, lon.value, lat.value, status.value)
  }

})