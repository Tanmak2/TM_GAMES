// import { Merchant_it_sponsor } from './Second_battle.js';

var menu = document.getElementById('menu');
var state = document.getElementById('state');
var dungeon = document.getElementById('dungeon');
var missions = document.getElementById('missions');
var store = document.getElementById('store');


var play_menu = document.getElementById('play_menu');
var play_state = document.getElementById('play_state');
var play_dungeon = document.getElementById('play_dungeon');
var play_missions = document.getElementById('play_missions');
var play_store = document.getElementById('play_store');

document.getElementById('menu').addEventListener('click', showmenu);
document.getElementById('state').addEventListener('click', showstate);
document.getElementById('dungeon').addEventListener('click', showdungeon);
document.getElementById('missions').addEventListener('click', showmissions);
document.getElementById('store').addEventListener('click', showstore);

// 게임 log




// --------------
document.getElementById('laboratory').addEventListener('click', laboratory);
document.getElementById('go_backwards').addEventListener('click', go_backwards);

function laboratory(){
    document.getElementById('tot_log').style.display = 'block';
}

function go_backwards(){
    document.getElementById('tot_loglaboratory').style.display = 'none';
}

// -------------

function showmenu(){
    menu.style.backgroundColor = '#F1ECE1';
    state.style.backgroundColor = '#D3C9B5';
    dungeon.style.backgroundColor = '#D3C9B5';
    missions.style.backgroundColor = '#D3C9B5';
    store.style.backgroundColor = '#D3C9B5';

    play_menu.style.display = 'block';
    play_state.style.display = 'none';
    play_dungeon.style.display = 'none';
    play_missions.style.display = 'none';
    play_store.style.display = 'none';
}

function showstate(){
    menu.style.backgroundColor = '#D3C9B5';
    state.style.backgroundColor = '#F1ECE1';
    dungeon.style.backgroundColor = '#D3C9B5';
    missions.style.backgroundColor = '#D3C9B5';
    store.style.backgroundColor = '#D3C9B5';

    play_menu.style.display = 'none';
    play_state.style.display = 'block';
    play_dungeon.style.display = 'none';
    play_missions.style.display = 'none';
    play_store.style.display = 'none';
}

function showdungeon(){
    menu.style.backgroundColor = '#D3C9B5l';
    state.style.backgroundColor = '#D3C9B5';
    dungeon.style.backgroundColor = '#F1ECE1';
    missions.style.backgroundColor = '#D3C9B5';
    store.style.backgroundColor = '#D3C9B5';

    play_menu.style.display = 'none';
    play_state.style.display = 'none';
    play_dungeon.style.display = 'block';
    play_missions.style.display = 'none';
    play_store.style.display = 'none';
}

function showmissions(){
    menu.style.backgroundColor = '#D3C9B5';
    state.style.backgroundColor = '#D3C9B5';
    dungeon.style.backgroundColor = '#D3C9B5';
    missions.style.backgroundColor = '#F1ECE1';
    store.style.backgroundColor = '#D3C9B5';

    play_menu.style.display = 'none';
    play_state.style.display = 'none';
    play_dungeon.style.display = 'none';
    play_missions.style.display = 'block';
    play_store.style.display = 'none';
}

function showstore(){
    menu.style.backgroundColor = '#D3C9B5';
    state.style.backgroundColor = '#D3C9B5';
    dungeon.style.backgroundColor = '#D3C9B5';
    missions.style.backgroundColor = '#D3C9B5';
    store.style.backgroundColor = '#F1ECE1';

    play_menu.style.display = 'none';
    play_state.style.display = 'none';
    play_dungeon.style.display = 'none';
    play_missions.style.display = 'none';
    play_store.style.display = 'block';
    Merchant_it_sponsor()
}



