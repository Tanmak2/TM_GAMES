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
var Check_upgrade = false;
var Check_shop = false;
var Check_lotto = false;
var Check_percent = false;
var upgrade_stage = document.getElementById('upgrade_stage');
var upgrade_money = document.getElementById('upgrade_money');
var upgrade_result = document.getElementById('upgrade_result');
var upgrade_percents = document.getElementById('upgrade_percent');
var upgrade_seccesses = [950, 900, 850, 800, 750, 700, 650, 600, 550, 500];
var upgrade_rate = 0;
var upgrade_cost = 10;
document.getElementById('upgrade_bt').addEventListener('click', upgrade_bt);
document.getElementById('upgrade').addEventListener('click', showUpgrade);
document.getElementById('shop').addEventListener('click', showShop);
document.getElementById('lotto').addEventListener('click', showLotto);
document.getElementById('percent').addEventListener('click', showPercent);
document.getElementById('get_money').addEventListener('click', click_money);

function click_money() {
  total_money += money;
  money_div.innerHTML = '현재 골드 : ' + total_money;
}

function closeMenu() {
  upgrade.style.backgroundColor = 'white';
  shop.style.backgroundColor = 'white';
  lotto.style.backgroundColor = 'white';
  percent.style.backgroundColor = 'white';
  upgrade_box.style.display = 'none';
  shop_box.style.display = 'none';
  lotto_box.style.display = 'none';
  percent_box.style.display = 'none';
  Check_upgrade = false;
  Check_shop = false;
  Check_lotto = false;
  Check_percent = false;
}

function showUpgrade() {
  if (Check_upgrade) {
    closeMenu();
    return;
  }
  Check_upgrade = true;
  Check_shop = false;
  Check_lotto = false;
  Check_percent = false;
  upgrade.style.backgroundColor = '#ffafb0';
  shop.style.backgroundColor = 'white';
  lotto.style.backgroundColor = 'white';
  percent.style.backgroundColor = 'white';
  upgrade_box.style.display = 'block';
  shop_box.style.display = 'none';
  lotto_box.style.display = 'none';
  percent_box.style.display = 'none';
}
function showShop() {
  if (Check_shop) {
    closeMenu();
    return;
  }
  Check_upgrade = false;
  Check_shop = true;
  Check_lotto = false;
  Check_percent = false;
  upgrade.style.backgroundColor = 'white';
  shop.style.backgroundColor = '#ffafd8';
  lotto.style.backgroundColor = 'white';
  percent.style.backgroundColor = 'white';
  upgrade_box.style.display = 'none';
  shop_box.style.display = 'block';
  lotto_box.style.display = 'none';
  percent_box.style.display = 'none';
}
function showLotto() {
  if (Check_lotto) {
    closeMenu();
    return;
  }
  Check_upgrade = false;
  Check_shop = false;
  Check_lotto = true;
  Check_percent = false;
  upgrade.style.backgroundColor = 'white';
  shop.style.backgroundColor = 'white';
  lotto.style.backgroundColor = '#eeb7b4';
  percent.style.backgroundColor = 'white';
  upgrade_box.style.display = 'none';
  shop_box.style.display = 'none';
  lotto_box.style.display = 'block';
  percent_box.style.display = 'none';
}
function showPercent() {
  if (Check_percent) {
    closeMenu();
    return;
  }
  Check_upgrade = false;
  Check_shop = false;
  Check_lotto = false;
  Check_percent = true;
  upgrade.style.backgroundColor = 'white';
  shop.style.backgroundColor = 'white';
  lotto.style.backgroundColor = 'white';
  percent.style.backgroundColor = '#f2cfa5';
  upgrade_box.style.display = 'none';
  shop_box.style.display = 'none';
  lotto_box.style.display = 'none';
  percent_box.style.display = 'block';
}

function upgrade_bt() {
  if (upgrade_rate == 99) {
    alert('마지막 강화입니다.');
    return;
  }
  if (total_money < upgrade_cost) {
    alert('골드가 부족합니다.');
    return;
  }
  var upgrade_percent = Math.floor(Math.random() * 1000) + 1;
  var upgrade_seccess = upgrade_seccesses[parseInt(upgrade_rate / 10)];
  if (upgrade_percent <= upgrade_seccess) {
    total_money -= upgrade_cost;
    upgrade_rate++;
    upgrade_cost += 10;
    upgrade_stage.innerHTML = '현재 강화 수치 : 나무몽둥이+' + upgrade_rate;
    upgrade_seccess = upgrade_seccesses[parseInt(upgrade_rate / 10)];
    upgrade_percents.innerHTML =
      '강화 성공 확률 : ' + upgrade_seccess / 10 + '%';
    upgrade_money.innerHTML = '현재 강화 비용 : ' + upgrade_cost + '골드';
    upgrade_result.innerHTML = '강화 성공!';
    money_div.innerHTML = '현재 골드 : ' + total_money;
  } else {
    if (upgrade_rate != 0) {
      total_money -= upgrade_cost;
      upgrade_rate--;
      upgrade_cost -= 10;
    }
    upgrade_stage.innerHTML = '현재 강화 수치 : 나무몽둥이+' + upgrade_rate;
    upgrade_seccess = upgrade_seccesses[parseInt(upgrade_rate / 10)];
    upgrade_percents.innerHTML =
      '강화 성공 확률 : ' + upgrade_seccess / 10 + '%';
    upgrade_money.innerHTML = '현재 강화 비용 : ' + upgrade_cost + '골드';
    upgrade_result.innerHTML = '강화 실패';
    money_div.innerHTML = '현재 골드 : ' + total_money;
  }
  if (upgrade_rate == 99) {
    alert('99강 성공!');
  }
}
