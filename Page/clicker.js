var total_money = 0;
var money = 1;
var money_div = document.getElementById('money');
var upgrade = document.getElementById('upgrade');
var shop = document.getElementById('shop');
var lotto = document.getElementById('lotto');
var percent = document.getElementById('percent');
var upgrade_box = document.getElementById('upgrade_box');
var shop_box = document.getElementById('shop_box');
var lotto_box = document.getElementById('lotto_box');
var percent_box = document.getElementById('percent_box');
document.addEventListener('keydown', keyDownHandler);
document.getElementById('upgrade').addEventListener('click', showUpgrade);
document.getElementById('shop').addEventListener('click', showShop);
document.getElementById('lotto').addEventListener('click', showLotto);
document.getElementById('percent').addEventListener('click', showPercent);
document.getElementById('get_money').addEventListener('click', click_money);

function keyDownHandler(e) {
  if (e.keyCode == 13) {
    alert('오직 마우스로만 클릭하세요');
    return;
  }
}
function click_money() {
  total_money += money;
  money_div.innerHTML = '현재 골드 : ' + total_money;
}

function showUpgrade() {
  upgrade.style.backgroundColor = 'red';
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
  shop.style.backgroundColor = 'blue';
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
  lotto.style.backgroundColor = 'blueviolet';
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
  percent.style.backgroundColor = 'brown';
  upgrade_box.style.display = 'none';
  shop_box.style.display = 'none';
  lotto_box.style.display = 'none';
  percent_box.style.display = 'block';
}
