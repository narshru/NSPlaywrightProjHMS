import{test, expect} from '@playwright/test'
import { login } from './Exam/pratise test/narsi_loginpage'

test("test case", async({page})=>{
    const loginobj = new login(page)
    await loginobj.func_loginpage("https://orgfarm-d84563cd5f-dev-ed.develop.my.salesforce.com/")
    await loginobj.func_logindetails("narshru.8136353e9085@agentforce.com","Teranarsi39@")


})
