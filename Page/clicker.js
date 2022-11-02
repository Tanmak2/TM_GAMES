var total_money = 0;
var money = 1;
var money_div = document.getElementById('money');
document.addEventListener('keydown', keyDownHandler);
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
