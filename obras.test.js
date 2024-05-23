/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './teladeedição.html'), 'utf8');

let addButton, obrasContainer, editModal, closeModal, saveButton;

beforeEach(() => {
    
    document.documentElement.innerHTML = html.toString();
    require('./script.js');

    addButton = document.getElementById('addButton');
    obrasContainer = document.querySelector('.obras');
    editModal = document.getElementById('editModal');
    closeModal = document.querySelector('.close');
    saveButton = document.getElementById('saveButton');
});

test('cadastro de obra', () => {
    document.getElementById('addStatus').value = 'Em andamento';
    document.getElementById('addTitle').value = 'Nova Obra';
    document.getElementById('addDescription').value = 'Descrição da nova obra';
    document.getElementById('addLocation').value = 'Local da nova obra';

    addButton.click();

    const obras = document.querySelectorAll('.obra');
    expect(obras.length).toBe(1);
    expect(obras[0].querySelector('p:nth-child(1)').textContent).toBe('Status: Em andamento');
    expect(obras[0].querySelector('h2').textContent).toBe('Nome da Obra 1');
    expect(obras[0].querySelector('p:nth-child(3)').textContent).toBe('Descrição da Obra 1.');
    expect(obras[0].querySelector('p:nth-child(4)').textContent).toBe('Local: Cidade, Estado');
});

test('funcionalidade da edição', () => {
    document.getElementById('addStatus').value = 'Em andamento';
    document.getElementById('addTitle').value = 'Nova Obra';
    document.getElementById('addDescription').value = 'Descrição da nova obra';
    document.getElementById('addLocation').value = 'Local da nova obra';

    addButton.click();

    const editButton = document.querySelector('.obra .edit');
    editButton.click();

    expect(editModal.style.display).toBe("");

    closeModal.click();
    expect(editModal.style.display).toBe("");
});

test('edita uma obra existente', () => {
    document.getElementById('addStatus').value = 'Em andamento';
    document.getElementById('addTitle').value = 'Nova Obra';
    document.getElementById('addDescription').value = 'Descrição da nova obra';
    document.getElementById('addLocation').value = 'Local da nova obra';

    addButton.click();

    const editButton = document.querySelector('.obra .edit');
    editButton.click();

    document.getElementById('editStatus').value = 'Concluída';
    document.getElementById('editTitle').value = 'Obra Editada';
    document.getElementById('editDescription').value = 'Descrição editada';
    document.getElementById('editLocation').value = 'Local editado';

    saveButton.click();

    const obra = document.querySelector('.obra');
    expect(obra.querySelector('p:nth-child(1)').textContent).toBe('Status: Em andamento');
    expect(obra.querySelector('h2').textContent).toBe
 
});

test('visualizar detalhes de uma obra ao editar', () => {
    
    const app = {};
    app.cadastrarObra = () => {
        const obrasContainer = document.createElement('div');
        obrasContainer.classList.add('obras');
        document.body.appendChild(obrasContainer);
        
        const obraDiv = document.createElement('div');
        obraDiv.classList.add('obra');
        obraDiv.innerHTML = `
            <p>Status: Em andamento</p>
            <h2>Nome da Obra</h2>
            <p>Descrição da Obra.</p>
            <p>Local: Cidade, Estado</p>
            <button class="edit">Editar</button>
        `;
        obrasContainer.appendChild(obraDiv);

        const editModal = document.createElement('div');
        editModal.id = 'editModal';
        editModal.style.display = 'none';
        editModal.innerHTML = `
            <input type="text" id="editStatus">
            <input type="text" id="editTitle">
            <input type="text" id="editDescription">
            <input type="text" id="editLocation">
            <button id="saveButton">Salvar</button>
        `;
        document.body.appendChild(editModal);

       
        const editButton = obraDiv.querySelector('.edit');
        editButton.addEventListener('click', () => {
            exibirModalEditar(obraDiv);
        });
    };

    
    const exibirModalEditar = (obraDiv) => {
        const status = obraDiv.querySelector('p:nth-child(1)').innerText.split(': ')[1];
        const title = obraDiv.querySelector('h2').innerText;
        const description = obraDiv.querySelector('p:nth-child(3)').innerText;
        const location = obraDiv.querySelector('p:nth-child(4)').innerText.split(': ')[1];

        document.getElementById('editStatus').value = status;
        document.getElementById('editTitle').value = title;
        document.getElementById('editDescription').value = description;
        document.getElementById('editLocation').value = location;

        const editModal = document.getElementById('editModal');
        editModal.style.display = 'block';
    };

    
    app.cadastrarObra();

   
    const editButton = document.querySelector('.obra .edit');
    editButton.click();

    const editModal = document.getElementById('editModal');
    expect(editModal.style.display).toBe("");
    expect(document.getElementById('editStatus').value).toBe("");
    expect(document.getElementById('editTitle').value).toBe("");
    expect(document.getElementById('editDescription').value).toBe("");
    expect(document.getElementById('editLocation').value).toBe("");
});

const app = {};


test('Verifica se as obras são adicionadas corretamente', () => {
    
    const obra = {
        status: 'Em andamento',
        title: 'Nova Obra',
        description: 'Descrição da Nova Obra',
        location: 'Local da Nova Obra'
    };

    
    app.cadastrarObra = (obra) => {
        const obrasContainer = document.querySelector('.obras');
    
        const obraDiv = document.createElement('div');
        obraDiv.classList.add('obra');
    
        obraDiv.innerHTML = `
            <p>Status: ${obra.status}</p>
            <h2>${obra.title}</h2>
            <p>${obra.description}</p>
            <p>Local: ${obra.location}</p>
            <button class="edit">Editar</button>
        `;
    
        obrasContainer.appendChild(obraDiv);
    };
    
    app.cadastrarObra(obra);

    const obrasContainer = document.querySelector('.obras');
    const obraDiv = obrasContainer.querySelector('.obra');

    expect(obraDiv).not.toBeNull();
    expect(obraDiv.querySelector('p:nth-child(1)').textContent).toBe('Status: Em andamento');
    expect(obraDiv.querySelector('h2').textContent).toBe('Nome da Obra 1');
    expect(obraDiv.querySelector('p:nth-child(3)').textContent).toBe('Descrição da Obra 1.');
    expect(obraDiv.querySelector('p:nth-child(4)').textContent).toBe('Local: Cidade, Estado');
});

test ('Teste de Consulta de Obras', () => {
    
    const obrasMockup = [
        {
            status: 'Concluída',
            title: 'Obra 1',
            description: 'Descrição da obra 1',
            location: 'Local 1'
        },
        {
            status: 'Em andamento',
            title: 'Obra 2',
            description: 'Descrição da obra 2',
            location: 'Local 2'
        },
        {
            status: 'Atrasada',
            title: 'Obra 3',
            description: 'Descrição da obra 3',
            location: 'Local 3'
        }
    ];

})
 
