# language: es
Característica: Acceso a la tienda

  @smoke
  Escenario: Un cliente válido accede al catálogo
    Dado el cliente inicia sesión con "standard_user" y "secret_sauce"
    Entonces el sistema muestra el catálogo de productos