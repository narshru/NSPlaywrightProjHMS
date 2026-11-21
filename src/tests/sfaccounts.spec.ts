import {test, expect} from '@playwright/test'
import { Orgfarm_Login} from '../../page/sflogin_page'
import {homepage} from '../../page/sfhome_page'
import {AccountsPage} from '../../page/sfaccounts_page'


test("Add an account", async ({page})=>{
    const login_obj = new Orgfarm_Login(page)
    const home_obj = new homepage(page)
    const account_obj = new AccountsPage(page)

    await login_obj.navigateTo("https://orgfarm-d84563cd5f-dev-ed.develop.my.salesforce.com/")
    await login_obj.func_login("narshru.8136353e9085@agentforce.com", "Teranarsi39@")
    expect(await home_obj.fun_verifyHomePage()).toBe(true)
    await home_obj.func_accountTab()
    expect(await account_obj.func_verifyInAccountTab()).toBe(true)
    await account_obj.func_add_new_account("Playwright", "Warm", "03/10/2026", "This is to add new account")

})
