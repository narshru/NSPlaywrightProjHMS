import { Page, Locator } from "@playwright/test";

export class homepage{
    private readonly page: Page
    private readonly tab_account: Locator
    private readonly ibl_globalSerach: Locator

    constructor(page:Page){
        this.page = page

        this.tab_account = page. locator("")
        this.ibl_globalSerach = page. locator("")

    }

    public async fun_verifyHomePage(): Promise<boolean>{
        const inhome_page: boolean = await this.ibl_globalSerach.isVisible()
        this.ibl_globalSerach.click()
        return inhome_page
    }
    public async func_accountTab(){
        await this.tab_account.click()
        await this.page.waitForLoadState('networkidle')
    }
    
    
}