/*
// interface is stored structure data
// 45 line is read as below
 //type empidcard = Pick<employeedetails, "empid" | "emppname">
 //type name 
 // Pick is key word
 //< is sysntax
 // employeedetails are - interface
 // empid" | "emppname - are two properties in my interface
//we use |, instead of , when we use pick two properties
//const emponeidcard: empidcard = {
//call emidcard is type name , assigning it to or call to emponeidcard (object name)
then save, execute it.

in interface - const variable name is called as object

*/
class NewObject{
    public typenew() {
        interface employeedetails {

            empid : number,
            emppname: string,
            empsal?: number, //optional field
            empcity: string,
        
    }

    const empone : employeedetails = {
            empid: 1234,
            emppname: "narsi",
            empcity: "London",

    }
    
    const emptwo: employeedetails = {
            empid: 4321,
            emppname: "Marsi",
            empcity: "Hyderabad",
            empsal: 20000,
            empdpt:"HR"

    }
    interface employeedetails {
        empdpt?: string,
    }
    console.log(empone,emptwo)
    type empidcard = Pick<employeedetails, "empid" | "emppname">
    const emponeidcard: empidcard = {
        empid: 1234,
        emppname: "narsi"
    }
     type empidcardpartial = Partial<employeedetails, "empid" | "emppname" | "empsal">
    const emponeidcard: empidcard = {
        empid: 1234,
        emppname: "narsi"
    }
    console.log(emponeidcard)
    }
}
    
    const obj = new NewObject()
    obj.typenew()
