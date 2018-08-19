class Matrix{
    constructor(rows,cols)
    {
        this.rows= rows
        this.cols= cols
        this.data = []
        for(let i=0;i<this.rows;i++)
        {
            this.data[i]=[]
            for(let j=0;j<this.cols;j++)
            {
                 this.data[i][j]=0
            }
        }
    }

    randomize()
    {
        for(let i=0;i<this.rows;i++)
        {
            for(let j=0;j<this.cols;j++)
            {
                 this.data[i][j]=Math.random()*2-1//gen -1 to 1
            }
        }
    }

    add(A)
    {
        if(this.rows===A.rows && this.cols===A.cols)
        {
            for(let i=0;i<this.rows;i++)
            {
                for(let j=0;j<this.cols;j++)
                {
                     this.data[i][j]=this.data[i][j]+A.data[i][j]
                }
            }
        }
    }

    static sub(A,B)
    {
        if(A.rows === B.rows && A.cols===B.cols)
        {
            var C = new Matrix(A.rows,A.cols)
            for(let i=0;i<A.rows;i++)
            {
                for(let j=0;j<A.cols;j++)
                {
                    C.data[i][j]= A.data[i][j]-B.data[i][j]
                }
            }
            return C
        }
    }

    copy()
    {
        var m = new Matrix(this.rows,this.cols)
        for(let i=0;i<this.rows;i++)
        {
            for(let j=0;j<this.cols;j++)
            {
                m.data[i][j]=this.data[i][j]
            }
        }
        return m
    }


    map(func){
        for(let i=0;i<this.rows;i++)
        {
            for(let j=0;j<this.cols;j++)
            {
                this.data[i][j]= func(this.data[i][j])
            }
        }
    }

    static map(func,A){
        for(let i=0;i<A.rows;i++)
        {
            for(let j=0;j<A.cols;j++)
            {
                A.data[i][j]= func(A.data[i][j])
            }
        }
        return A
    }

    static fromArray(A)
    {
        var m = new Matrix(A.length,1)
        for(let i=0;i<A.length;i++)
        {
            m.data[i][0]= A[i]
        }
        return m
    }
    
    static multiply(A,B)
    {
        if(A.cols===B.rows)
        {
            var C = new Matrix(A.rows,B.cols)
            for(let i=0;i<A.rows;i++)
            {
                for(let j=0;j<B.cols;j++)
                { 
                   for(let k=0;k<A.cols;k++)
                    {
                        C.data[i][j]+=A.data[i][k]*B.data[k][j]
                    }
                } 
            }
            return C
        }
    }
}