class Brick{
    constructor(x,y)
    {
        this.length=25
        this.bredth= 25
        this.x = x
        this.y = y
    }

    show()
    {
        fill(255)
        rect(this.x, this.y, this.length, this.bredth)
    }

    hit(ball)
    {
        if(ball.y-ball.rad<=this.y+this.bredth && ball.x>this.x && ball.x<this.x+this.length)
        {
            ball.velocity_y *=-1
            return true
        }
        else if(ball.x+ball.rad>=this.x && ball.x<this.x && ball.y>this.y && ball.y<this.y+this.bredth)
        {
            ball.velocity_x *=-1
            return true
        }
        else if(ball.x-ball.rad<=this.x+this.length && ball.x>this.x && ball.y>this.y && ball.y<this.y+this.bredth)
        {
            ball.velocity_x *=-1
            return true
        }
        else if(ball.y+ball.rad>=this.y && ball.y<this.y && ball.x>this.x && ball.x<this.x+this.length)
        {
            ball.velocity_y *=-1
            return true
        }
        return false
    }
}