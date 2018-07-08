/**
 * Clase que contiene las rutas de los endpoint.
 */
export class adaptersRouting {

  public static json = 'resources/messages.json';

  /**
   * Rutas de los adaptadores
   */
  public static services = {
    webService: 'http://www.basculasjaramillo.com/ccc/WS/'
  };

  /**
   * Rutas de los home services {homeServices}
   */
  public static homeService = {
    caballosHome: adaptersRouting.services.webService + 'caballos'
  };

  /**
   * Rutas de los login services {loginServices}
   */
  public static loginService = {
    login: adaptersRouting.services.webService + 'usuarios/login',
    recuperar_contrasena: adaptersRouting.services.webService + 'usuarios/recuperar-contrasena'
  };
}