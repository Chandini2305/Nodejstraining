function isPrime(n)
{
    if(n==1)
    {
        return false;
    }
    else if(n==2)
    {
        return false;
    }
    else
    {
        for(var x=2;x<n;x++)
        {
            if(n%x==0)
            {
                return false;
            }

        }
        return true;
    }
}
console.log(isPrime(10));