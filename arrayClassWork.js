// Arrow function
var addition = () => console.log(addition(""))
var addition = color => {return {"bala":color}}
addition("blue")

function heloWorld(func){
    console.log("i'min here rn")
    func()
    console.log("After the function")
}

heloWorld(function(){
    console.log("hello world")
})
function me(){
    console.log("i am the function")
}

helloworld(me)

 helloworld(() => console.log("i am the function"))

 let arr = [10, 30, 40, 50, 60, 90, 70]
 let newArr = arr.reduce((prev, curr) => prev + curr)
 console.log(arr)
 console.log(newArr)
