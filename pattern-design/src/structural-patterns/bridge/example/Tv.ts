import { Device } from './Device';

/**
 * Todos los objetos a controlar sigen una misma interface
 */
export class Tv implements Device {
  #enable!: boolean;
  #volume!: number;
  #channerl!: number;

  isEnabled(): boolean {
    return this.#enable;
  }
  enable(): void {
    console.log('Tv is enable');
    this.#enable = true;
  }
  disable(): void {
    console.log('Tv is disable');
    this.#enable = false;
  }
  getVolume(): number {
    console.log(`Tv volume is ${this.#volume}`);
    return this.#volume;
  }
  setVolume(volume: number): void {
    console.log(`Tv ser volume to ${volume}`);
    this.#volume = volume;
  }
  getChannel(): number {
    console.log(`Tv channel is ${this.#channerl}`);
    return this.#channerl;
  }
  setChannel(channel: number): void {
    console.log(`Tv channel set to ${channel}`);
    this.#channerl = channel;
  }

}