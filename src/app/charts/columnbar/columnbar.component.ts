import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

@Component({
  selector: 'columnbar',
  templateUrl: './columnbar.component.html',
  styleUrls: ['./columnbar.component.css']
})
export class ColumnbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.paddingBottom = 30;

    chart.data = 
    [{
        "name": "Monica",
        "steps": 45688,
        "href": "https://www.amcharts.com/wp-content/uploads/2019/04/monica.jpg"
    }, {
        "name": "Joey",
        "steps": 35781,
        "href": "https://www.amcharts.com/wp-content/uploads/2019/04/joey.jpg"
    }, {
        "name": "Ross",
        "steps": 25464,
        "href": "https://www.amcharts.com/wp-content/uploads/2019/04/ross.jpg"
    }, {
        "name": "Phoebe",
        "steps": 18788,
        "href": "https://www.amcharts.com/wp-content/uploads/2019/04/phoebe.jpg"
    }, {
        "name": "Rachel",
        "steps": 15465,
        "href": "https://www.amcharts.com/wp-content/uploads/2019/04/rachel.jpg"
    }, {
        "name": "Chandler",
        "steps": 11561,
        "href": "https://www.amcharts.com/wp-content/uploads/2019/04/chandler.jpg"
    }];

let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "name";
categoryAxis.renderer.grid.template.strokeOpacity = 0;
categoryAxis.renderer.minGridDistance = 10;
categoryAxis.renderer.labels.template.dy = 35;
categoryAxis.renderer.tooltip.dy = 35;

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.inside = true;
valueAxis.renderer.labels.template.fillOpacity = 0.3;
valueAxis.renderer.grid.template.strokeOpacity = 0;
valueAxis.min = 0;
valueAxis.cursorTooltipEnabled = false;
valueAxis.renderer.baseGrid.strokeOpacity = 0;

let series = chart.series.push(new am4charts.ColumnSeries);
series.dataFields.valueY = "steps";
series.dataFields.categoryX = "name";
series.tooltipText = "{valueY.value}";
series.tooltip.pointerOrientation = "vertical";
series.tooltip.dy = - 6;
series.columnsContainer.zIndex = 100;

let columnTemplate = series.columns.template;
columnTemplate.width = am4core.percent(50);
columnTemplate.maxWidth = 66;
columnTemplate.column.cornerRadius(60, 60, 10, 10);
columnTemplate.strokeOpacity = 0;

series.heatRules.push({ target: columnTemplate, property: "fill", dataField: "valueY", min: am4core.color("#e5dc36"), max: am4core.color("#5faa46") });
series.mainContainer.mask = undefined;

let cursor = new am4charts.XYCursor();
chart.cursor = cursor;
cursor.lineX.disabled = true;
cursor.lineY.disabled = true;
cursor.behavior = "none";

let bullet = columnTemplate.createChild(am4charts.CircleBullet);
bullet.circle.radius = 30;
bullet.valign = "bottom";
bullet.align = "center";
bullet.isMeasured = true;
bullet.verticalCenter = "bottom";
bullet.interactionsEnabled = false;

let hoverState = bullet.states.create("hover");
let outlineCircle = bullet.createChild(am4core.Circle);

let image = bullet.createChild(am4core.Image);
image.width = 60;
image.height = 60;
image.horizontalCenter = "middle";
image.verticalCenter = "middle";
image.propertyFields.href = "href";


  }

}
