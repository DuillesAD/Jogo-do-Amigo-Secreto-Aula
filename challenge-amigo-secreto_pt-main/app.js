let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();
    
    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.onclick = () => removerAmigo(index);
        
        li.appendChild(btnRemover);
        lista.appendChild(li);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearNome() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome para sortear.");
        return;
    }
    
    const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    alert(`O nome sorteado foi: ${sorteado}`);
}
document.querySelector(".button-draw").addEventListener("click", sortearNome);
