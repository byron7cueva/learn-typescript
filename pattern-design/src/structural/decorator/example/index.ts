import { Application } from './Application';
import { ApplicationConfigurator } from './ApplicationConfigurator';

// Utilizando un aplicacion cliente
const app = new Application();
app.dumbUsageExample('Salario: 100');
console.log('');

console.log('ApplicationConfigurator');
const appConfig = new ApplicationConfigurator();
appConfig.enableEncryption = true;
appConfig.enableCompression = true;
appConfig.configuraionExample();
console.log(appConfig.getSalary());