var color = d3.scale.category20c();

function determineStatus(int) {
	if (int == 0)
		return "Good";
	if (int == 1)
		return "Warning";
	if (int == 2)
		return "Critical";
	if (int == 3)
		return "Overdue";
}

function init(name) {
	var url = "http://localhost:9081/BuisnessRest/jaxrs/Buisness/team?EmployeeId=";
	url = url.concat(name);
	var headers = new Array();
	headers[0] = makeHeader('Content-Type', 'application/json');
	headers[1] = makeHeader('Accept', 'application/json');
	sendRequest(url, responseAction, 'GET', headers, null);
}

function responseAction(data) {
	buildParse(data);
	//buildTree(bradshaw);
	buildLegend();
}

function buildParse(data){
	var treeData = JSON.parse(data);
	buildTree(treeData);
}
function buildTree(treeData) {
	var margin = {
		top : 20,
		bottom : 20,
		left : 150,
		right : 150
	};
	var height = parseInt(d3.select("#one").style("height"))-margin.top - margin.bottom;
	var width = parseInt(d3.select("#one").style("width"))-margin.left - margin.right;
	
	//var height = 500 - margin.top - margin.bottom;
	//var width = 700 - margin.left - margin.right;
	
	d3.select("body").select("#one").selectAll("*").remove();
	var root = d3.select("body").select("#one").append("svg").attr("width",
			width + margin.left + margin.right).attr("height",
			height + margin.top + margin.bottom).append("g").attr("transform",
			"translate(" + margin.left + "," + margin.top + ")").attr("class",
			"container");
	var tree = d3.layout.tree().size([ height, width ]).sort(null).children(
			function(d) {
				return (!d.team || d.team.length === 0) ? null : d.team;
			});
	var nodes = tree.nodes(treeData);
	var links = tree.links(nodes);

	var link = d3.svg.diagonal().projection(function(d) {
		return [ d.y, d.x ];
	});

	root.selectAll("path.link").data(links).enter().append("svg:path").attr(
			"class", "link").attr("d", link);
	var nodeGroup = root.selectAll("g.node").data(nodes).enter()
			.append("svg:g").attr("class", "node").attr("transform",
					function(d) {
						return "translate(" + d.y + "," + d.x + ")";
					}).on("click", function(d) { 
						toggle(d);  });;

	nodeGroup.append("svg:circle").attr("class", "node-dot").attr("r", 10)
			.attr("class", function(d) {
				if (d.status == 4) {
					return "overdue";
				}
				if (d.status == 1) {
					return "warning";
				}
				if (d.status == 2) {
					return "critical";
				} else
					return "okay";
			}).on("mouseover", function() {
				d3.select(this).style("fill", "lightgray");
			}).on("mouseout", function() {
				d3.select(this).style("fill", "#fff");
			}).append("title").text(
					function(d) {
						return (!d.team) ? d.username + ": " + d.email
								+ " Status:" + determineStatus(d.status)
								: d.manager.username + ": " + d.manager.email
										+ " Status:"
										+ determineStatus(d.manager.status);
					});

	nodeGroup.append("svg:text").attr("class", "nametext").attr("text-anchor",
			function(d) {
				return d.team ? "end" : "start";
			}).attr("dx", function(d) {
		var gap = 20;
		return d.team ? -gap : gap;
	}).attr("dy", 3).text(function(d) {
		return (d.manager.username) ? d.manager.username : d.username;
	});
	buildGraph(treeData);
}

function buildGraph(data) {

	d3.select("body").select("#twotwo").selectAll("*").remove();
	if(!data.team||data.team===0){
		data = data.problems
	}
	else
		data = data.team;
	
	var names = new Array();
	data.forEach(function(d){
		names.push(d.shortname);
	})
	var margin = {
		top : 20,
		bottom : 20,
		left : 20,
		right : 20
	};
	var height = parseInt(d3.select("#twotwo").style("height"));
	var width = parseInt(d3.select("#twotwo").style("width"));
	//var height = 400;
	//var width = 700;
	var y = d3.scale.linear().domain([0,6]).range([0,height-40]);
	var yA = d3.scale.linear().domain([0,6]).range([height-40,0]);
	var yAxis = d3.svg.axis().scale(yA).ticks(7).orient("left");
	var x = d3.scale.ordinal().domain(names).rangeBands([0, width - margin.left - margin.right]);
	var xAxis = d3.svg.axis().scale(x).ticks(0).orient("bottom");

	
	var svg = d3.select("#twotwo").append("svg").attr("height", height).attr(
			"width", width);
	var g = svg.append("g").attr("height", height-40).attr("width", width-40)
	.attr("transform",
			"translate(20,20)");

	svg.append("g").attr("transform", "translate(20," + (height - margin.bottom)+")").attr("class",
	"x axis").call(xAxis);
	svg.append("g").attr("transform", "translate(20,20)").attr("class",
	"y axis").call(yAxis);
	
	g.selectAll("g").data(data).enter().append("g").attr("class", "datag");
	
	g.selectAll(".datag").append("rect")
	.attr("class", "finance")
	.attr("height", function(d){
		return y(d.problems.finance);
	}).attr("width", function(d){
		return (x.rangeBand()-10)/4;
	}).attr("x", function(d, i){
		return x(d.shortname)+3;
	}).attr("y", function(d){
		return (height-40)-y(d.problems.finance);
	}).style("fill", function(d, i){
		return color(2);
	}).append("title").text(function(d){
		return d.username + " " + d.problems.finance + " Finance Problems" 
	});
	
	g.selectAll(".datag").append("rect")
	.attr("class", "vehicle")
	.attr("height", function(d){
		return y(d.problems.vehicle);
	}).attr("width", function(d){
		return (x.rangeBand()-10)/4;
	}).attr("x", function(d, i){
		return (x(d.shortname)+(x.rangeBand()-10)/4)+3;
	}).attr("y", function(d){
		return (height-40)-y(d.problems.vehicle);
	}).style("fill", function(d, i){
		return color(5);
	}).append("title").text(function(d){
		return d.username + " " + d.problems.vehicle + " Vehicle Problems" 
	});
	
	g.selectAll(".datag").append("rect")
	.attr("class", "customer")
	.attr("height", function(d){
		return y(d.problems.customer);
	}).attr("width", function(d){
		return (x.rangeBand()-10)/4;
	}).attr("x", function(d, i){
		return (x(d.shortname)+2*(x.rangeBand()-10)/4)+3;
	}).attr("y", function(d){
		return (height-40)-y(d.problems.customer);
	}).style("fill", function(d, i){
		return color(9);
	}).append("title").text(function(d){
		return d.username + " " + d.problems.customer + " Customer Problems" 
	});
	
	g.selectAll(".datag").append("rect")
	.attr("class", "order")
	.attr("height", function(d){
		return y(d.problems.order);
	}).attr("width", function(d){
		return (x.rangeBand()-10)/4;
	}).attr("x", function(d, i){
		return (x(d.shortname)+3*(x.rangeBand()-10)/4)+3;
	}).attr("y", function(d){
		return (height-40)-y(d.problems.order);
	}).style("fill", function(d, i){
		return color(50);
	}).append("title").text(function(d){
		return d.username + " " + d.problems.order + " Order Problems" 
	});
	
}

function buildLegend(){
	d3.select("body").select("#legend").selectAll("*").remove();
	var svg =d3.select("body").select("#legend").append("svg").attr("width", "100%").attr("height", "40px")
	
	svg.append("rect").attr("height", 18).attr("width", 18)
		.attr("x", 115). attr("y", 0).style("fill", color(2))
		.on("mouseover", function(d){
			d3.selectAll(".vehicle").transition().style("opacity", 0);
			d3.selectAll(".order").transition().style("opacity", 0);
			d3.selectAll(".customer").transition().style("opacity", 0);
		}).on("mouseout", function(d){
			d3.selectAll("rect").transition().style("opacity", 1);
		});
	svg.append("rect").attr("height", 18).attr("width", 18)
		.attr("x", 250). attr("y",0).style("fill", color(5)).on("mouseover", function(d){
			d3.selectAll(".finance").transition().style("opacity", 0);
			d3.selectAll(".order").transition().style("opacity", 0);
			d3.selectAll(".customer").transition().style("opacity", 0);
		}).on("mouseout", function(d){
			d3.selectAll("rect").transition().style("opacity", 1);
		});;
	svg.append("rect").attr("height", 18).attr("width", 18)
		.attr("x", 390). attr("y",0).style("fill", color(9)).on("mouseover", function(d){
			d3.selectAll(".vehicle").transition().style("opacity", 0);
			d3.selectAll(".order").transition().style("opacity", 0);
			d3.selectAll(".finance").transition().style("opacity", 0);
		}).on("mouseout", function(d){
			d3.selectAll("rect").transition().style("opacity", 1);
		});;
	svg.append("rect").attr("height", 18).attr("width", 18)
	.attr("x", 525). attr("y",0).style("fill", color(50)).on("mouseover", function(d){
		d3.selectAll(".finance").transition().style("opacity", 0);
		d3.selectAll(".vehicle").transition().style("opacity", 0);
		d3.selectAll(".customer").transition().style("opacity", 0);
	}).on("mouseout", function(d){
		d3.selectAll("rect").transition().style("opacity", 1);
	});
	
	applyLegendText(svg, "Finance", 150, 12);
	applyLegendText(svg, "Vehicle", 280, 12);
	applyLegendText(svg, "Customer", 420, 12);
	applyLegendText(svg, "Order", 550, 12);
	applyLegendText(svg, "Problem Type: ", 10, 12);
	
}

function toggle(d) {
	console.log(d.children); 
	if (d.children) {
	    d._children = d.children;
	    d.children = null;
	  } else {
	    d.children = d._children;
	    d._children = null;
	  }
	  console.log(d.children);
	  //buildTree(d);
	}

function applyLegendText(svg, text, x, y){
	svg.append("text").text(text).attr("x",x).attr("y",y).attr("class", "legend");
}