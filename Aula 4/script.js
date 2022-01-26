function entrar(){
    var area = document.getElementById('area');
    var nome = prompt('Digite seu nome');
    area.innerHTML = 'Bem vindo ' + nome; 

    if (nome == '' || nome == null){
        alert('Acho que esqueceu de responder, digite seu nome, por favor');
        area.innerHTML = 'Bem vindo...';
    }else{
        area.innerHTML = 'Bem vindo ' + nome ;
    }
}

function entrar2(nome){
    var area2 = document.getElementById('area');
    var sobrenome = prompt('Digite seu sobrenome');
    area2.innerHTML = 'Bem vindo ' +  nome + ' ' + sobrenome

}

function entrar3(texto){

    var area3 = document.getElementById('area');
    var idade = prompt('Digite sua idade');
    area3.innerHTML = 'Bem vindo ' + texto + ' ' + idade + ' anos'
}
