/*
Function that accepts datasets/selected year, and returns 
a GeoJSON USA data along with the loan origination amount for each state, given a year
*/
function filtered_data(prosper_sum_data, abbrev_data,usa_data,i_year) {
	//group prosper loan data by borrowerstate, and filter by the origination year
	var state_loan_data = [];
	for(var i=0;i<prosper_sum_data.length;i++) {
		var state = prosper_sum_data[i];
		var state_dict = {
			'key':state.key,
			'values':0
		};
		for(var j =0;j<state.values.length;j++) {
			var year = state.values[j]
			if(year.key==i_year) {
				state_dict['key'] = state.key;
				state_dict['values'] = year.values				
				break;
			}
		}
		state_loan_data.push(state_dict)
	}	
	
	//prosper data contains the state abbreviations. we need the full name to use the GeoJSON data.
	//create a dict that maps the abbreviations to the full name
	var state_abbrev_data = {};
	for (var i = 0; i < abbrev_data.length; i++) {
	    state_abbrev_data[abbrev_data[i].Abbreviation] = abbrev_data[i].State;
	}

	//Finally, update the GeoJSON data to include a the loan origination amount for each state
	for (var i = 0; i < state_loan_data.length; i++) {
		var state_name = state_abbrev_data[state_loan_data[i].key];
		for (var j = 0; j < usa_data.features.length; j++)  {
			var usa_state_name = usa_data.features[j].properties.name;
			if (state_name == usa_state_name) {
				usa_data.features[j].properties.originated = state_loan_data[i].values;
				break;
			}
		}
	}
	return(usa_data)
};

//Updates visualization with new data
function update(usa_data_new) {
		
	//data join with new data
	var paths = svg.selectAll("path")
		.data(usa_data_new.features);
	
	//ENTER
	paths.enter()
		.append("path")
		.attr("d", path);
		
	//ENTER + UPDATE
	paths.style("fill",function(d) { 
		var value = d.properties.originated;
		if (value) {
			return color(value);
		} else {
			return "rgb(213,222,217)";
		}
	});
	
	//EXIT OLD Data
	paths.exit().remove();
}
