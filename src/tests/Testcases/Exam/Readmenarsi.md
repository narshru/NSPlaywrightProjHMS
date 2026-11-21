// pages, test cases, users, url, elements, 
URL's, page, users, testcase, elements, test-results/Reports, package,

Parametrisation - when declares the 
defining the methods - parameteres are used 
calling the method - we pass the arguments
arguments
****************************************************************************************************************
Assertions based on need base we can use assertions
**********
toBetrue
tocontain
toBeTruthy
*****************************************************************************************************************
screenshot & videos
*******************
screenshot - by default it comes on failure
    but we can select as we need 
        q) 'off'
        b) 'on'
        c) 'on_all_retries'
        d) 'on-first-retry'
        e) 'retain-on-failure'
        f) 'retain_on_failures-and-retries'
        g)'retain-on-first-failure'
        h) 'retry with video'
****************************************************************************************************************
Logger file - we can use any where, no need console.log in real time
********************************************************
test only
****************************************************************************************************************
why Playeright and main features of Playwright:
faster
awaiting
Network interceptor
No need plugins
API testing inclusive
AI agentic 3 features available
Planning,Generator & Healer
    Planner - manual testscripts
        Generator - for test automation
            Healer - 

install the vs code
install node.js file
install tsx file
install testconfig file
install compiler
install typescript
inatsll playwright
****************************************************************8
varaible types 
data types
what is Typescripy and syntax
Control Statements
    Conditional satements
        if, if-else, if-else-if, switch and Nestef_if

Looping statements
    while loop, Do-while loop, for loop, for-in loop, for-of loop
Collections: Parameterisation ,Interfaces, arrays, mixed arrays, string arrays, tuple, set, map, & OOPs concepts.
OOps concepts
    Inheritance
        Abstraction
            Polymorphism
                Encapulation
                    access identifiers - Private, Public & Protected

************************************************************8
interface - test data, here we call as properties for example: see below how we write.

interface employeedetails {

            empid : number,
            emppname: string,
            empsal?: number,
            empcity: string,

 Note: empid : number, - this is one property, em           
- in the result we see flower bracket {} - 
***********************************************************
const object name = new classname - new is keyword
*************************************************************
in execution - when class is back we use ()
when method is called we use ()
*************************************************************
intialization
*******************************************************************
method with () - 
method without () - getter method
************************************************************************
Test execution step
*******************
test("Get all specializations", async ({page}))=>{

})
*****************************************************************************************************

new page or window - windows have same url and same login detials

public async func_get_doctor_profile_url(specialization_value: string): Promise<string>{
    await this.searchDoctor.click()
    await this.drp_all_specialization.selectOption(specialization_value)

    const [newPage]= await Promise.all([
      await this.page.context().waitForEvent('page'),
      await this.eles_view_profile.first().click()

    ])

    await newPage.waitForLoadState()
      const url_value = newPage.url()
      newPage.close()
      return url_value

**********************************************************************************
frames - additioal link opens in a page - it's called as Frame
this frame has different url, username and password?

import - same 
class - same but in class we declare as below - onnly we add framelocator
private readonly myframe: FrameLocator
private readonly tab_search_doctor_frame: Locator;
private readonly drp_all_specialization_frame: Locator;
private readonly eles_view_profile_frame: Locator;

constructor
this.myframe = page.frameLocator("");

this.tab_search_doctor_frame =
    this.myframe.getByTestId("search-tab-button");

this.drp_all_specialization_frame =
    this.myframe.getByTestId("");

functions - as we need change the functions also    
************************************************************************************************
key board events - we use keyboard event when we use tab button or submit button
await tis.firstNameInput.fill(details.firstName);
await this.firstNameInput.press("Tab")
await this.lastNameInput.fill(details.lastname);

await this.submitBtn.press("Enter") - this we use at last when we submit the button.
****************************************************************************************************************
Mouse Hover actions
varibale declaration

private readonly hover_show_credentials: Locator;
private readonly lbl_miaavi_admin_username: Locator;

constrcutor
this.hover_show_credentials = page.locator("//span[text()='Show credentials']");
this.lbl_miaavi_admin_username = page.locator("//strong[text()='miaaviAdmin']");

function
this.hover_show_credentials = page.locator("//span[text()='Show credentials']");
this.lbl_miaavi_admin_username = page.locator("//strong[text()='miaaviAdmin']");

function - return type
public async func_get_miaavi_admin_username(): Promise<string> {
    await this.hover_show_credentials.hover();
    await this.page.waitForTimeout(2000);
    return await this.lbl_miaavi_admin_username.innerText();

*************************************************************************************************
How to find out the xpath for webtable
exmple table is =  name specialization location email phonenumber action
here find out the values in specialization 
In specialization we see neurology, dermatology etc
so click on the first value on neurology - find out the xpath
here we see 25 values, we see tbody,tr,td, our name is specialization, stands 2nd
//tbody/tr/td[2]

one more example - if we see tag name as 
<h1 id="admin-portal-title" data-testid="admin-portal-title">Miaavi Admin</h1>
in above line >Miaavi Admin< - what we call this - find out so that it will be easy to read


***************************************************************************************************
WEB TABLE
eles_specialization_column
uniq_specialization

func__uniq_specialization_doc() 
    eles_specializayion_column:string[] =  (to get the all the specializations using array innertext add method)
    uniq_specialization(to get unique values using set)

    public async func_get_all_specializations(){
        const unique_specialization = new Set<string>();
       (await this.eles_all_specialization.innertextall).foreach((element:string)=> unique_specialization.add(element))
    }

*********************************************************************************************************
public async func_delete_doctor(doc_name_value: string){
        await this.lbl_search_doctor.fill(doc_name_value)

        this.adminpage.once("dialog", async (dialog)=>{
            await dialog.accept(doc_name_value)
        })
******************************************************************************************************
DYNAMIC PATH CREATION:
*******************************************************************************************************

1) LoinPage 
2) Admin Page
3) Patient Page - two functins are used
    a) func_booking appointmnet -Dynamic path creation
    b) func_search doctor -  NEW WINDOW      
********************************************************************************************************

test("Get all specializations",async ({page})=>{

const login_obj = new hmsloginpage '../page/hmsloginpage
const admin-obj = new hmsadminpage '../page/adminpage
const utilsobj = new playwright_utils '..src/utils

await login_obj.navigateTourl ("https://automatetesting-platform.com/")
await admin-obj.Logincredentails ("miaaviAdmin", "miaaviPassword ")

expect (await admin_obj.func_verif_miavi_admin_welcome()).Tobe(true)
console.log (await adminobj.func_get_list_specializtions())


})
***********************************************************************************************
Trace Viewer - it takes photos or screenshot every .5 seconds 
it's tool to take infor, to debugging, to find errors.
***********************************************************************************************
Logs - to view 


