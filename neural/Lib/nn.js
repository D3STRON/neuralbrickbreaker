
class NeuralNetwork{
    constructor(numI, numH, numO)
    {
        if (numI instanceof NeuralNetwork) {
            let a = numI;
            this.input_nodes = a.input_nodes;
            this.hidden_nodes = a.hidden_nodes;
            this.output_nodes = a.output_nodes;
      
           //console.log(a)
            this.weight_ih = a.weight_ih.copy();
            this.weight_ho = a.weight_ho.copy();
      
            this.bias_h = a.bias_h.copy();
            this.bias_o = a.bias_o.copy();
            this.activation= a.activation
          } else {
        this.input_nodes=numI 
        this.hidden_nodes=numH
        this.output_nodes=numO
        this.weight_ih= new Matrix(this.hidden_nodes,this.input_nodes)// the list of weights between input nodes and hidden nodes in this adjacency matrix
        this.weight_ih.randomize()// all weights will be random to begin with
        this.weight_ho=new Matrix(this.output_nodes,this.hidden_nodes)//the list of weights between hidden nodes and output nodes in this adjacency matrix
        this.weight_ho.randomize()
        this.bias_h= new Matrix(this.hidden_nodes,1)
        this.bias_h.randomize()
        this.bias_o=new Matrix(this.output_nodes,1)
        this.bias_o.randomize()
        this.learning_rate= 0.1
        this.activation = reLU
          }
    }

    feedforward(input_array)
    {
        this.inputs = Matrix.fromArray(input_array)// converting input array to a object of Matrix class to perfomr Matrix operations
        
        this.hidden= Matrix.multiply(this.weight_ih,this.inputs)
        this.hidden.add(this.bias_h)//output of the weighted sum plus bias
        this.hidden.map(this.activation)// finally pass that outputs at every hidden node through the activation function to get the hidden layers final output
        
        let output=Matrix.multiply(this.weight_ho,this.hidden)//simialar for the final output layer for which the hidden layer is the input
        output.add(this.bias_o)
        output.map(this.activation)

        return output
    }

    

    mutate(rate) {
        function mutate(val)
        {
            if(Math.random()<rate)
            {
                return val +randomGaussian(0, 0.1)
            }else{
                return val
            }
        }    
    //console.log(this.weight_ih)    
    this.weight_ih.map(mutate);
    this.weight_ho.map(mutate);
    this.bias_h.map(mutate);
    this.bias_o.map(mutate);
  }
  copy()
  {
      return new NeuralNetwork(this)
  }
}

function sigmoid(x)
{
   return 1/(1+Math.exp(-x))
}
function reLU(x)
{
    if(x>=0)
    {
        return x

    }
    return 0
} 
