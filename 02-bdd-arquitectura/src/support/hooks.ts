import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber';
import { chromium, Browser } from '@playwright/test';
import { loadConfig } from './config';
import { CustomWorld } from './CustomWorld';

let browser: Browser;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: loadConfig().headless });
});

Before(async function (this: CustomWorld) {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const img = await this.page.screenshot();
    this.attach(img, 'image/png');
  }
  await this.context.close();
});

AfterAll(async () => {
  await browser.close();
});
