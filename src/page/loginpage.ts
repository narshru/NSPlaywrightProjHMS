import { Page,Locator } from "@playwright/test";

export class HmsLoginpage{
 
    private readonly page: Page
    private readonly lbl_username: Locator
    private readonly lbl_password: Locator
    private readonly btn_login: Locator

    private readonly hover_show_credentials: Locator
    private readonly lbl_miaavi_admin_username: Locator

constructor(page:Page){
    
    this.page = page
    this.lbl_username = page.getByTestId("username-input")
    this.lbl_password = page.getByTestId("password-input")
    this.btn_login = page.getByRole("button",{name:"login"})

    this.hover_show_credentials = page.locator("//span[text()=''show credentials]")
    this.lbl_miaavi_admin_username = page.locator("//strong[text()='miaaviAdmin']")
}    

public async func_hover_get_miaavi_admin_username(): Promise<string>{
    await this.hover_show_credentials.hover()
    await this.page.waitForTimeout(2000)
    return await this.lbl_miaavi_admin_username.innerText()
}

public async func_naviateTo(url: string){
    await this.page.goto(url)
    await this.page.waitForLoadState("networkidle")
    return this.lbl_username.isVisible()
}

public async func_loginpage(username:string, password: string){
    await this.lbl_username.fill(username)
    await this.lbl_password.fill(password)
    await this.btn_login.click()
    await this.page.waitForTimeout(5000)
    
    

}

}
