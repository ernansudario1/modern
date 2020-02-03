window.onload = function () {
	 CanvasJS.addColorSet("blueShades",
                [//colorSet Array
                "#5F9F9F",
                "#008B8B",
                "#00688B",
                "#4682B4"              
                ]);
	 CanvasJS.addColorSet("redShades",
                [//colorSet Array
                "#660000",
                "#D43D1A",
                "#CC1100",
                "#EE2C2C",
                "#AF4035"	          
                ]);
	CanvasJS.addColorSet("greenShades",
                [//colorSet Array
                "#003300",
                "#009900",
                "#008080",
                "#2E8B57",
                "#3CB371",
                "#90EE90",
                 ]);
var options1 = {
	animationEnabled: true,
	colorSet: "blueShades",
	title: {
		text: "Reading",
		fontSize:30,
		fontColor: "blue",

	},
	data: [{
		type: "doughnut",
		innerRadius: "40%",
		showInLegend: true,
		legendText: "{label}",
		indexLabel: "{label}: #percent%",
		dataPoints: [
			{ label: "Books", y: 25 },
			{ label: "Wattpad", y: 25 },
			{ label: "Articles", y: 10},
			{ label: "Manhwa", y: 35 },
			{ label: "Manga", y: 5 }
		]
	}]
};
var options2 = {
	animationEnabled: true,
	colorSet: "redShades",
	title: {
		text: "Learning Asian Languages",
		fontSize:30,
		fontColor: "darkred",

	},
	data: [{
		type: "doughnut",
		innerRadius: "40%",
		showInLegend: true,
		legendText: "{label}",
		indexLabel: "{label}: #percent%",
		dataPoints: [
			{ label: "Korean", y: 50 },
			{ label: "Japanese", y: 25 },
			{ label: "Chinese", y: 25},
		]
	}]
};
var options = {
	animationEnabled: true,
	colorSet: "greenShades",
	title: {
		text: "Writing",
		fontSize:30,
		fontColor: "green",

	},
	data: [{
		type: "doughnut",
		innerRadius: "40%",
		showInLegend: true,
		legendText: "{label}",
		indexLabel: "{label}: #percent%",
		dataPoints: [
			{ label: "Stories", y: 40 },
			{ label: "Poems", y: 60 },
		]
	}]
};


$("#chartContainer").CanvasJSChart(options);
$("#chartContainer1").CanvasJSChart(options1);
$("#chartContainer2").CanvasJSChart(options2);
}