function rand(min,max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperar(msg, tempo){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof msg !== 'string') {
                reject('ERRO');
                return;
            }
            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}


function baixarPagina(){
    const emCache = true;
   
    if(emCache){
        return Promise.reject("Página em cache")
    } else {
        return esperar("Baixando a página", 3000)
    }
}
baixarPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));


// Promise.all, Pormise.race, Promise.resolve, Promise.reject
// const promises = [
//     esperar(1000, rand(1,5)),
//     esperar('Promise 1', rand(1,5)),
//     esperar('Promise 2', rand(1,5)),
//     esperar('Promise 3', rand(1,5)),
// ];

// Promise.resolve(promises)
//     .then((valor)=>{
//         console.log(valor);
//     }).catch((e)=>{
//         console.log(e);
//     });

























// Exemplo

// esperar('Conexão com o BD', rand(1, 3))
//     .then(resposta =>{
//         console.log(resposta);
//         return esperar('Buscando dados da BASE', rand(1, 3));
//     })
//     .then(resposta=>{
//         console.log(resposta);
//         return esperar(222222, rand(1,3));
//     }).then(resposta=>{
//         console.log(resposta);
//     }).then(() => {
//         console.log("Exibir dados na tela");
//     })
//     .catch(e => {
//         console.log('ERRO: ', e);
//     });

//     console.log('Iniciando Sistema');