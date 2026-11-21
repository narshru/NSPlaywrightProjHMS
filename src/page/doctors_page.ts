import { Page,Locator } from "@playwright/test";

export class doctorsPage{
    private readonly page: Page

    private readonly tree_outpatients: Locator
    private readonly elses_patients: Locator
    private readonly eles_previous_prescription: Locator
    private readonly eles_drp_to: Locator

    constructor(page:Page){
        this.page = page

        this.tree_outpatients = page. locator("//span[@id='outpatients-label']")
        this.elses_patients = page. locator("//ul[@id='outpatients-list']/li")
        this.eles_previous_prescription = page.locator("//ul[@id='prescriptions-list-saved']/li")
        this.eles_drp_to = page.getByTestId("prescriptions-saved-section")

}
    public async func_drag_drop_demo(){
        await this.tree_outpatients.click()
        await this.page.waitForTimeout(1000)
        await this.elses_patients.first().click()
        await this.eles_previous_prescription.click()
        await this.page.waitForTimeout(2000)
        await this.eles_drp_to.drop()
        
}
}
