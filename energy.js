var stage;
var queue;
var preloadText;


function preload(){
    stage = new createjs.Stage("boks");
    preloadText = new createjs.Text("0%", "30px Courier", "#FFF");
    stage.addChild(preloadText);
    queue = new createjs.LoadQueue(true);
    queue.on("progress", progress);
    queue.on("complete", init);

    queue.loadManifest([
        //{id:"zombieSS", src:"zombiesheet.json"},
        //"../img/zombieSheet.png"
    ]);
}

function progress(evt){
    preloadText.text = Math.round(evt.progress*100) + "%";
    stage.update();

}

function init(){
    stage.removeChild(preloadText);
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", tickHappened);


    //hero = new createjs.Bitmap(queue.getResult("../img/viola.png"));

    scoreText = new createjs.Text("Score: " + score, "30px Courier", "#FFF");
    stage.addChild(scoreText);
    levelText = new createjs.Text("Level: " + level, "30px Courier", "#FFF");
    levelText.y = 30;
    stage.addChild(levelText);

    //window.addEventListener('keydown', fingerDown);
    //window.addEventListener('keyup', fingerUp);

    elOn();
}

function elOn(){
    var i;
    for(i=0; i<level; i++) {
        zombieSpriteSheet = new createjs.SpriteSheet(queue.getResult("zombieSS"));
        var temp = new createjs.Sprite(zombieSpriteSheet, "walk");
        temp.width = 64;
        temp.height = 64;
        stage.addChild(temp);
        temp.y = stage.canvas.height;
        temp.x = Math.floor(Math.random()*(stage.canvas.width-temp.width));
        enemies.push(temp);
    }
}

function tickHappened(e){
    if(gameIsRunning) {
        moveEnemies();
        moveHero();
        moveStars();
        checkCollision();

        scoreText.text = "Score: "+score;
        levelText.text = "Level: "+level;
    }

    stage.update(e);
}