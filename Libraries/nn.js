
class NeuralNetwork{
    constructor(parameters)
    {
        this.weights = [];
        this.biases = [];
        if (parameters instanceof NeuralNetwork) {
            for(let i=0;i<parameters.weights.length;i++)
            {
                this.weights.push(parameters.weights[i].copy());
                this.biases.push(parameters.biases[i].copy());
            }
            this.activation= parameters.activation;
            this.parameters = parameters.parameters;
            this.delta_activation= parameters.delta_activation;
        } 
        else {
            this.parameters = parameters;
            for(let i=0;i<this.parameters.length-1;i++)
            {
                this.weights.push(new Matrix(parameters[i+1],parameters[i]));
                this.weights[i].randomize();
                this.biases.push(new Matrix(parameters[i+1],1));
                this.biases[i].randomize();
            }
            this.learning_rate= 0.;
            this.activation = reLU;
            this.delta_activation= dsigmoid;
          }
    }

    feedforward(input_array)
    {
        this.layer = [Matrix.fromArray(input_array)]// converting input array to a object of Matrix class to perfomr Matrix operations
        
        for(let i=0;i<this.weights.length;i++)
        {
            this.layer.push(Matrix.multiply(this.weights[i],this.layer[i]));
            this.layer[i+1].add(this.biases[i]);//output of the weighted sum plus bias
            this.layer[i+1].map(this.activation);// finally pass that layer outputs at every layer node through the activation function to get the layers final output
        }
        return this.layer[this.layer.length-1];
    }

    train(input_array,target_array)
    {
        let outputs=this.feedforward(input_array)        
        let targets=Matrix.fromArray(target_array)
        let errors = Matrix.subtract(targets,outputs)//error to determine cost function
        //console.log(output_errors.data[0][0]*output_errors.data[0][0])

        //Calculate gradient for hidden to output
        let gradients= Matrix.map(outputs,this.delta_activation)// derivative for activation function output elements are now oi(1+oi)

        for(let i=this.layer.length-2;i>=0;i--)
        {
            gradients.multiply(errors);
            gradients.multiply(this.learning_rate);// multiplying every element with learning rate
            let layer_t = Matrix.transpose(this.layer[i]);
            let deltas_weight= Matrix.multiply(gradients,layer_t);//this if for deltas_weight which is the required change in Weights between i layer and i-1 layer
            this.weights[i].add(deltas_weight); // finally adjusting weights of ith layer
            this.biases[i].add(gradients);// finally adjusting biases of ith layer
            if(i>0)
            {
                errors= Matrix.multiply(Matrix.transpose(this.weights[i]),errors);
                gradients= Matrix.map(this.layer[i],this.delta_activation);
            }
        }
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
        for(let i=0;i<this.weights.length;i++)
        {
            this.weights[i].map(mutate);
            this.biases[i].map(mutate);
        }
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

function dsigmoid(y)
{
    return y*(1-y)
}

function tanh(x)
{
    return Math.tanh(x)
}

function dtanh(y)
{
    return 1-y*y
}

function taninv(x)
{
    return Math.atan(x)
}

function dtaninv(y)
{
    return 1/(1+y*y)
}

function reLU(x)
{
    if(x>=0)
    {
        return x

    }
    return 0
}