import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DemoLogin {

    public static void main(String[] args) {

        // 1. Launch Chrome
        WebDriver driver = new ChromeDriver();

        // 2. Maximize browser
        driver.manage().window().maximize();

        // 3. Create explicit wait
        WebDriverWait wait = new WebDriverWait(
                driver, Duration.ofSeconds(10));

        try {

            // 4. Open demo website
            driver.get("https://the-internet.herokuapp.com/login");

            // 5. Enter username
            WebElement username = wait.until(
                    ExpectedConditions.visibilityOfElementLocated(
                            By.id("username")));

            username.sendKeys("tomsmith");

            // 6. Enter password
            WebElement password = driver.findElement(By.id("password"));
            password.sendKeys("SuperSecretPassword!");

            // 7. Click Login
            WebElement loginButton = driver.findElement(
                    By.cssSelector("button[type='submit']"));

            loginButton.click();

            // 8. Verify successful login
            WebElement successMessage = wait.until(
                    ExpectedConditions.visibilityOfElementLocated(
                            By.id("flash")));

            String message = successMessage.getText();

            System.out.println("Message: " + message);

            if (message.contains("You logged into a secure area!")) {
                System.out.println("TEST PASSED");
            } else {
                System.out.println("TEST FAILED");
            }

        } finally {

            // 9. Close browser
            driver.quit();
        }
    }
}
