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
        
        //15 rows tall, 26 col wide
        map.loadData(mapData);
        
        var player1 = new Sprite(32, 32);
        player1.x = 5 * 16;
        player1.y = 9 * 16;
        player1.lastDown = "R";
        player1.walkingRight = [18, 18, 19, 19, 19, 20, 20, 19, 19, 19];
        player1.walkingLeft = [9, 9, 10, 10, 10, 11, 11, 10, 10, 10];
        player1.walkingUp = [27, 27, 28, 28, 28, 29, 29, 28, 28, 28];
        player1.walkingDown = [0, 0, 1, 1, 1, 2, 2, 1, 1, 1];
        player1.image = game.assets['chara0.png'];
        player1.frame = player1.walkingRight;
        
        
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
                 
        }
        );
        
        document.addEventListener('keydown', function(e) {
            if (e.code == 'Space'){
                let xFrame = Math.floor(player1.x / 16);
                let yFrame = Math.floor(player1.y / 16);
                mapData[yFrame][xFrame] = 21;
                map.loadData(mapData);
            }
            console.log(` ${e.code}`);
        });
        
        
        
        var stage = new Group();
        stage.addChild(map);
        stage.addChild(player1);
        game.rootScene.addChild(stage);
    };
    game.start();
};