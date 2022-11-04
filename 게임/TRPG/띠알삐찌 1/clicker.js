
var upgrade = document.getElementById('upgrade');
var shop = document.getElementById('shop');
var lotto = document.getElementById('lotto');
var percent = document.getElementById('percent');
// var upgrade_box = document.getElementById('upgrade_box');
// var shop_box = document.getElementById('shop_box');
// var lotto_box = document.getElementById('lotto_box');
// var percent_box = document.getElementById('percent_box');
document.addEventListener('keydown', keyDownHandler);
document.getElementById('upgrade').addEventListener('click', showUpgrade);
document.getElementById('shop').addEventListener('click', showShop);
document.getElementById('lotto').addEventListener('click', showLotto);
document.getElementById('percent').addEventListener('click', showPercent);

function keyDownHandler(e) {
  if (e.keyCode == 13) {
    return;
  }
}

function showUpgrade() {
  upgrade.style.backgroundColor = '#EEEEEE';
  shop.style.backgroundColor = 'white';
  lotto.style.backgroundColor = 'white';
  percent.style.backgroundColor = 'white';
  upgrade_box.style.display = 'block';
  shop_box.style.display = 'none';
  lotto_box.style.display = 'none';
  percent_box.style.display = 'none';
}
function showShop() {
  upgrade.style.backgroundColor = 'white';
  shop.style.backgroundColor = '#EEEEEE';
  lotto.style.backgroundColor = 'white';
  percent.style.backgroundColor = 'white';
  upgrade_box.style.display = 'none';
  shop_box.style.display = 'block';
  lotto_box.style.display = 'none';
  percent_box.style.display = 'none';
}
function showLotto() {
  upgrade.style.backgroundColor = 'white';
  shop.style.backgroundColor = 'white';
  lotto.style.backgroundColor = '#EEEEEE';
  percent.style.backgroundColor = 'white';
  upgrade_box.style.display = 'none';
  shop_box.style.display = 'none';
  lotto_box.style.display = 'block';
  percent_box.style.display = 'none';
}
function showPercent() {
  upgrade.style.backgroundColor = 'white';
  shop.style.backgroundColor = 'white';
  lotto.style.backgroundColor = 'white';
  percent.style.backgroundColor = '#EEEEEE';
  upgrade_box.style.display = 'none';
  shop_box.style.display = 'none';
  lotto_box.style.display = 'none';
  percent_box.style.display = 'block';
}
