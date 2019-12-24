const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const selectPlans = document.querySelectorAll('.plan button');
const cancel = document.querySelector('.modal .modal__action--negative');

const hamburger = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile_nav');

for (let item of selectPlans) {
    item.addEventListener('click', function () {
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
        backdrop.classList.add('open')
        modal.classList.add('open')
    })
}

function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    backdrop.classList.remove('open');
    if (modal)
        modal.classList.remove('open');
}

backdrop.addEventListener('click', function () {
    if (mobileNav.classList.contains('open')) {
        // mobileNav.style.display = 'none'
        mobileNav.classList.remove('open');
    }
    closeModal();
});
if (cancel)
    cancel.addEventListener('click', closeModal);

hamburger.addEventListener('click', function () {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})