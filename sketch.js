let brick=[]
let ball
let ledge
function setup()
{
    createCanvas(400,600)
    
    for(let j=0;j<4;j++)
    {
        brick[j]=[]
        for(let i=0;i<8;i++)
        {
            brick[j][i]=new Brick(i*50,j*50)
        }
    }
    ledge= new Ledge()
    ball = new Ball()
}

function draw()
{
    background(0)
    for(let j=0;j<4;j++)
    {
        for(let i=0;i<8;i++)
        {
            
            if(brick[j][i] && brick[j][i].hit(ball))
            {
                brick[j][i]=undefined
            }
            else if(brick[j][i]){
                brick[j][i].show()
            }
        }
    }
    ledge.show()
    ball.show()
    ball.update(ledge)
}
function keyPressed()
{
       if(key == '1')
       {
          ledge.move(-1)
       }
       else if(key == '2')
       {
           ledge.move(1)
       }
}