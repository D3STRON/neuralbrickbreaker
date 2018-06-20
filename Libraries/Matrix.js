
class Matrix{
    constructor(rows, cols)
    {
        this.rows=rows
        this.cols=cols
        this.data=[]
        for(let i=0;i<this.rows;i++)
        {
            this.data[i]=[]
            for(let j=0;j<this.cols;j++)
            {
                this.data[i][j]=0;
            }
        }
    }
    
    randomize()
    {
        for(let i=0;i<this.rows;i++)
        {
            for(let j=0;j<this.cols;j++)
            {
                this.data[i][j]=Math.random()*2-1//to get a small number between -1 and 1
            }
        }
    }
    static subtract(A,B)
    {
        if(A.cols===B.cols && A.rows===B.rows)
        {
            var C= new Matrix(A.rows,B.cols)
            for(let i=0;i<A.rows;i++)
            {
                for(let j=0;j<A.cols;j++)
                {
                    C.data[i][j]=A.data[i][j]-B.data[i][j];
                }
            }  
            return C 
        }
        else{
            console.log("A and B have different structure")
        }
    }
    static transpose(A)
    {
        if(A instanceof Matrix)
        {
           var B= new Matrix(A.cols,A.rows)
           for(let i=0;i<A.rows;i++)
           {
               for(let j=0;j<A.cols;j++)
               {
                   B.data[j][i]=A.data[i][j];
               }
           } 
           return B
        }
        else{
            console.log("Input is not of class Matrix")
            return undefined
        }
    }
    add(A)
    {
        if(A.rows===this.rows && A.cols===this.cols){
            for(let i=0;i<this.rows;i++)
            {
                for(let j=0;j<this.cols;j++)
                {
                    this.data[i][j]+=A.data[i][j];
                }
            }
        }
    }
    
    static fromArray(arr)
    {
        let m= new Matrix(arr.length,1)
        for(let i=0;i<arr.length;i++)
        {
            m.data[i][0]=arr[i]
        }
        return m
    }

    static multiply(A,B)
    {
        if (A.cols!== B.rows){
            console.log('Improper Matrix Multiplication A cols is not equal B rows')
            return undefined
        }
        var C = new Matrix(A.rows,B.cols)
        for(let i=0;i<A.rows;i++)
        {
            for(let j=0;j<B.cols;j++)
            {
                C.data[i][j]=0
                for(let k=0;k<A.cols;k++)
                {
                    C.data[i][j]+=A.data[i][k]*B.data[k][j]
                }
            }
        }
        return C
    }
    toArray()
    {
        let B=[]
        for(let i=0;i<this.rows;i++)
        {
            for(let j=0;j<this.cols;j++)
            {
                B.push(this.data[i][j]);
            }
        }
        return B
    }

    map(func)
    {
        for(let i=0;i<this.rows;i++)
        {
            for(let j=0;j<this.cols;j++)
            {
                this.data[i][j]=func(this.data[i][j]);
            }
        }
    }

    copy() {
        let m = new Matrix(this.rows, this.cols);
        for (let i = 0; i < this.rows; i++) {
          for (let j = 0; j < this.cols; j++) {
            m.data[i][j] = this.data[i][j];
          }
        }
        return m;
    }

    static map(A,func)
    {
        if(A instanceof Matrix){
            for(let i=0;i<A.rows;i++)
            {
                for(let j=0;j<A.cols;j++)
                {
                    A.data[i][j]=func(A.data[i][j]);
                }
            }
            return A
        }
    }
    multiply(A)
    {
        if(A instanceof Matrix){
            for(let i=0;i<A.rows;i++)
            {
                for(let j=0;j<A.cols;j++)
                {
                    this.data[i][j]*=A.data[i][j];
                }
            }
        }
        else{
            for(let i=0;i<this.rows;i++)
            {
                for(let j=0;j<this.cols;j++)
                {
                    this.data[i][j]*=A;
                }
            }
        }
    }
}
