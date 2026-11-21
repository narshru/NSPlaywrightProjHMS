/*
class sainsburys{
    public kidshoes(){
        const shoesize: number [] = [20, 21, 22, 23, 24, 25, 26,27, 25, 23]
        const shoemodel = [34, 35, 37, [40, 41], 38, 39] 
        const shoename = ["nike", "rebook", "Paragon", "bata", "local"]

        console.log(shoesize)
        console.log(shoemodel.at(4)) 
        console.log(shoesize.concat(shoemodel.flat()))
        console.log(shoename.at(3))
        console.log(shoesize)


    }
}
const shoesection = new sainsburys()
shoesection.kidshoes()
*/

class sainsburys{
    public employer(){
        const employeeid: number [] = [1123, 7672, 2837, 9999, 2334, 8237, 6788, 7787, 6655]
        const employeephone = [6787678, 789, [667, 7887, 8888],8774, 949,7667345]
        const employeename = ["narsi", "narsi1", "narsi3", "narsi4", "narsi5", "narsi6","narsi7", "narsi8", "narsi9"]

        console.log(employeeid)
        console.log(employeephone.at(1))
        console.log(employeename.concat(employeeid.flat()))


    }
}
const staff = new sainsburys
staff.employer()