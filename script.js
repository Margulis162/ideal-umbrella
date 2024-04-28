const switch1 = document.getElementById('switch-1')
window.setTimeout(() => switch1.style.visibility = 'visible', 1000)
const container = document.getElementById('container')

switch1.addEventListener('change',(e)=>{
    /* changes background */
   if(switch1.control.checked){
      container.style.background ='rgb(9, 11, 28)'
    }else{
      container.style.background ='skyblue'
    }
  })