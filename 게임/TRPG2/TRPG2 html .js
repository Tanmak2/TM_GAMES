
var home = document.getElementById('home');
var spec = document.getElementById('spec');
var dungeon = document.getElementById('dungeon');
var quest = document.getElementById('quest');
var store = document.getElementById('store');


// var stinking_cave = document.getElementById('stinking_cave');

var play_home = document.getElementById('play_home');
var play_spec = document.getElementById('play_spec');
var play_dungeon = document.getElementById('play_dungeon');
var play_quest = document.getElementById('play_quest');
var play_store = document.getElementById('play_store');

// var play_cave = document.getElementById('play_cave');

document.getElementById('home').addEventListener('click', showhome);
document.getElementById('spec').addEventListener('click', showspec);
document.getElementById('dungeon').addEventListener('click', showdungeon);
document.getElementById('quest').addEventListener('click', showquest);
document.getElementById('store').addEventListener('click', showstore);

// document.getElementById('stinking_cave').addEventListener('click', showcave);
// ---------------------
function showhome() {
  home.style.backgroundColor = '#CEF279';
  spec.style.backgroundColor = 'white';
  dungeon.style.backgroundColor = 'white';
  quest.style.backgroundColor = 'white';
  store.style.backgroundColor = 'white';
  play_home.style.display = 'block';
  play_spec.style.display = 'none';
  play_dungeon.style.display = 'none';
  play_quest.style.display = 'none';
  play_store.style.display = 'none';

}

function showspec() {
  home.style.backgroundColor = 'white';
  spec.style.backgroundColor = '#CEF279';
  dungeon.style.backgroundColor = 'white';
  quest.style.backgroundColor = 'white';
  store.style.backgroundColor = 'white';
  play_home.style.display = 'none';
  play_spec.style.display = 'block';
  play_dungeon.style.display = 'none';
  play_quest.style.display = 'none';
  play_store.style.display = 'none';

}
function showdungeon() {
  home.style.backgroundColor = 'white';
  spec.style.backgroundColor = 'white';
  dungeon.style.backgroundColor = '#CEF279';
  quest.style.backgroundColor = 'white';
  store.style.backgroundColor = 'white';
  play_home.style.display = 'none';
  play_spec.style.display = 'none';
  play_dungeon.style.display = 'block';
  play_quest.style.display = 'none';
  play_store.style.display = 'none';

}
function showquest() {
  home.style.backgroundColor = 'white';
  spec.style.backgroundColor = 'white';
  dungeon.style.backgroundColor = 'white';
  quest.style.backgroundColor = '#CEF279';
  store.style.backgroundColor = 'white';
  play_home.style.display = 'none';
  play_spec.style.display = 'none';
  play_dungeon.style.display = 'none';
  play_quest.style.display = 'block';
  play_store.style.display = 'none';

}
function showstore() {
  home.style.backgroundColor = 'white';
  spec.style.backgroundColor = 'white';
  dungeon.style.backgroundColor = 'white';
  quest.style.backgroundColor = 'white';
  store.style.backgroundColor = '#CEF279';
  play_home.style.display = 'none';
  play_spec.style.display = 'none';
  play_dungeon.style.display = 'none';
  play_quest.style.display = 'none';
  play_store.style.display = 'block';

}



// ---------------------

// function showcave() {
//   home.style.backgroundColor = 'red';
//   spec.style.backgroundColor = 'white';
//   dungeon.style.backgroundColor = 'yellow';
//   quest.style.backgroundColor = 'red';

//   play_home.style.display = 'none';
//   play_spec.style.display = 'none';
//   play_dungeon.style.display = 'none';
//   play_quest.style.display = 'none';
//   play_cave.style.display = 'none';
// }

