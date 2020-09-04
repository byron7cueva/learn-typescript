import { Device } from './Device';

export class Radio implements Device {
  #enable!: boolean;
  #volume!: number;
  #channel!: number;

  isEnabled(): boolean {
    console.log(`Radio is ${this.#enable ? 'enable' : 'disable'}`);
    return this.#enable;
  }
  enable(): void {
    console.log('Radio is enable');
    this.#enable = true;
  }
  disable(): void {
    console.log('Radio is disable');
    this.#enable = false;
  }
  getVolume(): number {
    console.log(`Radio volume is ${this.#volume}`);
    return this.#volume;
  }
  setVolume(volume: number): void {
    console.log(`Radio set volume to ${volume}`);
    this.#volume = volume;
  }
  getChannel(): number {
    console.log(`Radio channel is ${this.#channel}`);
    return this.#channel;
  }
  setChannel(channel: number): void {
    console.log(`Radio set channel to ${channel}`);
    this.#channel = channel;
  }

}