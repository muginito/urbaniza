document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    const obrasContainer = document.querySelector('.obras');

    const editModal = document.getElementById('editModal');
    const closeModal = document.querySelector('.close');
    const saveButton = document.getElementById('saveButton');

    let currentEditElement = null;

    addButton.addEventListener('click', () => {
        const status = document.getElementById('addStatus').value;
        const title = document.getElementById('addTitle').value;
        const description = document.getElementById('addDescription').value;
        const location = document.getElementById('addLocation').value;

        const obraDiv = document.createElement('div');
        obraDiv.classList.add('obra');

        obraDiv.innerHTML = `
            <p>Status: ${status}</p>
            <h2>${title}</h2>
            <p>${description}</p>
            <p>Local: ${location}</p>
            <button class="edit">Editar</button>
            <button class="delete">Excluir</button>
        `;

        obrasContainer.appendChild(obraDiv);

        // Limpar os campos
        document.getElementById('addStatus').value = '';
        document.getElementById('addTitle').value = '';
        document.getElementById('addDescription').value = '';
        document.getElementById('addLocation').value = '';
    });

    obrasContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('edit')) {
            currentEditElement = e.target.parentElement;

            const status = currentEditElement.querySelector('p:nth-child(1)').innerText.split(': ')[1];
            const title = currentEditElement.querySelector('h2').innerText;
            const description = currentEditElement.querySelector('p:nth-child(3)').innerText;
            const location = currentEditElement.querySelector('p:nth-child(4)').innerText.split(': ')[1];

            document.getElementById('editStatus').value = status;
            document.getElementById('editTitle').value = title;
            document.getElementById('editDescription').value = description;
            document.getElementById('editLocation').value = location;

            editModal.style.display = 'block';
        } else if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove();
        }
    });

    closeModal.addEventListener('click', () => {
        editModal.style.display = 'none';
    });

    saveButton.addEventListener('click', () => {
        const status = document.getElementById('editStatus').value;
        const title = document.getElementById('editTitle').value;
        const description = document.getElementById('editDescription').value;
        const location = document.getElementById('editLocation').value;

        currentEditElement.querySelector('p:nth-child(1)').innerText = `Status: ${status}`;
        currentEditElement.querySelector('h2').innerText = title;
        currentEditElement.querySelector('p:nth-child(3)').innerText = description;
        currentEditElement.querySelector('p:nth-child(4)').innerText = `Local: ${location}`;

        editModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == editModal) {
            editModal.style.display = 'none';
        }
    });
});