//  전역변수
var name_val = "꽃게걸"; // hero.name 고정
var onof = true; // 시작 버튼 중복 방지
var cnt = 0; // 반복 횟수 조절
var random = Math.floor(Math.random()*6); // 특정 숫자가 나오면 아이템이 출력되게하기




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

    var monsters = [
        ["Ghoul", 10, 3, 5, 10],
        ["Specter", 15, 5, 10, 10],    
        ["Spider", 20, 6, 7, 10],
        ["Dead grave keeper", 20, 10, 4, 10],
        ["dead_orc", 25, 10, 1, 10]
    ];

    // var monsters = [
    //     ["Ghoul", 500, 300, 5],
    //     ["Specter", 500, 500, 10],    
    //     ["Spider", 500, 600, 7],
    //     ["Dead grave keeper", 200, 100, 4],
    //     ["dead_orc", 300, 200, 1]
    // ];

    var monster = monsters[Math.floor(Math.random() *5)]; // 배열 개수
    return new Monster(monster[0],monster[1],monster[2],monster[3],monster[4]) // 이차원 배열 갯수
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
        ["Armour_Ghoul",50, 10, 50],
        ["Armour_Ghoul",50, 10, 50],
    ];

    var boss = boss_monsters[Math.floor(Math.random() *2)]; // 배열 개수
    return new Boss_monster(boss[0],boss[1],boss[2],boss[3]) // 이차원 배열 갯수
}

// 일반 아이템 생성( 이름, 공격력)
function Item(name){
    this.name = name;
}

function item_sponsor(){
    
    var items = [
        ["decaying bones"],
        ["spider eyes"],
        ["cloth"],
        ["Shovels"],
        ["bone necklace"],
    ];
    
    var item = items[Math.floor(Math.random()*2)];
    return new Item(item[0],item[1]); 
}

// 무기 아이템 생성( 이름, 공격력)
// function Item(name, att){
//     this.name = name;
//     this.att = att;
// }

// function item_sponsor(){
    
//     var items = [
//         ["decaying bones", 10],
//         ["Rifle", 400]
//     ];
    
//     var item = items[Math.floor(Math.random()*2)];
//     return new Item(item[0],item[1]); 
// }

// 보스 아이템 생성(이름)

function Boss_item(name){
    this.name = name;
}

function Boss_item_sponsor(){
    
    var b_item_list = [
        ["Rotten_flesh"]

    ];
    
    var b_item = b_item_list[Math.floor(Math.random()*1)];
    return new Boss_item(b_item[0]); 
}


// log 생성
function logMessage(msg, color){
    if(!color){
        color = 'white';
    } // log 색상 

    var log_box = document.createElement('div');
    // log_box 에 div 생성 함수 대입

    log_box.innerHTML = msg; // log_box에 msg 출력
    log_box.style.color = color; // 위에서 정한 색상 출력
    document.getElementById('log').appendChild(log_box); // log의 마지막 자식으로 log_box를 설정한다
}

// 캐릭터 생성 ( (이름), 체력, 공격력, 레벨, 경험치,[아이템])
var hero = new Character((name_val), 100, 10, 1, 0, []);

function Character(name, hp, att, lev, xp, it){
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.lev = lev;
    this.xp = xp;
    this.it = it;
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


// logMessage("작동", 'yellow');
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
                Boss_battle()
                break;
            }

            Battle();
            break;
        }

        if(monster.hp >= 0){
            hero.hp -= monster.att;

            logMessage(monster.name + " 이 " + hero.name + " 강타 합니다");
            logMessage(hero.name + " 의 체력이 " + hero.hp + " 남았습니다");

        }

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
                logMessage(hero.name+" 이(가) "+ hero.it[0].name+" 을 얻었습니다");

                att.innerHTML = hero.att;
                hp.innerHTML = hero.att;
                // it_box.innerHTML = hero.it;


            for(var i = 0; i<hero.it.length; i++){ // 진짜 내 it 에 있는지 확인하기 위한 for문
                // it_box.innerHTML = hero.it[i].name;

                // logMessage(hero.it[i].name);

                re_tre = document.createElement('button');
                var re_tre_text = document.createTextNode('재도전');
                re_tre.appendChild(re_tre_text);
                bt_box.appendChild(re_tre);
                re_tre.setAttribute( 'onclick','re_tre_bt()');
                break;
            };
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

    logMessage(boss.name + " 을 쓰러트리고 주위를 둘러봅니다");
    logMessage("미약하게 빛이 나는");
    logMessage("마법진을 발견합니다",'Yellow');
    logMessage("보고 해야할것이 늘었습니다");
    logMessage("마을로 돌아갑니다");




}



