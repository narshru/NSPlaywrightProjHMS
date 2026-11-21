import { Page, Locator } from "@playwright/test";


export class playwrightUtils{
    private readonly page: Page

    private readonly btn_logout: Locator

    constructor(page: Page){
        this.page = page

        this.btn_logout = page.locator("//button[text()='logout']")

    }

    public async func_logout(){
        this.btn_logout.click()
    }
}