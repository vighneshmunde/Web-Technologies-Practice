// //! Object

let student ={
    name: "yash" ,
    age: 20,
    isMarried: false,
    hobbies: ["Sleeping" ,"Eating" , "Scrolling"],
    isWorking: ()=> {
        return "Yes i am Working"
    },
    address: {
        City: "Mumbai"
    }
}

// console.log(student)
// console.log(student.name)
// console.log(student.age)
// console.log(student.isMarried)
// console.log(student.hobbies)
// console.log(student.hobbies[1])
// console.log(student.isWorking())
// console.log(student.address)
// console.log(student.address.City)

//Object Methods

// // object.keys()

// let keysValue = Object.keys(student)
// console.log(keysValue)

// // object.values()
// let data = Object.values(student)
// console.log(data)

// // object.entries()
// let data = Object.entries(student)
// console.log(data)

// // object.hasOwn()
// console.log(Object.hasOwn(student,"isMarried"))

// // object.assign()
// let student1 = Object.assign({},student)
// console.log(student1)

// student1.name = "Om"
// console.log(student1)


// // object.seal()

// //possible before object is sealed
// student.state = "Maharashtra"
// console.log(student)

// //possible before object is sealed
// delete student.age;
// console.log(student)

// Object.seal(student);
// //not possible if object is sealed
// student.state = "Maharashtra"
// console.log(student)

// //not possible if object is sealed
// delete student.age;
// console.log(student)

// student.age =30
// console.log(student)

// object.isSealed()
// console.log(Object.isSealed(student))

// // Object.freeze()
// Object.freeze(student);
// student.state = "Maharashtra"
// console.log(student)

// delete student.age;
// console.log(student)

// student.age =30
// console.log(student)


// // object.isFrozen()
// console.log(Object.isFrozen(student))
