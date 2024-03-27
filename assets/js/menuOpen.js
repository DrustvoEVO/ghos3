// Toggle the menu open and close when on mobile
export default function menuOpen() {
    const burgerButton = document.querySelector('.ghos3-burger');
    burgerButton.addEventListener('click', function () {
        document.body.classList.toggle('ghos3-head-open');
    });
}