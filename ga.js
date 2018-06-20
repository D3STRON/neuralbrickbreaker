function nextGeneration()
{
    calculateFitness()
    for(let i=0;i<TOTAL;i++)
    {
        ledges[i]= pickOne()
        hit_ledge.push(1)
    }
    savedLedges=[]
}

function pickOne()
   {
       var index=0
       var r= random(1)
       while(r>0)
       {
           r= r-savedLedges[index].fitness
           index++
       }
       index--
       let ledge =  savedLedges[index]
       let child = new Ledge(ledge.brain)
       child.mutate()
       return child
   }

function calculateFitness()
{
    let sum = 0
    for(let ledge of savedLedges)
    {
        sum += ledge.score
    }

    for(let i =0 ; i<savedLedges.length ; i++)
    {
        savedLedges[i].fitness = savedLedges[i].score/sum
    }
}