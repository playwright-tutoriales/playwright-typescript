# 01 · Primer test con Playwright y TypeScript

Código del primer tutorial del canal [Maria Villar | AI Automation](https://www.youtube.com/@MariaVillarAutomation).

Automatizamos 3 pruebas sobre la app de demostración oficial de Playwright ([TodoMVC](https://demo.playwright.dev/todomvc)):

1. Agregar una tarea nueva
2. Marcar una tarea como completada
3. Verificar el contador de tareas pendientes

## Requisitos

- [Node.js](https://nodejs.org/) 18 o superior

## Cómo ejecutarlo

```bash
# 1. Instala las dependencias
npm install

# 2. Descarga los navegadores que usa Playwright (solo la primera vez)
npx playwright install

# 3. Ejecuta los tests
npm test
```

## Otros comandos útiles

| Comando | Qué hace |
|---|---|
| `npm run test:ui` | Abre la interfaz visual de Playwright |
| `npm run test:headed` | Ejecuta los tests viendo el navegador |
| `npm run report` | Abre el reporte HTML del último resultado |

## Estructura

```
01-primer-test/
├── tests/
│   └── todo.spec.ts       # Los 3 tests del video
├── playwright.config.ts   # Configuración de Playwright
├── tsconfig.json          # Configuración de TypeScript
└── package.json           # Dependencias y scripts
```
