document.addEventListener('DOMContentLoaded', function(){
 let newText=document.getElementById('text')
 newText.textContent='This is really cool!'
 console.log('After DOM loaded')
})
console.log('Before DOM loads')
