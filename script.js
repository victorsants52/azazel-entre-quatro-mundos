const gameState = {
    hadesLove: 0,
    matthewLove: 0,
    axelLove: 0,
    axelObsession: 0,
    kaeltharLove: 0,
    kaeltharBond: 0
};

const story = {
    prologue: {
        title: "O Jardim da Aurora",
        text: `Azazel estava sozinho no Jardim da Aurora.

Uma página permanecia em branco diante dele.

Por algum motivo, nenhuma palavra parecia capaz de preenchê-la.

Então uma estrela desapareceu no céu.

Azazel levantou os olhos.

Alguma coisa estava errada.

Antes que pudesse descobrir o quê, seu celular vibrou.

Quatro mensagens haviam chegado.`,
        choices: [
            {
                text: "Responder Hades",
                action: () => {
                    gameState.hadesLove += 5;
                    showScene("Hades");
                }
            },
            {
                text: "Ir encontrar Matthew",
                action: () => {
                    gameState.matthewLove += 5;
                    showScene("Matthew");
                }
            },
            {
                text: "Responder Axel",
                action: () => {
                    gameState.axelLove += 5;
                    gameState.axelObsession += 5;
                    showScene("Axel");
                }
            },
            {
                text: "Encontrar Kaelthar",
                action: () => {
                    gameState.kaeltharLove += 5;
                    gameState.kaeltharBond += 8;
                    showScene("Kaelthar");
                }
            }
        ]
    }
};

function startGame() {
    document.querySelector("main").innerHTML = `
        <section id="game">
            <h2>${story.prologue.title}</h2>
            <p id="story-text">${story.prologue.text}</p>

            <div id="choices"></div>
        </section>
    `;

    showChoices();
}

function showChoices() {
    const choicesContainer = document.getElementById("choices");

    story.prologue.choices.forEach(choice => {
        const button = document.createElement("button");

        button.textContent = choice.text;

        button.addEventListener("click", choice.action);

        choicesContainer.appendChild(button);
    });
}

function showScene(character) {
    const text = document.getElementById("story-text");
    const choices = document.getElementById("choices");

    const scenes = {
        Hades: {
            text: `Hades estava esperando por Azazel em um restaurante sofisticado.

Ele ergueu os olhos assim que Azazel entrou.

"Você sempre aparece quando alguém precisa de você."

Hades fez uma pequena pausa.

"Mas quem aparece quando você precisa de alguém?"`
        },

        Matthew: {
            text: `Matthew estava terminando uma apresentação quando percebeu Azazel na plateia.

Assim que terminou, ele foi até ele.

"Eu sabia que você viria."

Matthew sorriu.

"Porque eu queria que você viesse."`
        },

        Axel: {
            text: `Axel estava esperando por Azazel.

Ele permaneceu em silêncio por alguns segundos.

Então perguntou:

"Onde você estava?"`
        },

        Kaelthar: {
            text: `Kaelthar estava parado sob o céu estrelado.

Quando Azazel se aproximou, ele não disse nada durante alguns segundos.

Então finalmente falou:

"Alguma coisa mudou."

Azazel perguntou:

"O quê?"

Kaelthar olhou diretamente para ele.

"Nós."`
        }
    };

    text.textContent = scenes[character].text;

    choices.innerHTML = `
        <button onclick="continueStory()">
            Continuar
        </button>
    `;
}

function continueStory() {
    const text = document.getElementById("story-text");
    const choices = document.getElementById("choices");

    text.textContent =
        "Aquela noite seria apenas o começo. Azazel ainda não sabia, mas suas escolhas estavam prestes a mudar quatro destinos.";

    choices.innerHTML = `
        <button onclick="showRelationshipStatus()">
            Continuar
        </button>
    `;
}

function showRelationshipStatus() {
    const main = document.querySelector("main");

    main.innerHTML = `
        <section>
            <h2>Primeira escolha concluída</h2>

            <p>
                O sistema de relacionamento já registrou sua decisão.
            </p>

            <p>
                Agora podemos começar a construir a história ramificada.
            </p>

            <button onclick="location.reload()">
                Voltar
            </button>
        </section>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const newGameButton = document.querySelector("button");

    newGameButton.addEventListener("click", startGame);
});
