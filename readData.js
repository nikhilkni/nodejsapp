async function getData()
{
let data = await fetch("http://dummy.restapiexample.com/api/v1/employess");
data = data.json
return data;
}

getData();
