HMS - As a Admin user: add a new doctor
search for the doctor (Dr.Shiva)
delete the exiting doctor (Dr.Shiva)
 
//==================================================
 
Step1: Identify the Pages
Step2: Identify the Popup screens
Step3: Identify the number of functions on each page
Step4: Identify unique element on the page which remains stable to confirm the focus is on the page.
Stpe5: draft the flow: run the manual flow
 
//=========================================================
Step1: 
    Pages: 
        Login_Page
            un_navigateToUrl(add step: networkidle & Stable element )
            fun_LoginPage(performing actions on elements),
        Admin_Page
            Import:
            Class:
            Constrcutor
            FunC_ Global search, waitforloadstate(networkidle) ( stable element)  - isVisible() -  
            funC_Delete  - Delete Doctor
            func_add_new doctor pop-up screen
            fun_to add_doctor(performing actions)- To create a doctor record
            func_serach_doctor_record  - to add a doctor record or to delete doctor record

    
Step2: Popup screen: AddNewDoctor
    g

Test Case
    Import class from lib (Test, expect)
    Import class from loginpage
    import class fron admin page
define test name
create an object and assign the class (pages)
create an object and assign utils
call the function using object name
    naviagte url
    login
 
    homepage validation
    + add doc popup
    add doc record
    search doc
 
    utils logout