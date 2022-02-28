const {WebElement} = require('selenium-webelement');
const{Builder, By, Key, util}= require("selenium-webdriver");
const assert = require("assert");

export default async function clickLink(locator, timeout){
    driver.wait(function(){
      return driver.findElement(By.xpath("(//*[contains(text(),'" + locator + "')])[2]")).then(function(element){
        return element.click().then(function(){
          return true;
          console.log('Customer clicked on " + locator + " link')
        }, function(err){
          return false;
          console.log('Customer unable to click on " + locator + " link')
        })
      }, function(err){
        return false;
      });
    }, timeout, 'Timeout waiting for ' + locator.value);    ;
  }
  export default async function verifyPrices(str){
      // validating the top 3 prices
     var ar = [];
     for(let i=1; i<=3; i++){
        ar.push(await driver.findElement(By.xpath(`(//span[@class='text__Text-sc-1u9gciq-0 iNTDeb'])[${i}]`)).getText());
     }
     let arr1 = ar.map(myFunction)
     function myFunction(str){
         return str.slice(-2);
         //return str.slice(-2).join('_');
     }
     var prices  = arr1.join('_')
       assert.strictEqual(prices,str); 
  }

  export default async function verifyPasswordtext(passtext){
     await driver.switchTo().defaultContent();
     await driver.switchTo().frame(0);
     var passwordText = await driver.findElement(By.xpath("//h1[contains(text(),'Create your My Sky')]")).getText();
     assert.strictEqual(passwordText,passtext); 
  }

  export default async function getCuurentDURL(){ 
    var currentUrl = await driver.getCurrentUrl();
   // Assertion using nodejs
    assert.strictEqual(currentUrl,'https://www.sky.com/deals');
   }
