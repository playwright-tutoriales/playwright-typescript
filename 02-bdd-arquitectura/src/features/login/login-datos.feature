# language: es
Característica: Acceso con distintos usuarios

  @regresion
  Esquema del escenario: Acceso según el tipo de usuario
    Dado el cliente intenta acceder con los datos del caso "<caso>"
    Entonces el sistema muestra el resultado esperado del caso "<caso>"

    Ejemplos:
      | caso              |
      | usuario_valido    |
      | usuario_bloqueado |
      | clave_incorrecta  |