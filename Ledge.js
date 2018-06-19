class Ledge{
     constructor(){
         this.x=150
         this.y=500
         this.length=100
         this.bredth=20
         this.velocity= 30
     }
     show()
     {
        fill(255)
        rect(this.x,this.y,this.length,this.bredth)
     }
     think()
     {

     }
     move(x)
     {
        if((x<0 && ledge.x>0) || (x>0 && ledge.x+ledge.length<width))
        {
            this.x += this.velocity*x
        }
     }
}