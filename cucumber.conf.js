const { setDefaultTimeout, BeforeAll, Before, AfterAll, After} = require('@cucumber/cucumber');
const { createSession, closeSession, startWebDriver, stopWebDriver } = require('nightwatch-api');
const{Builder, By, Key, util}= require("selenium-webdriver");
const assert = require("assert");
var driver;

setDefaultTimeout(60000);

BeforeAll(async () => {
  async function openBrowser() {
     driver = await new Builder().forBrowser("chrome").build();
     await driver.manage().window().maximize();
     await driver.get('https://www.sky.com/');
     await driver.switchTo().frame(2);
     await driver.findElement(By.xpath("//*[@id='notice']/div[3]/button[2]")).click();
     await driver.switchTo().defaultContent();
     await driver.findElement(By.xpath("(//*[contains(text(),'Deals')])[2]")).click();
     await driver.findElement(By.xpath("//*[@id='deals-filter']/button[1]")).click();
     var title =await driver.getTitle();
     var currentUrl = await driver.getCurrentUrl();
     //Assertion using nodejs
     assert.strictEqual(currentUrl,'https://www.sky.com/deals');
     console.log('The current url is', currentUrl);
     // validating the top 3 prices
     var ar = [];
     for(let i=1; i<=3; i++){
      ar.push(await driver.findElement(By.xpath(`(//span[@class='text__Text-sc-1u9gciq-0 iNTDeb'])[${i}]`)).getText());
    }
     let arr1 = ar.map(myFunction)
     function myFunction(str){
       return str.slice(-2);
    }
    var prices  = arr1.join('_');
     assert.strictEqual(prices,'26_41_46'); 
     console.log('The first three prices are',arr1)
    //Clicking on sign link and entering email address to verify create Password text screen
     await driver.findElement(By.xpath("(//*[contains(text(),'Sign')])[2]")).click();
     await driver.switchTo().frame(0);
     await driver.findElement(By.xpath('//input[@id="username"]')).sendKeys('ckatahavaaj@mail.com');
     await driver.findElement(By.xpath("//span[contains(text(),'Continue')]")).click();
     await driver.switchTo().defaultContent();
     await driver.switchTo().frame(2);
     var passwordText = await driver.findElement(By.xpath("//h1[contains(text(),'Create your My Sky')]")).getText();
     assert.strictEqual(passwordText,'Create your My Sky password');
     console.log('The text on the password reset screen is ',passwordText)
     // Serach for SKY keyword and navigate to Editorial section
     await driver.switchTo().defaultContent();
     await driver.findElement(By.xpath("//button[@id='masthead-search-toggle']")).click();
     await driver.findElement(By.xpath("//div[@class='search-input-wrapper svelte-qt23dd']/input")).sendKeys('sky');
     await driver.findElement(By.xpath("//div[@class='search-input-wrapper svelte-qt23dd']/input/following-sibling::button")).click();
     await driver.switchTo().frame(4);
     //var editSection = await driver.findElement(By.xpath("//a[contains(text(),'Sky offers')]")).getText();
     var title =await driver.getTitle();
     //console.log(editSection)
    //Assertion using nodejs
    //assert.strictEqual(title,'Sky offers');

     
     
     

     
     };
    openBrowser();
});

AfterAll(async () => {
//await driver.closeSession();
});


