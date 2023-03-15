// const personal_photo = document.getElementById('personal-photo')
// const bt1 = document.getElementById('bt1')
// const bt2 = document.getElementById('bt2')
// const bt3 = document.getElementById('bt3')


// bt1.addEventListener('click', () => {
//     personal_photo.style.transform='rotate(-360deg)';
//     bt1.style.visibility='hidden';
//     if(bt2.style.visibility == 'hidden' ){
//         bt3.style.visibility='visible';
//     }
// });

// bt2.addEventListener('click', () => {
//     personal_photo.style.transform='rotate(360deg)';
//     bt2.style.visibility='hidden';
//     if(bt1.style.visibility == 'hidden' ){
//         bt3.style.visibility='visible';
//     }
// });

// bt3.addEventListener('click', () =>{
//     bt1.style.visibility='visible';
//     bt2.style.visibility='visible';
//     bt3.style.visibility='hidden';
// });

const buttonHeaderMenu = document.querySelector('[data-button-header-menu]')

buttonHeaderMenu.addEventListener('click', (e) => {
    e.preventDefault()

    const headerMenu = document.querySelector('[data-header-menu]')
    headerMenu.classList.toggle('active')
    
})


