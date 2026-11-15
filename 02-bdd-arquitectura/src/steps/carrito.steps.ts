import { When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/CustomWorld';
import { CarritoFlow } from '../flows/CarritoFlow';

When('agrega al carrito el producto {string}',
  async function (this: CustomWorld, producto: string) {
    await new CarritoFlow(this.page).agregarProducto(producto);
  });

When('abre el carrito',
  async function (this: CustomWorld) {
    await new CarritoFlow(this.page).abrirCarrito();
  });

Then('el icono del carrito muestra {string}',
  async function (this: CustomWorld, cantidad: string) {
    await new CarritoFlow(this.page).verificarCantidad(cantidad);
  });

Then('el carrito contiene el producto {string}',
  async function (this: CustomWorld, producto: string) {
    await new CarritoFlow(this.page).verificarProductoEnCarrito(producto);
  });