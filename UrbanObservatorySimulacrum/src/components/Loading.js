export function Loading({ message = 'Cargando datos...' }) {
    return `
        <div class="loading-container">
            <div class="loading-spinner"></div>
            <p class="loading-title">${message}</p>
            <p class="loading-subtitle">Por favor espera un momento</p>
        </div>
    `
}

