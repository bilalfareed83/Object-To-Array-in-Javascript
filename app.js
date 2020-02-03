console.log('Object To Array in Javascript')

let obj = { name: "Bilal"},
    obj2 = obj,
    obj3 = {name: "Bilal"}




let arr1 = ['Bilal', 'Faiz', 'Tehseen', 'Huzaif', 'Sajad', 5,obj],
    arr2 = ['Rizwan', 'Usama', 'Faiz', 'Bilal', 'Umair', 5,obj3]
    

 //concationation of array   
let newArr = [].concat(arr1, arr2)
//console.log(newArr)
    
let newArray = [...arr1, ...arr2]
//console.log(newArr)



//remove dupicate value in newArray

const set = new Set([...(arr1),...arr2])
//console.log(set)

newArr = [...set]

// console.log(newArr)


let prepareArra = (arr) => {
    return arr.map((elem) => {
        if (typeof elem === "object" && elem !== "null") {
            return JSON.stringify(elem)           
        } else {
            return elem
        }
    })
}


const otherSet = new Set([...prepareArra(arr1), ...prepareArra(arr2)])

// console.log(otherSet)

let newArray2 = [...set]
// console.log(newArray2)


