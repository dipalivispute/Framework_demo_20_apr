import test, { expect } from "@playwright/test";
import { LoginPage } from "../Pages/loginpage";
import Credential from "../Utilities/testdata.json";
import { beforeEach } from "node:test";

test.beforeEach(async({page})=>
{
await page.goto("https://www.demoblaze.com/index.html");
});

test("logintest",async({page})=>
{
const Loginpageobj=new LoginPage(page);
//await Loginpageobj.login(tesdata.users[0].username,tesdata.users[0].password[0]);

for (let i of Credential.users)
{
    const Loginpageobj=new LoginPage(page);

    await Loginpageobj.login(i.username,i.password);
    expect(page.locator('//a[@id="logout2"]')).toHaveText("Log out");
    await page.locator('//a[@id="logout2"]').click()
}

});

test("Aboutus ", async({page})=>
{
     //await page.goto("https://www.demoblaze.com/");
     console.log("This is aboiut us tc")
     await page.locator("//a[normalize-space()='About us']").click()

});

test.afterEach(async({page},testinfo)=>
{
    if(testinfo.status==="failed")
    {
        const timestamp = new Date().toISOString().replace(/:/g, "-");
    await page.screenshot(
    {
       path: `screenshot/${testinfo.title}_${timestamp}.png`,
        fullPage: true
    }
   )
    } 
});

