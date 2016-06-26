## Visualizing Prosper Loan Data with D3

## Summary
I take a geographic approach to visualizing loan origination volumne (in dollars) by state and year for Prosper Loans between 2006 and 2014. We will be able to see that 4 major states (California, New York, Texas and Florida) states have the highest origination volumes by year. Furthermore, certain states (North Dakota, Iowa and Maine) used to originate moderate originations, but as of 2013/2014, they originate $0 in loans. A closer look at North Dakota, Iowa and Maine revealed that changes in state law enacted in 2013 made borrowing from Prosper illegal in these states; this explains the abrupt dropoff in loan originations.
 
## Design
The core of this visualization is a Choropleth of the United States of America. The smallest unit or entity is each State and the measured variable is the total loan origination amount in the state over a given period of time. Time is controlled by the user via the use of a slider (ranging from 2006 - 2014). 

### Current

Initial design decisions such as chart type, visual encodings, layout, legends, or hierarchy are included at the beginning of the Design section in the README.md file.

Chart Type: Choropleth of USA

Visual Encodings: Loan Origination Amounts are bucketed into 8 groups. I use 8 hues of the color blue to distinguish between loan origination buckets - uses multiple hues of 1 color makes it less visually challenging to distinguish groups.

Legend: 8 colors. Each color represents a range of log-scaled dollar amounts and is clearly labeled in the legend.

Layout:

|     Title      |
|----------------|
|      Map 		 |
|     Slider     |
|      Text      |

### Initial
Chart Type: Choropleth 

Visual Encoding: Encode origination amounts from 1 to 100 million in linear scale to the colors "lightblue" to "blue". If the amount is 0, a separate color is used.

Legend: 3 values

Layout: 

|             Ti|tle            |
|           ---:|:---           |
| Map           | Text          |
|               | Slider        |

### After Feedback 1
1. Sizing issues are caused by poor usage of sizing and column elements in html. I changed the layout to a more understandable linear layout. First, the map. Then, the slider below the map. And Finally, the text description after the slider.
2. and 3. The legend is confusing - based on this, i bucket the loan originations into 8 groups and show a gradated color scale. Also, i use a log scale instead of a linear scale. These changes make it more clear for the user to estimate the loan origination sizes for each state, see differences of an order of 10 between states, and see which states become the best/worst places for originations.
4. Fixed a type in the title - thanks for catching it!


## Feedback

### Reviewer #1 

It's very clear that the map is showing the changes in loans in different states overtime, the overall trend seems to be growing, but the comparison is a little weak, it's a little hard to tell which states grew faster than the others.
1. the size of the chart and text are a little off due to laptop resolution
2. the type of the legend is a little confusing, it's not heat map, should use spectrum for heatmap.
3. there is no color difference between NC (>300k) and Kentucky (2k)
4. title says it's from 2008, the chart starts from 2006


## Resources
- Chorlopeth: https://github.com/alignedleft/d3-book/blob/master/chapter_12/05_choropleth.html
- Legend: http://bl.ocks.org/mbostock/3888852
- Quantative Scales: https://github.com/d3/d3/wiki/Quantitative-Scales#linear_domain
- Grouping/Summarizing Data in D3: http://www.d3noob.org/2014/02/grouping-and-summing-data-using-d3nest.html
- Creating a Hashtable/Dictionary from csv data: http://stackoverflow.com/questions/16588825/create-hashtable-dictionary-from-csv-data
- Using d3 Queue to load multiple data sources: https://github.com/d3/d3-queue
- d3-slider (examples): http://thematicmapping.org/playground/d3/d3.slider/
- d3-slider (repo): http://github.com/turban/d3.slider
- animations and transitions: http://www.jeromecukier.net/blog/2012/07/16/animations-and-transitions/
- d3-tool tip: http://bl.ocks.org/Caged/6476579
- Cynthia Brewers Color Brewer!: http://colorbrewer2.org/
