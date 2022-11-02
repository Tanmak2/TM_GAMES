// 스탯


// 아이템 생성하기
function Item(name, att){
    this.name = name;
    this.att = att;
}

// 아이템 이름,  공격력
function Drop_items(){

    var items = [
        ["rusty sword", 10],
        ["long sword", 20],
        ["Morning Star", 30],
        ["Rifle", 400],
    ];
    var item = items[Math.floor(Math.random()*4)];
    return new Item(item[0], item[1])
}

// 객체가 생성된것
var hero = new Character(prompt('이름을 입력'), 100, 10, 1, 0,[]);

// 캐릭터 생성 이름, 체력, 공격력
function Character(name, hp, att, lev, xp, it){
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.lev = lev;
    this.xp = xp;
    this.it = it;
}

//몬스터 생성하기
function Monster(name, hp, att, lev, xp){
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.lev = lev;
    this.xp = xp;
}

// 몬스터 생성 이름, 체력, 공격력
function monster_Sponsor(){

    var monsters = [
        ["Goblin", 5, 1, 1, 1],
        ["Trol", 10, 10, 1, 1],
        ["Orc", 10, 100, 1, 1],
        ["Human", 5, 5, 5, 5]
    ];
    var monster = monsters[Math.floor(Math.random()*4)];
    return new Monster(monster[0], monster[1], monster[3], monster[4])
}

// 보스 몬스터 생성하기
function Boss_monster(name, hp, att, lev, xp){
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.lev = lev;
    this.xp = xp;
}

// 보스 몬스터 생성 이름, 체력, 공격력
function boss_monster_Sponsor(){

    // var boss_monsters = [
    //     ["King_Goblin", 50, 10, 1, 5],
    //     ["King_Trol", 100, 20, 3, 20],
    //     ["King_Orc", 150, 25, 7, 100]
    // ];

    var boss_monsters = [
        ["King_Goblin", 1, 1, 1, 5],
        ["King_Trol", 1, 1, 3, 20],
        ["King_Orc", 1, 1, 7, 100]
    ];
    var boss_monster = boss_monsters[Math.floor(Math.random()*3)];
    return new Boss_monster(boss_monster[0], boss_monster[1], boss_monster[2], boss_monster[3])
}

//함정 생성하기
function Trap(name, att){
    this.name = name;
    this.hp = hp;
    this.att = att;
}

// 함정 생성 이름, 체력, 공격력
function trap_Sponsor(name, att){

    var traps = [
        ["poison", 5],
        ["arrow", 5]
    ];
    var trap = traps[Math.floor(Math.random()*2)];
    return new Trap(trap[0], trap[1])
}