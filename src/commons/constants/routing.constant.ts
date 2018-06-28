/**
 * Clase que contiene las rutas de los endpoint.
 */
export class adaptersRouting {

  public static json = 'resources/messages.json';

  /**
   * Rutas de los adaptadores
   */
  public static adapters = {
    detailsAdapter: 'CommonsAdapter/'
  };

  /**
   * Rutas de los procedimientos {detailsAdapter}
   */
  public static detailsAdapter = {
    banner: adaptersRouting.adapters.detailsAdapter + 'commons/get-banner-images'
  };
}