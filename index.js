function limparFormulario() {
    const cepInput = document.getElementById('cep');
    const ruaInput = document.getElementById('rua');
    const bairroInput = document.getElementById('bairro');
    const cidadeInput = document.getElementById('cidade');
    const estadoInput = document.getElementById('uf');
    const ibgeInput = document.getElementById('ibge');

    if (cepInput && ruaInput && bairroInput && cidadeInput && estadoInput && ibgeInput) {
        cepInput.value = "";
        ruaInput.value = "";
        bairroInput.value = "";
        cidadeInput.value = "";
        estadoInput.value = "";
        ibgeInput.value = "";
    } else {
        console.error("Elementos do formulário não encontrados.");
    }
}

function preencherCampos(data) {
    document.getElementById('cep').value = data.cep;
    document.getElementById('rua').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('cidade').value = data.localidade;
    document.getElementById('uf').value = data.uf;
    document.getElementById('ibge').value = data.ibge;
}

async function pesquisarCep() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    const popupMessage = document.getElementById('popup-message');

    if (!cep.match(/^\d{8}$/)) {
        popupMessage.textContent = "CEP inválido. Digite apenas os 8 dígitos.";
        mostrarPopup();
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json`;

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            if (!data.erro) {
                preencherCampos(data);
            } else {
                limparFormulario();
                popupMessage.textContent = "CEP não encontrado.";
                mostrarPopup();
            }
        } else {
            limparFormulario();
            popupMessage.textContent = "Erro ao buscar CEP.";
            mostrarPopup();
        }
    } catch (error) {
        limparFormulario();
        console.error('Erro ao buscar CEP:', error);
        popupMessage.textContent = "Erro ao buscar CEP.";
        mostrarPopup();
    }
}

function mostrarPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function fecharPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

