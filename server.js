const http = require('http');
const fs = require('fs');

let server = http.createServer(function (req,res){
    let dataFile = '';
    let html = '';
    fs.readFile('./data/data.txt',"utf-8",function (err, str){
        dataFile=str.split(",");
        dataFile.forEach((value,index)=>{
            html +=`
            <tr>
                <td>${index+1}</td>
                <td>${value}</td>
                <td><button class ="btn btn-danger">Delete</button></td>
            </tr>
            `
            // html += '<tr>';
            // html += `<td>${index + 1}</td>`;
            // html +=`<td>${value}</td>`;
            // html +=`<td><button class ="btn btn-danger">Delete</button>`;
            // html +=`</tr>`
        });
    });
    fs.readFile('./templates/index.html','utf-8',function (err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        data = data.replace('{list-user}',html);
        res.write(data);
        res.end()
    });
});
server.listen('8080',function (){
    console.log('Serve running port 8080')
});