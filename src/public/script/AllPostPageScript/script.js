let likeButton = document.querySelectorAll('.media-right .like-button');

likeButton.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('is-liked');
    });
});

let imageModal = document.querySelector('#myModal');
let allImages = document.querySelectorAll('.card-image figure img');
let modalContent = document.querySelector('#img01');
let imageCloseButton = document.querySelector('#myModal .close');

allImages.forEach(element => {
    element.addEventListener('click', () => {
        imageModal.classList.add('is-active');
        modalContent.src = element.src;
    });
});

imageCloseButton.addEventListener('click', () => {
    imageModal.classList.remove('is-active');
});