class Snow {
  constructor(x,y,width,height){
      this.option={restitution=0.5}
  
    this.body=Matter.Body.create(x,y,width,height)
    World.add (world,this.body)

}
display(){
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
}
}
