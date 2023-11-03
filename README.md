# Getting Started with Create React App

Este proyecto fue creado usando [Create React App](https://github.com/facebook/create-react-app).

## Sobre este proyecto

Esta app está enmarcada dentro del trabajo práctico N°1 del curso de Argentina Programa 4.0: "Front-End de Sitio Web Usando API".
La aplicación consistirá en dos partes:

- Una app de clima.
- Una app de transporte.

## Versiones

V0: la app de clima está estructurada y se ha dejado un espacio reservado para la app de transporte.
V1: la app de clima ahora llama la información de la API.
V2: la app de clima llama de la API y se puede filtrar por localidad. La app de transporte llama de un JSON estático y permite filtrar por linea de colectivo.

### App de clima

La app de clima (Weather) consiste en varios componentes que toman información de la API [Open Meteo](https://open-meteo.com/en/docs). En este caso brinda la siguiente información:

- **WeatherSearch:** Permite filtrar por provincia y por localidad. Toma datos de un json y devuelve el nombre de la locaidad y sus coordenadas para utilizar en la API y llamar la info del clima.
- **WeatherMain:**
  - **Temp:** nos da la temepratura actual acompañado con un reloj dinámico.
  - **State:** nos indica el estado actual del clima (despejado, nublado, etc.) acompañado de un ícono y de la fecha y hora actual.
  - Maxmin: nos indica la temperatura máxima y mínima del día.
- **WeatherGraph:** nos brinda un gráfico que comienza en el horario actual y finaliza en una proyección de 24hs en el futuro (por ejemplo, si actualmente son las 10:30 am, el gráfico mostrará la información desde las 10am de hoy hasta las 9am de mañana).
  - **WeatherGraphTemp:** realiza este gráfico con el pronóstico de temperatura.
  - **WeatherGraphRain:** realiza este gráfico con el pronóstico de probabilidad de precipitaciones.
- **WeatherHighlights:** nos brinda varias ventanas de información complementaria, incluyendo:
  - **Humidity:** indica la humedad relativa porcentual según el horario actual.
  - **Rain:** indica las precipitaciones totales del día en mm.
  - **SunTime:** indica el horario en que amanece y que anochece del día.
  - **UVindex:** indica el índice de rayos ultravioleta en el horario actual.
  - **Visibility:** indica la visibilidad en el horario actual.
  - **Wind:** indica la velocidad del viento en el horario actual.

### App de transporte

La app de transporte consiste en varios componentes que toman información de un json. En este caso brinda la siguiente información:

- **SelecciónTransporte:** Permite filtrar por linea de colectivo y brinda los datos para poder llamar desde el JSON de transporte la ubicación de colectivos de esa linea.
- **Transporte:** muestra el mapa utilizando la librería [Leaflet](https://leafletjs.com/) en base a la linea elegida en SelecciónTransporte.

## Aspectos a mejorar

- Mejorar la estética y distribución de los componentes.
  - Mejoras estéticas generales de colores, tipos de letra, tamaños relativos, etc.
  - La aguja del reloj de temperatura podría tener alguna animación.
- Afianzar la respuesta responsive de la aplicación. Actualmente se ajusta a Mobile. Falta crear un media query para que muestre a escala en pantalla horizontal en sus distintos tamaños.
- Mejorar el display de gráficos. Cambiar gráfico de precipitaciones por una tabla y hacer coincidir la tabla con el gráfico.
- En la parte de Clima, hacer que los íconos se adapten según sea de día o de noche.

## Recursos externos

Se usó el recurso Weather Icons de la siguiente web: https://erikflowers.github.io/weather-icons/
