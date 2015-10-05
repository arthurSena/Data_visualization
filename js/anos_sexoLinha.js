  (function($){
        $(function () {
            var chart = new Highcharts.Chart({
 "dom": "anos_sexoLinha",
"width":            800,
"height":            400,
"credits": {
 "href": null,
"text": null 
},
"exporting": {
 "enabled": false 
},
"title": {
 "text": null 
},
"yAxis": [
 {
 "title": {
 "text": "NÚMERO" 
} 
} 
],
"series": [
 {
 "data": [
 [
 "2000",
121870 
],
[
 "2002",
130113 
],
[
 "2004",
131604 
],
[
 "2006",
138099 
],
[
 "2008",
145139 
],
[
 "2010",
150515 
],
[
 "2012",
152402 
],
[
 "2014",
144752 
] 
],
"name": "FEMININO",
"type": null,
"marker": {
 "radius":              3 
} 
},
{
 "data": [
 [
 "2000",
102302 
],
[
 "2002",
109516 
],
[
 "2004",
110350 
],
[
 "2006",
115485 
],
[
 "2008",
121308 
],
[
 "2010",
126164 
],
[
 "2012",
127765 
],
[
 "2014",
120111 
] 
],
"name": "MASCULINO",
"type": null,
"marker": {
 "radius":              3 
} 
} 
],
"xAxis": [
 {
 "title": {
 "text": "ANOS" 
},
"categories": [ "2000", "2002", "2004", "2006", "2008", "2010", "2012", "2014" ] 
} 
],
"subtitle": {
 "text": null 
},
"id": "anos_sexoLinha",
"chart": {
 "renderTo": "anos_sexoLinha" 
} 
});
        });
    })(jQuery);