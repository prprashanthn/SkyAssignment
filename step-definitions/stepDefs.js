import clickLink from '../app'
//import verifyPasswordtext from '../app'
const { client } = require('nightwatch-api');
const { Given, Then, When } = require('@cucumber/cucumber');
//const driver = new Builder().forBrowser("chrome").build;
var driver;


Given('User is on Home Page', function () {
  // Write code here that turns the phrase above into concrete actions
  var tittle =await driver.getTitle();
   // console.log(tittle)
});

When('User clicks on {string}', function (Deals) {
  // Reusable method to click on Links  
     clickLink(Deals);
  // Directly click on Deals
    function waitFiveSeconds() {
    driver.findElement(By.xpath("(//*[contains(text(),'Deals')])[2]")).click();
  }
});

When('User clicks on {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
 // clickLink(string);
});

  When('User clicks on {string}', function (Deals) {
    clickLink(Deals);
    //await driver.findElement(By.xpath("(//*[contains(text(),'Deals')])[2]")).click();
   //await driver.findElement(By.xpath("//*[@id='deals-filter']/button[1]")).click();
    //function waitFiveSeconds() {
      //driver.findElement(By.xpath("(//*[contains(text(),'Deals')])[2]")).click();
      //console.log('Ten')
    //}
  });

  Then('User should navigate to {string}', function (url) {
    // Write code here that turns the phrase above into concrete actions
 //   let currentUrl = driver.getCurrentUrl();
    //Assertion using nodejs
   // assert.strictEqual(currentUrl,url);
  })

  When('User enters invalid credentails \"([^\"]*)\"', function (string) {
    // Write code here that turns the phrase above into concrete actions
   //await driver.switchTo().frame(0);
   //await driver.findElement(By.xpath('//input[@id="username"]')).sendKeys('ckatahavaaj@mail.com');
  });



  Then('User should displayed a box with text \"([^\"]*)\"', function (string) {
    // Write code here that turns the phrase above into concrete actions
   // verifyPasswordtext(str);
  });

  Then('User should be displayed with list of deals and prices \"([^\"]*)\"', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('User search \"([^\"]*)\" in the search bar', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('User should be displayed with the editorial section', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });