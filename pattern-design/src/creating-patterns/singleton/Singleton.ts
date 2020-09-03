export class Singleton {

  /**
   * El campo para almacenar la instancia singleton debe declararse estático
   */
  private static instance: Singleton;

  /**
   * El contructor siempre debe ser privado para evitar las llamadas de construcción
   * directas del operador new
   */
  private constructor() {
    // Puede ir algun código de inicialización
  }

  /**
   * Permite a los cliente acceder a la misma instancia
   */
  public static getInstance(): Singleton {
      // Valida si esta instancia todavia no ha sido inicializada
      if (!Singleton.instance) {
          Singleton.instance = new Singleton();
      }

      return Singleton.instance;
  }

  /**
   * Cualquier singleton puede definir cierta lógica de negocio que debe ejecutarce
   * en su instancia
   */
  public someBusinessLogic() {

  }
}