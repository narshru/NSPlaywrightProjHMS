/*
class NarsiLondonHouse{
room1(){
let tenanat1:string ="John"
console.log(tenanat1)
}   
}
const nlhobj = new NarsiLondonHouse()
nlhobj.room1() 
*/

let NLH: number = 103 //this is a global varaible)
class NarsiLondonHouse{
    numberofrooms:number = 5 //this is a instance variable
    static numberofmaindoor: number = 2 //this is a static variable
room1(){
let tenanat1:string ="John" //this is a local variable
console.log("House name:", NLH,"No of rooms:", this.numberofrooms, "no of doors" ,NarsiLondonHouse.numberofmaindoor,"name of tenant:" , tenanat1)
            //global variable,instance varaible we use this.,static we use Class.,local varibale
}   
}
const nlhobj = new NarsiLondonHouse()

nlhobj.room1()

Public conditionalstatement (){
    /*
        if
        if-else
        if-else-if
        neted if

        const i:number = 10
        const j: number = 20
        const k: number - 30

        if(i>j){
            console.log("Condition 1)"
        }else{      
            console.log("Inelse")
        }

        public m3(){
            //console.log(1var)
            console.log(this.ivar)
            console.log(avar)

*/
