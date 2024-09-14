let eventos = [];

function cadastrarEvento(nome, data) {
    let evento = {
        nome: nome,
        data: data
    };

    eventos.push(evento); 
    console.log("Evento cadastrado com sucesso: " + nome);
}

function listarEventos() {
    console.log("Lista de eventos cadastrados:");
    for (let i = 0; i < eventos.length; i++) {
        console.log((i + 1) + ". " + eventos[i].nome + " - " + eventos[i].data);
    }
}

function inscreverParticipante(nomeEvento, nomeParticipante) {
    let eventoEncontrado = false;
    for (let i = 0; i < eventos.length; i++) {
        if (eventos[i].nome === nomeEvento) {
            console.log(nomeParticipante + " foi inscrito no evento: " + nomeEvento);
            eventoEncontrado = true;
            break;
        }
    }

    if (!eventoEncontrado) {
        console.log("Evento não encontrado.");
    }
}

cadastrarEvento("Evento 1", "14/09/2024");
cadastrarEvento("Evento 2", "13/09/2024");

listarEventos(); 

inscreverParticipante("Evento 1", "Julia 1");
inscreverParticipante("Evento 2", "Julia 2");
