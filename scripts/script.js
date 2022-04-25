'use script'
const btnShowModal = document.getElementById('btn-show');
const btnCloseModel = document.getElementById('btn-close')
const modalContainer = document.getElementById('modal-container')
const overlayContainer = document.getElementById('overlay')

btnShowModal.addEventListener('click',function(){
    modalContainer.classList.add('show');
    overlayContainer.classList.add('show');
    
});
btnCloseModel.addEventListener('click',function(){
    modalContainer.classList.remove('show');
    overlayContainer.classList.remove('show');

    
});
overlayContainer.addEventListener('click',function(){
    modalContainer.classList.remove('show');
    overlayContainer.classList.remove('show');
})