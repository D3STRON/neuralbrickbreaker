class Ledge{
     constructor(){
         this.x=150
         this.y=500
         this.length=100
         this.bredth=20
         this.velocity= 30
         this.brain = new NeuralNetwork(5,5,3)
     }
     show()
     {
        fill(255)
        rect(this.x,this.y,this.length,this.bredth)
     }
     think(ball)
     {
        let inputs = []
        inputs[0] = ball.x
        inputs[1] = ball.y
        inputs[2] = ball.velocity_x
        inputs[3] = ball.velocity_y
        inputs[4] = this.x
        let outputs= this.brain.feedforward(inputs)
        if(outputs.data[0]>outputs.data[1] && outputs.data[0]>outputs.data[2])
        {
            this.move(-1)
        }
        else if(outputs.data[2]>outputs.data[0] && outputs.data[2]>outputs.data[1])
        {
            this.move(1)
        }
     }

     hit(ball)
     {
         if(ball.x+ball.rad>this.x && ball.x-ball.rad<this.x+this.length && ball.velocity_y>0)
        {
            if(ball.y+ball.rad>=this.y && ball.y<this.y)
            {
                return 1
            }
        }
        else if(ball.y-ball.rad<this.y+this.bredth && ball.y>this.y && ball.x>this.x && ball.x<this.x+this.length)
        {
            return 1
        }
        else if(ball.x-ball.rad<=this.x+this.length && ball.x>this.x + this.length)
        {
           if(ball.y>=this.y && ball.y<=this.y+this.bredth && ball.velocity_x<0)
           {
               return 0
           }
        }
        else if(ball.x+ball.rad>=this.x && ball.x<this.x)
        {
            if(ball.y>=this.y && ball.y<=this.y+this.bredth && ball.velocity_x>0)
           {
               return 0
           }
        }
        return -1
     }

     move(x)
     {
        if((x<0 && this.x>0) || (x>0 && this.x+this.length<width))
        {
            this.x += this.velocity*x
        }
     }
}