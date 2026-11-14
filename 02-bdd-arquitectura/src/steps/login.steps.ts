import { Given, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/CustomWorld';
import { LoginFlow } from '../flows/LoginFlow';

Given('el cliente inicia sesión con {string} y {string}',
  async function (this: CustomWorld, usuario: string, clave: string) {
    await new LoginFlow(this.page).iniciarSesion(usuario, clave);
  });

Then('el sistema muestra el catálogo de productos',
  async function (this: CustomWorld) {
    await new LoginFlow(this.page).verificarCatalogoVisible();
  });