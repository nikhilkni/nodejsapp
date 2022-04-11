
async function getData()
{
let data = await fetch("http://dummy.restapiexample.com/api/v1/employees");
    data =  data.json
    return data;
}
getData().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})



getData();