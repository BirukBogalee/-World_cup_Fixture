

function fix() {
    var contries = `https://restcountries.com/v2/all`;
    var c1 = document.querySelector("#c1");
    var c2 = document.querySelector("#c2");
    var c3 = document.querySelector("#c3");
    var c4 = document.querySelector("#c4");

    var row = document.getElementById("row");


    c1.innerHTML = '';
    c2.innerHTML = '';
    c3.innerHTML = '';
    c4.innerHTML = '';



    fetch(contries)
        .then(response => response.json())
        .then(result => {

            for (var i = 0; i < 4; i++) {
                var random = Math.floor(Math.random() * 250);
                var li1 = `<li> <img src="https://www.countryflagicons.com/FLAT/32/${result[random].alpha2Code}.png">  ${result[random].name}  
                 <input class="form-control" type="text" id="A${+i}"> </li>
                 <label
                  for="fname"
                  id="Al${+i}"
                  class="text-danger"
                  style="visibility: hidden"
                  >* Please Enter a number less 13</label>`
                c1.innerHTML += li1
            }

            for (var i = 0; i < 4; i++) {
                var random = Math.floor(Math.random() * 250);
                var li2 = `<li> <img src="https://www.countryflagicons.com/FLAT/32/${result[random].alpha2Code}.png">  ${result[random].name}  
                 <input class="form-control" type="text" id="B${+i}"> </li>
                 <label
                  for="fname"
                  id="Bl${+i}"
                  class="text-danger"
                  style="visibility: hidden"
                  >* Please Enter a number less 13</label>`
                c2.innerHTML += li2
            }

            for (var i = 0; i < 4; i++) {
                var random = Math.floor(Math.random() * 250);
                var li3 = `<li> <img src="https://www.countryflagicons.com/FLAT/32/${result[random].alpha2Code}.png">  ${result[random].name}  
                 <input class="form-control" type="text" id="C${+i}"> </li>
                 <label
                  for="fname"
                  id="Cl${+i}"
                  class="text-danger"
                  style="visibility: hidden"
                  >* Please Enter a number less 13</label>`
                c3.innerHTML += li3
            }

            for (var i = 0; i < 4; i++) {
                var random = Math.floor(Math.random() * 250);
                var li4 = `<li> <img src="https://www.countryflagicons.com/FLAT/32/${result[random].alpha2Code}.png">  ${result[random].name}  
                 <input class="form-control" type="text" id="D${+i}"> </li>
                 <label
                  for="fname"
                  id="Dl${+i}"
                  class="text-danger"
                  style="visibility: hidden"
                  >* Please Enter a number less 13</label>`
                c4.innerHTML += li4
            }

            c1.innerHTML += `<button value="A" style="padding-left:35px; padding-right:35px; margin-top:20px;" onclick="graph(this.value)" class="btn-primary mx-auto d-flex btn-lg">Genrete</button>`
            c2.innerHTML += `<button value="B" style="padding-left:35px; padding-right:35px; margin-top:20px;" onclick="graph(this.value)" class="btn-primary mx-auto d-flex btn-lg">Genrete</button>`
            c3.innerHTML += `<button value="C" style="padding-left:35px; padding-right:35px; margin-top:20px;" onclick="graph(this.value)" class="btn-primary mx-auto d-flex btn-lg">Genrete</button>`
            c4.innerHTML += `<button value="D" style="padding-left:35px; padding-right:35px; margin-top:20px;" onclick="graph(this.value)" class="btn-primary mx-auto d-flex btn-lg">Genrete</button>`
        })
        .catch(error => console.error(error))
}

function graph(a) {



    var t1 = document.getElementById(a + 0);
    var t2 = document.getElementById(a + 1)
    var t3 = document.getElementById(a + 2)
    var t4 = document.getElementById(a + 3)


   // if(t1.value || t2.value || t3.value || t4.value )

   var l1 = document.getElementById(a+"l0");
    var l2 = document.getElementById(a+"l1");
    var l3 = document.getElementById(a+"l2");
    var l4 = document.getElementById(a+"l3")



    if (t1.value == "" || isNaN(t1.value) || t1.value>13 ) {
        l1.style.visibility = "visible";
        t1.style = "border: 1px solid red;";
    }
    else if (t2.value == "" || isNaN(t2.value) || t2.value>13 ) {
        l2.style.visibility = "visible";
        t2.style = "border: 1px solid red;";
    }
    else if (t3.value == "" || isNaN(t3.value) || t3.value>13 ) {
        l3.style.visibility = "visible";
        t3.style = "border: 1px solid red;";
    }
    else if (t4.value == "" || isNaN(t4.value) || t4.value>13 ) {
        l4.style.visibility = "visible";
        t4.style = "border: 1px solid red;";
    }

    else {

        l1.style.visibility = "hidden";
        t1.style = "border: 1px solid gray;";
        l2.style.visibility = "hidden";
        t2.style = "border: 1px solid gray;";
        l3.style.visibility = "hidden";
        t3.style = "border: 1px solid gray;";
        l4.style.visibility = "hidden";
        t4.style = "border: 1px solid gray;";

        Highcharts.chart('container1', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Group ' + a
            },
            subtitle: {
                text: 'Points'
            },
            xAxis: {
                categories: [
                    'Team 1',
                    'Team 2',
                    'Team 3',
                    'Team 4'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                max: 12
    
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: 'Points',
                data: [Number(t1.value), Number(t2.value), Number(t3.value), Number(t4.value)]
            }]
        });
    
    
    
    
        Highcharts.chart('container2', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: true
            },
            title: {
                text: 'Group ' + a,
                align: 'center',
                verticalAlign: 'middle',
                y: 60
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%'],
                    size: '110%'
                }
            },
            series: [{
                type: 'pie',
                name: 'Points from total',
                innerSize: '50%',
                data: [
                    ['Team 1', Number(t1.value) ],
                    ['Team 2', Number(t2.value) ],
                    ['Team 3', Number(t3.value) ],
                    ['Team 4', Number(t4.value) ]
                ]
            }]
        });

    }












}