import { Device } from './Device';
import { RemoteControl } from './RemoteControl';
import { AdvancedRemoteControl } from './AdvancedRemoteControl';
import { Tv } from './Tv';
import { Radio } from './Radio';

let device: Device = new Tv();
const control = new RemoteControl(device);
control.togglePower();

device = new Radio();
const advanceControl = new AdvancedRemoteControl(device);
advanceControl.mute();

