class Ball{
    constructor()
    {
        this.x = 200
        this.y = 400
        this.list=[5,6,7]
        this.direction=[-1,1]
        this.velocity_x = random(this.list)*random(this.direction)
        this.velocity_y = -4
        this.rad = 8
    }
    show()
    {
        fill(255)
        ellipse(this.x,this.y,this.rad*2,this.rad*2)
    }
    update()
    {
        if(this.x+this.rad>=width || this.x-this.rad<= 0)
        {
            this.velocity_x *=-1
        }
        if(this.y+this.rad>= height || this.y-this.rad<= 0)
        {
            this.velocity_y *=-1
        }
        this.x += this.velocity_x
        this.y += this.velocity_y
    }
}