// <span   data-testid="admin-username">  Welcome, miaaviAdmin   </span>
        
        // tagname - spanby
        // attritubte name - data-testid
        // attribute value - admin-username
        //  TEXT - Welcome, miaaviAdmin
        // /span - tag name clsoing
       // <button id="add-doctor-button" class="btn btn-primary" data-testid="add-doctor-button">+ Add Doctor</button>

       /*
       public async fun_adminpage(){
       // await this.lbl_miaaviAdmin.isVisible
        await this.lbl_miaaviAdmin.click()
        //await this.lbl_pop_up_add_new_doctor.
        */


import { Page, Locator } from "@playwright/test";

export class AdminPage{
    private readonly adminpage: Page
    private readonly lbl_miaaviAdmin: Locator
    private readonly btn_plus_add_doctor: Locator
    private readonly lbl_pop_up_add_new_doctor: Locator
    private readonly lbl_name: Locator
    private readonly dpd_Specialization: Locator
    private readonly dpd_Location: Locator
    private readonly lbl_Email: Locator
    private readonly lbl_Phone: Locator
    private readonly btn_add_doctor: Locator
    private readonly lbl_search_doctor: Locator
    //private readonly lbl_popup_header: Locator
    private readonly btn_all_delete_buttons: Locator

    private readonly eles_specializtion_column: Locator

    constructor(page:Page){
        this.adminpage = page
        this.lbl_miaaviAdmin = page.getByTestId("admin-username")
        this.btn_plus_add_doctor = page.getByText('+ Add Doctor')
         this.lbl_pop_up_add_new_doctor = page.getByTestId('add-doctor-title')
        this.lbl_name = page.getByLabel("Name *")
        this.dpd_Specialization = page.getByLabel('Specialization *')
        this.dpd_Location = page.getByTestId ("label-doctor-location")
        this.lbl_Email = page.getByTestId("label-doctor-email")
        this.lbl_Phone = page.getByTestId("label-doctor-phone")
        this.btn_add_doctor = page.getByTestId("submit-doctor-button")
        this.lbl_search_doctor = page.getByTestId("doctors-search-input")
        //this.lbl_popup_header = page
        this.btn_all_delete_buttons = page.getByRole("button",{name:"delete"})

        this.eles_specializtion_column = page.locator("//tbody/tr/td[2]")

    }

    public async func_get_all_specilizations(): Promise<Set<string>>{
        const unique_specialization = new Set<string>();
        (await this.eles_specializtion_column.allInnerTexts()).forEach((element: string) => unique_specialization.add(element))
        return (unique_specialization)

    } 
        
    public async func_verify_miaavi_Admin(): Promise<boolean>{
         this.adminpage
        return this.lbl_miaaviAdmin.isVisible()
   
    }   
    
    public async func_delete_existing_doctor_record(doc_name_value: string){
        //return this.func_delete_existing_doctor_record(doc_name_value)

        //func_delete_existing_doctor

    }

    public async func_verify_plus_add_doctor_popup():Promise<string>{
        await this.btn_plus_add_doctor.click()
        return await this.lbl_pop_up_add_new_doctor.innerText()
    }

    public async func_add_doctor(doc_name_value: string, doc_specialization_value:string, doc_loaction_value: string, doc_email_value:string, doc_phone_number_value:string){
        await this.lbl_name.fill(doc_name_value)
        await this.dpd_Specialization.selectOption(doc_specialization_value)
        await this.dpd_Location.selectOption(doc_loaction_value)
        await this.lbl_Email.fill(doc_email_value)
        await this.lbl_Phone.fill(doc_phone_number_value)
        await this.btn_add_doctor.click()
        //await this.adminpage.waitForTimeout(5000)

    }

    public async func_search_doctor(doc_name_value:string): Promise<boolean>{
        await this.lbl_search_doctor.fill(doc_name_value)
        return await this.btn_all_delete_buttons.isVisible()

    }

    public async func_delete_doctor(doc_name_value: string){
        await this.lbl_search_doctor.fill(doc_name_value)

        this.adminpage.once("dialog", async (dialog)=>{
            await dialog.accept(doc_name_value)
        })

       // await this.btn_all_delete_buttons.click()
    }

    
        

    }

