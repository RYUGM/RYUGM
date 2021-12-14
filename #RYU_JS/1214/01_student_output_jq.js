$(
function()
{
// alert(new Student("RYU",'남성',100).toString())
const name = $('#name')
const gender = $('#gender')
const beonho = $('#beonho')

const print= $("#print")
const reset = $('#reset')
const printOrderBy=$('#prinOrderBy')
const information=$('#information')

function resetInfo(){
    // information.innerHTML=''
    information.html('')
}

reset.on('click',function()
{
    resetInfo()
    students =[]
})
print.on('click',function(){

    const student = new Student(name.val(),gender.val(),Number(beonho.val()))
    let newStudentInfo=$('<h1></h1>')
    newStudentInfo.text(student.toString())
    if(student.성별 == '남'){
        // newStudentInfo.style.backgroundColor='cyan'
        // newStudentInfo.style.color='blue'
        newStudentInfo.css('background-color','cyan').css('color','blue')

    }
    else
    {
        // newStudentInfo.style.backgroundColor="black"
        // newStudentInfo.style.color='pink'
        newStudentInfo.css('background-color','black').css('color','pink')

    }
    information.append(newStudentInfo)
})

printOrderBy.on('click',function()
{
        const idx = students.findIndex(
        function(item){
        return item.번호 === Number(beonho.val())
    }
    )
    if(idx != -1){
        alert('번호 중복')
        return
    }
    resetInfo()
    students.push(new  Student(name.val(),gender.val(),Number(beonho.val())))
    students.sort(function (a,b) {
        return a.번호 - b.번호
        
    })
    for(const item of students){
        let newStudensInfo = $('<h1></h1>')
        newStudensInfo.text(students[i].toString())
        if(students.성별 == '남'){
            // newStudensInfo.style.backgroundColor='cyan'
            // newStudensInfo.style.color='blue'
            newStudensInfo.css('background-color','black').css('color','pink')
    
        }
        else
        {
            // newStudensInfo.style.backgroundColor="black"
            // newStudensInfo.style.color='pink'
            newStudensInfo.css('background-color','black').css('color','pink')
        }
        information.append(newStudensInfo)
    }
})
})