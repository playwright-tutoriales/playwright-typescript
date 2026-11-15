import { Page } from '@playwright/test';

export class CarritoComponent {
  constructor(private readonly page: Page) {}

  private idBoton(producto: string): string {
    return producto.toLowerCase().trim().replace(/\s+/g, '-');
  }

  async agregarProducto(producto: string) {
    await this.page.click(`[data-test="add-to-cart-${this.idBoton(producto)}"]`);
  }
  async abrirCarrito() {
    await this.page.click('.shopping_cart_link');
    await this.page.locator('.cart_list').waitFor({ state: 'visible', timeout: 15000 });
  }
  async cantidadEnInsignia(): Promise<string> {
    const insignia = this.page.locator('.shopping_cart_badge');
    await insignia.waitFor({ state: 'visible', timeout: 15000 });
    return (await insignia.innerText()).trim();
  }
  async nombresEnCarrito(): Promise<string[]> {
    return this.page.locator('.cart_item .inventory_item_name').allInnerTexts();
  }
}