//extra zeile für merge zu loesen
var fs = require('fs');
var chalk = require('chalk');
var bigcities = [];

fs.readFile(__dirname + "/staedte.json","utf-8",function(err, data)
{
    var content = JSON.parse(data);

    
    for (var text in content) 
    {
        var obj = content[text];

        for (var text2 in obj) 
        {   
            var x = {"name":obj[text2].name, "stadt":obj[text2].country, "population":obj[text2].population };
            bigcities.push(x);

                  
            var sortierteliste= bigcities.sort(function(a,b){  
                                    if (a.population > b.population) {
                                        return -1;
                                    }
                                    if (a.population < b.population) {
                                        return 1;
                                    }

            return 0;});
        }
    }
                console.log(sortierteliste);
        var z = JSON.stringify(sortierteliste);
        fs.writeFile(__dirname+ "/staedte_sortiert.json",z,function(err){
                if(err) throw err;
            });

        fs.readFile(__dirname + "/staedte_sortiert.json","utf-8",function(err, data){
        var y = JSON.parse(data);

   
            for (var text3 in y) 
        {
                var obj2 = y[text3];

                    console.log(chalk.yellow( "Name: " + obj2.name));
                    console.log("Country: " + obj2.stadt);
                    console.log(chalk.red ("Population: " + obj2.population));
                    console.log("---------------------------------");
        }    
        });

});