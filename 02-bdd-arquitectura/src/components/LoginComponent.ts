import { Page } from '@playwright/test';

export class LoginComponent {
  constructor(private readonly page: Page) {}

  async abrir(url: string) {
    await this.page.goto(url);
  }
  async escribirUsuario(valor: string) {
    await this.page.fill('#user-name', valor);
  }
  async escribirClave(valor: string) {
    await this.page.fill('#password', valor);
  }
  async pulsarEntrar() {
    await this.page.click('#login-button');
  }
  async esperarCatalogo() {
    await this.page.locator('.inventory_list').waitFor({ state: 'visible', timeout: 15000 });
  }
  async obtenerMensajeError(): Promise<string> {
    const error = this.page.locator('[data-test="error"]');
    await error.waitFor({ state: 'visible', timeout: 15000 });
    return (await error.innerText()).trim();
  }
}