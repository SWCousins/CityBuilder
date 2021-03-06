enchant();

window.onload = function() {
    var game = new Core(620, 320);
    game.fps = 12;
    game.preload('chara0.png', 'map0.png', 'icon0.png');
    
    game.onload = function() { //Create Map
        var map = new Map(16, 16);
        map.image = game.assets['map0.png'];
        var mapData = [
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            ];
        var map2Data = [
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            ];
        var roomMap = [
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,3,3,3,3,3,3,3,3,3],
            [-1,-1,3,3,3,3,3,3,3,3,3],
            [-1,-1,3,3,3,3,3,3,3,3,3],
            [-1,-1,3,3,3,3,3,3,3,3,3],
            [-1,-1,3,3,3,3,3,3,3,3,3],
            [-1,-1,3,3,3,3,3,3,3,3,3],
            [-1,-1,3,3,3,3,3,3,3,3,3],
        ];
        var roomStuff = [
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
        ]
        
        map.collisionData = [
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        ];
        
        //19 rows tall, 34 col wide
        map.loadData(mapData, map2Data);
        //map.loadData(roomMap);
        
        var player1 = new Sprite(32, 32);
        player1.x = 5 * 16;
        player1.y = 7 * 16;
        player1.lastDown = 10;
        player1.walkingRight = [18, 18, 19, 19, 19, 20, 20, 19, 19, 19];
        player1.walkingLeft = [9, 9, 10, 10, 10, 11, 11, 10, 10, 10];
        player1.walkingUp = [27, 27, 28, 28, 28, 29, 29, 28, 28, 28];
        player1.walkingDown = [0, 0, 1, 1, 1, 2, 2, 1, 1, 1];
        player1.image = game.assets['chara0.png'];
        player1.frame = player1.walkingRight;
        player1.cities = 0;
        player1.gold = 0;
        player1.lastKnown = [player1.x, player1.y];
        player1.map = "main";
        
        
        player1.addEventListener('enterframe', function() {
    
                
                if (game.input.left) {
                    player1.x -= 2;
                    player1.frame = player1.walkingLeft;
                    player1.lastDown = 10;
                } else if (game.input.right) {
                    player1.x += 2;
                    player1.frame = player1.walkingRight;
                    player1.lastDown = 19;
                } else if (game.input.up) {
                    player1.y -= 2;
                    player1.frame = player1.walkingUp;
                    player1.lastDown = 28;
                } else if (game.input.down) {
                    player1.y += 2;
                    player1.frame = player1.walkingDown;
                    player1.lastDown = 1;
                } else {
                    player1.frame = player1.lastDown;
                    //console.log(player1.y / 16);
                }
            
            // if the player comes close to a city, a new map is loaded and previous x, y coordinates are saved
            if ( mapData[Math.round ((player1.y + 8) / 16)][Math.round((player1.x + 8) / 16)] == 21 && player1.map == "main") {
                map.loadData(roomMap);
                player1.lastKnown = [player1.x, player1.y]
                player1.map = "room";
                player1.x = 7 * 16;
                player1.y = 7 * 16;
            }
            if (player1.x >= 16 * 10 && player1.map == "room"){
                map.loadData(mapData, map2Data);
                player1.x = player1.lastKnown[0] + 32;
                player1.y = player1.lastKnown[1];
                player1.map = "main";
            } else if (player1.x <= 1 * 16 && player1.map == "room") {
                map.loadData(mapData, map2Data);
                player1.x = player1.lastKnown[0] - 32;
                player1.y = player1.lastKnown[1];
                player1.map = "main";
            } else if (player1.y <= 1 * 16 && player1.map == "room"){
                map.loadData(mapData, map2Data);
                player1.x = player1.lastKnown[0];
                player1.y = player1.lastKnown[1] - 32;
                player1.map = "main";
            } else if (player1.y >= 8 * 16 && player1.map == "room"){
                map.loadData(mapData, map2Data);
                player1.x = player1.lastKnown[0];
                player1.y = player1.lastKnown[1] + 32;
                player1.map = "main";
            }
                 
        }
        );
        
        var addFruit = function() {
            var fruit = new Sprite(16, 16);
            fruit.x = player1.x;
            fruit.y = player1.y;
            fruit.image = game.assets['icon0.png'];
            fruit.frame = 16;
            
            
            fruit.addEventListener('enterframe', function(e) {
                if(player1.map == "main"){       
                    game.rootScene.removeChild(this);
                    
                }
                
            
        });
        game.rootScene.addChild(fruit);
        };
                                   
        
        var gold = new Sprite(16, 16);
        gold.x = 31 * 16;
        gold.y = 0 * 16;
        gold.image = game.assets['icon0.png'];
        gold.frame = 14;
        
        var counter1 = new Sprite(16, 16);
        counter1.x = gold.x + 16;
        counter1.y = 0 * 16;
        counter1.image = game.assets['icon0.png'];
        counter1.frame = -1;
        
        var counter2 = new Sprite(16, 16);
        counter2.x = counter1.x + 16;
        counter2.y = 0 * 16;
        counter2.image = game.assets['icon0.png'];
        counter2.frame = -1;
        
        document.addEventListener('keydown', function(e) {
            console.log(e.code);
            
            if (e.code == 'KeyT'){
                let xFrame = Math.round((player1.x + 8) / 16);
                let yFrame = Math.round((player1.y + 8) / 16);
                map2Data[yFrame][xFrame] = 23;
                map.collisionData[yFrame][xFrame] = 1;
                map.loadData(mapData, map2Data);
            }
            
            if (e.code == 'KeyF'){
                addFruit();
            }
            
            if (e.code == 'Space' && player1.map == "main"){
                let xFrame = Math.floor(player1.x / 16) + 1;
                let yFrame = Math.floor(player1.y / 16);
                mapData[yFrame][xFrame] = 21;
                map.collisionData[yFrame][xFrame] = 1;
                map.loadData(mapData, map2Data);
                player1.cities += 1;
                
                if (counter2.frame < 8){
                    counter2.frame += 1;
                } else if (counter2.frame == 8){
                    counter1.frame += 1;
                    counter2.frame += 1;
                } else if (counter2.frame == 9){
                    counter2.frame = 0;
                } else {
                    counter2.frame = 0;
                }
                
                if (counter1.frame > 8 && counter2.frame > 8) {
                    counter1.frame = 8;
                    counter2.frame = 8;
                }
                
            } else if (e.code == 'Space' && player1.map == "room"){
                let xFrame = Math.round(player1.x / 16);
                let yFrame = Math.round(player1.y / 16);
                roomMap[yFrame][xFrame] = 15;
                roomStuff[yFrame][xFrame] = 16;
                map.loadData(roomMap, roomStuff);
            }
            console.log(` ${e.code}`);
        });
        
        
        
        var stage = new Group();
        stage.addChild(map);
        stage.addChild(player1);
        stage.addChild(gold);
        stage.addChild(counter1);
        stage.addChild(counter2)
        game.rootScene.addChild(stage);
    };
    game.start();
};