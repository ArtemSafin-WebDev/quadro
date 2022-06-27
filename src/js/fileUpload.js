function formatFileSize(bytes, decimalPoint) {
    if (bytes == 0) return '0 Bytes';
    var k = 1000,
        dm = decimalPoint || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

export default function fileUpload() {
    const elements = Array.from(document.querySelectorAll('.js-file-upload'));

    elements.forEach(element => {
        const input = element.querySelector('input[type="file"]');
        const label = element.querySelector('.js-file-upload-text');
        const size = element.querySelector('.js-file-upload-size');
        const clearBtn = element.parentElement.querySelector('.js-file-upload-clear')
        const sizeOriginalText = size.textContent;
        const labelOriginalText = label.textContent;
        const form = element.closest('form');

        input.addEventListener('change', () => {
            if (input.files.length) {
                label.textContent = input.files[0].name;
                size.textContent = formatFileSize(input.files[0].size);
                element.parentElement.classList.add('file-loaded');
            } else {
                element.parentElement.classList.remove('file-loaded');
                label.textContent = labelOriginalText;
                size.textContent = sizeOriginalText;
            }
        });

        if (clearBtn) {
            clearBtn.addEventListener('click', event => {
                event.preventDefault();
                input.value = '';
                element.parentElement.classList.remove('file-loaded');
                label.textContent = labelOriginalText;
                size.textContent = sizeOriginalText;
            })
        }

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
                element.parentElement.classList.remove('file-loaded');
                element.classList.remove('dragged');
            });
        }
    });
}
