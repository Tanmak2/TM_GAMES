//  전역변수
var name_val = "꽃게걸"; // hero.name 고정
var onof = true; // 시작 버튼 중복 방지
var cnt = 0; // 반복 횟수 조절
var random = Math.floor(Math.random()*3); // 특정 숫자가 나오면 아이템이 출력되게하기

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
        ["Specter", 50, 5, 10, 10],    
        ["Spider", 50, 6, 7, 10],
        ["Dead grave keeper", 20, 10, 4, 10],
        ["dead_orc", 30, 200, 1, 10]
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

// 아이템 생성( 이름, 공격력)
function Item(name, att){
    this.name = name;
    this.att = att;
}

function item_sponsor(){
    
    var items = [
        ["rusty_sword", 10],
        ["Rifle", 400]
    ];
    
    var item = items[Math.floor(Math.random()*2)];
    return new Item(item[0],item[1]); 
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

// logMessage("작동", 'yellow');
Battle();
}

function Battle(){
    var monster = Monster_sponsor();
    while(true){
        monster.hp -= hero.att;

        if(monster.hp <= 0){
            logMessage(hero.name+" 이(가) 이겼습니다"+monster.name+" 을(를) 쓰려트렸습니다")
            cnt++;

            if(random == 2){ // 아이템을 얻고 저장
                var item = item_sponsor();
                hero.it.push(item);
                logMessage(hero.name+" 이(가) "+ item.name+" 을 얻었습니다");
                for(var i = 0; i<hero.it.length; i++){ // 진짜 내 it 에 있는지 확인하기 위한 for문
                    logMessage(hero.it[i].name);
                }
            }

            if(cnt == 3){
                logMessage("쉬운 상대였습니다 앞으로 전진합니다");
                break;
            }

            Battle();
            break;
        }

        if(monster.hp >= 0){
            hero.hp -= monster.att;

            logMessage(monster.name+" 이(가) "+hero.naem+" 을(를) 공격합니다")
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



