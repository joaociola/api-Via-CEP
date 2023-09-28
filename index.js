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
    document.getElementById('rua').value = data.logradouro;
    document.getElementById('bairro').value = data.bairro;
    document.getElementById('cidade').value = data.localidade;
    document.getElementById('uf').value = data.uf;
    document.getElementById('ibge').value = data.ibge;
}

async function pesquisarCep() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');

    if (!cep.match(/^\d{8}$/)) {
        alert("CEP inválido. Digite apenas os 8 dígitos.");
        return;
    }

    const url = 'https://viacep.com.br/ws/' + cep + '/json/';

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            if (!data.erro) {
                preencherCampos(data);
            } else {
                limparFormulario();
                alert("CEP não encontrado.");
            }
        } else {
            limparFormulario();
            alert("Erro ao buscar CEP.");
        }
    } catch (error) {
        limparFormulario();
        console.error('Erro ao buscar CEP:', error);
    }
}
