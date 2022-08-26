const container = document.querySelector('.container')
const btn = document.querySelectorAll('.btn')
const submitBtn = document.querySelector('.btnn')
const container2 = document.querySelector('section')
const result = document.querySelector('span')
const noSelection = document.querySelector('.result')
let selected;
let arr = []


btn.forEach(btn => btn.addEventListener('click', handleRatingClick ))



submitBtn.addEventListener('click', ()=> {
    container.classList.add('hidden')
    container2.classList.remove('hidden')
    result.innerHTML = selected
    if (selected === undefined){
        noSelection.innerHTML = 'No selection was made!'
       }
})

function handleRatingClick(event){
    btn.forEach(btn => {
        btn.classList.remove('active')
    } )
    event.target.classList.add('active')
   selected = event.target.id
 
}
