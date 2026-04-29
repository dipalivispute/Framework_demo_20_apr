import { Locator, Page } from "@playwright/test";

export class LoginPage
{
    readonly page:Page;
    readonly loginlink:Locator;
    readonly usernamelink:Locator;
    readonly paswwordlink:Locator;
    readonly loginbutton:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.loginlink=page.locator('//a[@id="login2"]');
        this.usernamelink=page.locator('//input[@id="loginusername"]');
        this.paswwordlink=page.locator('//input[@id="loginpassword"]');
        this.loginbutton=page.locator('//button[text()="Log in"]');

    }

   async login (Username:string,password:string)
    {
   // await this.page.goto("https://www.demoblaze.com/");
    await this.loginlink.click();
    await this.usernamelink.fill(Username);
    await this.paswwordlink.fill(password);
    await this.loginbutton.click();
    
    
    }
}