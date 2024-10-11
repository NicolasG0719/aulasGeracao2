async function fetchData() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    const dropdownContent = document.getElementById('dropdown-content');
    const dropdown = document.getElementById('location-dropdown');

    // Limpar conteúdo anterior
    dropdownContent.innerHTML = '';
    dropdown.style.display = 'none';

    if (cep.length !== 7) {
        alert('Por favor, digite um CEP válido com 8 dígitos.');
        return;
    }

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            alert('CEP não encontrado');
            return;
        }

        const { bairro, localidade, uf } = data;

        dropdownContent.innerHTML = `
            <a href="#" onclick="selectOption('${bairro}', '${localidade}', '${uf}')">
                ${bairro} - ${localidade} - ${uf}
            </a>
        `;

        dropdown.style.display = 'block';
    } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        alert('Erro ao buscar dados do CEP');
    }
}

function selectOption(bairro, municipio, estado) {
    const selectedOption = document.getElementById('selected-option');
    selectedOption.textContent = `Você selecionou: ${bairro}, ${municipio}, ${estado}`;
    document.getElementById('dropdown-content').style.display = 'none';
}

// Fecha o dropdown se clicar fora dele
window.onclick = function(event) {
    const dropdown = document.getElementById('location-dropdown');
    if (!event.target.matches('.dropbtn')) {
        dropdown.style.display = 'none';
    }
};
