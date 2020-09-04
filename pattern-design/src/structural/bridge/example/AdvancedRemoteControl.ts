import { RemoteControl } from './RemoteControl';

/**
 * Se puedes extender clases de la jerarquía de abstracción
 * independientemente de las clases de dispositivo.
 */
export class AdvancedRemoteControl extends RemoteControl {
  mute(): void {
    this.device.setVolume(0);
  }
}