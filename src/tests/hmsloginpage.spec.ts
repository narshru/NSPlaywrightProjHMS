import {test, expect } from '@playwright/test'
import { HmsLoginpage } from '../page/loginpage'

test("To get the admin username", async ({page})=>{
    const login_obj = new HmsLoginpage(page)

    await login_obj.func_naviateTo("https://automatetesting-platform.com");

    console.log(await login_obj.func_hover_get_miaavi_admin_username())
    expect(await login_obj.func_hover_get_miaavi_admin_username()).toBe("miaaviPatient")
})