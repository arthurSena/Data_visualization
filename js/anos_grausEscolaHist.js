  var chartParams = {
 "dom": "chartaaf7ba3c19e",
"width":    800,
"height":    400,
"layers": [
 {
 "x": "GRAU_DE_ESCOLARIDADE",
"y": "NÚMERO",
"data": {
 "ANOS": [ "2014", "2014", "2014", "2014", "2014", "2014", "2014", "2014" ],
"GRAU_DE_ESCOLARIDADE": [ "ANALFABETO", "ENSINO FUNDAMENTAL COMPLETO", "ENSINO FUNDAMENTAL INCOMPLETO", "ENSINO MEDIO COMPLETO", "ENSINO MEDIO INCOMPLETO", "LE E ESCREVE", "SUPERIOR COMPLETO", "SUPERIOR INCOMPLETO" ],
"NÚMERO": [ 8851, 16847, 56965, 69978, 29888, 24826, 34249, 23259 ] 
},
"facet": null,
"type": "bar" 
} 
],
"facet": [],
"guides": [],
"coord": [],
"id": "chartaaf7ba3c19e" 
}
    _.each(chartParams.layers, function(el){
        el.data = polyjs.data(el.data)
    })
    var graph_chartaaf7ba3c19e = polyjs.chart(chartParams);