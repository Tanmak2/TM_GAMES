window.onload = function () {
  var div = document.getElementById('tetris-box');
  for (var i = 0; i < 16; i++) {
    var div_row = document.createElement('div');
    div_row.setAttribute('class', 'line_row');
    div.appendChild(div_row);
    for (var j = 0; j < 10; j++) {
      var div_col = document.createElement('div');
      div_col.setAttribute('class', 'line_box');
      div_row.appendChild(div_col);
    }
  }
  gps();
  block_create();
  //   setInterval(block_move, 1000);
  block_move();
};
var start_gps = [0, 5];
var block_info = {
  nemo: [
    [start_gps[0], start_gps[1] - 1, start_gps[0], start_gps[1]],
    [start_gps[0] + 1, start_gps[1] - 1, start_gps[0] + 1, start_gps[1]],
  ],
};
var block_lines = document.getElementsByClassName('line_row');
var block_start = [[], []];
function block_create() {
  for (var i = 0; i < block_info.nemo.length; i++) {
    for (var j = 0; j < block_info.nemo[i].length / 2; j++) {
      block_start[i][j] = [
        block_info.nemo[i][j * 2],
        block_info.nemo[i][j * 2 + 1],
      ];
      block_lines
        .item(block_info.nemo[i][j * 2])
        .children.item(block_info.nemo[i][j * 2 + 1])
        .setAttribute('style', 'background-color: coral');
    }
  }
}
function block_move() {
  console.log(block_start);
  for (var i = 0; i < block_start.length; i++) {
    for (var j = 0; j < block_start[i].length; j++) {
      block_lines
        .item(block_start[i][j])
        .children.item(block_start[i][j])
        .setAttribute('style', 'background-color: pink');
    }
  }
}
function gps() {
  var block_lines = document.getElementsByClassName('line_row');
  for (var i = 0; i < block_lines.length; i++) {
    var block_line = block_lines.item(i).children;
    for (var j = 0; j < block_line.length; j++) {
      block_line.item(j).innerHTML = i + ',' + j;
    }
  }
}
