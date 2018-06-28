## Estructura de carpetas

* src
  * app: Esta carpeta contiene el componente principal de la apliación.
  * assets
    * fonts: En este directorio se almacenan las fuentes de la aplicación.
    * icons: En este directorio se almacenan los Iconos de la aplicación.
    * images: En este directorio se almacenan los Iconos de la aplicación, se pueden crear subcarpetas para almacenar imagenes dependiendo de las necesidades y el tamaño del proyecto.
  * bussines-model  
    * interfaces: En este directorio se almacenan Clases o interfaces de la aplicación.
    * services: En este directorio se almacenan los Servicios de la aplicación, se debe crear un archivo por uno de los modulos del proyecto, o como el proyecto lo requiera.
  * commons: Esta carpeta contiene componentes transversales que pueden ser usados en diferentes sitios de la aplicación.
    * animations: En este directorio se almacenan las animaciones transversales a la aplicación.
    * constants: En este directorio se almacenan rutas (endpoints) y constantes.
    * directives: En este directorio de almacenan las directivas que serán usadas en la aplicación, cada directiva debe contener su respectiva subcarpeta en este directorio, en este directorio se debe crear un modulo unico para exportar todas las directivas y asi hacerlas transversales.
    * pipes: En este directorio se almacenan los pipes de la aplicación.
    * providers: En este directorio se almacenan los providers de la aplicación, se pueden crear tantos providers como sea necesario, se recomienda incluir un providers llamado utilities.provider.ts para contener utilidades que puedan ser usadas a través de toda la aplicación tales como mostrar modales, mostrar loading. etc..
  * components: En este directorio se debe crear un modulo unico para exportar todas los componentes y asi hacerlas transversales. Cada una de los componentes del proyecto contendran los mismo archivos nombrados como se  muestra a continuación:
    * exampleComponent
      * exampleComponent.html: Vista del componente.
      * exampleComponent.json: textos correspondientes al componente.
      * exampleComponent.scss: Estilos correspondientes al componente.
      * exampleComponent.ts: Definicion del componente.
  * pages: Cada una de las pages del proyecto contendran los mismo archivos nombrados como se muestra a continuación:
    * examplePage
      * examplePage.html: Vista del Page.
      * examplePage.json: textos correspondientes a la vista.
      * examplePage.scss: Estilos correspondientes a la vista.
      * examplePage.ts: Definicion del Page.
      * examplePage.module.ts: [Opcional] Modulo del Page, indispensable apra realizar Lazyload.
  * theme: se utiliza [arquitectura Itcss](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) para estilos, esta arquitectura puede ser usada en su totalidad o como el proyecto lo requiera.
    * Settings
    * Tools
    * Generic
    * Elements
    * Objects
    * Components
    * Utilities
  * index.html
  * manifest.json
  * service-worker.js

### Notas
  * Los services y providers aunque ambos cuentan con el decorador @Inject se debe tener en cuenta que los services son clases que se encargan de realizar peticiones a partes externas de la app. Librerias, Back-end, etc; por su parte los providers son utilidades y clases auxiliares que se usan para facilitar el paso de datos entre vistas y el uso de operaciones transversales.
  * Cada uno de los archivos creados debe tener un nombramiento acorde a su naturaleza es decir: 
    * directivas (nombre.directive.ts)
    * providers (nombre.provider.ts).
    * servivios (nombre.service.ts).
    * Interfaces (nombres.interface.ts, nombre.class.ts).
  * Se ha creado previemanete una tarea de Gulp que es ejecutada ates de añadir plataforma y antes de correr ionic serve, que es la encargada de generar una carpeta en el build de la aplicación con todos los mensajes concatenados en un solo archivo el cual es cargado al inicio de la aplicación, adicionalmente cabe mencionar que cuando se este desarrollando se debe correr la tarea de gulp la cual estara pendiente de los cambios en algunos de los archivos de extension .json
