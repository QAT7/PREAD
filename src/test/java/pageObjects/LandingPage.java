package pageObjects;

import com.google.common.base.Verify;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LandingPage extends BaseClass {

    public LandingPage(WebDriver driver) {
        super(driver);
    }

    @FindBy(xpath = ".//*[contains(@id,'UsernameInput') and @placeholder = 'Email']")
    public static WebElement email;

    @FindBy(xpath = ".//*[contains(@id,'PasswordInput') and @placeholder = 'Password']")
    public static WebElement password;

    @FindBy(xpath = ".//*[contains(@value,'Sign in') and @type = 'submit']")
    public static WebElement submit;


    @FindBy(xpath = ".//*[contains(text(),'Welcome')]")
    public static WebElement getwelcomeMessage;

    @FindBy(xpath = ".//span[@class='OSInline']")
    public static WebElement navUsername;

    @FindBy(xpath = ".//*[contains(@id,'Logout')]")
    public static WebElement logout;

    //We will use this boolean for assertion. To check if page is opened.
    public void enterEmail() {
        email.sendKeys("stud11@mailinator.com");
    }

    //We will use this boolean for assertion. To check if Sign In Link is displayed.
    public void enterPassword() {
        password.sendKeys("Test@123aa4");
    }

    public void clickSubmit() throws Exception {
        Thread.sleep(1000);
        submit.click();
    }

    public void verifyWelcomeMessage() {
        System.out.println("Welcome = " + getwelcomeMessage.getText());
    }

    public void logout() throws Exception {
        Thread.sleep(1000);
        navUsername.click();
        Thread.sleep(1500);
//        Actions a = new Actions(driver);
//        a.moveToElement(logout);
//        a.click();
//        a.build().perform();
        logout.click();
    }


    public void successfullLogin() {
        email.sendKeys("stud11@mailinator.com");
        password.sendKeys("Test@123");
        submit.click();
    }
}
