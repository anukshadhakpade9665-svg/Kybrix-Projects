import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class SeleniumPracticeTest {

    public static void main(String[] args) {

        WebDriver driver = new ChromeDriver();

        try {
            // Browser maximize
            driver.manage().window().maximize();

            // Wait
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

            // Open practice website
            driver.get("https://the-internet.herokuapp.com/login");

            System.out.println("Page Title: " + driver.getTitle());
            System.out.println("Current URL: " + driver.getCurrentUrl());

            // -----------------------------
            // 1. Enter Username
            // -----------------------------
            WebElement username = driver.findElement(By.id("username"));
            username.sendKeys("tomsmith");

            System.out.println("Username entered successfully.");

            // -----------------------------
            // 2. Enter Password
            // -----------------------------
            WebElement password = driver.findElement(By.id("password"));
            password.sendKeys("SuperSecretPassword!");

            System.out.println("Password entered successfully.");

            // -----------------------------
            // 3. Click Login
            // -----------------------------
            WebElement loginButton = driver.findElement(By.cssSelector("button[type='submit']"));
            loginButton.click();

            // Wait for page to load
            wait.until(driver ->
                    driver.getCurrentUrl().contains("/secure")
            );

            // -----------------------------
            // 4. Verify Login
            // -----------------------------
            if (driver.getCurrentUrl().contains("/secure")) {
                System.out.println("PASS: Login successful.");
            } else {
                System.out.println("FAIL: Login unsuccessful.");
            }

            // -----------------------------
            // 5. Get success message
            // -----------------------------
            WebElement message = driver.findElement(By.id("flash"));

            System.out.println("Message: " + message.getText());

            if (message.getText().contains("You logged into a secure area")) {
                System.out.println("PASS: Success message displayed.");
            }

            // -----------------------------
            // 6. Logout
            // -----------------------------
            WebElement logoutButton = driver.findElement(By.cssSelector("a.button"));
            logoutButton.click();

            wait.until(driver ->
                    driver.getCurrentUrl().contains("/login")
            );

            System.out.println("Logout completed.");

            if (driver.getCurrentUrl().contains("/login")) {
                System.out.println("PASS: Logout successful.");
            }

        } catch (Exception e) {

            System.out.println("TEST FAILED");
            e.printStackTrace();

        } finally {

            // Close browser
            driver.quit();

            System.out.println("Browser closed.");
        }
    }
}
