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

document.getElementById('dungeon_cave').addEventListener('click', dungeon_cave);

function dungeon_cave(){
    document.getElementById('log_box').style.display = 'block';
}

function showmenu(){
    menu.style.backgroundColor = 'red';
    state.style.backgroundColor = 'teal';
    dungeon.style.backgroundColor = 'teal';
    missions.style.backgroundColor = 'teal';
    store.style.backgroundColor = 'teal';

    play_menu.style.display = 'block';
    play_state.style.display = 'none';
    play_dungeon.style.display = 'none';
    play_missions.style.display = 'none';
    play_store.style.display = 'none';
}

function showstate(){
    menu.style.backgroundColor = 'teal';
    state.style.backgroundColor = 'red';
    dungeon.style.backgroundColor = 'teal';
    missions.style.backgroundColor = 'teal';
    store.style.backgroundColor = 'teal';

    play_menu.style.display = 'none';
    play_state.style.display = 'block';
    play_dungeon.style.display = 'none';
    play_missions.style.display = 'none';
    play_store.style.display = 'none';
}

function showdungeon(){
    menu.style.backgroundColor = 'teal';
    state.style.backgroundColor = 'teal';
    dungeon.style.backgroundColor = 'red';
    missions.style.backgroundColor = 'teal';
    store.style.backgroundColor = 'teal';

    play_menu.style.display = 'none';
    play_state.style.display = 'none';
    play_dungeon.style.display = 'block';
    play_missions.style.display = 'none';
    play_store.style.display = 'none';
}

function showmissions(){
    menu.style.backgroundColor = 'teal';
    state.style.backgroundColor = 'teal';
    dungeon.style.backgroundColor = 'teal';
    missions.style.backgroundColor = 'red';
    store.style.backgroundColor = 'teal';

    play_menu.style.display = 'none';
    play_state.style.display = 'none';
    play_dungeon.style.display = 'none';
    play_missions.style.display = 'block';
    play_store.style.display = 'none';
}

function showstore(){
    menu.style.backgroundColor = 'teal';
    state.style.backgroundColor = 'teal';
    dungeon.style.backgroundColor = 'teal';
    missions.style.backgroundColor = 'teal';
    store.style.backgroundColor = 'red';

    play_menu.style.display = 'none';
    play_state.style.display = 'none';
    play_dungeon.style.display = 'none';
    play_missions.style.display = 'none';
    play_store.style.display = 'block';
}