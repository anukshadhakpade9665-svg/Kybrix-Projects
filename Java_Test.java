import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class SeleniumExample {

    public static void main(String[] args) {

        // Start Chrome
        WebDriver driver = new ChromeDriver();

        // Open website
        driver.get("https://www.google.com"); 
 
        // Maximize browser 
        driver.manage().window().maximize(); 
 
        // Find search box 
        WebElement searchBox = driver.findElement(By.name("//textarea[@title='Search']")); 
 
        // Enter search text 
        searchBox.sendKeys("Selenium WebDriver"); 
 
        // Submit search 
        searchBox.submit(); 
 
        // Print page title 
        System.out.println("Page Title: " + driver.getTitle()); 
 
        // Close browser 
        driver.quit(); 
    } 
}
