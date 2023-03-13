// fetch('pessoas.json')
//     .then(response => response.json())
//     .then(json => loadPage(json));

axios('pessoas.json')
    .then(response => loadPage(response.data));

function loadPage(json){
    const table = document.createElement('table')
    for(let pessoa of json){
        const tr = document.createElement('tr')


        let td = document.createElement('td')
        td.innerHTML = pessoa.nome;
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = `${pessoa.idade} anos`;
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = `R$ ${pessoa.salario}`;
        tr.appendChild(td)

        table.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
}
