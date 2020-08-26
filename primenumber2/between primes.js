function find_primes()
{
    for(var i=1;i<=100;i++)
    {
        var notPrime=false;
        for(var j=2;j<=i;j++)
        {
            if(i%j==0)
            {
                notPrime=true;
            }
        }
        if(notPrime==false)
        {
            return i;
        }
    }
}
console.log(find_primes());