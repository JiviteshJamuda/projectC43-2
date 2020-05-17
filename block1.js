class blueBlock {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 15;  
        this.bBlock = createSprite(this.x, this.y, this.width, this.height);
        this.bBlock.shapeColor = "blue";
        
    }

    kill(){
        if(ball.isTouching(this.bBlock)){
            ball.bounceOff(this.bBlock);
            this.bBlock.destroy();          
        };
    }
}