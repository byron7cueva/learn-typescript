/**
 * La interfaz de "implementación" declara métodos comunes a
 * todas las clases concretas de implementación. No tiene por
 * qué coincidir con la interfaz de la abstracción. De hecho,
 * las dos interfaces pueden ser completamente diferentes.
 * Normalmente, la interfaz de implementación únicamente
 * proporciona operaciones primitivas, mientras que la
 * abstracción define operaciones de más alto nivel con base en
 * las primitivas.
 */
export interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(volume: number): void;
  getChannel(): number;
  setChannel(channel: number): void;
}