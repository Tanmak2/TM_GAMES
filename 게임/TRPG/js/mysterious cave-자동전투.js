// 자동전투

function start() {
    if(!onof){
        return;
    }
    onof = false;
    Character()
    var trap = trap_Sponsor();
    var boss_monster = boss_monster_Sponsor();
    var monster = monster_Sponsor();

    if(re_point >= 10){

        alert("자동 전투");

        logMessage("동굴 안에서 수상한 냄새가 나고 있습니다");
        logMessage("무언가에 홀린듯 동굴로 들어갑니다"); // 자동 전투만 나오는 log
        logMessage("동굴 안쪽에는 최근에도 무엇인가 살았던 흔적이 곳곳에 남아있습니다");

        // 전투 시작
        logMessage(monster.name+"를 조우");
        logMessage(hero.name+"과"+monster.name+"이 전투 합니다");

        while(true){
            monster.hp -= hero.att;
            if(monster.hp <= 0){
                logMessage(hero.name+"이(가)"+monster.name+"과 의 전투에서 승리 했습니다");
                logMessage("남은 체력은"+hero.hp);
                break;
            }
            logMessage(monster.name+"의 체력이 "+monster.hp+"가 되었습니다.");
            hero.hp -= monster.att;
            if(hero.hp <= 0){
                logMessage(hero.name+"이(가)"+monster.name+"과 의 전투에서 패배 했습니다");
                break;
            }   
        };
        
        // 양갈래 진입

        logMessage(" 깊고 깊게 들어갑니다..... ");
        logMessage(" 양갈래 길이 나왔습니다 어디로 들어가시겠습니까?");

        var choice_rm = Math.floor(Math.random()*2);

        // 함정 발동

        if(choice_rm == 0){
        hero.hp = hero.hp- trap.att
        logMessage(hero.name+"이(가)"+trap.name+"에 당했습니다"+hero.name+"의 남은 체력은"+hero.hp+"입니다");

        Mysterious_cave_right_road.remove();
        }
        else if(choice_rm > 0){
        var boss_monster = boss_monster_Sponsor();

        logMessage("동굴 깊숙히 들어갑니다");
        logMessage("횟불 하나에 의지한체 깊고 깊은 동굴을 들어갑니다");
        logMessage("그러자 주변이 달라짐이 느껴집니다!");
        logMessage(boss_monster.name+"를 조우!!");

        if(boss_monster.name == "King_Goblin"){
            logMessage(boss_monster.name+" 은 "+hero.name+"를(을) 향해"+"죽일 기세로 쳐다보고 있습니다");
        }
        if(boss_monster.name == "King_Trol"){
            logMessage(boss_monster.name+" 은 "+hero.name+"를(을) 향해"+"거대한 몽둥이를 높이 쳐들고 있습니다");
        }
        if(boss_monster.name == "King_Orc"){
            logMessage(boss_monster.name+" 은 "+hero.name+"를(을) 향해"+"붉은 안광을 내뿜고있습니다");
        }

        logMessage(hero.name+"과"+boss_monster.name+"이 전투 합니다");


            while(true){
                var item = Drop_items();
                boss_monster.hp -= hero.att;
                if(boss_monster.hp <= 0){
                logMessage(hero.name+"이(가)"+boss_monster.name+"과 의 전투에서 승리 했습니다 축하드립니다");
                    logMessage("남은 체력은"+hero.hp);
                    
                    Mysterious_cave_right_road.remove();
                    Mysterious_cave_left_road.remove();

                    re_point += 1;

                    hero.it = item.name;
                    hero.att += item.att;
                
                    logMessage(hero.name+"가 소유한 아이템은"+hero.it+"입니다"+"공격력은"+hero.att);
                    break;
                }
                logMessage(boss_monster.name+"의 체력이 "+boss_monster.hp+"가 되었습니다.");
                hero.hp -= boss_monster.att;
            


                if(hero.hp <= 0){
                    logMessage(hero.name+"이(가)"+boss_monster.name+"과 의 전투에서 패배 했습니다");

                    Mysterious_cave_right_road.remove();
                    Mysterious_cave_left_road.remove();
                }
                logMessage(hero.name+"의 체력이 "+hero.hp+"가 되었습니다.");
            }
        }
    }
    
    else{
        var log = document.getElementById('log');
        // log.innerHTML = "";
        logMessage("동굴 안에서 수상한 냄새가 나고 있습니다");
        logMessage("들어가시겠습니까?");
        // 들어간다
        out_button = document.createElement( 'button' );
        var out_text_button = document.createTextNode( '들어간다' );
        out_button.appendChild( out_text_button );
        document.body.appendChild( out_button );
        out_button.setAttribute( 'onclick' ,"out_battle()" );
        document.querySelector(".btn-submit").setAttribute("disabled", "true");
        // 왜 있지?
    }
}