
interface account{
    propertyname:string 
    methodname(): void

    }

    class contact implements account{
        propertyname = "narsi"
        methodname(): void {
           console.log("Praveen chicha")

        }
    }

    const objaccount = new contact
    objaccount.methodname()
    console.log(objaccount.propertyname)
    //console.log("Praveen chicha")

     
   

    

    
    