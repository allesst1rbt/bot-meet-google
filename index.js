const puppeteer = require('puppeteer');
var args = process.argv
const chromeOptions = {
    executablePath:'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    headless:false, 
    slowMo:10,
    defaultViewport: null
  };

const acessar = async() =>{
    const browser = await puppeteer.launch(chromeOptions);
    const page = await browser.newPage();
    await page.goto('https://meet.google.com/');
    const navigationPromise = page.waitForNavigation()
    await page.waitForSelector('.cta-wrapper')
    await page.click('.cta-wrapper')
    console.log(args)

    await navigationPromise
    await page.waitForSelector('input[type="email"]')
    await page.type('input[type="email"]', args[2], {delay:100})
    await page.click('#identifierNext')

    await page.waitForSelector('input[type="password"]', { visible: true })
    await page.type('input[type="password"]', args[3], {delay:100})

    await page.waitForSelector('#passwordNext', { visible: true })
    await page.click('#passwordNext')
    await page.waitForSelector('.cmvVG')
    await page.click('.cmvVG')
    await page.waitForSelector('input[type="text"]', { visible: true })
    await page.type('input[type="text"]', args[4], {delay:100})
    await page.keyboard.press('Enter');
    await page.waitForSelector('.HKarue')
    await page.click('.HKarue')
    await page.waitForSelector('.oJeWuf', { visible: true })
    await page.click('.oJeWuf')
    await page.type('.oJeWuf', 'ok' , {delay:1440000})
    await page.keyboard.press('Enter');
    await page.click('.oJeWuf')
    await page.type('.oJeWuf', args[5,6,7] , {delay:1000})
    await page.keyboard.press('Enter');



    await page.waitFor('')


    
    
    await browser.close()
}
acessar();