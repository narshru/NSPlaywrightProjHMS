/*
class lead {
    public createlead(){
        const leadname: string = "narsi"

        console.log(leadname)

    }
   
}

const obj = new lead()
obj.createlead()

class accountpage{
    public account (account1: number, accountname: string, accountstatus: string ): string {
        let accountnew = (account1 + accountname +  accountstatus)
        return (accountnew)
    }

}
const Aobj = new accountpage
console.log(Aobj.account(1234, "Nara", "Active"))

*/

class contact {
    public createcontact(){
        const contactid1: number [] = [101,104,101]
        const contactname: string [] = ["Britishgas", "Npower", "octopus"]

        const contactrecord: string [] = []// to add accountid & accountname in contactrecord(varaible)
        
        for(let contactcount = 0; contactcount<contactid1.length;contactcount++){

             let contactresult = contactid1[contactcount]+ " , " + contactname[contactcount] // to store result
              contactrecord.push(contactresult)
        } 
        console.log(contactrecord)  
        return contactrecord
    
    }
}



const contactnew = new contact()
contactnew.createcontact()

/*
class opporunitypage extends contact{
    public opporunitynew(){
        let oppvar: [number,string, boolean]
        console.log()

    }
}

const oppnew = new opporunitypage
oppnew.createcontact()

class quote{

}
*/
