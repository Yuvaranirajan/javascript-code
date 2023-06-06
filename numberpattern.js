for(var i=1;i<=5;i++)
{
    var k=4;
    var a=i+k;
    for(var j=1;j<=i;j++)
    {
        if(j==1)
        {
            console.log(i);
        }
        else{
            
            console.log(a+" ");
            k--;
            a=a+k;
        }
    }
    
}