import{test, expect} from '@playwright/test'
//import {HmsLoginpage} from '../page/loginpage'
//import { AdminPage } from '../page/adminpage'
//import { playwrightUtils } from '../../utils/playwright_utils'
import { credentials } from '../testdata/credentials';
import { ObjectManager } from '../page/object_manager'
import add_doctor from '../testdata/add_doctor.json'
import { HmsLoginpage } from '../page/loginpage';
import { AdminPage } from '../page/adminpage';

let pom: ObjectManager;

test.beforeEach("Login to the application", async ({page})=>{

     pom = new ObjectManager(page)
    await pom HmsLoginpage.func_navigate_to("https://automatetesting-platform.com")
    //await login_obj.func_naviateTo("https://automatetesting-platform.com/")
    await pom HmsLoginpage.func_loginpage(credentials.admin.username, credentials.admin.password)

    expect(await pom.adminpage.func_verify_miaavi_Admin()).toBe(true)
})

test.afterEach("Logout of the application", async ({page})=>{
    await pom.playwrightutilsPage.func_logout()
})


for(const data of add_doctor){

test(`adding a new doctor ${data.doc_name}` , async ({page})=>{
    //const login_obj = new HmsLoginpage(page)
   // const admin_obj = new AdminPage(page)
   // const playwright_utils_obj = new playwrightUtils(page)

    //const pom = new ObjectManager(page)

    //await pom HmsLoginpage.func_navigate_to("https://automatetesting-platform.com")

    //await login_obj.func_naviateTo("https://automatetesting-platform.com/")
    //await pom HmsLoginpage.func_loginpage(credentials.admin.username, credentials.admin.password)

    //expect(await pom.adminpage.func_verify_miaavi_Admin()).toBe(true)

    await pom.adminpage.func_delete_existing_doctor_record(data.doc_name)
    expect(await pom.adminpage.func_verify_plus_add_doctor_popup()).toBe("Add New Doctor")

    await pom.adminpage.func_add_doctor(data.doc_name,data.doc_specialization, data.doc_location, data.doc_email, data.doc_phone)

    expect(await pom.adminpage.func_search_doctor(data.doc_name)).toBe(true)

   // await playwright_utils_obj.func_logout()
    

})}
    
test.only("Get all specializations",async ({page})=>{

//const loginpage_obj = new HmsLoginpage(page)
//const adminp_obj = new AdminPage(page)
//const utilsobj = new playwrightUtils(page)

//const pom = new ObjectManager(page)

await pom.loginpage.func_naviateTo('https://automatetesting-platform.com')
await pom.loginpage.func_loginpage(credentials.admin.username, credentials.admin.password)

expect (await pom.adminpage.func_verify_miaavi_Admin()).toBe(true)
console.log (await pom.adminpage.func_get_all_specilizations())


}) 
    


