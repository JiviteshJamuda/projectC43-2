class redBlock {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 30;
        this.height = 15;  
        this.rBlock = createSprite(this.x, this.y, this.width, this.height);
        this.rBlock.shapeColor = "red";
    }

    kill(){
        if(ball.isTouching(this.rBlock)){
            ball.bounceOff(this.rBlock);
            this.rBlock.destroy();          
        };
    }
}