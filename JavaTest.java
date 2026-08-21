import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class HandlePage {

    public static void main(String[] args) {

        // Start Chrome
        WebDriver driver = new ChromeDriver();

        try {
            // Open webpage
            driver.get("https://example.com");

            // Maximize browser
            driver.manage().window().maximize();

            // Print page title
            System.out.println("Title: " + driver.getTitle());

            // Find an element
            WebElement element = driver.findElement(By.id("username"));

            // Enter text
            element.sendKeys("testuser");

            // Find and click a button
            driver.findElement(By.id("loginButton")).click();

            // Explicit wait
            WebDriverWait wait = new WebDriverWait(
                    driver,
                    Duration.ofSeconds(10)
            );

            // Wait until an element is visible
            WebElement message = wait.until(
                    ExpectedConditions.visibilityOfElementLocated(
                            By.id("successMessage")
                    )
            );

            System.out.println("Message: " + message.getText());

        } finally {
            // Close browser
            driver.quit();
        }
    }
}
