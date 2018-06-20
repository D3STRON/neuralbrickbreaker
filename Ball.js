class Ball{
    constructor()
    {
        this.x = 200
        this.y = 400
        this.list=[-5,-4,-3,-2,2,3,4,5]
        this.velocity_x = random(this.list)
        this.velocity_y = -4
        this.rad = 10
    }
    show()
    {
        fill(255)
        ellipse(this.x,this.y,this.rad*2,this.rad*2)
    }
    update(ledge)
    {
        if(this.x+this.rad>=width || this.x-this.rad<= 0)
        {
            this.velocity_x *=-1
        }
        if(this.y+this.rad>= height || this.y-this.rad<= 0)
        {
            this.velocity_y *=-1
        }
        else if(this.y+this.rad>=ledge.y && this.y<ledge.y && this.x+this.rad>ledge.x && this.x-this.rad<ledge.x+ledge.length && this.velocity_y>0)
        {
            this.velocity_y *=-1
        }
        else if(this.y-this.rad<ledge.y+ledge.bredth && this.y>ledge.y && this.x>ledge.x && this.x<ledge.x+ledge.length)
        {
            this.velocity_y *=-1
        }
        else if(this.x-this.rad<=ledge.x+ledge.length && this.x>ledge.x + ledge.length)
        {
           if(this.y>=ledge.y && this.y<=ledge.y+ledge.bredth && this.velocity_x<0)
           {
               this.velocity_x *=-1
           }
        }
        else if(this.x+this.rad>=ledge.x && this.x<ledge.x)
        {
            if(this.y>=ledge.y && this.y<=ledge.y+ledge.bredth && this.velocity_x>0)
           {
               this.velocity_x *=-1
           }
        }
        this.x += this.velocity_x
        this.y += this.velocity_y
    }
}