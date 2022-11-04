
var onof = true;
var re_point = 10;
var att_val = document.getElementById("stamina");
var fdf = document.getElementById("fdf");
var out = '';
var heroDie = false;
var cnt = 0;
var name_val = "꽃게걸";
var att_val = 0;
var att_val = 0;

function logMessage(msg, color) {
    if (!color) { color = 'white'; } // 전투 실행 로그 색
    // out += msg+'\n';
    // document.getElementById('log').innerHTML = out;
    var div = document.createElement('div'); // 변수 div에 div를 생성하는 함수 대입
    div.innerHTML = msg; // 그 div에 msg 값 대입
    div.style.color = color; // 그 div 스타일 설정
    document.getElementById('log').appendChild(div); // log에 div변수 값 대입
}

// 캐릭터 생성

// 객체가 생성된것
var hero = new Character((name_val), 100, 10, 1, 0, []);

function start() {
    if (!onof) {
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
};

function Battle(){
    var monster = monster_Sponsor();
    
    logMessage("혈향에 취해있는"+monster.name+"를 조우" ,'green', '#BCE55C');
    logMessage(hero.name+"을(를) 보고는 괴성을 지르며 "+monster.name+"가 달려듭니다", '#BCE55C');
    logMessage(hero.name + "과" + monster.name + "이 전투", 'green', '#BCE55C');

    // 전투 1
    while (true) {

        monster.hp -= hero.att;

        logMessage(hero.name + " 이 " + monster.name + " 강타 합니다");
        logMessage(monster.name + " 의 체력이 " + monster.hp + " 남았습니다");

        if (monster.hp <= 0) {
            logMessage(hero.name + "이 승리 했습니다");
            logMessage("남은 체력은" + hero.hp,'Yellow');
            cnt++;
            
            if(cnt == 3){
                logMessage(hero.name + " 은 썩은 살점을 털어내고 앞으로 전진합니다", '#BCE55C');
                logMessage("저 멀리 신음소리가 들려옵니다", '#BCE55C');
                Battle_two();
                break;
            }
            Battle()
            break;
            
        }

        if(monster.hp >= 0){
            hero.hp -= monster.att;

            logMessage(monster.name + " 이 " + hero.name + " 강타 합니다");
            logMessage(hero.name + " 의 체력이 " + hero.hp + " 남았습니다");
        }

        if(hero.hp <= 0){
            logMessage(hero.name + "이 패배 했습니다", 'red');

            Go_back = document.createElement( 'button' );
            var Go_back_text = document.createTextNode( '내가죽음' );
            Go_back.appendChild( Go_back_text );
            fdf.appendChild( Go_back );
            Go_back.setAttribute( 'onclick' ,"Go_back_bt()" );
            break;
        } 
    }
}

function Battle_two() {
    var trap = trap_Sponsor();

    hero.hp -= trap.att;

    logMessage(hero.hp);
    boss();
}

function boss(){
    var boss_monster = boss_monster_Sponsor();

    // 보스 조우

    logMessage("핏빛 안개를 뚫고 소리가 들리는 방향으로 뛰어 갑니다", '#BCE55C');
    logMessage("신음소리가 더욱 더 가까이 들려오기 시작합니다", '#BCE55C');

    if (boss_monster.name == "Armour_Ghoul") {
        logMessage("비명을 따라 도착한 곳에는", '#BCE55C');
        logMessage(boss_monster.name + " 이 " + hero.name + "을(를) 향해 " + "썩어가는 눈동자로 "+hero.name+"을(를) 바라보고있습니다",'Orange');
        logMessage("인간의 목소리를 따라하는 "+boss_monster.name+"이 낄낄 대며 날선 손톱을 들어 올립니다");
    }

    logMessage(hero.name + "과" + boss_monster.name + "이 전투 합니다", 'green');

    while (true) {
        // 보스 몬스터 체력을 hero.att만큼 깎는다 
        boss_monster.hp -= hero.att;

        logMessage(hero.name+"이(가)"+boss_monster.name+"을(를) 공격합니다");
        logMessage(boss_monster.name+"의 체력이"+boss_monster.hp+" 남았습니다");

        // 보스 몬스터의 체력이 0과 같거나 많으면 출력, 보스가 죽었다면
        if (boss_monster.hp <= 0) {
            logMessage(hero.name + "이(가)" + boss_monster.name + "과 의 전투에서 승리 했습니다 축하드립니다", '#BCE55C');
            logMessage(hero.name + "로 인해 더 이상의 희생자는 생겨나지 않을것입니다", '#BCE55C');
            logMessage("당분간은 말이죠...", 'green');
            logMessage("남은 체력은" + hero.hp,'Yellow');

            // hero.hp = 100;

            // // 처음으로
            Go_back = document.createElement( 'button' );
            var Go_back_text = document.createTextNode( '보스전1' );
            Go_back.appendChild( Go_back_text );
            fdf.appendChild( Go_back );
            Go_back.setAttribute( 'onclick' ,"Go_back_bt()" );

            dt_st_att.innerHTML = hero.att;
            dt_st_hp.innerHTML = hero.hp;

            logMessage(hero.att);
            break;

        }
        // 보스 몬스터가 0 보다 체력이 많다면 출력 ,보스가 살았다면
        if(boss_monster.hp >= 0){
            hero.hp -= boss_monster.att;
            logMessage(boss_monster.name+"이(가)"+hero.name+"을(를) 공격합니다");
            logMessage(hero.name+"의 체력이"+hero.hp+" 됐습니다");
        }

        // hero의 체력이 0보다 적거나 같다면, 내가 죽었다면
            hero.hp -= boss_monster.att;
        if (hero.hp <= 0) {
            logMessage(hero.name + "이(가)" + boss_monster.name + "과 의 전투에서 패배 했습니다",'red');
            logMessage(boss_monster.name + hero.name+" 의 목소리로 더 많은 희생자를 만들것입니다",'red');
            
            // // 처음으로
            Go_back = document.createElement( 'button' );
            var Go_back_text = document.createTextNode( '보스전2' );
            Go_back.appendChild( Go_back_text );
            fdf.appendChild( Go_back );
            Go_back.setAttribute( 'onclick' ,"Go_back_bt()" );
            break;
        }
    }
}

// -------------------
function Go_back_bt() {
    location.reload(true);
}
// -----------------------

// ---------------------------

//몬스터 생성 1
function Monster(name, hp, att, lev, xp) {
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.lev = lev;
    this.xp = xp;
}

// 몬스터 생성 이름, 체력, 공격력,레벨,경험치
function monster_Sponsor() {

    var monsters = [
        ["Ghoul", 10, 3, 5],
        ["Specter", 50, 5, 10],    
        ["Spider", 50, 6, 7],
        ["Dead grave keeper", 20, 10, 4],
        ["dead_orc", 30, 200, 1]
    ];

    // var monsters = [
    //     ["Ghoul", 500, 300, 5],
    //     ["Specter", 500, 500, 10],    
    //     ["Spider", 500, 600, 7],
    //     ["Dead grave keeper", 200, 100, 4],
    //     ["dead_orc", 300, 200, 1]
    // ];

    var monster = monsters[Math.floor(Math.random() * 5)];
    return new Monster(monster[0], monster[1], monster[2], monster[3])
}

// 보스 몬스터 생성
function Boss_monster(name, hp, att, lev, xp) {
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.lev = lev;
    this.xp = xp;
}

// 보스 몬스터 생성 이름, 체력, 공격력,레벨,경험치,아이템
function boss_monster_Sponsor() {

    var boss_monsters = [
        ["Armour_Ghoul", 1, 1, 1, 1],
        ["Armour_Ghoul", 2, 1, 1, 1],
        ["Armour_Ghoul", 2, 1, 1, 1],
        ["Armour_Ghoul", 200, 1000, 1, 1],
        ["Armour_Ghoul", 200, 1000, 1, 1]
    ];

    // var boss_monsters = [
    //     ["King_Goblin", 1, 1, 1, 5],
    //     ["King_Trol", 1, 1, 3, 20],
    //     ["King_Orc", 1, 1, 7, 100],
    //     ["Armour_Ghoul", 20, 10, 1, 1],
    //     ["King_Orc", 1, 1, 7, 100]
    // ];
    var boss_monster = boss_monsters[Math.floor(Math.random() * 4)];
    return new Boss_monster(boss_monster[0], boss_monster[1], boss_monster[2], boss_monster[3], boss_monster[4])
}



// 아이템 생성

// 보스 아이템
function Boos_item(name) {
    this.name = name;
}

// 보스 아이템 이름
function Boss_item_sponsor() {

    var boss_items = [
        ["rotten flesh"],
        ["ffff"]
    ];
    var boos_item = boss_items[Math.floor(Math.random() * 1)];
    return new Boos_item(boos_item[0],boos_item[1])
}

// 아이템 생성하기
function Item(name, att) {
    this.name = name;
    this.att = att;
}

// 아이템 이름,  공격력
function Drop_items() {

    var items = [
        ["rusty sword", 10],
        ["long sword", 20],
        ["Morning Star", 30],
        ["Rifle", 400],
    ];
    var item = items[Math.floor(Math.random() * 4)];
    return new Item(item[0], item[1])
}



// 캐릭터 생성 이름, 체력, 공격력
function Character(name, hp, att, lev, xp, it) {
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.lev = lev;
    this.xp = xp;
    this.it = it;
}



// 보스 몬스터 생성하기
function Boss_monster(name, hp, att, lev, xp) {
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.lev = lev;
    this.xp = xp;
}

// 보스 몬스터 생성 이름, 체력, 공격력,레벨,경험치,아이템
function boss_monster_Sponsor() {

    var boss_monsters = [
        ["Armour_Ghoul", 1, 1, 1, 1],
        ["Armour_Ghoul", 2, 1, 1, 1],
        ["Armour_Ghoul", 2, 1, 1, 1],
        ["Armour_Ghoul", 200, 1000, 1, 1],
        ["Armour_Ghoul", 200, 1000, 1, 1]
    ];

    // var boss_monsters = [
    //     ["King_Goblin", 1, 1, 1, 5],
    //     ["King_Trol", 1, 1, 3, 20],
    //     ["King_Orc", 1, 1, 7, 100],
    //     ["Armour_Ghoul", 20, 10, 1, 1],
    //     ["King_Orc", 1, 1, 7, 100]
    // ];
    var boss_monster = boss_monsters[Math.floor(Math.random() * 4)];
    return new Boss_monster(boss_monster[0], boss_monster[1], boss_monster[2], boss_monster[3], boss_monster[4])
}

// 함정 생성

//함정 생성 1
function Trap(name, att) {
    this.name = name;
    this.att = att;
}

// 함정 생성 이름, 체력, 공격력
function trap_Sponsor() {

    var traps = [
        ["poison", 5],
        ["arrow", 5]
    ];
    var trap = traps[Math.floor(Math.random() * 2)];
    return new Trap(trap[0], trap[1])
}


// 처음으로 버튼 생성
function Go_back_bt() {
    location.reload(true);
}

function rm_Go_back_bt() {
    location.reload(true);
}
