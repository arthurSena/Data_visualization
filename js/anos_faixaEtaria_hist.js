var chartParams = {
 "dom": "chartaaf7a9fc1cc",
"width":    800,
"height":    400,
"layers": [
 {
 "x": "FAIXA_ETARIA",
"y": "NÚMERO",
"data": {
 "PERIODO": [ "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2000", "2002", "2002", "2002", "2002", "2002", "2002", "2002", "2002", "2002", "2006", "2006", "2006", "2006", "2006", "2006", "2006", "2006", "2006", "2008", "2008", "2008", "2008", "2008", "2008", "2008", "2008", "2008", "2010", "2010", "2010", "2010", "2010", "2010", "2010", "2010", "2010", "2012", "2012", "2012", "2012", "2012", "2012", "2012", "2012", "2012", "2014", "2014", "2014", "2014", "2014", "2014", "2014", "2014", "2014" ],
"FAIXA_ETARIA": [ "16 a 17 ANOS", "18 A 20 ANOS", "21 A 24 ANOS", "25 A 34 ANOS", "35 A 44 ANOS", "45 A 59 ANOS", "60 A 69 ANOS", "70 A 79 ANOS", "SUPERIOR A 79 ANOS", "16 a 17 ANOS", "18 A 20 ANOS", "21 A 24 ANOS", "25 A 34 ANOS", "35 A 44 ANOS", "45 A 59 ANOS", "60 A 69 ANOS", "70 A 79 ANOS", "SUPERIOR A 79 ANOS", "16 a 17 ANOS", "18 A 20 ANOS", "21 A 24 ANOS", "25 A 34 ANOS", "35 A 44 ANOS", "45 A 59 ANOS", "60 A 69 ANOS", "70 A 79 ANOS", "SUPERIOR A 79 ANOS", "16 a 17 ANOS", "18 A 20 ANOS", "21 A 24 ANOS", "25 A 34 ANOS", "35 A 44 ANOS", "45 A 59 ANOS", "60 A 69 ANOS", "70 A 79 ANOS", "SUPERIOR A 79 ANOS", "16 a 17 ANOS", "18 A 20 ANOS", "21 A 24 ANOS", "25 A 34 ANOS", "35 A 44 ANOS", "45 A 59 ANOS", "60 A 69 ANOS", "70 A 79 ANOS", "SUPERIOR A 79 ANOS", "16 a 17 ANOS", "18 A 20 ANOS", "21 A 24 ANOS", "25 A 34 ANOS", "35 A 44 ANOS", "45 A 59 ANOS", "60 A 69 ANOS", "70 A 79 ANOS", "SUPERIOR A 79 ANOS", "16 a 17 ANOS", "18 A 20 ANOS", "21 A 24 ANOS", "25 A 34 ANOS", "35 A 44 ANOS", "45 A 59 ANOS", "60 A 69 ANOS", "70 A 79 ANOS", "SUPERIOR A 79 ANOS" ],
"NÚMERO": [   6080,  19310,  25824,  57186,  44852,  39932,  15839,  10029,   5363,  14074,  38956,  55634, 1.1851e+05,  96736,  87214,  33498,  21776,  13262,   7034,  20209,  28409,  62320,  51660,  48859,  18323,  11457,   5412,   7693,  19714,  28136,  65634,  53352,  52966,  20080,  12183,   6758,   7427,  19076,  28051,  67799,  54427,  57101,  21720,  13143,   7982,   6293,  18546,  26332,  68009,  55020,  60494,  22944,  13648,   8921,   2459,  17530,  24940,  64527,  53990,  62595,  24524,  11336,   2949 ] 
},
"facet": null,
"type": "bar",
"": {
 "orderRule": "FAIXA_ETARIA" 
},
"barGap":      0 
} 
],
"facet": [],
"guides": [],
"coord": [],
"id": "chartaaf7a9fc1cc" 
}
    _.each(chartParams.layers, function(el){
        el.data = polyjs.data(el.data)
    })
    var graph_chartaaf7a9fc1cc = polyjs.chart(chartParams);