import { test, expect } from '@playwright/test';

// App de demostración oficial de Playwright
const URL = 'https://demo.playwright.dev/todomvc';

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
});

test('agrega una tarea nueva', async ({ page }) => {
  const campo = page.getByPlaceholder('What needs to be done?');

  await campo.fill('Aprender Playwright');
  await campo.press('Enter');

  await expect(page.getByTestId('todo-title')).toHaveText('Aprender Playwright');
});

test('marca una tarea como completada', async ({ page }) => {
  const campo = page.getByPlaceholder('What needs to be done?');
  await campo.fill('Grabar mi primer video');
  await campo.press('Enter');

  await page.getByTestId('todo-item').getByRole('checkbox').check();

  await expect(page.getByTestId('todo-item')).toHaveClass(/completed/);
});

test('muestra cuántas tareas quedan pendientes', async ({ page }) => {
  const campo = page.getByPlaceholder('What needs to be done?');

  for (const tarea of ['Tarea 1', 'Tarea 2', 'Tarea 3']) {
    await campo.fill(tarea);
    await campo.press('Enter');
  }

  await expect(page.getByTestId('todo-count')).toContainText('3');
});
