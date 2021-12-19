class Ground{

    constructor (x,y,w,h){
        var options ={
            isStatic: true
        }
        this.y=y;
        this.x=x;
        this.w=w;
        this.h=h;
        this.body=Bodies.rectangle(x,y,w,h, options);

        World.add(world,this.body);
    }
        display(){
            fill (0);
            rect (this.body.position.x, this.body.position.y,this.w,this.h);
        }
    }