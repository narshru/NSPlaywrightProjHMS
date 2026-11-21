
// xpath syntax
// when we push the code to GIT, others can see the code, can they edit it, if we write it public
//tagname[@attributename='attributevalue']
//tagname[contains(@attributename, 'attributevalue')]
//tagname[text()='textValue']

// libraries (package.json), page and locators are clasess

import {Page, Locator} from '@playwright/test' 

export class Orgfarm_Login {
    
        private readonly loginpage : Page
    
        private readonly lbl_username: Locator
        private readonly lbl_password: Locator
        private readonly btn_login: Locator

        constructor(page: Page){
           // this.loginpage = page 
           this.loginpage = page

            this.lbl_username = page.locator("//input[@id='username']") 
            this.btn_login = page.getByRole("button", {name: "Log In"})
            this.lbl_password = page.locator("//input[@id='password']")
            
            }
        public async navigateTo(url: string){
            this.loginpage.goto(url)
            await this.loginpage.waitForLoadState('networkidle');
            return await this.lbl_username.isVisible
        }

        public async func_login(username_value: string, password_value: string){
        await this.lbl_username.fill(username_value)    
        await this.btn_login.click()
        await this.lbl_password.fill(password_value)
        await this.btn_login.click()
        await this.loginpage.waitForLoadState('networkidle')

            }

}








