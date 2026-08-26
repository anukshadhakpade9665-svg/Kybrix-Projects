import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class LoginTest {

    public static void main(String[] args) {

        // Start Chrome
        WebDriver driver = new ChromeDriver();

        // Explicit wait
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        try {
            // Open webpage
            driver.get("https://example.com/login");

            // Maximize browser
            driver.manage().window().maximize();

            // Find username field and enter value
            WebElement username = wait.until(
                    ExpectedConditions.visibilityOfElementLocated(
                            By.id("username")
                    )
            );
            username.sendKeys("myusername");

            // Find password field
            WebElement password = driver.findElement(By.id("password"));
            password.sendKeys("mypassword");

            // Click Login button
            WebElement loginButton = driver.findElement(
                    By.xpath("//button[@type='submit']")
            );
            loginButton.click();

            // Wait for page/result after login
            wait.until(
                    ExpectedConditions.urlContains("dashboard")
            );

            // Verify
            if (driver.getCurrentUrl().contains("dashboard")) {
                System.out.println("Login successful!");
            } else {
                System.out.println("Login failed!");
            }

        } finally {
            // Close browser
            driver.quit();
        }
    }
}
