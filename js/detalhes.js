const params = new URLSearchParams(window.location.search);
const eventId = params.get('id');

fetch('data/eventos.json')
    .then(response => response.json())
    .then(eventos => {
        const evento = eventos.find(e => e.id == eventId);
        if (evento) {
            document.getElementById('titulo').textContent = evento.descricao;
            document.getElementById('data').textContent = `📅 Data: ${new Date(evento.data).toLocaleDateString('pt-BR')}`;
            document.getElementById('extra').textContent = evento.extra || 'Nenhuma informação extra disponível.';
            document.getElementById('link').href = evento.link;
        } else {
            document.body.innerHTML = "<h3 class='text-center text-danger'>Evento não encontrado!</h3>";
        }
    })
    .catch(error => console.error('Erro ao carregar detalhes:', error));
