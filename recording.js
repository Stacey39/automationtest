const puppeteer = require('puppeteer');

async function start() {


    
const browser = await puppeteer.launch()
const page = await browser.newPage()
const navigationPromise = page.waitForNavigation()



await page.goto('https://getbootstrap.com/')

await page.screenshot({
    path: "a.png"

});

await page.setViewport({ width: 1536, height: 722 })

await page.waitForSelector('.container > .row > .col-md-8 > .d-flex > .btn:nth-child(1)')
await page.click('.container > .row > .col-md-8 > .d-flex > .btn:nth-child(1)')



await page.screenshot({
    path: "b.png"

});

await page.waitForSelector('.container-xxl > #bdNavbar > .navbar-nav:nth-child(1) > .nav-item:nth-child(3) > .nav-link')
await page.click('.container-xxl > #bdNavbar > .navbar-nav:nth-child(1) > .nav-item:nth-child(3) > .nav-link')

await page.waitFor(1000);
await page.screenshot({
    path: "c.png"

});



await page.waitForSelector('.container-xxl > #bdNavbar > .navbar-nav:nth-child(1) > .nav-item:nth-child(1) > .nav-link')
await page.click('.container-xxl > #bdNavbar > .navbar-nav:nth-child(1) > .nav-item:nth-child(1) > .nav-link')

await page.screenshot({
    path: "d.png"

});



await browser.close()
process.exit();

}


start();

