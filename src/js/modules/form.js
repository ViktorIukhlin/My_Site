import { closeModal, openModal } from './modal';

function form() {

    const form = document.querySelector('[data-form]'),
        send = document.querySelector('[data-send]'),
        modal = document.querySelector('.modal');

    const message = {
        loading: 'src/img/form/spinner.svg',
        success: 'success',
        failure: 'failure'
    };

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return res.json();
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let statusMessage = document.createElement('img');
        statusMessage.src = message.loading;
        statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;

        send.style.display = 'none';
        form.insertAdjacentElement('afterend', statusMessage);

        const formData = new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formData.entries()));


        postData('mail.php', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                form.reset();
                statusMessage.remove();
            }).catch((e) => {
                showThanksModal(message.failure);
                console.log(e);
            }).finally(() => {
                form.reset();
                send.style.display = '';
                statusMessage.remove();
            });

        function showThanksModal(message) {

            const prevModalDialog = document.querySelector('.modal__dialog');

            prevModalDialog.classList.add('hide');
            
            const thanksModal = document.createElement('div');
            thanksModal.classList.add('modal__dialog');
            thanksModal.innerHTML = `
                <div class="modal__content">
                    <div class="modal__close" data-close>×</div>
                    <div class="modal__title">${message}</div>
                </div>
            `;

            document.querySelector('.modal').append(thanksModal);

            setTimeout(() => {
                thanksModal.remove();
                prevModalDialog.classList.remove('hide');
                closeModal();
            }, 1000);
        }
    });
}

export default form;