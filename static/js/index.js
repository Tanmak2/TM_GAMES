import { userSessionCheck, getCookie } from './firebase.js';

var imgsrc = 'static/image/';
var gamesrc = 'static/game/';

if (document.cookie == '') {
  userSessionCheck();
} else {
  my_info();
}

var mouse = document.getElementById('mouse');
var box = document.getElementsByClassName('box');
for (var i = 0; i < box.length; i++) {
  box[i].addEventListener('mouseover', mouseOverHandler);
  box[i].addEventListener('mouseout', mouseOutHandler);
  box[i].addEventListener('click', moveGame);
}
document.addEventListener('mousemove', mouseMoveHandler);
document.getElementById('my_info').addEventListener('click', doMy_info);
document.getElementById('my_post').addEventListener('click', doMy_post);
document.getElementById('my_message').addEventListener('click', doMy_message);

function mouseOverHandler(e) {
  var imgName = this.children[0].src.split('/')[5].split('.')[0];
  this.children[0].src = imgsrc + imgName + '.gif';
}

function mouseOutHandler(e) {
  var imgName = this.children[0].src.split('/')[5].split('.')[0];
  this.children[0].src = imgsrc + imgName + '.png';
}

function mouseMoveHandler(e) {
  if (e.pageX <= e.view.innerWidth - 60 && e.pageY <= e.view.innerHeight - 65) {
    mouse.style.left = e.pageX + 10 + 'px';
    mouse.style.top = e.pageY + 15 + 'px';
  }
}

function moveGame(e) {
  var imgName = this.children[0].src.split('/')[5].split('.')[0];
  window.location.href = gamesrc + imgName + '/' + imgName + '.html';
}

function doMy_info() {
  var url = 'static/info.html';
  var name = '_blank';
  var option = 'width = 500, height = 300, top = 100, left = 200 ';
  window.open(url, name, option);
}
function doMy_post() {
  var url = 'static/info.html';
  var name = '_blank';
  var option =
    'width = 500, height = 500, top = 100, left = 200, location = no, ';
  window.open(url, name, option);
}
function doMy_message() {
  var url = 'static/info.html';
  var name = '_blank';
  var option =
    'width = 500, height = 500, top = 100, left = 200, resizable = no, ';
  window.open(url, name, option);
}
function my_info() {
  document
    .getElementById('login_before')
    .setAttribute('class', 'login-info-off');
  document.getElementById('login_after').setAttribute('class', 'login-info-on');
  document.getElementById('result').innerHTML =
    getCookie('name') + '님! ' + '반가워요!';
  document.getElementById('level').innerHTML = getCookie('level');
  document.getElementById('point').innerHTML = getCookie('point');
}
var istablet = false;
var ismobile = false;
$(window).resize(function () {
  if ($(window).width() > 1300) {
    $('.user-info-wrap').attr('class', 'user-info-wrap');
    istablet = false;
    ismobile = false;
  }
  if ($(window).width() <= 1300 && $(window).width() >= 1200) {
    $('.user-info-wrap').attr('class', 'user-info-wrap slide-div');
    $('.button-div').attr('class', 'button-div div-close');
    $('.button-div').css('left', '0%');
    $('.slide-div').css('left', '-25%');
    istablet = true;
    ismobile = false;
  }
  if ($(window).width() <= 700 && $(window).width() >= 500) {
    $('.user-info-wrap').attr('class', 'user-info-wrap slide-div');
    $('.button-div').attr('class', 'button-div div-close');
    $('.slide-div').css('left', '-40%');
    $('.button-div').css('left', '0%');
    istablet = false;
    ismobile = true;
  }
});
$('.button-div').click(function () {
  if (istablet) {
    $(this).toggleClass('div-close');

    if ($(this).hasClass('div-close')) {
      $('.slide-div').animate({ left: '-25%' }, 800);
      $('.button-div').animate({ left: '0%' }, 800);
      $(this).find('.button-open').attr('class', 'button-close');
    } else {
      $('.slide-div').animate({ left: '0%' }, 800);
      $('.button-div').animate({ left: '25%' }, 800);
      $(this).find('.button-open').attr('class', 'button-open');
    }
  }
  if (ismobile) {
    $(this).toggleClass('div-close');

    if ($(this).hasClass('div-close')) {
      $('.slide-div').animate({ left: '-40%' }, 800);
      $('.button-div').animate({ left: '0%' }, 800);
      $(this).find('.button-open').attr('class', 'button-close');
    } else {
      $('.slide-div').animate({ left: '0%' }, 800);
      $('.button-div').animate({ left: '40%' }, 800);
      $(this).find('.button-open').attr('class', 'button-open');
    }
  }
});
