import { test, expect } from '@playwright/test';

test('Login Test', async ({ page }) => {
  // Open login page
  await page.goto('https://example.com/login');

  // Enter login credentials
  await page.getByLabel('Username').fill('testuser');
  await page.getByLabel('Password').fill('Password123');

  // Click Login button
  await page.getByRole('button', { name: 'Login' }).click();

  // Verify successful login
  await expect(page).toHaveURL(/dashboard/);
  await expect(page.getByText('Welcome')).toBeVisible();
});
