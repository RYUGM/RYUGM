let aa = [1,2,'삼',4]
aa.push('오5')
// for(let item of aa){
//     console.log(item)
// }


aa[aa.length]=6
// for(let item of aa){
//     console.log(item)
// }

aa[10]=10
// console.log(aa)

// aa[0]=null
// console.log(aa)
// console.log("-----------------------------------")
// aa.splice(0,1)
// for(let item of aa){
//     console.log(item)
// }
// console.log("-----------------------------------")
// aa.splice(1,3)
// for(let item of aa){
//     console.log(item)
// }
console.log("-----------------------------------")
const myindex = aa.indexOf(6)
aa.splice(myindex,1)
for(let item of aa){
    console.log(item)
}
// console.log("-----------------------------------")

// aa.splice(2,0,1000)
// for(let item of aa){
//     console.log(item)
// }







