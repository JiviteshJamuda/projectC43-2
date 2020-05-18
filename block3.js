class greenBlock {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 15;  
        this.gBlock = createSprite(this.x, this.y, this.width, this.height);
        this.gBlock.shapeColor = "green";
        
    }

    kill(){
        if(ball.isTouching(this.gBlock)){
            ball.bounceOff(this.gBlock);
            this.gBlock.destroy();
            score++;
        };
    }
}