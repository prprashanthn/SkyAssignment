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

     async function serachKeyword(){
        await driver.findElement(By.xpath("//button[@id='masthead-search-toggle']")).click();
        await driver.findElement(By.xpath("//div[@class='search-input-wrapper svelte-qt23dd']/input")).sendKeys('sky');
        //await driver.switchTo().frame(5);
       // var editSection = await driver.findElement(By.xpath("//a[contains(text(),'Sky offers')]")).getText();
       var title =await driver.getTitle();
       console.log(title)
       //Assertion using nodejs
     //assert.strictEqual(tittle,'Sky offers');
     }
    
    

     
     //var tittle =await driver.getTitle();

     //await driver.findElement(By.xpath("(//*[contains(text(),'Deals')])[2]")).click();
     //await driver.findElement(By.xpath("//*[@id='deals-filter']/button[1]")).click();
     
     async function getCuurentDURL(){ 
      //var currentUrl = await driver.getCurrentUrl();
      //Assertion using nodejs
      //assert.strictEqual(currentUrl,'https://www.sky.com/deals');
     }
     

     //await driver.findElement(By.xpath("(//*[contains(text(),'Sign')])[2]")).click();
     //await driver.switchTo().frame(0);
     //await driver.findElement(By.xpath('//input[@id="username"]')).sendKeys('ckatahavaaj@mail.com');
     //await driver.findElement(By.xpath("//span[contains(text(),'Continue')]")).click();
     //await driver.switchTo().defaultContent();
     //await driver.switchTo().frame(0);
     //var passwordText = await driver.findElement(By.xpath("//h1[contains(text(),'Create your My Sky')]")).getText();
     //  assert.strictEqual(passwordText,'Create your My Sky password'); 
     };
    openBrowser();
});

AfterAll(async () => {
//await driver.closeSession();
});


