const TOTAL = 500
let ledges = []
let brick = []
let hit_ledge =[]
let savedLedges = []
let ball
let no_of_brickrows=8
let no_of_brickcols=16
let brick_side= 25
function setup()
{
    createCanvas(400,600)
    
    for(let j=0;j<no_of_brickrows;j++)
    {
        brick[j]=[]
        for(let i=0;i<no_of_brickcols;i++)
        {
            brick[j][i]=new Brick(i*brick_side,j*brick_side)
        }
    }
    for(let i=0;i<TOTAL;i++)
    {
        ledges[i]= new Ledge()
        hit_ledge.push(1)
    }
    ball = new Ball()
}

function draw()
{
    background(0)
    for(let j=0;j<no_of_brickrows;j++)
    {
        for(let i=0;i<no_of_brickcols;i++)
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
    let v_change= false
    for(let i=0;i<ledges.length;i++)
    {
        if(ball.y+ball.rad>=ledges[i].y)
        {
            if(ledges[i].hit(ball)==1)
            {
                //console.log('true')
                v_change=true
                ball.velocity_x = random(ball.list)*(ball.velocity_x/Math.abs(ball.velocity_x))
            }
            else if(ball.x+ball.rad<ledges[i].x || ball.x-ball.rad>ledges[i].x+ledges[i].length)
            {
                savedLedges.push(ledges[i])
                ledges.splice(i,1)
                i-=1
            }
        }
        if(ledges[i])
        {
            ledges[i].score+=1
            ledges[i].think(ball)
            ledges[i].show()
        }
    }
    if(v_change)
    {
        ball.velocity_y *=-1
    }
    if(ledges.length===0 && ball.y+ball.rad>=height)
    {   
        nextGeneration()
        renew()
    }
    ball.update()
    ball.show()
}

function renew()
{
    for(let j=0;j<no_of_brickrows;j++)
    {
        brick[j]=[]
        for(let i=0;i<no_of_brickcols;i++)
        {
            brick[j][i]=new Brick(i*brick_side,j*brick_side)
        }
    }
    ball = new Ball()
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

// if(this.y+this.rad>=ledge.y && this.y<ledge.y && this.x+this.rad>ledge.x && this.x-this.rad<ledge.x+ledge.length && this.velocity_y>0)
//         {
//             this.velocity_y *=-1
//             this.velocity_x = random(this.list)*(this.velocity_x/Math.abs(this.velocity_x))
//         }
//         else if(this.y-this.rad<ledge.y+ledge.bredth && this.y>ledge.y && this.x>ledge.x && this.x<ledge.x+ledge.length)
//         {
//             this.velocity_y *=-1
//             this.velocity_x = random(this.list)*(this.velocity_x/Math.abs(this.velocity_x))
//         }
//         else if(this.x-this.rad<=ledge.x+ledge.length && this.x>ledge.x + ledge.length)
//         {
//            if(this.y>=ledge.y && this.y<=ledge.y+ledge.bredth && this.velocity_x<0)
//            {
//                this.velocity_x *=-1
//            }
//         }
//         else if(this.x+this.rad>=ledge.x && this.x<ledge.x)
//         {
//             if(this.y>=ledge.y && this.y<=ledge.y+ledge.bredth && this.velocity_x>0)
//            {
//                this.velocity_x *=-1
//            }
//         }