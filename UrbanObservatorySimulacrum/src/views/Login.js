import { login } from "../services/usersServices.js"
import { Loading } from "../components/Loading.js"
import { render } from "../core/render.js"

export function Login(){
    return ` <div class="auth-body">

  <main class="auth-container">
    <section class="auth-card">

      <header class="auth-header">
        <h1>Observatorio Urbano y Ambiental</h1>
        <p>Acceso a plataforma GovTech</p>
      </header>

      <form class="auth-form">
        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input id="email" type="email" placeholder="admin@govtech.com" required />
        </div>

        <div class="form-group">
          <label for="password">Contraseña</label>
          <input id="password" type="password" placeholder="••••••••" required />
        </div>

        <button id="btn-login" class="btn btn-primary">
          Iniciar sesión
        </button>

        <p class="auth-error hidden">
          Credenciales inválidas. Intenta nuevamente.
        </p>
      </form>

      <footer class="auth-footer">
        <p>Proyecto educativo – Riwi GovTech</p>
      </footer>

    </section>
  </main>

</div>`
}

document.addEventListener('click',async (e)=>{
    if(e.target.id === 'btn-login'){
        const passwordContainer = e.target.previousElementSibling
        const userContainer = e.target.previousElementSibling.previousElementSibling
        const inpPassword = passwordContainer.querySelector('input')
        const inpUser = userContainer.querySelector('input')       
        await login(inpUser.value , inpPassword.value)
    }

})