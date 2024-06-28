document.getElementById('service-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obter valores do formulário
    const item = document.getElementById('service-item').value;
    const value = document.getElementById('service-value').value;

    // Criar novo elemento de lista
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
        <span>${item}</span>
        <span>${value}</span>
        <button class="btn btn-info btn-sm">i</button>
    `;

    // Adicionar novo elemento à lista
    document.getElementById('service-list').appendChild(li);

    // Limpar formulário
    document.getElementById('service-form').reset();
});
