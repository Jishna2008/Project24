class Iron{
    constructor(x,y,width,height){
        var Iron_options={
            'restitution':0.8,
            'friction':3,
            'density':30
        }
        this.body=Bodies.rectangle(x,y,width,height,Iron_options);
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
     var   Ir_pos=this.body.position;
        push()
        translate(Ir_pos.x,Ir_pos.y);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("black");
        fill("brown");
        rect(0,0,this.width,this.height);
        pop()
    }
}