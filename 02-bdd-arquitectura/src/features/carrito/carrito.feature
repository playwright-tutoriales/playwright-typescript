# language: es
Característica: Carrito de compra

  @regresion
  Escenario: Un cliente agrega un producto al carrito
    Dado el cliente inicia sesión con "standard_user" y "secret_sauce"
    Cuando agrega al carrito el producto "Sauce Labs Backpack"
    Entonces el icono del carrito muestra "1"
    Cuando abre el carrito
    Entonces el carrito contiene el producto "Sauce Labs Backpack"

  @regresion
  Escenario: Un cliente agrega dos productos al carrito
    Dado el cliente inicia sesión con "standard_user" y "secret_sauce"
    Cuando agrega al carrito el producto "Sauce Labs Backpack"
    Y agrega al carrito el producto "Sauce Labs Bike Light"
    Entonces el icono del carrito muestra "2"