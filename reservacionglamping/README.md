## Reservacion Hotelera Glamping ATTRAVERSIAMO



- Limpìeza de la plantilla redux.
- Componente principal App.js - Header, Home, SearchPage
- Enrutamiento utilizando React-router-dom (Home - SearchPage ), version 6.0 utiliza BrowserRouter, Routes, Route. Switch deprecated(no se utiliza).
- Header :displayDesktop(), displayMobile(). Import AppBar, makeStyles, Toolbar from @material-ui/core, instalar tambien @material-ui/icons.
- Header - displayDesktop 
- Header - displayTablet, 
              "aria-label":"menu",
              "aria-haspopup": "true", 
  se utilizan para el tema de ciejos o invidentes
- Home Page: DatePicker(Fechas para reservar), Banner, Multimedia(RoomCard)
    Utilizamos un React Fragment <></> que se utiliza para que se puedan ejecutar con facilidad bloques de codigo como <strong>CssBaseline</strong>.

    Utilizar instancia npm i react-date-range.

    History.push(deprecated) (linea 30 <DatePicker.js>) - es un hook; en vez de history utilizar useNavigate (linea 32 <DatePicker.js>) - navegar(window.location.pathname="/search")

- Home Page: Banner 
- Home Page - Agregamos img (.gif), botones para busqueda en el calendario
- Home Page - Search dates : Hide <DatePicker>
- Home PAge - RoomCard(src, title, description) - se agrega informacion a ls cabañas se organiza el Grid
- Footer, se crea el componente y luego se llena con los datos que se necesitan.
- Search Page: importamos chips del componente <mockData.js>
- Search Page: <Results/> - Se utiliza para mostrar cabañas de acuerdo a los filtros de precio.
- Search Page: <Paper/> lo utilizamos para plasmar objetos como si fuera una hoja de papel, el fondo de una aplicación se asemeja a la textura plana y opaca de una hoja de papel, y el comportamiento de una aplicación imita la capacidad del papel para cambiar el tamaño, barajar y unir en varias hojas. 
- Search Page: se organizaron los <Results/>como arrays de Room Cards con la informacion del precio del hotel y su descripcion.
- Search Page: organizar la funcionalidad de los filtros.(filtrar por precios)--> cpaturar los precios del slider y filtar mock data a valores iguales o menores a ese precio.
- App:
  App>store.js se crean las variblaes startSlice y endSlice para trabnjar con los datos proporcionados por <DatePicker/> Todos los hooks se tienen que inicializar.

  Consumir useSelector (selectStart, selectEnd)
- Agregar datos de status a las cabañas para que cuando no esten disponibles en alguna fecha no se muestren status= available : not-available (OJO <h1><strong>muy importante averiguar</strong></h1>)


