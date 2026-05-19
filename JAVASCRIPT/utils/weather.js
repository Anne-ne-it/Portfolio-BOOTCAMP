const API_KEY = '8fc940b129394a259bd145833262004'; //Mi clave de API de weatherAPI
const API_URL = 'https://api.weatherapi.com/v1/forecast.json'; //URL dirección de la API

//Función para obtener los datos del clima dependiendo de la ubicación
const getWeather = () => {
    const weatherContainer = document.querySelector('.weather'); //Selecciona el contenedor donde se mostrarán los datos del clima

    if (!weatherContainer) return; //Si no encuentra o no existe el contenedor, no hace nada

    navigator.geolocation.getCurrentPosition( //Obtiene la ubicación del usuario
        async (position) => { //Obtiene la ubicación del usuario
            try {
                const {latitude, longitude} = position.coords; //Obtiene datos de latitud y logitud del usuario para saber su ubicación
                const response = await fetch(`${API_URL}?key=${API_KEY}&q=${latitude},${longitude}&lang=es`); //Hace la petición a la API con los datos de ubicación del usuario y la clave de API
                
                if (!response.ok) throw new Error('Error al obtener el clima'); //Si la respuesta no es correcta, devuelve un error

                const data = await response.json(); //Convierte la respuesta a formato json

                const city = data.location.name; //Obtiene el nombre de la ciudad
                const temp = Math.round(data.current.temp_c); //Obtiene la temperatura actual en grados Celsius
                const icon = data.current.condition.icon; //Obtiene el icono del clima actual
                const condition = data.current.condition.text; //Obtiene la descripción del clima actual

                //Para renderizar el clima en el contenedor, un template literal con los datos obtenidos de la API
                weatherContainer.innerHTML = `
                    <div class="weather-widget">
                        <div class="weather-top">
                            <img src="https:${icon}" alt="${condition}" class="weather-icon">
                            <span class="weather-temp">${temp}°C</span>
                        </div>
                        <span class="weather-city">${city}</span>
                    </div>
                `
            }
            catch (error) { //Si hay un error al obtener los datos del clima, lo muestra en la consola y limpia el contenedor de clima
                console.error('Error al obtener el clima:', error); //Si hay un error, lo muestra en la consola
                weatherContainer.innerHTML =''; //Limpia el contenedor de clima para no mostrar información incorrecta o vacía
            }
        },
        (error) => { //Si hay un error al obtener la ubicación del usuario, lo muestra en la consola y limpia el contenedor de clima
            console.error('Error de geolocalización:', error); //Si hay un error, lo muestra en la consola
            weatherContainer.innerHTML = ''; //Limpia el contenedor de clima para no mostrar información incorrecta o vacia
        }
    );
};

export default getWeather; //Exporta la función para obtener el clima, se puede importar en otros archivos para usarla y mostrar el clima