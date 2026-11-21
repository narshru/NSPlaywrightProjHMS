
/*
const clothing : string = "kids wear"
let kidswearsize : number = 5 
class sainsburys {
    quantity : number = 10
    static floor : string = "first floor"

    public menswear(){

    }

    public kidswear(){
        // let kidswearsize: number = 10
        console.log(kidswearsize)
    }   
}
const bristolstore = new sainsburys 
bristolstore.kidswear()

*/
/*
let menswear: number =  5
class sainsbuys{
    ties: number = 10
    static section: string = "floor"
    public tieSection(){
        let tiesize: number = 2
        console.log(tiesize)
    }
}

const bristolstore = new sainsbuys
bristolstore.tieSection()
*/

/*let shoesize: number = 13
const shoesection: string = "section1"
class sainsburys {
    nayanshoesize: number = 14  // instant variable should be called this "key 2word
    static kidssection: string = "kidsection1" //static variable shoudl be called with class name
    public shoearea(){
        const rack: number = 5
        console.log (shoesize, shoesection, this.nayanshoesize, sainsburys.kidssection, rack)
    }
}
const bristolshop = new sainsburys()
bristolshop.shoearea()
*/

/*
let softdrinks: number = 20
const alcholicdrinks: string = "adultdrink"
class sainsburys{
    alcholicfreedrinks: number = 30
    static zeroalcholic: string = "kingfisher"
    public drinkmenu(){
        const kidsdrinkmenu: String = "kidsmenu"
        console.log (softdrinks, alcholicdrinks, this.alcholicfreedrinks, sainsburys.zeroalcholic, kidsdrinkmenu )

    }

}
const bristolshop = new sainsburys
bristolshop.drinkmenu()
*/

/*

let pharmacy: number = 1
const crocin: string = "fever"
class sainsburys{
    tablets: number = 5
    static nofever: string = "notablet"
    public GAP(){
        const trink: number = 5
        console.log (pharmacy, crocin, this.tablets, sainsburys.nofever,trink)

    }
}


const bristolshop = new sainsburys
bristolshop.GAP()
****************************************************************************************************
/*
 let chickenlegs: number = 50
 const chickenboard: string = "chickensignboard"
class sainsburys{
        redchilli: number = 65
        greenchilli: string = "redgreenchilli"

    public vegetables(){
        const greens:String = "greenveg"
        console.log(chickenlegs, chickenboard, this.redchilli, this.greenchilli, greens)


    }
}

const allgreens = new sainsburys
allgreens.vegetables()

*/
***********************************************************************************
/*
import - class and locator are predefined class from the Playwright folder( libarary)
class - we declare the varibale in class

        private readonly loginpage: Locator
        private is access identifier, readonly is variable name, loginpage is , locator

 constrcutor is method, () - assign the parameters, sflogin is variable given, Page is?
 [] flower brackets are used
 constructor(sflogin: Page){ 

 // intialise the variables with constrcutcor
**************************************************************
Function - we perform actions on fields (variables)
public async func_account(){
Example: In Account tab - click
New - Click 
Account_name - fill
drp_down_rating - click
Hot - select
await this.btn_new_account.click
 
 
 function - here we assign the value as parametres
 for example username, password - are user defined methods
 for example login click is predefine method
 for example .get default are predefined methods
 
 
 


*/

import { Page, Locator } from "@playwright/test";

class Page{
    
    private readonly loginpage: Locator
    private readonly lbl_username: Locator
    private readonly ibl_password: Locator
    private readonly btn_login: Locator

    constructor(sflogin: Page){
        this.loginpage = sflogin
        this.lbl_username = sflogin. Locator()


    }
}

