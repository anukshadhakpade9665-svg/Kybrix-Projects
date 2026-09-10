import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class SeleniumExample {

    public static void main(String[] args) {

        // Start Chrome browser
        WebDriver driver = new ChromeDriver();

        // Open real demo website
        driver.get("https://www.saucedemo.com/");

        // Maximize browser
        driver.manage().window().maximize();

        // Enter real demo username
        driver.findElement(By.id("user-name"))
                .sendKeys("standard_user");

        // Enter real demo password
        driver.findElement(By.id("password"))
                .sendKeys("secret_sauce");

        // Click Login button
        driver.findElement(By.id("login-button"))
                .click();

        // Print page title
        System.out.println("Page Title: " + driver.getTitle());

        // Print current URL
        System.out.println("Current URL: " + driver.getCurrentUrl());

        // Close browser
        driver.quit();
    }
}
