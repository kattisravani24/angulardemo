import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let data = {
      "type": [
        {
          "name": "Sun",
          "id": "ao1",
          "color": "rgb(255, 208, 0)",
          "children": [
            {
              "name": "equation of time",
              "id": "tt1",
              "count": 1,
            }, {
              "name": "mean motion solar tropical longitude",
              "id": "tt2",
              "count": 1,
            }, {
              "name": "mean motion solar sideral longitude",
              "id": "tt3",
              "count": 2,
            }, {
              "name": "equation of the sun",
              "id": "tt4",
              "count": 19,
            }
          ]
        }, {
          "name": "Trigonometrical",
          "id": "ao11",
          "color": "rgb(87,199,133)",
          "children": [
            {
              "name": "chords",
              "id": "tt5",
              "count": 1,
            }, {
              "name": "sine",
              "id": "tt6",
              "count": 14,
            }, {
              "name": "shadow",
              "id": "tt7",
              "count": 1,
            }, {
              "name": "cosine",
              "id": "tt67",
              "count": 1,
            }
          ]
        }, {
          "name": "Spherical astronomical",
          "id": "ao8",
          "color": "rgb(191, 19, 102)",
          "children": [
            {
              "name": "declination",
              "id": "tt8",
              "count": 1,
            }, {
              "name": "right ascension",
              "id": "tt9",
              "count": 1,
            }, {
              "name": "oblique ascension",
              "id": "tt10",
              "count": 1,
            }, {
              "name": "ascensional difference",
              "id": "tt11",
              "count": 1,
            }, {
              "name": "length of diurnal seasonal hour",
              "id": "tt12",
              "count": 1,
            }
          ]
        }, {
          "name": "Eighth sphere",
          "id": "ao9",
          "color": "rgb(143, 0, 138)",
          "children": [
            {
              "name": "mean motion access and recess",
              "id": "tt13",
              "count": 1,
            }, {
              "name": "mean motion apogees and stars",
              "id": "tt14",
              "count": 1,
            }, {
              "name": "mean motion solar apogee",
              "id": "tt17",
              "count": 1,
            }, {
              "name": "mean motion precession",
              "id": "tt18",
              "count": 1,
            }
          ]
        }, {
          "name": "Eclipse",
          "id": "ao10",
          "color": "rgb(68, 59, 255)",
          "children": [
            {
              "name": "syzygies",
              "id": "tt19",
              "count": 1,
            }, {
              "name": "solar velocities",
              "id": "tt20",
              "count": 9,
            }, {
              "name": "lunar velocities",
              "id": "tt23",
              "count": 14,
            }, {
              "name": "parallax",
              "id": "tt24",
              "count": 2,
            }
          ]
        }, {
          "name": "Mercury",
          "id": "ao2",
          "color": "rgb(194, 214, 60)",
          "children": [
            {
              "name": "mean motion anomaly Mercury",
              "id": "tt25",
              "count": 1,
            }, {
              "name": "equation Mercury center",
              "id": "tt26",
              "count": 1,
            }, {
              "name": "equation Mercury anomaly at mean distance",
              "id": "tt27",
              "count": 1,
            }, {
              "name": "total equation double-argument table Mercury",
              "id": "tt28",
              "count": 1,
            }, {
              "name": "Mercury latitude",
              "id": "tt29",
              "count": 1,
            }, {
              "name": "planetary Stations Mercury",
              "id": "tt30",
              "count": 1,
            }, {
              "name": "equation Mercury anomaly at maximum distance",
              "id": "tt72",
              "count": 1,
            }, {
              "name": "equation Mercury anomaly at minimum distance",
              "id": "tt73",
              "count": 1,
            }
          ]
        }, {
          "name": "Venus",
          "id": "ao3",
          "color": "rgb(64, 204, 207)",
          "children": [
            {
              "name": "mean motion anomaly Venus",
              "id": "tt31",
              "count": 1,
            }, {
              "name": "equation Venus center",
              "id": "tt32",
              "count": 1,
            }, {
              "name": "equation Venus anomaly at mean distance",
              "id": "tt33",
              "count": 1,
            }, {
              "name": "total equation double-argument table Venus",
              "id": "tt34",
              "count": 1,
            }, {
              "name": "Venus latitude",
              "id": "tt35",
              "count": 1,
            }, {
              "name": "planetary stations Venus",
              "id": "tt36",
              "count": 1,
            }, {
              "name": "equation Venus anomaly at maximum distance",
              "id": "tt76",
              "count": 1,
            }, {
              "name": "equation Venus anomaly at minimum distance",
              "id": "tt77",
              "count": 1,
            }
          ]
        }, {
          "name": "Moon",
          "id": "ao4",
          "color": "rgb(44, 171, 230)",
          "children": [
            {
              "name": "mean motion lunar longitude",
              "id": "tt37",
              "count": 1,
            }, {
              "name": "mean motion lunar anomaly",
              "id": "tt38",
              "count": 1,
            }, {
              "name": "mean motion lunar node",
              "id": "tt42",
              "count": 1,
            }, {
              "name": "mean motion longitude plus lunar node",
              "id": "tt43",
              "count": 1,
            }, {
              "name": "mean motion lunar elongation",
              "id": "tt44",
              "count": 1,
            }, {
              "name": "mean motion double elongation",
              "id": "tt45",
              "count": 1,
            }, {
              "name": "equation Moon center",
              "id": "tt46",
              "count": 1,
            }, {
              "name": "equation Moon anomaly",
              "id": "tt47",
              "count": 8,
            }, {
              "name": "lunar latitude",
              "id": "tt48",
              "count": 1,
            }
          ]
        }, {
          "name": "Mars",
          "id": "ao5",
          "color": "rgb(199,0,41)",
          "children": [
            {
              "name": "mean motion longitude Mars",
              "id": "tt49",
              "count": 1,
            }, {
              "name": "equation Mars center",
              "id": "tt50",
              "count": 1,
            }, {
              "name": "equation Mars anomaly at mean distance",
              "id": "tt51",
              "count": 1,
            }, {
              "name": "total equation double-argument table Mars",
              "id": "tt52",
              "count": 1,
            }, {
              "name": "Mars latitude",
              "id": "tt53",
              "count": 1,
            }, {
              "name": "planetary stations Mars",
              "id": "tt54",
              "count": 1,
            }, {
              "name": "equation Mars anomaly at maximum distance",
              "id": "tt70",
              "count": 1,
            }, {
              "name": "equation Mars anomaly at minimum distance",
              "id": "tt71",
              "count": 1,
            }
          ]
        }, {
          "name": "Jupiter",
          "id": "ao6",
          "color": "rgb(255,87,51)",
          "children": [
            {
              "name": "mean motion longitude Jupiter",
              "id": "tt55",
              "count": 1,
            }, {
              "name": "equation Jupiter center",
              "id": "tt56",
              "count": 1,
            }, {
              "name": "equation Jupiter anomaly at mean distance",
              "id": "tt57",
              "count": 1,
            }, {
              "name": "total equation double-argument table Jupiter",
              "id": "tt58",
              "count": 1,
            }, {
              "name": "Jupiter latitude",
              "id": "tt59",
              "count": 1,
            }, {
              "name": "planetary stations Jupiter",
              "id": "tt60",
              "count": 1,
            }, {
              "name": "equation Jupiter anomaly at maximum distance",
              "id": "tt68",
              "count": 1,
            }, {
              "name": "equation Jupiter anomaly at minimum distance",
              "id": "tt69",
              "count": 1,
            }
          ]
        }, {
          "name": "Saturn",
          "id": "ao7",
          "color": "rgb(230, 171, 34)",
          "children": [
            {
              "name": "mean motion longitude Saturn",
              "id": "tt61",
              "count": 1,
            }, {
              "name": "equation Saturn center",
              "id": "tt62",
              "count": 1,
            }, {
              "name": "equation Saturn anomaly at mean distance",
              "id": "tt63",
              "count": 1,
            }, {
              "name": "total equation double-argument table Saturn",
              "id": "tt64",
              "count": 1,
            }, {
              "name": "Saturn latitude",
              "id": "tt65",
              "count": 1,
            }, {
              "name": "planetary stations Saturn",
              "id": "tt66",
              "count": 2,
            }, {
              "name": "equation Saturn anomaly at maximum distance",
              "id": "tt74",
              "count": 1,
            }, {
              "name": "equation Saturn anomaly at minimum distance",
              "id": "tt75",
              "count": 1,
            }
          ]
        }
      ],
      "param": [
        {
          "name": "Sun",
          "id": "ao1",
          "color": "rgb(255, 208, 0)",
          "children": [
            {
              "name": "equation of time",
              "id": "tt1",
              "count": 1,
              "children": [
                {
                  "name": "06",
                  "id": "ap20",
                  "count": 1,
                }
              ]
            }, {
              "name": "equation of the sun",
              "id": "tt4",
              "count": 16,
              "children": [
                {
                  "name": "2 ; 10",
                  "id": "ap5",
                  "count": 8,
                },
                {
                  "name": "1 ; 59,10 | 02 ; 04,45",
                  "id": "ap6",
                  "count": 1,
                },
                {
                  "name": "02,01",
                  "id": "ap12",
                  "count": 1,
                },
                {
                  "name": "02 | 20.",
                  "id": "ap13",
                  "count": 1,
                },
                {
                  "name": "null",
                  "id": "ap14",
                  "count": 1,
                },
                {
                  "name": "12",
                  "id": "ap15",
                  "count": 1,
                },
                {
                  "name": "12",
                  "id": "ap16",
                  "count": 1,
                },
                {
                  "name": "01 | 12",
                  "id": "ap17",
                  "count": 1,
                },
                {
                  "name": "02 | 12",
                  "id": "ap18",
                  "count": 1,
                },
                {
                  "name": "12",
                  "id": "ap19",
                  "count": 1,
                },
                {
                  "name": "01",
                  "id": "ap21",
                  "count": 1,
                },
                {
                  "name": "02 ; 01",
                  "id": "ap22",
                  "count": 1,
                },
                {
                  "name": "07",
                  "id": "ap23",
                  "count": 1,
                },
                {
                  "name": "01 | 07",
                  "id": "ap24",
                  "count": 1,
                },
                {
                  "name": "01,18",
                  "id": "ap26",
                  "count": 1,
                },
                {
                  "name": "16,39",
                  "id": "ap27",
                  "count": 1,
                }
              ]
            }
          ]
        }, {
          "name": "Trigonometrical",
          "id": "ao11",
          "color": "rgb(87,199,133)",
          "children": [
            {
              "name": "sine",
              "id": "tt6",
              "count": 2,
              "children": [
                {
                  "name": "01,00",
                  "id": "ap3",
                  "count": 7,
                },
                {
                  "name": "12",
                  "id": "ap25",
                  "count": 1,
                }
              ]
            }
          ]
        }, {
          "name": "Spherical astronomical",
          "id": "ao8",
          "color": "rgb(191, 19, 102)",
          "children": [
            {
              "name": "declination",
              "id": "tt8",
              "count": 1,
              "children": [
                {
                  "name": "23 ; 35",
                  "id": "ap4",
                  "count": 1,
                }
              ]
            }
          ]
        }, {
          "name": "Eclipse",
          "id": "ao10",
          "color": "rgb(68, 59, 255)",
          "children": [
            {
              "name": "solar velocities",
              "id": "tt20",
              "count": 1,
              "children": [
                {
                  "name": "00 ; 02,23 | 00 ; 02,33",
                  "id": "ap10",
                  "count": 8,
                }
              ]
            }, {
              "name": "lunar velocities",
              "id": "tt23",
              "count": 2,
              "children": [
                {
                  "name": "00 ; 30,18 | 00 ; 36,04",
                  "id": "ap9",
                  "count": 12,
                },
                {
                  "name": "12",
                  "id": "ap11",
                  "count": 1,
                }
              ]
            }
          ]
        }, {
          "name": "Venus",
          "id": "ao3",
          "color": "rgb(64, 204, 207)",
          "children": [
            {
              "name": "equation Venus center",
              "id": "tt32",
              "count": 1,
              "children": [
                {
                  "name": "12",
                  "id": "ap28",
                  "count": 1,
                }
              ]
            }
          ]
        }, {
          "name": "Moon",
          "id": "ao4",
          "color": "rgb(44, 171, 230)",
          "children": [
            {
              "name": "equation Moon anomaly",
              "id": "tt47",
              "count": 2,
              "children": [
                {
                  "name": "4 ; 56",
                  "id": "ap7",
                  "count": 8,
                },
                {
                  "name": "5 ; 10",
                  "id": "ap8",
                  "count": 1,
                }
              ]
            }
          ]
        }
      ]
    };
    
    
    
    // create chart
    let container = am4core.create("chartdiv", am4core.Container);
    container.width = am4core.percent(100);
    container.height = am4core.percent(100);
    container.layout = "vertical";
    
    let chart1 = container.createChild(am4charts.TreeMap);
    let chart2 = container.createChild(am4charts.TreeMap);
    chart1.data = data.type;
    chart2.data = data.param;
    
    chart1.padding(0,0,0,0);
    chart2.padding(15,0,0,0);
    
    chart1.height = am4core.percent(65);
    chart2.height = am4core.percent(35);
    
    let chartConfig = (chart, astroSeries = []) => {
      // only one level visible initially
      chart.maxLevels = 1;
      // define data fields
      chart.dataFields.value = "count";
      chart.dataFields.name = "name";
      chart.dataFields.children = "children";
      chart.dataFields.color = "color";
    
      // astronomical object series template
      let astroObjectSeries = chart.seriesTemplates.create("0");
      astroObjectSeries.strokeWidth = 2;
      let astroObjectTemplate = astroObjectSeries.columns.template;
    
      astroSeries.push(astroObjectSeries);
    
      // add picto
      let image = astroObjectTemplate.createChild(am4core.Image);
      image.opacity = 0.15;
      image.align = "center";
      image.valign = "middle";
      image.width = am4core.percent(80);
      image.height = am4core.percent(80);
    
      // add adapter for href to load correct image
      image.adapter.add("href", function(href, target) {
        let dataItem = target.parent.dataItem;
        if (dataItem) {
          let astroObjectName = dataItem.treeMapDataItem.name.toPascalCase();
          return `https://raw.githubusercontent.com/Segolene-Albouy/Memoire-TNAH2019/master/Images/Astronomical-objects/${astroObjectName}.png`;
        }
      });
    
      let tableTypeSeries = chart.seriesTemplates.create("1");
      tableTypeSeries.columns.template.fillOpacity = 0;
    
      let tableTypeBullet = tableTypeSeries.bullets.push(new am4charts.LabelBullet());
      tableTypeBullet.locationX = 0.5;
      tableTypeBullet.locationY = 0.5;
      tableTypeBullet.label.text = "{name}";
      tableTypeBullet.label.fill = am4core.color("#ffffff");
    
      // deepest series template (either parameter sets or original items)
      let paramSeries = chart.seriesTemplates.create("2");
      paramSeries.columns.template.fillOpacity = 0;
    
      let paramBullet = paramSeries.bullets.push(new am4charts.LabelBullet());
      paramBullet.locationX = 0.5;
      paramBullet.locationY = 0.5;
      paramBullet.label.text = "[font-size: 16px; bold]{name}[/]\n{value} edition(s)";
    
      return astroSeries;
    }
    
    let astroSeries = chartConfig(chart1);
    astroSeries = chartConfig(chart2, astroSeries);
    
    astroSeries[0].columns.template.events.on("hit", (ev) => {
      chart2.dataItems.each(function(dataItem){
        if(dataItem.name == ev.target.dataItem.dataContext.name){
          chart2.zoomToChartDataItem(dataItem);
        }
      })
    });
    
    astroSeries[1].columns.template.events.on("hit", (ev) => {
      chart1.dataItems.each(function(dataItem){
        if(dataItem.name == ev.target.dataItem.dataContext.name){
          chart1.zoomToChartDataItem(dataItem);
        }
      })
    });
    
    chart1.zoomOutButton.events.on("hit", function(){
      chart2.zoomToChartDataItem(chart2.homeDataItem);
    })
    
    chart2.zoomOutButton.events.on("hit", function(){  
      chart1.zoomToChartDataItem(chart1.homeDataItem);
    })
    
  }

}
