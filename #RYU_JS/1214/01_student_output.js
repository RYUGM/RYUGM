document.addEventListener('DOMContentLoaded',
function()
{
// alert(new Student("RYU",'남성',100).toString())
const name = document.querySelector('#name')
const gender = document.querySelector('#gender')
const beonho = document.querySelector('#beonho')

const print= document.querySelector("#print")
const reset = document.querySelector('#reset')
const printOrderBy=document.querySelector('#prinOrderBy')
const information=document.querySelector('#information')

function resetInfo(){
    information.innerHTML=''
}
reset.addEventListener('click',function()
{
    resetInfo()
    students =[]
})
print.addEventListener('click',function(){

    const student = new Student(name.value,gender.value,Number(beonho.value))
    let newStudentInfo=document.createElement('h1')
    newStudentInfo.textContent=student.toString()
    if(student.성별 == '남'){
        newStudentInfo.style.backgroundColor='cyan'
        newStudentInfo.style.color='blue'

    }
    else
    {
        newStudentInfo.style.backgroundColor="black"
        newStudentInfo.style.color='pink'
    }
    information.appendChild(newStudentInfo)
})

printOrderBy.addEventListener('click',function(){
    const idx = students.findIndex(
        function(item){
        return item.번호 === Number(beonho.value)
    }
    )
    if(idx != -1){
        alert('번호 중복')
        return
    }
    resetInfo()
    students.push(new  Student(name.value,gender.value,Number(beonho.value)))
    students.sort(function (a,b) {
        return a.번호 - b.번호
        
    })
    for(const item of students){
        let newStudensInfo = document.createElement('h1')
        newStudensInfo.textContent=students[i].toString()
        if(students.성별 == '남'){
            newStudensInfo.style.backgroundColor='cyan'
            newStudensInfo.style.color='blue'
    
        }
        else
        {
            newStudensInfo.style.backgroundColor="black"
            newStudensInfo.style.color='pink'
        }
        information.appendChild(newStudensInfo)
    }
})
})