import { Page, Locator } from "@playwright/test";

class sflogin{
    private readonly loginpage: Page
    private readonly lbl_username: Locator
    private readonly lbl_psw: Locator
    private readonly btn_login: Locator
    private readonly obj_accounttab: Locator
    private readonly lbl_New: Locator
    private readonly pop_up_New_Account: Locator
    private readonly Account_Name: Locator
    private readonly emai_id: Locator
    private readonly Description:Locator
    private readonly date_range: Locator
    private readonly save: Locator

    constructor(sflogin:Page){
        this.loginpage = sflogin
        this.lbl_username = sflogin.locator(("tagname[@attrubutename='attrubutevalue']"))
        this.lbl_psw = sflogin.locator("")
        this.btn_login = sflogin. locator("")
        this.obj_accounttab = sflogin. locator("")
        this.lbl_New = sflogin.locator("")
        this.pop_up_New_Account = sflogin.locator("")
        this.Account_Name = sflogin. locator("")
        this.emai_id = sflogin. locator("")
        this.Description = sflogin. locator("")
        this.date_range = sflogin. locator("")
        this.save = sflogin. locator("")
        
    }

    public async func_login(username_value: string, password_value: string){
        await this.ibl_

    }
}








    












