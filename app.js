var ul = document.getElementById('ul')
var input = document.getElementById('input')
var button = document.getElementById('btn')
var delAll = document.getElementById('delAll')

button.addEventListener('click', ()=>{
if(input.value == ''){
  Swal.fire({
    title: "Please Fill This Input Field!",
    icon: "info"
  });
  li.style.display = 'none'
}

   var li = document.createElement('li')
   var liText = document.createTextNode(input.value)
   li.appendChild(liText)
   ul.prepend(li)  // prepand se new value opper ati rhe gi.
   input.value = ''

   // delete button start
   var Delbutton = document.createElement('button')
   var DelbtnText = document.createTextNode('Delete')
   Delbutton.appendChild(DelbtnText)
   li.appendChild(Delbutton)

   Delbutton.addEventListener('click',()=>{
       ul.removeChild(li)
   })
  // delete button end

  // edit button start
   var Editbutton = document.createElement('button')
   var EditbtnText = document.createTextNode('Edit')
   Editbutton.appendChild(EditbtnText)
   li.appendChild(Editbutton)

   Editbutton.addEventListener('click',()=>{
  
    input.value = ul.childNodes[0].childNodes[0].nodeValue
    button.innerText = 'Save'
    
    button.addEventListener('click',()=>{
      li.style.display = 'none'
      li.innerText = `${input.value}`
      button.innerText = 'Add'
    })
  })
  // edit button end

})

delAll.addEventListener('click',()=>{
    ul.innerHTML = ''
})