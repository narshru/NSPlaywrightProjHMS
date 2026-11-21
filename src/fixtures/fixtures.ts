import {test as base, expect} from '@playwright/test'
import { ObjectManager } from '../page/object_manager'

import { credentials } from '../testdata/credentials'

type platformfixtures = {
    adminSession: ObjectManager
    patientSession: ObjectManager
    doctorSession:ObjectManager
}

export const test = base.extend<platformfixtures>({
    adminSession: async ({page}, use) =>{
    let pom = new ObjectManager(page)
    //log.info("Navigation to the application")
   await pom.loginpage.func_navigate_to("automatetesting-platform.com")

   //log.info("Entering admin credentials")
   await pom.loginpage.func_login(credentials.admin.username, credentials.admin.password)

   expect(await pom.adminpage.func_verify_miaavi_admin_home_page()).toBe(true)
   await use(pom)
   //("Logging out")
   await pom.playwrightutils.func_logout()
    } 
}
)
