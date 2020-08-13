function openModal() {
    const modal = document.querySelector('.modal');
    modal.classList.toggle('show');
    document.body.style.overflow = 'hidden';
    if (window.screen.width > 1455) {
        document.body.style.margin = '0 16px 0 0';
    }
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    document.body.style.margin = '';
}

function modal() {
    const modal = document.querySelector('.modal');

    document.querySelector('[data-modal]').addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
}

export default modal;
export { closeModal };
export { openModal };