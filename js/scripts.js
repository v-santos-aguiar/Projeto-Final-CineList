// "Base de Dados" de filmes
const baseDeFilmes = [
    // --- SEÇÃO "EM ALTA" ---
    {
        id: 1,
        titulo: "Quarteto Fantástico: Primeiros Passos",
        data_lancamento: "24 de Julho de 2025",
        genero: "Ação, Aventura, Ficção Científica",
        duracao: "1 h 55m",
        classificacao: "12+",
        poster: "img/poster-quarteto.jpg",
        sinopse: "Ambientado em um mundo retro-futurista dos anos 1960, quatro astronautas embarcam em uma missão espacial. Após serem expostos a raios cósmicos, eles ganham habilidades extraordinárias e devem usá-las para enfrentar um inimigo cósmico, Galactus.",
        trailer_id: "KGa3BUvBnDg"
    },
    {
        id: 2,
        titulo: "Predator: Badlands",
        data_lancamento: "6 de Novembro de 2025",
        genero: "Ação, Terror, Ficção Científica",
        duracao: "1h 47m",
        classificacao: "18+",
        poster: "img/poster-predator.jpg",
        sinopse: "Ambientado no futuro, este filme segue Thia (Elle Fanning), uma androide da Weyland-Yutani, que se vê forçada a aliar-se a um jovem Predador exilado para sobreviver numa caçada perigosa.",
        trailer_id: "43R9l7EkJwE"
    },
    {
        id: 3,
        titulo: "O Telefone Preto 2",
        data_lancamento: "16 de Outubro de 2025",
        genero: "Terror, Thriller",
        duracao: "1h 54m",
        classificacao: "16+",
        poster: "img/poster-telefonepreto2.jpg",
        sinopse: "A continuação do aclamado thriller de terror. Anos após os eventos do primeiro filme, Finney e Gwen são assombrados novamente pela sinistra entidade conhecida como 'O Sequestrador' (The Grabber).",
        trailer_id: "YLIxDkY4epQ"
    },
    {
        id: 4,
        titulo: "Frankenstein (de Guillermo del Toro)",
        data_lancamento: "23 de Outubro de 2025", //
        genero: "Drama, Horror, Gótico",
        duracao: "2h 29m",
        classificacao: "18+",
        poster: "img/poster-frankenstein.jpg",
        sinopse: "A ressurreição do cinema gótico. Dr. Victor Frankenstein (Oscar Isaac), obcecado em desafiar a mortalidade, dá vida à extraordinária Criatura (Jacob Elordi).",
        trailer_id: "IZ4qobQAto8"
    },
    // --- SEÇÃO "RECOMENDAÇÕES" ---
    {
        id: 5,
        titulo: "Superman",
        data_lancamento: "10 de Julho de 2025",
        genero: "Ação, Aventura, Super-herói",
        duracao: "2h 8m",
        classificacao: "12+",
        poster: "img/poster-superman.jpg",  
        sinopse: "Clark Kent, um jovem repórter de Krypton, tenta equilibrar sua herança alienígena com sua criação humana em Smallville, assumindo o manto de Superman para proteger um mundo que o vê com admiração e medo.",
        trailer_id: "14qzQDMcTqM"
    },
    {
        id: 6,
        titulo: "Invocação do Mal 4: Os Últimos Ritos",
        data_lancamento: "4 de Setembro de 2025",
        genero: "Terror, Mistério",
        duracao: "2h 16m",
        classificacao: "16+",
        poster: "img/poster-invocacao4.jpg",
        sinopse: "O caso final e mais pessoal de Ed e Lorraine Warren. Os demonologistas investigam uma possessão que os leva a um julgamento e testa sua fé de uma forma que nunca imaginaram.",
        trailer_id: "n0sq-r0mBXQ"
    },
    {
        id: 7,
        titulo: "Tubarão",
        data_lancamento: "7 de Julho de 1975",
        genero: "Thriller, Aventura",
        duracao: "2h 4m",
        classificacao: "12+",
        poster: "img/poster-tubarao.jpg",
        sinopse: "Um tubarão-branco gigante começa a atacar banhistas na ilha de Amity. O chefe de polícia local, um biólogo marinho e um caçador de tubarões embarcam numa missão desesperada para deter a criatura.",
        trailer_id: "N9hzLQUGr34"
    },
    {
        id: 8,
        titulo: "De Volta para o Futuro",
        data_lancamento: "25 de Dezembro de 1985",
        genero: "Aventura, Comédia, Ficção Científica",
        duracao: "1h 55m",
        classificacao: "Livre",
        poster: "img/poster-devoltapro-futuro.jpg",
        sinopse: "O adolescente Marty McFly é acidentalmente enviado trinta anos no passado num DeLorean, um carro modificado em máquina do tempo pelo excêntrico cientista Doc Brown. Ele precisa garantir que seus pais se apaixonem para salvar sua própria existência.",
        trailer_id: "qvsgGtivCgs"
    }
];

document.addEventListener('DOMContentLoaded', () => {

    // --- MODO ESCURO (DARK MODE) ---
    const themeSwitch = document.getElementById('theme-switch');
    const themeIconLabel = document.getElementById('theme-icon-label');
    const htmlElement = document.documentElement;

    const aplicarTema = (tema) => {
        if (tema === 'dark') {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            themeIconLabel.innerHTML = '<i class="bi bi-sun-fill"></i>';
            themeSwitch.checked = true;
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            themeIconLabel.innerHTML = '<i class="bi bi-moon-fill"></i>';
            themeSwitch.checked = false;
        }
    };

    if (themeSwitch && themeIconLabel) {
        themeSwitch.addEventListener('change', () => {
            const novoTema = themeSwitch.checked ? 'dark' : 'light';
            aplicarTema(novoTema);
        });
        
        aplicarTema('light'); // Padrão 'light'
    }

    // --- VALIDAÇÃO DE FORMULÁRIOS ---
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const forgotPasswordForm = document.getElementById('forgot-password-form');
    const profileForm = document.getElementById('profile-form');

    const handleFormValidation = (event, form) => {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
            console.log('Formulário válido! Simular envio...');
            
            if (form.id === 'login-form') {
                alert('Login realizado com sucesso!');
                window.location.href = 'index.html'; 
            }
            if (form.id === 'register-form') {
                 alert('Cadastro com sucesso! Por favor, faça o login.');
                 window.location.reload();
            }
            if (form.id === 'forgot-password-form') {
                alert('Link de redefinição enviado para o seu e-mail!');
                window.location.href = 'conectar.html';
            }
            if (form.id === 'profile-form') {
                alert('Perfil atualizado com sucesso!');
                window.location.reload();
            }
        }
        
        form.classList.add('was-validated');
    };

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => handleFormValidation(event, loginForm));
    }
    if (registerForm) {
        registerForm.addEventListener('submit', (event) => handleFormValidation(event, registerForm));
    }
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', (event) => handleFormValidation(event, forgotPasswordForm));
    }
    if (profileForm) {
        profileForm.addEventListener('submit', (event) => handleFormValidation(event, profileForm));
    }

    // --- FILTRO DAS LISTAS (Minha Lista) ---
    const filtroTodos = document.getElementById('filtro-todos');
    const secaoAssistidos = document.getElementById('secao-assistidos');
    
    if (filtroTodos) { // Verifica se está na página 'minha-lista.html'
        const filtroAssistidosBtn = document.getElementById('filtro-assistidos');
        const filtroInteressesBtn = document.getElementById('filtro-interesses');
        const filtroAvaliadosBtn = document.getElementById('filtro-avaliados');
        const secaoInteresses = document.getElementById('secao-interesses');
        const secaoAvaliados = document.getElementById('secao-avaliados');
        const todosOsBotoesFiltro = [filtroTodos, filtroAssistidosBtn, filtroInteressesBtn, filtroAvaliadosBtn];
        const todasAsSecoes = [secaoAssistidos, secaoInteresses, secaoAvaliados];

        const aplicarFiltro = (filtro) => {
            todasAsSecoes.forEach(secao => {
                if (secao) {
                    secao.classList.toggle('d-none', filtro !== 'todos');
                }
            });

            if (filtro === 'assistidos' && secaoAssistidos) {
                secaoAssistidos.classList.remove('d-none');
            } else if (filtro === 'interesses' && secaoInteresses) {
                secaoInteresses.classList.remove('d-none');
            } else if (filtro === 'avaliados' && secaoAvaliados) {
                secaoAvaliados.classList.remove('d-none');
            }
        };

        const atualizarBotoesAtivos = (botaoClicado) => {
            todosOsBotoesFiltro.forEach(botao => {
                if (botao) {
                    botao.classList.remove('active', 'btn-danger');
                    botao.classList.add('btn-outline-danger');
                }
            });
            if (botaoClicado) {
                botaoClicado.classList.add('active', 'btn-danger');
                botaoClicado.classList.remove('btn-outline-danger');
            }
        };

        filtroTodos.addEventListener('click', () => {
            aplicarFiltro('todos');
            atualizarBotoesAtivos(filtroTodos);
        });
        filtroAssistidosBtn.addEventListener('click', () => {
            aplicarFiltro('assistidos');
            atualizarBotoesAtivos(filtroAssistidosBtn);
        });
        filtroInteressesBtn.addEventListener('click', () => {
            aplicarFiltro('interesses');
            atualizarBotoesAtivos(filtroInteressesBtn);
        });
        filtroAvaliadosBtn.addEventListener('click', () => {
            aplicarFiltro('avaliados');
            atualizarBotoesAtivos(filtroAvaliadosBtn);
        });
    }

    // --- CONTROLE DE FONTE (A+/A-) ---
    const fontIncreaseButton = document.getElementById('font-increase');
    const fontDecreaseButton = document.getElementById('font-decrease');

    let currentFontMultiplier = 1; 
    const MAX_FONT_MULTIPLIER = 1.5;
    const MIN_FONT_MULTIPLIER = 0.8;
    const FONT_STEP = 0.1;

    const applyFontSize = (multiplier) => {
        let safeMultiplier = Math.max(MIN_FONT_MULTIPLIER, Math.min(MAX_FONT_MULTIPLIER, multiplier));
        htmlElement.style.fontSize = (safeMultiplier * 100) + '%';
        currentFontMultiplier = safeMultiplier; 
    };

    if (fontIncreaseButton && fontDecreaseButton) {
        fontIncreaseButton.addEventListener('click', () => {
            applyFontSize(currentFontMultiplier + FONT_STEP);
        });
        fontDecreaseButton.addEventListener('click', () => {
            applyFontSize(currentFontMultiplier - FONT_STEP);
        });
    }

    // --- BARRA DE BUSCA (FILTRO DE CARDS) ---
    const searchForm = document.querySelector('form[role="search"]');
    const searchInput = searchForm ? searchForm.querySelector('input[type="search"]') : null;
    const temSecaoDeCards = document.getElementById('em-alta') || secaoAssistidos;

    if (searchInput && temSecaoDeCards) {
        const filtrarFilmes = (event) => {
            const textoBusca = event.target.value.toLowerCase();
            const todosOsCards = document.querySelectorAll(
                '#em-alta .col-6, #recomendacoes .col-6, #secao-assistidos .col-6, #secao-interesses .col-6, #secao-avaliados .col-6'
            );

            todosOsCards.forEach(card => {
                const tituloElemento = card.querySelector('.card-title');
                if (tituloElemento) {
                    const titulo = tituloElemento.textContent.toLowerCase();
                    card.classList.toggle('d-none', !titulo.includes(textoBusca));
                }
            });
        };

        searchInput.addEventListener('keyup', filtrarFilmes);
        searchForm.addEventListener('submit', (event) => event.preventDefault());
    }

    // --- BOTÕES DE AÇÃO (Assistido / Interesse) ---
    const btnAddAssistido = document.getElementById('btn-add-assistido');
    const btnAddInteresse = document.getElementById('btn-add-interesse');

    if (btnAddAssistido && btnAddInteresse) {
        const activateButton = (button) => {
            button.classList.remove('btn-outline-danger');
            button.classList.add('btn-danger');
        };
        const deactivateButton = (button) => {
            button.classList.remove('btn-danger');
            button.classList.add('btn-outline-danger');
        };
        
        deactivateButton(btnAddAssistido);
        deactivateButton(btnAddInteresse);

        btnAddAssistido.addEventListener('click', () => {
            if (btnAddAssistido.classList.contains('btn-danger')) {
                deactivateButton(btnAddAssistido);
            } else {
                activateButton(btnAddAssistido);
                deactivateButton(btnAddInteresse);
            }
        });

        btnAddInteresse.addEventListener('click', () => {
            if (btnAddInteresse.classList.contains('btn-danger')) {
                deactivateButton(btnAddInteresse);
            } else {
                activateButton(btnAddInteresse);
                deactivateButton(btnAddAssistido);
            }
        });
    }

    // --- BOTÃO DE COMPARTILHAR ---
    const shareButton = document.getElementById('share-button');

    if (shareButton) {
        shareButton.addEventListener('click', () => {
            navigator.clipboard.writeText(window.location.href)
                .then(() => {
                    alert('Link do filme copiado para a área de transferência!');
                })
                .catch(err => {
                    console.error('Erro ao copiar o link: ', err);
                    alert('Não foi possível copiar o link.');
                });
        });
    }

    // --- AVALIAÇÃO COM ESTRELAS (Rating) ---
    const starsContainer = document.getElementById('rating-stars');
    const ratingScoreText = document.getElementById('rating-score');

    if (starsContainer && ratingScoreText) {
        const starsButtons = starsContainer.querySelectorAll('.btn-rating');
        let currentRating = 0; 

        const paintStars = (ratingValue) => {
            starsButtons.forEach(button => {
                const starValue = parseInt(button.dataset.value);
                const icon = button.querySelector('i');
                
                if (starValue <= ratingValue) {
                    icon.classList.remove('bi-star');
                    icon.classList.add('bi-star-fill');
                } else {
                    icon.classList.remove('bi-star-fill');
                    icon.classList.add('bi-star');
                }
            });
            ratingScoreText.textContent = `(${ratingValue} / 5)`;
        };

        starsButtons.forEach(button => {
            button.addEventListener('click', () => {
                const ratingValue = parseInt(button.dataset.value);
                currentRating = (currentRating === ratingValue) ? 0 : ratingValue;
                paintStars(currentRating);
            });
        });

        starsButtons.forEach(button => {
            button.addEventListener('mouseover', () => {
                paintStars(parseInt(button.dataset.value));
            });
        });
        
        starsContainer.addEventListener('mouseleave', () => {
            paintStars(currentRating); 
        });

        starsButtons.forEach(button => {
            button.addEventListener('focus', () => {
                paintStars(parseInt(button.dataset.value));
            });
        });

        starsContainer.addEventListener('focusout', () => {
            setTimeout(() => {
                if (!starsContainer.contains(document.activeElement)) {
                     paintStars(currentRating);
                }
            }, 100);
        });
    }

    // --- CARREGAMENTO DINÂMICO DE FILMES ---
    const detalhePrincipal = document.getElementById('detalhe-principal');

    if (detalhePrincipal) {
        
        const getFilmeIdDaURL = () => {
            const urlParams = new URLSearchParams(window.location.search);
            return parseInt(urlParams.get('id')); 
        };

        const encontrarFilmePorId = (id) => {
            return baseDeFilmes.find(filme => filme.id === id);
        };

        const preencherPaginaDoFilme = (filme) => {
            if (!filme) {
                alert('Filme não encontrado.');
                window.location.href = 'index.html';
                return;
            }
            
            document.title = `CineList - ${filme.titulo}`; 
            document.getElementById('filme-titulo').textContent = filme.titulo;
            document.getElementById('filme-poster').src = filme.poster;
            document.getElementById('filme-sinopse').textContent = filme.sinopse;
            
            document.getElementById('filme-lancamento').textContent = filme.data_lancamento;
            document.getElementById('filme-genero').textContent = filme.genero;
            document.getElementById('filme-duracao').textContent = filme.duracao;
            document.getElementById('filme-classificacao').textContent = filme.classificacao;
            
            document.getElementById('filme-trailer').src = `https://www.youtube.com/embed/${filme.trailer_id}`;
        };

        const filmeId = getFilmeIdDaURL();
        const filmeSelecionado = encontrarFilmePorId(filmeId);
        preencherPaginaDoFilme(filmeSelecionado);
    }

});