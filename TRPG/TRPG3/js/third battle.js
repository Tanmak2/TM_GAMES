//  전역변수
var name_val = "꽃게걸"; // hero.name 고정
var onof = true; // 시작 버튼 중복 방지
var cnt = 0; // 반복 횟수 조절
var random = 2
// Math.floor(Math.random()*6); // 특정 숫자가 나오면 아이템이 출력되게하기


// 보스 공격
var boss_rd_att = Math.floor(Math.random()*3);

var immediate_death = Math.floor(Math.random()*15);


var hero_defend = Math.floor(Math.random()*2);

var hero_Recovery = Math.floor(Math.random()*2);



var proce = true;

var golem_st = 0;

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

// 구입

var first_thing = document.getElementById('first_thing');
var second_item = document.getElementById('second_item');

document.getElementById('purchase').addEventListener('click', Process);

function Process(){
    alert(first_thing.innerText);

    if(hero.gold >= 5){
        hero.gold -= 5
        hero_golds.innerText = hero.gold;
        gold_val.innerText = hero.gold;
    }
    

    if(hero.gold <= 0){
        alert("구입 할 수 없습니다")
        proce = false;
    };
    
}

// html에 출력

var att = document.getElementById("att_val");
var hp = document.getElementById("hp_val");

// 초기화(새로고침)
function re_tre_bt() {
    location.reload(true);
}

//  몬스터 생성( 이름, 체력, 공격력, 레벨, 경험치)
function Monster(name, hp, att){
    this.name = name;
    this.hp = hp;
    this.att = att;
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
        ["Skeleton", 15, 15],  
        ["Ghoul", 15, 15],
        ["Specter", 15, 15],
        ["dead_orc", 15, 15]
    ];

    var monster = monsters[Math.floor(Math.random() *4)]; // 배열 개수
    return new Monster(monster[0],monster[1],monster[2]) // 이차원 배열 갯수
}


// 보스 몬스터 생성( 이름, 체력, 공격력)
function Boss_monster(name, hp, att){
    this.name = name;
    this.hp = hp;
    this.att = att;
}

function Boss_Monster_sponsor(){

    var boss_monsters = [
        ["Bone_dragon",100, 30]
    ];

    var boss = boss_monsters[Math.floor(Math.random() *1)]; // 배열 개수
    return new Boss_monster(boss[0],boss[1],boss[2]) // 이차원 배열 갯수
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


// js 모듈 시 사용 가능

function doBuy(){
    var mer = Merchant_it_sponsor();
    hero.gold -= mer.gold

    alert(hero.gold);
}
// ***************************

// log 생성
function logMessage(msg, color){
    if(!color){
        color = 'black';
    } // log 색상 

    var log_box = document.createElement('div');
    // log_box 에 div 생성 함수 대입

    log_box.innerHTML = msg; // log_box에 msg 출력
    log_box.style.color = color; // 위에서 정한 색상 출력
    document.getElementById('log').appendChild(log_box); // log의 마지막 자식으로 log_box를 설정한다
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
    var boss = Boss_Monster_sponsor()

if(!onof){
    return;
}
onof = false;

logMessage("다시 한번 알수 없는 포탈에 몸을 던집니다");
logMessage("눈을 떳을 때 보이는건 칠흑 같은 어둠이였습니다");
logMessage("눈이 어둠에 익숙해졌을 때 보인건...");
logMessage(hero.name+"을(를) 보고 조용히 일어납니다", 'red');
logMessage(hero.name + "과" + boss.name + "이 전투", 'red');
logMessage(boss.name + " 조우!!!" , 'red');

Battle();
}

// 일반
function Battle(){
    var boss = Boss_Monster_sponsor()
    var monster = Monster_sponsor();

    while(true){
        logMessage("땅에서 몬스터들이 기어 올라옵니다", 'green');
        // 선공
        monster.hp -= hero.att;

        logMessage(hero.name + " 이 " + monster.name + " 강타 합니다", 'red');
        logMessage(monster.name + " 의 체력이 " + monster.hp + " 남았습니다", 'green');

        // 브래스 + 막기 랜덤
        if(boss_rd_att == 2 ){
                
            if(hero_defend == 1 ){
                logMessage("기적같이 피했습니다!!", 'green');
                
                if(hero_Recovery = 2){
                    hero.hp +=20;
                    logMessage(hero.name+"이 포션을 마시고 20을 회복했습니다");
                }
            }

            hero.hp -= 20;
            logMessage(boss.name +"이 브래스를 내뿜습니다", 'red');
            logMessage(hero.name+ "의 남은 체력은" + hero.hp, 'green');

            if(hero.hp <= 0){
                logMessage(hero.name+" 이(가) 패배 했습니다", 'red');
                break;
            }
        }

        // 할퀴기 + 막기 랜덤
        if(boss_rd_att == 2 ){
                
            if(hero_defend == 3 ){
                logMessage("기적같이 피했습니다!!", 'green');
            }

            hero.hp -= 15;
            logMessage(boss.name +"이 날카로운 발톱으로 내려 찍습니다", 'red');

            if(hero_Recovery = 2){
                hero.hp +=20;
            }
        }

        // 즉사 랜덤
        if(immediate_death == 15 ){

            hero.hp -= boss.att;
            hero.hp -= boss.att;
            hero.hp -= boss.att;
            hero.hp -= boss.att;
            hero.hp -= boss.att;
            hero.hp -= boss.att;
            hero.hp -= boss.att;
            hero.hp -= boss.att;
            logMessage(boss.name +"이 '즉사' 시켰습니다", 'red');
        }



        if(monster.hp <= 0){
            logMessage(hero.name+" 이(가) "+monster.name+" 을(를) 쓰려트렸습니다", 'green');
            logMessage("남은 체력은" + hero.hp, 'green');
            cnt++;  

            if(cnt == 4){
                logMessage(boss.name + "이 완전히 몸을 일으켰습니다", 'black');

                Boss_battle();
                break;
            }
            Battle();
            break;
        }

        // 후공
        if(monster.hp >= 0){
            hero.hp -= monster.att;

            logMessage(monster.name + " 이 " + hero.name + " 강타 합니다", 'red');
            logMessage(hero.name + " 의 체력이 " + hero.hp + " 남았습니다", 'green');
        }

        if(hero.hp <= 0){
            logMessage(hero.name+" 이(가) 패배 했습니다", 'red');
            break;
        }
    }
}

// 보스
function Boss_battle() {
    var boss = Boss_Monster_sponsor();

    logMessage("뼈 밖에 남지 않은 눈에서 붉은 안광이 내려다 보고 있습니다", 'black');
    logMessage("포션을 입에 털어 넣습니다", 'black');
    hero.hp += 40;
    logMessage(hero.hp + "입니다", 'black');

    // 선공
    while(true){
        boss.hp -= hero.att;

        logMessage(hero.name + " 이 " +  boss.name + " 강타 합니다", 'red');
        logMessage(boss.name + " 의 체력이 " +  boss.hp + " 남았습니다", 'green');

        if(boss_rd_att == 2 ){
                
            if(hero_defend == 1 ){
                logMessage("기적같이 피했습니다!!", 'green');
                
                if(hero_Recovery = 2){
                    hero.hp +=20;
                    logMessage(hero.name+"이 포션을 마시고 20을 회복했습니다");
                }
            }

            hero.hp -= 20;
            logMessage(boss.name +"이 브래스를 내뿜습니다", 'red');
            logMessage(hero.name+ "의 남은 체력은" + hero.hp, 'green');

            if(hero.hp <= 0){
                logMessage(hero.name+" 이(가) 패배 했습니다", 'red');
                break;
            }
        }

        // 할퀴기 + 막기 랜덤
        if(boss_rd_att == 2 ){
                
            if(hero_defend == 3 ){
                logMessage("기적같이 피했습니다!!", 'green');
            }

            hero.hp -= 15;
            logMessage(boss.name +"이 날카로운 발톱으로 내려 찍습니다", 'red');

            if(hero_Recovery = 2){
                hero.hp +=20;
            }
        }

        // 즉사 랜덤
        if(immediate_death == 15 ){

            hero.hp -= boss.att;
            hero.hp -= boss.att;
            hero.hp -= boss.att;
            hero.hp -= boss.att;
            hero.hp -= boss.att;
            hero.hp -= boss.att;
            hero.hp -= boss.att;
            hero.hp -= boss.att;
            logMessage(boss.name +"이 '즉사' 시켰습니다", 'red');
        }




        if( boss.hp <= 0){
            
            logMessage(hero.name+" 이(가) "+ boss.name+" 을(를) 쓰려트렸습니다", 'green');
            logMessage(" 세상에 알려진다면 한줄의 기록이 될 업적을 달성했습니다", 'green');
            logMessage("주문을 외우며 스크롤을 사용해 마을로 돌아갑니다", 'green');
            break;
        }

        // 후공
        if( boss.hp >= 0){
            hero.hp -=  boss.att;
            logMessage( boss.name + " 이 " + hero.name + " 강타 합니다", 'red');
            logMessage(hero.name + " 의 체력이 " + hero.hp + " 남았습니다", 'green');
        }

        if(hero.hp <= 0){
            logMessage(hero.name+" 이(가) 패배 했습니다", 'red');
            logMessage(hero.name + " 은 안식에 들지 못 할것입니다 영원히..", 'red');
            break;

        }
    }
}



// 모듈화 버그가 많다
// export { Merchant_it_sponsor };
