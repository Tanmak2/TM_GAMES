var total_money = 10000;
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
var upgrade_percents = document.getElementById('upgrade_percents');
var lotto_result = document.getElementById('lotto_result');
var lotto_gold = document.getElementById('lotto_gold');
var up_to_cnt = document.getElementById('up_to_cnt');
var up_se_cnt = document.getElementById('up_se_cnt');
var up_fa_cnt = document.getElementById('up_fa_cnt');
var up_de_cnt = document.getElementById('up_de_cnt');
var de_sh_cnt = document.getElementById('de_sh_cnt');
var upgrade_seccesses = [
  950, 900, 850, 850, 800, 750, 700, 650, 600, 550, 500, 450, 400, 350, 300,
  300, 300, 300, 300, 300, 300, 300, 30, 20, 10,
];
var upgrade_destroy = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 13, 14, 21, 21, 21, 28, 28, 70, 70,
  194, 294, 396,
];
var upgrade_rate = 0;
var upgrade_cost = 10;
var upgrade_total_count = 0;
var upgrade_seccess_count = 0;
var upgrade_fail_count = 0;
var upgrade_destory_count = 0;
var destory_shield = 0;
document.getElementById('upgrade_bt').addEventListener('click', upgrade_bt);
document.getElementById('upgrade').addEventListener('click', showUpgrade);
document.getElementById('shop').addEventListener('click', showShop);
document.getElementById('lotto').addEventListener('click', showLotto);
document.getElementById('percent').addEventListener('click', showPercent);
document.getElementById('get_money').addEventListener('click', click_money);
document.getElementById('lotto_bt').addEventListener('click', lotto_bt);
document.getElementById('buy_bt').addEventListener('click', buy_destroy_shield);

function buy_destroy_shield() {
  if (total_money < 100) {
    alert('골드가 부족합니다.');
    return;
  }
  total_money -= 100;
  destory_shield++;
  de_sh_cnt.innerHTML = '파괴 방지권 : ' + destory_shield + '장';
  money_div.innerHTML = '현재 골드 : ' + total_money;
}

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
  percent_box.style.display = 'flex';
}

function upgrade_bt() {
  if (upgrade_rate == 25) {
    alert('마지막 강화입니다.');
    return;
  }
  // if (total_money < upgrade_cost) {
  //   alert('골드가 부족합니다.');
  //   return;
  // }
  var upgrade_percent = Math.floor(Math.random() * 1000) + 1;
  var upgrade_seccess = upgrade_seccesses[upgrade_rate];
  upgrade_total_count++;
  var destroy_sum =
    upgrade_seccesses[upgrade_rate] + upgrade_destroy[upgrade_rate];
  if (upgrade_percent <= upgrade_seccess) {
    upgrade_seccess_count++;
    total_money -= upgrade_cost;
    upgrade_rate++;
    upgrade_cost += 10;
    upgrade_stage.innerHTML = '현재 강화 수치 : 나무몽둥이+' + upgrade_rate;
    upgrade_seccess = upgrade_seccesses[upgrade_rate];
    upgrade_percents.innerHTML =
      '강화 성공 확률 : ' +
      upgrade_seccess / 10 +
      '% | 파괴 확률 : ' +
      upgrade_destroy[upgrade_rate] / 10 +
      '%';
    upgrade_money.innerHTML = '현재 강화 비용 : ' + upgrade_cost + '골드';
    upgrade_result.innerHTML = '강화 성공!';
    money_div.innerHTML = '현재 골드 : ' + total_money;
  } else if (
    upgrade_percent > upgrade_seccess &&
    upgrade_percent <= destroy_sum
  ) {
    if (destory_shield >= upgrade_rate) {
      if (confirm('무기가 파괴 되었습니다. 방지권을 사용하시겠습니까?')) {
        total_money -= upgrade_cost;
        destory_shield -= upgrade_rate;
        upgrade_stage.innerHTML = '현재 강화 수치 : 나무몽둥이+' + upgrade_rate;
        upgrade_seccess = upgrade_seccesses[upgrade_rate];
        upgrade_percents.innerHTML =
          '강화 성공 확률 : ' +
          upgrade_seccess / 10 +
          '% | 파괴 확률 : ' +
          upgrade_destroy[upgrade_rate] / 10 +
          '%';
        upgrade_money.innerHTML = '현재 강화 비용 : ' + upgrade_cost + '골드';
        upgrade_result.innerHTML = '파괴 방지권 사용!';
        money_div.innerHTML = '현재 골드 : ' + total_money;
        de_sh_cnt.innerHTML = '파괴 방지권 : ' + destory_shield + '장';
      } else {
        upgrade_destory_count++;
        total_money -= upgrade_cost;
        upgrade_rate = 0;
        upgrade_cost = 10;
        upgrade_stage.innerHTML = '현재 강화 수치 : 나무몽둥이+' + upgrade_rate;
        upgrade_seccess = upgrade_seccesses[upgrade_rate];
        upgrade_percents.innerHTML =
          '강화 성공 확률 : ' +
          upgrade_seccess / 10 +
          '% | 파괴 확률 : ' +
          upgrade_destroy[upgrade_rate] / 10 +
          '%';
        upgrade_money.innerHTML = '현재 강화 비용 : ' + upgrade_cost + '골드';
        upgrade_result.innerHTML = '무기 파괴!';
        money_div.innerHTML = '현재 골드 : ' + total_money;
      }
    } else {
      upgrade_destory_count++;
      total_money -= upgrade_cost;
      upgrade_rate = 0;
      upgrade_cost = 10;
      upgrade_stage.innerHTML = '현재 강화 수치 : 나무몽둥이+' + upgrade_rate;
      upgrade_seccess = upgrade_seccesses[upgrade_rate];
      upgrade_percents.innerHTML =
        '강화 성공 확률 : ' +
        upgrade_seccess / 10 +
        '% | 파괴 확률 : ' +
        upgrade_destroy[upgrade_rate] / 10 +
        '%';
      upgrade_money.innerHTML = '현재 강화 비용 : ' + upgrade_cost + '골드';
      upgrade_result.innerHTML = '무기 파괴!';
      money_div.innerHTML = '현재 골드 : ' + total_money;
    }
  } else {
    if (upgrade_rate % 5 != 0) {
      total_money -= upgrade_cost;
      upgrade_rate--;
      upgrade_cost -= 10;
    }
    upgrade_fail_count++;
    upgrade_stage.innerHTML = '현재 강화 수치 : 나무몽둥이+' + upgrade_rate;
    upgrade_seccess = upgrade_seccesses[upgrade_rate];
    upgrade_percents.innerHTML =
      '강화 성공 확률 : ' +
      upgrade_seccess / 10 +
      '% | 파괴 확률 : ' +
      upgrade_destroy[upgrade_rate] / 10 +
      '%';
    upgrade_money.innerHTML = '현재 강화 비용 : ' + upgrade_cost + '골드';
    upgrade_result.innerHTML = '강화 실패';
    money_div.innerHTML = '현재 골드 : ' + total_money;
  }
  up_to_cnt.innerHTML = '총 강화 횟수 : ' + upgrade_total_count + '회';
  up_se_cnt.innerHTML = '총 강화 성공 횟수 : ' + upgrade_seccess_count + '회';
  up_fa_cnt.innerHTML = '총 강화 실패 횟수 : ' + upgrade_fail_count + '회';
  up_de_cnt.innerHTML = '총 무기 파괴 횟수 : ' + upgrade_destory_count + '회';
  if (upgrade_rate == 25) {
    alert('25강 성공!');
  }
}

function lotto_bt() {
  if (total_money < 100) {
    alert('골드가 부족합니다.');
    return;
  }
  var lotto_ran = Math.floor(Math.random() * 10000) + 1;
  total_money -= 100;

  if (lotto_ran <= 1000) {
    lotto_result.innerHTML = '5등!';
    lotto_gold.innerHTML = '당첨금 : 500골드';
    total_money += 500;
  } else if (lotto_ran > 1000 && lotto_ran <= 1100) {
    lotto_result.innerHTML = '4등!';
    lotto_gold.innerHTML = '당첨금 : 5,000골드';
    total_money += 5000;
  } else if (lotto_ran > 1100 && lotto_ran <= 1110) {
    lotto_result.innerHTML = '3등!';
    lotto_gold.innerHTML = '당첨금 : 150,000골드';
    total_money += 150000;
  } else if (lotto_ran > 1110 && lotto_ran <= 1115) {
    lotto_result.innerHTML = '2등!';
    lotto_gold.innerHTML = '당첨금 : 4,500,000골드';
    total_money += 4500000;
  } else if (lotto_ran == 7777) {
    lotto_result.innerHTML = '1등!';
    lotto_gold.innerHTML = '당첨금 : 150,000,000골드';
    total_money += 150000000;
  } else {
    lotto_result.innerHTML = '6등';
    lotto_gold.innerHTML = '당첨금 : 0골드';
  }
  money_div.innerHTML = '현재 골드 : ' + total_money;
}
