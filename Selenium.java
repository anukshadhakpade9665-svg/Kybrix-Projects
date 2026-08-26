import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;

public class GoogleSearch {
    public static void main(String[] args) {
        WebDriver driver = new ChromeDriver();

        driver.get("https://www.google.com");

        WebElement searchBox = driver.findElement(By.name("q"));
        searchBox.sendKeys("Selenium WebDriver");
        searchBox.submit();

        // Verify search results
        String title = driver.getTitle();
        if (title.contains("Selenium WebDriver")) {
            System.out.println("PASS: Search verified");
        } else {
            System.out.println("FAIL: Search not verified");
        }

        driver.quit();
    }
}
