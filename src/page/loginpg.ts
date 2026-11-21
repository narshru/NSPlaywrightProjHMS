import { Page, Locator } from "@playwright/test";

class loginpg{

    private readonly page: Page

    private readonly lbl_username: Locator
    private readonly lbl_password: Locator
    private readonly btn_login: Locator

    constructor(page:Page){

        this.page = page
        this.lbl_username = page.locator("//input[@id="username-input"]")
        this.lbl_password = page.locator("//input[@placeholder='Enter password']")
        this.btn_login = page.locator("//button[@data-testid='login-submit-button']")

    }

public async func_navigateto(url:string) {

    await this.page.goto(url)
    await this.page.waitForLoadState("networkidle")
}

public async loginhms(username: string, password: string){
    await this.lbl_username.fill(username)
    await this.lbl_password.fill(password)
    await this.btn_login.click()
    await this.page.waitForTimeout(2000)

  
    }


}
        

