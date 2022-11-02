// 일반전투

function out_battle(){
    var monster = monster_Sponsor();

    logMessage("동굴 안쪽에는 최근에도 무엇인가 살았던 흔적이 곳곳에 남아있습니다");
    logMessage(monster.name+"를 조우");
    logMessage(hero.name+"과"+monster.name+"이 전투 합니다");

    // 몬스터 체력은 몬스터 체력만큼이다, 몬스터 체력이 0보다 작거나 같아지면 xp++
    while(true){
        monster.hp -= hero.att;
        if(monster.hp <= 0){
            logMessage(hero.name+"이(가)"+monster.name+"과 의 전투에서 승리 했습니다");
            logMessage("남은 체력은"+hero.hp);

            // 둘러보기
            find_button = document.createElement( 'button' );
            var find_text_button = document.createTextNode( '전진하기' );
            find_button.appendChild( find_text_button );
            document.body.appendChild( find_button );
            find_button.setAttribute( 'onclick' ,"Find()" );
            
            // onof = true;

            // 나가기 지우기
            out_button.remove();
            home_button.remove();
            break;
        }
        logMessage(monster.name+"의 체력이 "+monster.hp+"가 되었습니다.");
        hero.hp -= monster.att;
        if(hero.hp <= 0){
            logMessage(hero.name+"이(가)"+monster.name+"과 의 전투에서 패배 했습니다");
            
            // 처음으로
            Go_back = document.createElement( 'button' );
            var Go_back_text = document.createTextNode( '처음으로' );
            Go_back.appendChild( Go_back_text );
            document.body.appendChild( Go_back );
            Go_back.setAttribute( 'onclick' ,"Go_back_bt()" );
            break;
        }   
    }
    
}

function Go_back_bt(){
    location.reload(true);
}

function rm_Go_back_bt(){
    location.reload(true);
}

function Find(){

    find_button.remove();

    logMessage(" 깊고 깊게 들어갑니다..... ");
    logMessage(" 양갈래 길이 나왔습니다 어디로 들어가시겠습니까?");

    // 갈림길 오른쪽
    Mysterious_cave_right_road = document.createElement( 'button' );
    var Mysterious_cave_right_road_text = document.createTextNode( '오른쪽' );
    Mysterious_cave_right_road.appendChild( Mysterious_cave_right_road_text );
    document.body.appendChild( Mysterious_cave_right_road );
    Mysterious_cave_right_road.setAttribute( 'onclick' ,"Mysterious_cave_right_road_bt()" );

    // 갈림길 왼쪽
    Mysterious_cave_left_road = document.createElement( 'button' );
    var Mysterious_cave_left_road_text = document.createTextNode( '왼쪽' );
    Mysterious_cave_left_road.appendChild( Mysterious_cave_left_road_text );
    document.body.appendChild( Mysterious_cave_left_road );
    Mysterious_cave_left_road.setAttribute( 'onclick' ,"Mysterious_cave_right_road_bt()" );

    
}

function Mysterious_cave_right_road_bt(){
    Character()
    var item = Drop_items();
    var trap = trap_Sponsor();

    
    

    var choice_rm = Math.floor(Math.random()*2);

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

                // 처음으로
                Go_back = document.createElement( 'button' );
                var Go_back_text = document.createTextNode( '처음으로' );
                Go_back.appendChild( Go_back_text );
                document.body.appendChild( Go_back );
                Go_back.setAttribute( 'onclick' ,"Go_back_bt()" );
                logMessage("리포인트"+re_point+"를(을) 얻었습니다");
                logMessage("아이템 : "+ item.name+"을 얻었습니다 공격력이"+item.att+"상승 합니다");

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

                // 처음으로
                Go_back = document.createElement( 'button' );
                var Go_back_text = document.createTextNode( '처음으로' );
                Go_back.appendChild( Go_back_text );
                document.body.appendChild( Go_back );
                Go_back.setAttribute( 'onclick' ,"Go_back_bt()" );
                break;
            }
            logMessage(hero.name+"의 체력이 "+hero.hp+"가 되었습니다.");
        }
    }
}
