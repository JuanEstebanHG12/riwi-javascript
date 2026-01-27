
const weatherCache = new Map(); // Crear una caché en memoria para almacenar los datos meteorológicos
export async function getWeather(long,lat) {
    const cacheKey = `${long},${lat}`; //Crear una clave única para la caché basada en las coordenadas
    if (weatherCache.has(cacheKey)) { // Verificar si los datos ya están en la caché
        return weatherCache.get(cacheKey); // Si existen, devolver los datos almacenados, sin necesidad de hacer una nueva solicitud
    }

    //Si no existen en la caché, hacer la solicitud a la API
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current=temperature_2m,wind_speed_10m,precipitation`)
        const data = await response.json()

        weatherCache.set(cacheKey, data);// Almacenar los datos obtenidos en la caché antes de devolverlos
        
        return data
    } catch (error) {
        console.error(error);
    }
}
