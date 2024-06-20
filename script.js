var baralho = [
    { valor: "2", naipe: "♦" },
    { valor: "2", naipe: "♠" },
    { valor: "2", naipe: "♥" },
    { valor: "2", naipe: "♣" },
    { valor: "3", naipe: "♦" },
    { valor: "3", naipe: "♠" },
    { valor: "3", naipe: "♥" },
    { valor: "3", naipe: "♣" },
    { valor: "4", naipe: "♦" },
    { valor: "4", naipe: "♠" },
    { valor: "4", naipe: "♥" },
    { valor: "4", naipe: "♣" },
    { valor: "5", naipe: "♦" },
    { valor: "5", naipe: "♠" },
    { valor: "5", naipe: "♥" },
    { valor: "5", naipe: "♣" },
    { valor: "6", naipe: "♦" },
    { valor: "6", naipe: "♠" },
    { valor: "6", naipe: "♥" },
    { valor: "6", naipe: "♣" },
    { valor: "7", naipe: "♦" },
    { valor: "7", naipe: "♠" },
    { valor: "7", naipe: "♥" },
    { valor: "7", naipe: "♣" },
    { valor: "J", naipe: "♦" },
    { valor: "J", naipe: "♠" },
    { valor: "J", naipe: "♥" },
    { valor: "J", naipe: "♣" },
    { valor: "Q", naipe: "♦" },
    { valor: "Q", naipe: "♠" },
    { valor: "Q", naipe: "♥" },
    { valor: "Q", naipe: "♣" },
    { valor: "K", naipe: "♦" },
    { valor: "K", naipe: "♠" },
    { valor: "K", naipe: "♥" },
    { valor: "K", naipe: "♣" },
    { valor: "A", naipe: "♦" },
    { valor: "A", naipe: "♠" },
    { valor: "A", naipe: "♥" },
    { valor: "A", naipe: "♣" }
]



const player_pts = document.getElementById('player_points');
const cpu_pts = document.getElementById('cpu_points');

const player_pts2 = document.getElementById('player_points2');
const cpu_pts2 = document.getElementById('cpu_points2');

const player_pts3 = document.getElementById('player_points3');
const cpu_pts3 = document.getElementById('cpu_points3');

const btn_play = document.getElementById('btn_play');
const btn_settings = document.getElementById('btn_settings');
const btn_score = document.getElementById('btn_score');
const btn_next = document.getElementById('btn_next');
const btn_restart = document.getElementById('btn_restart');
const btn_buy = document.getElementById('btn_buy');
const btn_stop = document.getElementById('btn_stop');

const green_table = document.getElementById('green_table');
const fixed_score = document.getElementById('fixed_score');
const game_square = document.getElementById('game_square');

const you_round = document.getElementById('you_round');
const cpu_round = document.getElementById('cpu_round');

// const card_player = document.getElementById('card_player');
// const number = document.getElementById('number');
// const suit = document.getElementById('suit');


const valor_card_player = document.getElementById('valor_card_player');
const valor_card_cpu = document.getElementById('valor_card_cpu');

const baralho_mesa = document.getElementById('baralho_mesa');

const player_perdeu = document.getElementById('player_perdeu');
const player_sete_meio = document.getElementById('player_sete_meio');
const player_ganhou = document.getElementById('player_ganhou');
const banca_ganhou = document.getElementById('banca_ganhou');
const banca_sete_meio = document.getElementById('banca_sete_meio');
const empate = document.getElementById('empate');

const mensagem = document.getElementById('mensagem');
const texto_mensagem = document.getElementById('texto_mensagem');


var var_player_pts = 0;
var var_cpu_pts = 0;

var var_player_games = 0;
var var_cpu_games = 0;


green_table.style.transform = 'translateY(150px)';

fixed_score.style.display = 'none';
game_square.style.display = 'none';



btn_restart.style.opacity = '0.3';
btn_buy.style.opacity = '0.3';
btn_stop.style.opacity = '0.3';
btn_next.style.opacity = '0.3';


btn_restart.style.pointerEvents = 'none';
btn_buy.style.pointerEvents = 'none';
btn_stop.style.pointerEvents = 'none';
btn_next.style.pointerEvents = 'none';


you_round.style.display = 'none';
cpu_round.style.display = 'none';



baralho_mesa.style.display = 'none';

player_perdeu.style.display = 'none';
player_sete_meio.style.display = 'none';
player_ganhou.style.display = 'none';
banca_ganhou.style.display = 'none';
banca_sete_meio.style.display = 'none';
empate.style.display = 'none';

var simbolo = '';

function play() {
    btn_play.style.pointerEvents = 'none';
    player_pts.innerHTML = var_player_pts;
    cpu_pts.innerHTML = var_cpu_pts;

    player_pts2.innerHTML = var_player_pts;
    cpu_pts2.innerHTML = var_cpu_pts;

    player_pts3.innerHTML = var_player_games;
    cpu_pts3.innerHTML = var_cpu_games;


    btn_restart.style.opacity = '1';
    btn_buy.style.opacity = '1';
    btn_stop.style.opacity = '1';
    

    btn_restart.style.pointerEvents = 'all';
    btn_buy.style.pointerEvents = 'all';
    btn_stop.style.pointerEvents = 'all';

    green_table.style.transform = 'translateY(0px)';
    fixed_score.style.display = 'flex';
    game_square.style.display = 'flex';

    you_round.style.display = 'flex';
    cpu_round.style.display = 'flex';

    baralho_mesa.style.display = 'flex';

    buy();
}


function buy() {
    let cards_player = document.getElementById('cards_player');

    let card_player = document.createElement('div');
    card_player.classList.add('card');

    cards_player.appendChild(card_player);

    const number2 = document.createElement('div');
    number2.classList.add('number');

    const suit2 = document.createElement('div');


    card_player.appendChild(number2);
    card_player.appendChild(suit2);

    var aleatorio = Math.floor(Math.random() * baralho.length);
    var carta = baralho[aleatorio];

    // console.log(baralho.length);

    for (let i = 0; i < baralho.length; i++) {
        if (carta == baralho[i]) {
            number2.innerHTML = carta.valor;
            suit2.innerHTML = carta.naipe;
        }
    }
    baralho.splice(aleatorio, 1);

    // console.log(baralho.length);

    if (carta.naipe === '♦' || carta.naipe === '♥') {
        suit2.classList.add('suit_red');
    } else if (carta.naipe === '♠' || carta.naipe === '♣') {
        suit2.classList.add('suit_black');
    }

    if (carta.valor === 'A') {
        var_player_pts += 1;
    } else if (carta.valor === 'J' || carta.valor === 'K' || carta.valor === 'Q') {
        var_player_pts += 0.5;
    } else {
        var_player_pts += Number(carta.valor);
    }

    if (var_player_pts > 7.5) {
        func_player_perdeu();
    } else if (var_player_pts == 7.5) {
        func_player_sete_meio();
    }

    player_pts.innerHTML = var_player_pts;
    cpu_pts.innerHTML = var_cpu_pts;

    player_pts2.innerHTML = var_player_pts;
    cpu_pts2.innerHTML = var_cpu_pts;

    player_pts3.innerHTML = var_player_games;
    cpu_pts3.innerHTML = var_cpu_games;

}



function stop() {
    let cards_cpu = document.getElementById('cards_cpu');

    for (let i = 0; var_cpu_pts < var_player_pts; i++) {
        let card_cpu = document.createElement('div');
        card_cpu.classList.add('card');

        cards_cpu.appendChild(card_cpu);

        const number2 = document.createElement('div');
        number2.classList.add('number');

        const suit2 = document.createElement('div');

        card_cpu.appendChild(number2);
        card_cpu.appendChild(suit2);

        var aleatorio = Math.floor(Math.random() * baralho.length);
        var carta = baralho[aleatorio];

        // console.log(baralho.length);

        for (let i = 0; i < baralho.length; i++) {
            if (carta == baralho[i]) {
                number2.innerHTML = carta.valor;
                suit2.innerHTML = carta.naipe;
            }
        }
        baralho.splice(aleatorio, 1);

        // console.log(baralho.length);

        if (carta.naipe === '♦' || carta.naipe === '♥') {
            suit2.classList.add('suit_red');
        } else if (carta.naipe === '♠' || carta.naipe === '♣') {
            suit2.classList.add('suit_black');
        }

        if (carta.valor === 'A') {
            var_cpu_pts += 1;
        } else if (carta.valor === 'J' || carta.valor === 'K' || carta.valor === 'Q') {
            var_cpu_pts += 0.5;
        } else {
            var_cpu_pts += Number(carta.valor);
        }

    }


    if (var_cpu_pts > 7.5) {
        func_player_ganhou();
    } else if (var_cpu_pts == var_player_pts) {
        func_empate();
    } else if (var_cpu_pts == 7.5) {
        func_banca_sete_meio();
    } else if (var_cpu_pts > var_player_pts) {
        func_banca_ganhou();
    }

    player_pts.innerHTML = var_player_pts;
    cpu_pts.innerHTML = var_cpu_pts;

    player_pts2.innerHTML = var_player_pts;
    cpu_pts2.innerHTML = var_cpu_pts;

    player_pts3.innerHTML = var_player_games;
    cpu_pts3.innerHTML = var_cpu_games;
}

function restart() {
    location.reload();
}

function next() {
    var_player_pts = 0;
    var_cpu_pts = 0;

    player_pts.innerHTML = var_player_pts;
    cpu_pts.innerHTML = var_cpu_pts;

    player_pts2.innerHTML = var_player_pts;
    cpu_pts2.innerHTML = var_cpu_pts;

    player_pts3.innerHTML = var_player_games;
    cpu_pts3.innerHTML = var_cpu_games;

    baralho = [
        { valor: "2", naipe: "♦" },
        { valor: "2", naipe: "♠" },
        { valor: "2", naipe: "♥" },
        { valor: "2", naipe: "♣" },
        { valor: "3", naipe: "♦" },
        { valor: "3", naipe: "♠" },
        { valor: "3", naipe: "♥" },
        { valor: "3", naipe: "♣" },
        { valor: "4", naipe: "♦" },
        { valor: "4", naipe: "♠" },
        { valor: "4", naipe: "♥" },
        { valor: "4", naipe: "♣" },
        { valor: "5", naipe: "♦" },
        { valor: "5", naipe: "♠" },
        { valor: "5", naipe: "♥" },
        { valor: "5", naipe: "♣" },
        { valor: "6", naipe: "♦" },
        { valor: "6", naipe: "♠" },
        { valor: "6", naipe: "♥" },
        { valor: "6", naipe: "♣" },
        { valor: "7", naipe: "♦" },
        { valor: "7", naipe: "♠" },
        { valor: "7", naipe: "♥" },
        { valor: "7", naipe: "♣" },
        { valor: "J", naipe: "♦" },
        { valor: "J", naipe: "♠" },
        { valor: "J", naipe: "♥" },
        { valor: "J", naipe: "♣" },
        { valor: "Q", naipe: "♦" },
        { valor: "Q", naipe: "♠" },
        { valor: "Q", naipe: "♥" },
        { valor: "Q", naipe: "♣" },
        { valor: "K", naipe: "♦" },
        { valor: "K", naipe: "♠" },
        { valor: "K", naipe: "♥" },
        { valor: "K", naipe: "♣" },
        { valor: "A", naipe: "♦" },
        { valor: "A", naipe: "♠" },
        { valor: "A", naipe: "♥" },
        { valor: "A", naipe: "♣" }
    ]

    while (cards_player.firstChild) {
        cards_player.removeChild(cards_player.firstChild);
    }

    while (cards_cpu.firstChild) {
        cards_cpu.removeChild(cards_cpu.firstChild);
    }

    // if (cards_cpu.firstChild !== null) {
    //     while (cards_cpu.firstChild) {
    //         cards_cpu.removeChild(cards_cpu.firstChild);
    //     }
    // }

    

    visible_buttons()

    mensagem.style.display = 'none';

    play();

}

function func_player_perdeu() {
    // player_perdeu.style.display = 'flex';

    btn_next.style.opacity = '1';
    btn_next.style.pointerEvents = 'all';

    mensagem.style.display = 'flex';
    texto_mensagem.innerHTML = 'Você Perdeu';

    hidden_buttons()

    var_cpu_games++;
}

function func_player_sete_meio() {
    // player_sete_meio.style.display = 'block';

    btn_next.style.opacity = '1';
    btn_next.style.pointerEvents = 'all';

    mensagem.style.display = 'flex';
    texto_mensagem.innerHTML = 'Você Fez Sete e Meio';

    hidden_buttons()

    var_player_games++;
}

function func_player_ganhou() {
    // player_ganhou.style.display = 'block';

    btn_next.style.opacity = '1';
    btn_next.style.pointerEvents = 'all';

    mensagem.style.display = 'flex';
    texto_mensagem.innerHTML = 'Você Ganhou da Banca';

    hidden_buttons()

    var_player_games++;
}

function func_banca_ganhou() {
    // banca_ganhou.style.display = 'block';

    btn_next.style.opacity = '1';
    btn_next.style.pointerEvents = 'all';

    mensagem.style.display = 'flex';
    texto_mensagem.innerHTML = 'Você Perdeu da Banca';

    hidden_buttons()

    var_cpu_games++;
}

function func_banca_sete_meio() {
    // banca_sete_meio.style.display = 'block';

    btn_next.style.opacity = '1';
    btn_next.style.pointerEvents = 'all';

    mensagem.style.display = 'flex';
    texto_mensagem.innerHTML = 'A Banca Fez Sete e Meio';

    hidden_buttons()

    var_cpu_games++;
}

function func_empate() {
    // empate.style.display = 'block';

    btn_next.style.opacity = '1';
    btn_next.style.pointerEvents = 'all';

    mensagem.style.display = 'flex';
    texto_mensagem.innerHTML = 'Deu Empate';

    hidden_buttons()


}

function hidden_buttons() {
    btn_buy.style.pointerEvents = 'none';
    btn_stop.style.pointerEvents = 'none';
    btn_buy.style.opacity = '.3';
    btn_stop.style.opacity = '.3';
}

function visible_buttons() {
    btn_buy.style.pointerEvents = 'all';
    btn_stop.style.pointerEvents = 'all';
    btn_buy.style.opacity = '1';
    btn_stop.style.opacity = '1';
}






// function jogar() {
//     btn_jogar.style.display = 'none';
//     btn_pedir.style.display = 'block';
//     btn_passar.style.display = 'block';
//     btn_reiniciar.style.display = 'block';
//     pedir();
// }

// function pedir() {
//     var aleatorio = Math.floor(Math.random() * baralho.length);
//     var carta = baralho[aleatorio];

//     if (carta.valor == 'A') {
//         pontuacao_jogador += 1;
//     } else if (carta.valor == 'J' || carta.valor == 'K' || carta.valor == 'Q') {
//         pontuacao_jogador += 0.5;
//     } else {
//         pontuacao_jogador += Number(carta.valor);
//     }

//     if (carta.naipe == "♦" || carta.naipe == "♥") {
//         div_jogo.innerHTML += `<br>${carta.valor} <span style="color:red">${carta.naipe}</span> (${pontuacao_jogador})`;
//     } else if (carta.naipe == "♣" || carta.naipe == "♠") {
//         div_jogo.innerHTML += `<br>${carta.valor} <span style="color:#1c0647">${carta.naipe}</span> (${pontuacao_jogador})`;
//     }

//     if (pontuacao_jogador > 7.5) {
//         div_jogo.innerHTML += `<br> Você Perdeu! Passou de 7.5`;
//         btn_pedir.style.display = 'none';
//         btn_passar.style.display = 'none';

//     } else if (pontuacao_jogador == 7.5) {
//         div_jogo.innerHTML += `<br> SETE E MEIO!`;
//         btn_pedir.style.display = 'none';
//         btn_passar.style.display = 'none';

//     }
// }

// function passar() {
//     btn_pedir.style.display = 'none';
//     btn_passar.style.display = 'none';
//     for (var i = 0; pontuacao_cpu <= pontuacao_jogador; i++) {
//         var aleatorio = Math.floor(Math.random() * baralho.length);
//         var carta = baralho[aleatorio];

//         if (carta.valor == 'A') {
//             pontuacao_cpu += 1;
//         } else if (carta.valor == 'J' || carta.valor == 'K' || carta.valor == 'Q') {
//             pontuacao_cpu += 0.5;
//         } else {
//             pontuacao_cpu += Number(carta.valor);
//         }

//     }

//     if (carta.naipe == "♦" || carta.naipe == "♥") {
//         div_jogo.innerHTML += `
//             <br>Banca:
//             <br>${carta.valor} <span style="color:red">${carta.naipe}</span> (${pontuacao_cpu})`
//     } else if (carta.naipe == "♣" || carta.naipe == "♠") {
//         div_jogo.innerHTML += `
//             <br>Banca:
//             <br>${carta.valor} <span style="color:#1c0647">${carta.naipe}</span> (${pontuacao_cpu})`
//     }

//     if (pontuacao_cpu < pontuacao_jogador) {
//         div_jogo.innerHTML += `<br><br> Você Ganhou!`;
//         btn_pedir.style.display = 'none';
//         btn_passar.style.display = 'none';
//     } else if (pontuacao_cpu > 7.5) {
//         div_jogo.innerHTML += `<br><br> Você Ganhou! A Mesa passou de 7.5`;
//         btn_pedir.style.display = 'none';
//         btn_passar.style.display = 'none';
//     } else if (pontuacao_cpu == 7.5) {
//         div_jogo.innerHTML += `<br><br> A Mesa fez SETE E MEIO!`;
//         btn_pedir.style.display = 'none';
//         btn_passar.style.display = 'none';
//     } else if (pontuacao_cpu > pontuacao_jogador) {
//         div_jogo.innerHTML += `<br><br> A Mesa Ganhou!`;
//         btn_pedir.style.display = 'none';
//         btn_passar.style.display = 'none';
//     }

// }


// function reiniciar() {
//     location.reload();
// }

