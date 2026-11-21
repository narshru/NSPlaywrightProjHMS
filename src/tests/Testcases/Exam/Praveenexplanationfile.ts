import { Page, Locator } from "@playwright/test";

class Page{
    login_page:Page
    
    // in class declared the varaibles as below(instance variable)
    txt username: Locator
    txt password: Locator
    click_login: Locator

// constrcutor - method, // give the parameters
//sflogin - varaible name
   //Page - data type
   // data types in playwright are page and locator
    constructor(sflogin: Page){
        // this (keyword) is used to call instance varaible
        // within class we have two variable, instance & static varaible
        // intialisation - w
        this.login_page = sflogin
        this.username = sflogin.locator("input[@id"username"]") // locate
        this.password = sflogin.locator("input[@type="password"]")
        
    // bracket and double quotes
        // bracket ()   square bracket []  flower brackets {}
        this.click_login = sflogin.locator("input[id@"login"]")
        // to locate login button tagname attribute name attribute value

       


    
                            


    }
    
 
}

// in class we declare the varaibles
// in method we call the varaibles, locate and  intiasiled them 