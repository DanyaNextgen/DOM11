const addBtn = document.querySelector('.add-btn')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-btn')

addBtn.onclick = () => {
    modal.classList.add('show')
}

closeBtn.onclick = () => {
    modal.classList.remove('show')
}