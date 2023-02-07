function outerScope()
{
    const result = [];
    function innerScope()
    {
        for (let i=0;i<5;i++)
        {
            result[i]=(function inner(x){
                return function ()
                {
                    console.log(x);
                };
            })//(i);
        }
    }
    innerScope();
    for(let i=0;i<5;i++)
    {
        result[i]();
    }
}
outerScope();