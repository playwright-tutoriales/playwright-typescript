import { Page } from '@playwright/test';
import { LoginComponent } from '../components/LoginComponent';
import { loadConfig } from '../support/config';

export class LoginFlow {
  private readonly login: LoginComponent;

  constructor(page: Page) {
    this.login = new LoginComponent(page);
  }

  async iniciarSesion(usuario: string, clave: string) {
    await this.login.abrir(loadConfig().baseUrl);
    await this.login.escribirUsuario(usuario);
    await this.login.escribirClave(clave);
    await this.login.pulsarEntrar();
  }
  async catalogoVisible() {
    return this.login.hayCatalogo();
  }
}
