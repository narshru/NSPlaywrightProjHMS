import { Page, Locator } from "@playwright/test";

export class AccountsPage{
    private readonly AccountsPage: Page

    private readonly btn_new_account: Locator
    private readonly pop_up_title_new_account: Locator

    private readonly ibl_account_name: Locator
    private readonly drp_rating: Locator
    private readonly ltxt_description: Locator
    private readonly date_SLA_Expiration_Date: Locator
    private readonly btn_save: Locator

    constructor(Accountpage:Page){
        this.AccountsPage = Accountpage
        this.btn_new_account = Accountpage.locator("//div[@title='New']")
        this.pop_up_title_new_account = Accountpage.getByTitle('new')
        this.ibl_account_name = Accountpage.locator("//input[@name='Name']")
        this.drp_rating = Accountpage.getByRole("button")
        this.ltxt_description = Accountpage.locator("//textarea[@id=//label[normalize-space()='Description']/@for]")
        this.date_SLA_Expiration_Date = Accountpage.locator("//button[@name='SaveEdit']")
        this.btn_save = Accountpage.getByRole("button", {name: 'Save'})

    }


    public async func_verifyInAccountTab(): Promise<boolean>{
        await this.btn_new_account.click()
        return await this.btn_new_account. isVisible()
    
    }  

    public async func_verify_add_new_account_popup(): Promise<boolean>{
        await this.btn_new_account.click()
        return await this.pop_up_title_new_account.isVisible()
    }
    
    public async func_add_new_account(account_name_value: string, rating_value: string, date_value:string, description_value: string){
        await this.ibl_account_name.fill(account_name_value)
        await this.drp_rating.selectOption(rating_value)
        await this.date_SLA_Expiration_Date.fill(date_value)
        await this.ltxt_description.fill(description_value)
        await this.btn_save.click()
    }

    }

    

