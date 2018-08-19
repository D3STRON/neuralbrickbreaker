function nextGeneration()
{
    calculateFitness()
    for(let i=0;i<TOTAL;i++)
    {
        ledges[i]= pickOne()
    }
    savedLedges=[]
}

function pickOne()
   {
       //mimics natural selection
       var index=savedLedges.length-1
       // select a numbers between 1 and 0
       var r= random(1)
       while(r>0)
       {
           // greater the fitness of a ledge the closer it will be to one so greater is the chance that r- ledge.fitness becomes 0 or closer to zero or negative
           r= r-savedLedges[index].fitness
           index--
       }
       index++
       // we take the index of the ledge which made r zero and select it
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