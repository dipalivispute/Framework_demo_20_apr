import { expect, Locator, Page } from "@playwright/test";
import { TIMEOUT } from "node:dns";

export class cartpage
{
    readonly page:Page;
    readonly galaxy:Locator;
    readonly addtocartbutton:Locator;
    cartbutton:Locator;
    constructor(page:Page)
    {
        this.page=page;
        this.galaxy=page.locator("//div[@id='tbodyid']//div[1]//div[1]//a[1]//img[1]");
        this.addtocartbutton=page.locator("//a[@class='btn btn-success btn-lg']");
        this.cartbutton=page.locator("//a[@id='cartur']");
        

    }
    async addtocart()
    {
           //Count number of item in cart before addting any item 
        await this.cartbutton.click();
        let cartitembeforeadd=await this.page.locator("//table/tbody/tr");
        await this.page.waitForTimeout(3000);
        let totalcartitembeforeadd=await cartitembeforeadd.count();
        console.log("Total number of item in cart before adding anything :"+totalcartitembeforeadd);

       //go to home and add samsun galaxy
        await this.page.locator("//li[@class='nav-item active']//a[@class='nav-link']",{hasText:'Home'}).click();
        await this.page.waitForTimeout(5000);
        await this.galaxy.click();
                await this.addtocartbutton.click();
        this.page.on("dialog",async dialog=>
        {
            await dialog.accept();
        }
        );
        await this.cartbutton.click();
        let cartitem=await this.page.locator("//table/tbody/tr");
        await this.page.waitForTimeout(3000);
        let totalcartitem=await cartitem.count();
        console.log("Total number of item in cart after samsung galxy  added:"+totalcartitem);
        if( totalcartitem>0)
        {
        console.log("Samsung galaxy added successfully")
        }

        for(let i=1;i<totalcartitem;i++)
        { 
            await cartitem.nth(1).locator('a',{hasText:'Delete'}).click();
            await this.page.waitForTimeout(3000);
         }
        let cartitemaftdelete=await this.page.locator("//table/tbody/tr").count();             
        if(cartitemaftdelete===1)
        {
            console.log("You are good to  place your order with one item");
        }
    }
}