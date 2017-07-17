/*
        //extra zeile für merge zu loesen
        var fs = require('fs');
        var chalk = require('chalk');
        var cities = [];

        fs.readFile(__dirname + "/staedte.json", "utf-8", function (err, data) {
            var content = JSON.parse(data);


            for (var text in content) {
                var obj = content[text];

                for (var text2 in obj) {
                    var x = {
                        "Name": obj[text2].name,
                        "Country": obj[text2].country,
                        "Population": obj[text2].population
                    };
                    cities.push(x);


                    var sortierteliste = cities.sort(function (a, b) {
                        if (a.population > b.population) {
                            return -1;
                        }
                        if (a.population < b.population) {
                            return 1;
                        }

                        return 0;
                    });
                }
            }
            console.log(sortierteliste);
            
            
                   var z = JSON.stringify(sortierteliste);
            fs.writeFile(__dirname + "/staedte_sortiert.json", z, function (err) {
                if (err) throw err;
            });

            fs.readFile(__dirname + "/staedte_sortiert.json", "utf-8", function (err, data) {
                var y = JSON.parse(data);


                for (var text3 in y) {

                    var obj2 = y[text3];

                    console.log(chalk.yellow("Name: " + obj2.name));
                    console.log("Country: " + obj2.country);
                    console.log(chalk.red("Population: " + obj2.population));
                    console.log("---------------------------------");
                }
            });

            
     
        });
*/


var fs = require ('fs');
var chalk = require ('chalk');

var content;
fs.readFile(__dirname+"/staedte.json",function read(err , data) {

if (err) {
	throw err;
	}

content = JSON.parse(data); // Der Variabel content werden die ausgelesenen Informationen der Datei hinzugewiesen.
			   // Das Parse sorgt dafür, das die Informationen der Datei zu einem Objekt umgewandelt werden.


content.cities.sort(function(a,b) {

if(a.population < b.population) return 1;

if(a.population > b.population) return -1;

else return 0;

});


fs.writeFile(__dirname+"/staedte_sortiert.json",JSON.stringify(content),function(err) {

if (err) throw err;

for(i = 0; i < content.cities.length; i++) // Die For-Schleife dient hier zur strukturierten Ausgabe des Objektes.
{
        console.log("\nName: "+chalk.red(content.cities[i].name));               // Beispiel:  Name : Burj Khalifa
	console.log("Stadt: "+chalk.cyan(content.cities[i].population));              //            Stadt: Dubai
	console.log("Höhe: "+chalk.green(content.cities[i].country));	        //	      Höhe : 828
	console.log("\n--------------------------------------");			//	      --------------------
}


});
});
