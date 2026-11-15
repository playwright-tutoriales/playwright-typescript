# BDD con Playwright, Cucumber y TypeScript

[![BDD tests](https://github.com/playwright-tutoriales/playwright-typescript/actions/workflows/bdd.yml/badge.svg)](https://github.com/playwright-tutoriales/playwright-typescript/actions/workflows/bdd.yml)

Arquitectura de automatización web por capas, con escenarios en español.
Layered web test automation architecture with Gherkin scenarios in Spanish.

## Estructura / Structure

| Capa / Layer | Responsabilidad / Responsibility |
|---|---|
| `src/features` | Escenarios Gherkin, sin selectores ni URLs / Gherkin scenarios |
| `src/steps` | Pasos que solo delegan en flujos / Steps that only delegate |
| `src/flows` | Procesos de negocio que combinan componentes / Business flows |
| `src/components` | Selectores y acciones de pantalla / Page objects |
| `src/support` | World, hooks y configuración / World, hooks and config |
| `src/config` | Un JSON por ambiente / One JSON per environment |
| `src/data/csv` | Datos de prueba / Test data |

Cadena de dependencias / Dependency chain:
`feature -> step -> flow -> component -> Playwright`

## Requisitos / Requirements

- Node.js 22 o superior / Node.js 22 or higher

## Uso / Usage

```bash
npm ci
npx playwright install chromium
cp .env.example .env
npm test
npm run test:smoke
```

El sitio de pruebas es la demo pública https://www.saucedemo.com.
The target site is the public demo https://www.saucedemo.com.