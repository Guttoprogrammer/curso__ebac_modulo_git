const form = document.getElementById('form');
let campoA = document.getElementById('campoA');
let campoB = document.getElementById('campoB');
let mensagem = document.getElementById('mensagem')


form.addEventListener('submit', function (e){
    e.preventDefault();

        mensagem.style.display = 'none';

        if((campoA.value) == '' || (campoB.value) == ''){
            mensagem.textContent = 'Nenhum dos valores pode ser vazio.';
            mensagem.className = 'alerta';
            mensagem.style.display = 'grid';
        }
        else if(Number(campoA.value) < Number(campoB.value)){
            mensagem.textContent = 'Operação realizada com sucesso!';
            mensagem.className = 'sucesso';
            mensagem.style.display ='grid';
        }else if(Number(campoA.value) > Number(campoB.value)){
            mensagem.textContent = 'O valor do campo A deve ser menor que o valor do campo B.';
            mensagem.className = 'erro';
            mensagem.style.display = 'grid';
        }else if(Number(campoA.value) === Number (campoB.value)){
            mensagem.textContent = 'Os valores não podem ser iguais.';
            mensagem.className = 'alerta';
            mensagem.style.display = 'grid';
        }});
