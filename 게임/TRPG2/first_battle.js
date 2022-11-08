//  전역변수
var name_val = "꽃게걸"; // hero.name 고정
var onof = true; // 시작 버튼 중복 방지
var cnt = 0; // 반복 횟수 조절
var random = 2
// Math.floor(Math.random()*6); // 특정 숫자가 나오면 아이템이 출력되게하기

var golem_st = 0;

var mis_val = document.getElementById("mis_val");

var hero_it_list = document.getElementById("hero_it_list");
var merchant_it_list = document.getElementById("merchant_it_list");

//  hero 스탯
var hp_val = document.getElementById('hp_val');
var hero_hp = parseInt(hp_val.innerText); // hp_val text로 가져온것을 정수로 변환

var att_val = document.getElementById('att_val');
var hero_att = parseInt(att_val.innerText); // hp_val text로 가져온것을 정수로 변환

var lv_val = document.getElementById('lv_val');
var hero_lv = parseInt(lv_val.innerText); // hp_val text로 가져온것을 정수로 변환

var xp_val = document.getElementById('xp_val');
var hero_xp = parseInt(xp_val.innerText); // hp_val text로 가져온것을 정수로 변환

var gold_val = document.getElementById('gold_val');
var hero_gold = parseInt(gold_val.innerText);

var hero_golds = document.getElementById('hero_gold');

document.getElementById('start').addEventListener('click', Start);

// html에 출력

var att = document.getElementById("att_box");
var hp = document.getElementById("hp_box");

// 초기화(새로고침)
function re_tre_bt() {
    location.reload(true);
}

//  몬스터 생성( 이름, 체력, 공격력, 레벨, 경험치)
function Monster(name, hp, att, lev, xp){
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.lev = lev;
    this.xp = xp;
}



// 몬스터 생성( 이름, 체력, 공격력, 레벨, 경험치)
function Monster_sponsor(){

    // var monsters = [
    //     ["Golem", 100, 15, 5, 10],  
    //     ["Chimera_human", 100, 5, 7, 10],
    //     ["Chimera_orc", 100, 15, 4, 10],
    //     ["Slime", 100, 10, 1, 10]
    // ];

    // var monsters = [
    //     ["Ghoul", 500, 300, 5],
    //     ["Specter", 500, 500, 10],    
    //     ["Spider", 500, 600, 7],
    //     ["Dead grave keeper", 200, 100, 4],
    //     ["dead_orc", 300, 200, 1]
    // ];

    var monsters = [
        ["Golem", 1, 1, 5, 10],  
        ["Golem", 1, 1, 7, 10],
        ["Golem", 1, 1, 4, 10],
        ["Golem", 1, 1, 1, 10]
    ];

    var monster = monsters[Math.floor(Math.random() *4)]; // 배열 개수
    return new Monster(monster[0],monster[1],monster[2],monster[3],monster[4]) // 이차원 배열 갯수
}

// 중간 보스 몬스터 생성( 이름, 체력, 공격력, 레벨, 경험치)
function Middle_boss(name, hp, att, lev, xp){
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.lev = lev;
    this.xp = xp;
}

function Middle_boss_sponsor(){

    var Middle_boss_monsters = [
        ["Gargoyle",70, 35, 50],
        ["Twin Head Auger",60, 35, 50],
    ];

    var middle_boss = Middle_boss_monsters[Math.floor(Math.random() *2)]; // 배열 개수
    return new Middle_boss(middle_boss[0],middle_boss[1],middle_boss[2],middle_boss[3]) // 이차원 배열 갯수
}

// 보스 몬스터 생성( 이름, 체력, 공격력, 레벨, 경험치)
function Boss_monster(name, hp, att, lev, xp){
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.lev = lev;
    this.xp = xp;
}

function Boss_Monster_sponsor(){

    var boss_monsters = [
        ["Lich",100, 40, 50],
        ["Lich",100, 40, 50],
    ];

    var boss = boss_monsters[Math.floor(Math.random() *2)]; // 배열 개수
    return new Boss_monster(boss[0],boss[1],boss[2],boss[3]) // 이차원 배열 갯수
}

// *************************js 나눌것
// 버튼 함수
function doSale(){ // 판다
    var nitem = Nitem_sponsor();
    var div = document.getElementById('big');
    div.remove();
    hero.gold += nitem.gold;
    
    gold_val.innerText = hero.gold;
    hero_golds.innerHTML = hero.gold;
    alert(hero.gold);
}

function Merchant_it(name,gold){
    this.name = name;
    this.gold = gold;
}

function Merchant_it_sponsor(){
    
    var merchants = [
        ["HP_potion1",10],
        ["HP_potion2",10],
        ["HP_potion3",10],
        ["HP_potion4",10],
        ["HP_potion5",10]
    ];
    var mer = '';
    for(var i = 0; i<merchants.length; i++){
        mer = '<div id="merchant">'+merchants[i][0]+' <button id="left" tpye="button" onclick="doBuy()">구매</button></div>'
        merchant_it_list.innerHTML += mer;
    }
}

// js 모듈 시 사용 가능

function doBuy(){
    var mer = Merchant_it_sponsor();
    hero.gold -= mer.gold

    alert(hero.gold);
}
// ***************************

// 일반 아이템 생성( 이름, 공격력)
function Nitem(name,gold){
    this.name = name;
    this.gold = gold;
}

function Nitem_sponsor(){
    
    var nitems = [
        ["HP_potion1",5],
        ["HP_potion2",5],
        ["HP_potion3",5],
        ["HP_potion4",5],
        ["HP_potion5",5]
    ];
    
    var nitem = nitems[Math.floor(Math.random()*4)];
    return new Nitem(nitem[0],nitem[1]); 
}

// 중간보스  아이템 생성( 이름)
function Middle_boss_Item(name){
    this.name = name;
}

function Middle_boss_item_sponsor(){
    
    var Middle_boss_items = [
        ["green_correction"],
        ["green_correction"]
    ];
    
    var middle_b_item = Middle_boss_items[Math.floor(Math.random()*2)];
    return new Middle_boss_Item(middle_b_item[0]); 
}

// 보스 아이템 생성(이름)

function Boss_item(name){
    this.name = name;
}

function Boss_item_sponsor(){
    
    var b_item_list = [
        ["Live_Vessel"]

    ];
    
    var b_item = b_item_list[Math.floor(Math.random()*1)];
    return new Boss_item(b_item[0]); 
}

// 캐릭터 생성 ( (이름), 체력, 공격력, 레벨, 경험치,[아이템])
var hero = new Character((name_val), hero_hp, hero_att, hero_lv, hero_xp, [], hero_gold);

function Character(name, hp, att, lev, xp, it, gold){
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.lev = lev;
    this.xp = xp;
    this.it = it;
    this.gold = gold;
}

// 게임 시작 버튼
function Start(){

    if(!onof){
        return;
    }
    onof = false;
    
    logMessage("! 접근 주의 !", '#BCE55C');
    logMessage("팻말이 꽂혀있는 동굴 주변 곳곳에", '#BCE55C');
    logMessage("정체를 알 수 없는 뼈조각들이 널부러져있다", '#BCE55C');
    logMessage(hero.name+"은(는)",'yellow', '#BCE55C');
    logMessage("동굴 안쪽에는 인간의 것으로 보이는 뼈가 방치되어있습니다", '#BCE55C');
    logMessage("옅은 혈향을 따라 깊숙히 걸어갑니다", '#BCE55C');
    
    Battle();
}

// 일반
function Battle(){
    var monster = Monster_sponsor();

    

    logMessage("혈향에 취해있는"+monster.name+"를 조우" ,'green', '#BCE55C');
    logMessage(hero.name+"을(를) 보고는 괴성을 지르며 "+monster.name+"가 달려듭니다", '#BCE55C');
    logMessage(hero.name + "과" + monster.name + "이 전투", 'green', '#BCE55C');

    while(true){
        monster.hp -= hero.att;

        logMessage(hero.name + " 이 " + monster.name + " 강타 합니다");
        logMessage(monster.name + " 의 체력이 " + monster.hp + " 남았습니다");

        if(monster.hp <= 0){

            logMessage(hero.name+" 이(가) "+monster.name+" 을(를) 쓰려트렸습니다")
            logMessage("남은 체력은" + hero.hp,'Yellow');
            cnt++;

            if(random == 2){ // 아이템을 얻고 저장
                var item = item_sponsor();
                hero.it.push(item);
                logMessage(hero.name+" 이(가) "+ item.name+" 을 얻었습니다");
                // for(var i = 0; i<hero.it.length; i++){ // 진짜 내 it 에 있는지 확인하기 위한 for문
                //     logMessage(hero.it[i].name);
                // }
            }

            if(cnt == 3){
                logMessage("악취나는 것들을 전부 해치웠습니다");
                logMessage(hero.name + " 은 썩은 살점을 털어내고 앞으로 전진합니다", '#BCE55C');
                logMessage("저 멀리 사람의 신음소리가 들려옵니다", '#BCE55C');
                logMessage("앞으로 전진합니다");

                Middle_boss_battle()
                break;
            }

            Battle();
            break;
        }

        // 후공
        if(monster.hp >= 0){
            hero.hp -= monster.att;

            logMessage(monster.name + " 이 " + hero.name + " 강타 합니다");
            logMessage(hero.name + " 의 체력이 " + hero.hp + " 남았습니다");

            if(hero.hp <= 0){
                logMessage(hero.name+" 이(가) 패배 했습니다")
    
                re_tre = document.createElement('button');
                var re_tre_text = document.createTextNode('재도전');
                re_tre.appendChild(re_tre_text);
                bt_box.appendChild(re_tre);
                re_tre.setAttribute( 'onclick','re_tre_bt()');
                break;
            }
        }
    }
}

// 중간 보스
function Middle_boss_battle() {
    var middle_boss = Middle_boss_sponsor();
    var middle_b_item = Middle_boss_item_sponsor();

    if(middle_boss.name == "Gargoyle" ){
        logMessage("다가간 문 앞에는...", 'green');
        logMessage(middle_boss.name + "이 칠흑 같이 검은 가죽과 큰 덩지로 "+hero.name + wizard.name + "를 바라봅니다", 'red');
        logMessage(middle_boss.name + "과 조우! 전투를 시작합니다", 'red');
    }

    if(middle_boss.name == "Twin Head Auger" ){
        logMessage("다가간 문 앞에는...", 'green');
        logMessage(middle_boss.name + "이 두개의 머리의 눈동자에서 노란 안광이 흘러 나옵니다 "+hero.name + wizard.name + "를 바라봅니다", 'red');
        logMessage(middle_boss.name + "과 조우! 전투를 시작합니다", 'red');
    }
    

    while(true){
        middle_boss.hp -= hero.att;
        middle_boss.hp -= wizard.att;

        logMessage(hero.name + " 이 " +  middle_boss.name + " 강타 합니다");
        logMessage(middle_boss.name + " 의 체력이 " +  middle_boss.hp + " 남았습니다");

        if( middle_boss.hp <= 0){
            
            logMessage(hero.name+" 이(가) "+ middle_boss.name+" 을(를) 쓰려트렸습니다", 'green');
            logMessage("커다란 덩치가 점점 흘러 내립니다", 'green');
            logMessage("남은 체력은" + hero.hp, 'green');

            hero.it.push(middle_b_item);
                logMessage(hero.name+" 이(가) "+ hero.it[0].name+" 을 얻었습니다", 'green');

            for(var i = 0; i<hero.it.length; i++){ // 진짜 내 it 에 있는지 확인하기 위한 for문
                it_box.innerHTML = hero.it[i].name;
                break;
            };

            logMessage("문을 열고 커다란 동공에 들어갑니다", 'green');

            Boss_battle()
            break;
        }

        if( middle_boss.hp >= 0){
            hero.hp -=  middle_boss.att;
            logMessage( middle_boss.name + " 이 " + middle_boss.name + " 강타 합니다");

            if(hero.hp <= 60){
                hero.hp += 20;
                logMessage(wizard.name + " 가 " +hero.name +" 를 회복 시킵니다")
            }

            logMessage(hero.name + " 의 체력이 " + middle_boss.hp + " 남았습니다");
        }

        if(middle_boss.hp <= 0){
            logMessage(middle_boss.name+" 이(가) 패배 했습니다")
            logMessage(hero.name + wizard.name + " 의 시체는 재활용 되어 더욱 강력하게", 'red');
            logMessage("재탄생 될것입니다", 'red');

            re_tre = document.createElement('button');
            var re_tre_text = document.createTextNode('재도전');
            re_tre.appendChild(re_tre_text);
            bt_box.appendChild(re_tre);
            re_tre.setAttribute( 'onclick','re_tre_bt()');
            break;
        }
    }
}

// 보스
function Boss_battle() {
    var boss = Boss_Monster_sponsor();
    var boss_item = Boss_item_sponsor();

    logMessage("소리를 따라 지독한 혈무(血霧) 를 뚫고 나아갑니다 ");
    logMessage("공간이 넓어지는 느낌이 들며 소리의 근원지에 도착 했습니다");
    logMessage("소리의 정체는");
    logMessage(boss.name + " 이(가) 썩은 목구멍에서 인간의 목소리를 흉내내고 있습니다", 'yellow');
    logMessage(boss.name + " 이(가) 녹아내리는 눈으로 "+ hero.name + " 를 바라보고있습니다", 'yellow');
    logMessage(boss.name + "과 조우! 전투를 시작합니다");

    while(true){
        boss.hp -= hero.att;

        logMessage(hero.name + " 이 " +  boss.name + " 강타 합니다");
        logMessage(boss.name + " 의 체력이 " +  boss.hp + " 남았습니다");

        if( boss.hp <= 0){
            
            logMessage(hero.name+" 이(가) "+ boss.name+" 을(를) 쓰려트렸습니다")
            logMessage("더이상 희생자는 생기지 않을 것입니다...");
            logMessage("남은 체력은" + hero.hp,'Yellow');

            hero.it.push(boss_item);
            logMessage(hero.name+" 이(가) "+ hero.it[0].name+" 을 얻었습니다", 'green');

            att.innerHTML = hero.att;
            hp.innerHTML = hero.hp;

            re_tre = document.createElement('button');
            var re_tre_text = document.createTextNode('재도전');
            re_tre.appendChild(re_tre_text);
            bt_box.appendChild(re_tre);
            re_tre.setAttribute( 'onclick','re_tre_bt()');
            break;
        }
    
        if( boss.hp >= 0){
            hero.hp -=  boss.att;
            logMessage( boss.name + " 이 " + hero.name + " 강타 합니다");
            logMessage(hero.name + " 의 체력이 " + hero.hp + " 남았습니다");
        }

        if(hero.hp <= 0){
            logMessage(hero.name+" 이(가) 패배 했습니다")
            logMessage(boss.name + "은 "+ hero.name +"의 목소리로 더욱 많은 희생자를 만들것입니다...");

            re_tre = document.createElement('button');
            var re_tre_text = document.createTextNode('재도전');
            re_tre.appendChild(re_tre_text);
            bt_box.appendChild(re_tre);
            re_tre.setAttribute( 'onclick','re_tre_bt()');
            break;
        }
    }
}




































