import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4plugins_wordCloud from "@amcharts/amcharts4/plugins/wordCloud";

@Component({
  selector: 'wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.css']
})
export class WordcloudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let wordcloud = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
    let wordseries = wordcloud.series.push(new am4plugins_wordCloud.WordCloudSeries());
    
    wordseries.accuracy = 4;
    wordseries.step = 15;
    wordseries.rotationThreshold = 0.7;
    wordseries.maxCount = 200;
    wordseries.minWordLength = 2;
    wordseries.labels.template.margin(4,4,4,4);
    wordseries.maxFontSize = am4core.percent(30);
    
    wordseries.text = "Though yet of Hamlet our dear brother's death The memory be green, and that it us befitted To bear our hearts in grief artier, cousin, and our son."; 
     
  }

}
