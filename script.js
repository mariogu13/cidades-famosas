const botoes = document.querySelectorAll(".filtro");

let estados = {
    "africa": true,
    "america-central": true,
    "america-norte": true,
    "america-sul": true,
    "asia": true,
    "europa": true,
    "oceania": true
}

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const continente = botao.getAttribute("data-continente");

        estados[continente] = !estados[continente];

        atualizarLista();

        botao.classList.toggle("desativado", !estados[continente]);
    });
});

function atualizarLista(){
    const cidades = document.querySelectorAll("li");

    cidades.forEach(cidade => {
        for(let continente in estados){
            if(cidade.classList.contains(continente)){
                cidade.style.display = estados[continente] ? "list-item" : "none";
                break;
            }
        }
    });
}

const body = document.body; 
const darkModeToggle = document.getElementById('dark-mode-toggle');
const icon = darkModeToggle.querySelector("i");
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});
