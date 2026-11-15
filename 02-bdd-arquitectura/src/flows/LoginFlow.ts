import { Page, expect } from '@playwright/test';
import { LoginComponent } from '../components/LoginComponent';
import { loadConfig } from '../support/config';
import { buscarCaso } from '../support/csv';

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
  async verificarCatalogoVisible() {
    await this.login.esperarCatalogo();
  }
  async iniciarSesionConCaso(caso: string) {
    const datos = buscarCaso('usuarios.csv', caso);
    await this.iniciarSesion(datos['usuario'], datos['clave']);
  }
  async verificarResultadoDelCaso(caso: string) {
    const datos = buscarCaso('usuarios.csv', caso);
    if (datos['resultado'] === 'catalogo') {
      await this.login.esperarCatalogo();
    } else {
      const mensaje = await this.login.obtenerMensajeError();
      expect(mensaje).toContain(datos['mensaje'].replace('Sorry.', 'Sorry,'));
    }
  }
}