import{Page} from '@playwright/test'
import{HmsLoginpage} from './loginpage'
import{AdminPage}   from './adminpage'
import{doctorsPage} from './doctors_page'
import{patientsPage} from './patients_page'
import{playwrightUtils} from '../utils/playwright_utils'

export class ObjectManager{

    private readonly page: Page
    private loginpage_obj: HmsLoginpage
    private adminpage_obj: AdminPage
    private doctorspage_obj: doctorsPage
    private patients_page_obj: patientsPage
    private playwright_utils_obj: playwrightUtils

    constructor(page:Page){
        this.page = page
        this.loginpage_obj = new HmsLoginpage(this.page)
        this.adminpage_obj = new AdminPage(this.page)
        this.doctorspage_obj = new doctorsPage(this.page)
        this.patients_page_obj = new patientsPage(this.page)
        this.playwright_utils_obj = new playwrightUtils(this.page)

    }

    public get loginpage(): HmsLoginpage{
        return this.loginpage_obj
}

    public get adminpage(): AdminPage{
    return this.adminpage_obj
}

    public get doctorspage(): doctorsPage{
    return this.doctorspage_obj
}
    public get patientspage(): patientsPage{
    return this.patients_page_obj
}

    public get playwrightutils(): playwrightUtils{
    return this.playwright_utils_obj
}

