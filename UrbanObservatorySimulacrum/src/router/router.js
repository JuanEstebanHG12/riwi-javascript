import { render } from "../core/render.js";
import { Login, Dashboard, DetailView, NotFound, CreateProject } from "../views/index.js";


export async function router() {
    const hash = location.hash || '#/login'
    const [, route, param] = hash.split('/')

    const user = sessionStorage.getItem('user')
    if (user && route == 'login' || route == '') location.hash = '#/dashboard'

    if (!user && route != 'login' || route == '') location.hash = '#/login'


    const routes = {
        'login': Login,
        'dashboard': Dashboard,
        'detail': DetailView,
        'create-project': CreateProject,
    }

    const routeView = routes[route]
    
    if (routeView) {
        param ? render(await routeView(param)) : render(await routeView())
    }
    else {
        render(NotFound())
    }
}