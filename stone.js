class Stone{
    constructor(x,y,width,height){
        var Stone_options={
            'restitution':0.8,
            'friction':0.9,
            'dencity':12
        }
        this.body=Bodies.rectangle(x,y,width,height,Stone_options);
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
         var St_pos=this.body.position;
        push()
        translate(St_pos.x,St_pos.y);
        strokeWeight(5);
        stroke("black");
        fill("black");
        rect(0,0,this.width,this.height);
        pop()
    }
}