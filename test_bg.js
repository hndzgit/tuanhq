const puppeteer = require('puppeteer');
(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/projects');
    const bgInfo = await page.evaluate(() => {
      const hero = document.querySelector('section[class*="pageHero"]');
      const category = document.querySelector('section[class*="categorySection"]');
      const canvas = document.querySelector('.canvas-container');
      return {
        heroBg: hero ? window.getComputedStyle(hero).backgroundColor : null,
        heroBgImage: hero ? window.getComputedStyle(hero).backgroundImage : null,
        heroRect: hero ? hero.getBoundingClientRect() : null,
        categoryBg: category ? window.getComputedStyle(category).backgroundColor : null,
        hasCanvas: !!canvas
      };
    });
    console.log(JSON.stringify(bgInfo, null, 2));
    await browser.close();
  } catch (e) {
    console.error('Puppeteer not installed or error:', e);
  }
})();
