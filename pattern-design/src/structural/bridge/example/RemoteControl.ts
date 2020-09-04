import { Device } from './Device';

/**
 * La "abstracción" define la interfaz para la parte de
 * "control" de las dos jerarquías de clase.
 */
export class RemoteControl {

  /**
   * Mantiene una referencia a un objeto de la jerarquía de "implementación" y
   * delega todo el trabajo real a este objeto.
   */
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  togglePower(): void {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  channelDown(): void {
    this.device.setChannel(this.device.getChannel() - 1);
  }

  channelUp(): void {
    this.device.setChannel(this.device.getChannel() + 1);
  }

}