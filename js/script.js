fetch('../data/eventos.json')
            .then(response => response.json())
            .then(eventos => {
                const eventosContainer = document.getElementById('eventos');
                eventos.forEach(evento => {
                    const card = document.createElement('div');
                    card.className = 'col-md-4 d-flex align-items-stretch';
                    card.innerHTML = `
                        <div class="card p-3 w-100 shadow-lg rounded">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title text-dark">${evento.descricao}</h5>
                                <p class="card-text">📅 Data: ${new Date(evento.data).toLocaleDateString('pt-BR')}</p>
                                <button class="btn btn-outline-primary mt-auto" onclick="abrirDetalhes(${evento.id})">🔗 Mais Informações</button>
                            </div>
                        </div>
                    `;
                    eventosContainer.appendChild(card);
                });
            })
            .catch(error => console.error('Erro ao carregar eventos:', error));

        function abrirDetalhes(id) {
            window.open(`detalhes.html?id=${id}`, '_blank', 'width=800,height=600');
        }