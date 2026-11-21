import{Page, Locator} from '@playwright/test'

export class login{
    private readonly loginpage: Page
    private readonly lbl_username: Locator
    private readonly lbl_password: Locator
    private readonly btn_login: Locator

    constructor(page:Page){
        this.loginpage =  page
        // variable name, for each element to locate use page (variable)
        this.lbl_username = page.locator("//input[@id='username']")
        this.lbl_password = page.locator("//input[@id='password']")
        this.btn_login = page.locator("//input[@type='submit']")
    }

    public async func_loginpage(url: string){
        await this.loginpage.goto(url)
       // await this.lbl_username.isVisible() 
        await this.loginpage.waitForLoadState('networkidle')
        return await this.lbl_username.isVisible()

    }

    public async func_logindetails(username: string, password: string){
    await this.lbl_username.fill(username)
     this.btn_login.click()
    await this.lbl_password.fill(password)
     this.btn_login.click()
    await this.loginpage.waitForTimeout(40000)
    }
        
        

    

    }


    

    


    





