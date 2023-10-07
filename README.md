# Getting Started with Create React App

Este proyecto fue creado usando [Create React App](https://github.com/facebook/create-react-app).

## Sobre este proyecto

Esta app está enmarcada dentro del trabajo práctico N°1 del curso de Argentina Programa 4.0: "Front-End de Sitio Web Usando API".
La aplicación consistirá en dos partes:

- Una app de clima.
- Una app de transporte.

## Versiones

V0: la app de clima está estructurada y se ha dejado un espacio reservado para la app de transporte.

### App de clima

La app de clima (Weather) consiste en varios componentes que toman información de un json. En este caso brinda la siguiente información:

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

## Aspectos a mejorar

- Mejorar la estética y distribución de los componentes.
  - Mejoras estéticas generales de colores, tipos de letra, tamaños relativos, etc.
  - La aguja del reloj de temperatura podría tener alguna animación.
- Afianzar la respuesta responsive de la aplicación. Actualmente se ajusta en la pantalla al cargarse, salvo algunas aplicaciones que son afectadas por flex wrap, que al desbordar hacen que toda la app ocupe más espacio en vertical y se genere un scroll.
- Los gráficos se cargan bien al inicio pero si luego se cambia el tamaño de pantalla, se ajusta el ancho pero no el alto. Para que vuelva a ajustarse es necesario refrescar. Necesito encontrar el motivo por el que no se ajusta automáticamente.
