import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class SeleniumExample {

    public static void main(String[] args) {

        // Start Chrome
        WebDriver driver = new ChromeDriver();

        try {
            // Open the webpage
            driver.get("https://example.com");

            // Maximize browser
            driver.manage().window().maximize();

            // Explicit wait
            WebDriverWait wait = new WebDriverWait(
                    driver,
                    Duration.ofSeconds(10)
            );

            // Find an element
            WebElement element = wait.until(
                    ExpectedConditions.visibilityOfElementLocated(
                            By.id("username")
                    )
            );

            // Enter text
            element.sendKeys("testuser");

            // Enter password
            driver.findElement(By.id("password"))
                    .sendKeys("mypassword");

            // Click login button
            driver.findElement(By.id("loginButton"))
                    .click();

            // Wait for dashboard
            wait.until(
                    ExpectedConditions.urlContains("dashboard")
            );

            // Verify page title
            String title = driver.getTitle();

            if (title.contains("Dashboard")) {
                System.out.println("Login successful!");
            } else {
                System.out.println("Login verification failed.");
            }

        } finally {
            // Close browser
            driver.quit();
        }
    }
}
