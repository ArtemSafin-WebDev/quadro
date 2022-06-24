export default function fileUpload() {
    const elements = Array.from(document.querySelectorAll('.js-file-upload'));

    elements.forEach(element => {
        const input = element.querySelector('input[type="file"]');
        const label = element.querySelector('.js-file-upload-text');
        const form = element.closest('form');

        input.addEventListener('change', () => {
            if (input.files.length) {
                label.textContent = input.files[0].name;
                element.classList.add('file-loaded');
            } else {
                element.classList.remove('file-loaded');
            }
        });

        input.addEventListener('dragenter', () => {
            element.classList.add('dragged');
        });
        input.addEventListener('dragend', () => {
            element.classList.remove('dragged');
        });
        input.addEventListener('dragleave', () => {
            element.classList.remove('dragged');
        });
        input.addEventListener('drop', () => {
            element.classList.remove('dragged');
        });

        if (form) {
            form.addEventListener('reset', () => {
                input.value = '';
                label.innerHTML = originalLabelText;
                element.classList.remove('file-loaded');
                element.classList.remove('dragged');
            });
        }
    });
}
