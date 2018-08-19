class Ledge{
     constructor(brain){
         this.x=150
         this.y=500
         this.length=50
         this.bredth=20
         this.velocity= 20
         this.fitness = 0
         this.score = 0
         if(brain)
         {
             this.brain = brain.copy()
         }
         else
         {
            this.brain = new NeuralNetwork(6,6,3)
         }
     }
     mutate()
     {
        this.brain.mutate(0.1)
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
        inputs[5] = this.x+this.length
        let outputs= this.brain.feedforward(inputs)
        if(outputs.data[0]>outputs.data[1] && outputs.data[0]>outputs.data[2])
        {
            this.move(-1)
        }
        else if(outputs.data[2]>outputs.data[0] && outputs.data[2]>outputs.data[1])
        {
            this.move(1)
        }
        else if(outputs.data[1]>outputs.data[0] && outputs.data[1]>outputs.data[2])
        {
            this.move(0)
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