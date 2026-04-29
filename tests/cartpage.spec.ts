import test, { expect } from "@playwright/test";
import { LoginPage } from "../Pages/loginpage";
import Credential from "../Utilities/testdata.json";
import { beforeEach } from "node:test";
import {cartpage} from "../Pages/cartpage";

test.beforeEach(async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
});

test("Add to cart",async({page})=>
{
const Loginpageobj=new LoginPage(page);
await Loginpageobj.login("bipin1234","Password_1234");
const addtocartobj=new cartpage(page);
await addtocartobj.addtocart();
await page.waitForTimeout(2000);

});
