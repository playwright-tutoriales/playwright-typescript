import { Page, expect } from '@playwright/test';
import { CarritoComponent } from '../components/CarritoComponent';

export class CarritoFlow {
  private readonly carrito: CarritoComponent;

  constructor(page: Page) {
    this.carrito = new CarritoComponent(page);
  }

  async agregarProducto(producto: string) {
    await this.carrito.agregarProducto(producto);
  }
  async abrirCarrito() {
    await this.carrito.abrirCarrito();
  }
  async verificarCantidad(cantidad: string) {
    expect(await this.carrito.cantidadEnInsignia()).toBe(cantidad);
  }
  async verificarProductoEnCarrito(producto: string) {
    expect(await this.carrito.nombresEnCarrito()).toContain(producto);
  }
}