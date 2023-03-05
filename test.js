obj = { name: "cc", city: "bb", age: 123 }
let arr=['a','c','b']


// console.log(obj["nn"])
// if (obj["name"]) {
//   console.log(1)
// } else {
//   console.log(2)
// }

// delete obj['name']
// console.log(obj)



// console.log([...new Set(arr)])
// console.log(null instanceof Null )
// console.log(arr instanceof Object )


// let x=Array.from("ff")
// console.log(x)

// function f1(arguments){
//   console.log(...arguments)
// }
// console.log(f1("b","a","c"))
// const x=new Set(['a','b','c'])
// console.log(x)
// x.forEach(value=>{console.log(value)})

// let obj={name:"cc",yr:12}
// let res=Object.entries(obj)
// console.log(res)

// new Promise((resolve, reject) => {
//   console.log(111)
//   resolve(222)
// }).then(val => { console.log(val); return 333 }
// ).then(val => {
//   console.log(val);
//   throw "an error"
// }).catch(err => {
//   console.log(err)
// })

async function f1() {
  let x = new Promise((resolve, reject) => {
    console.log(111)
    resolve(222)
  })
  try {
   let y= await x
   console.log(22,y)
  } catch (err) {

  }
}
// f1()


// let keys=arr.entries()
// for(let key of keys){
// console.log(key)
// }

// console.log(obj[city])
// console.log(obj["city"])
