# Visualizing Prosper Loan Data with D3

# Summary
I take a geographic approach to visualizing loan origination volumne (in dollars) by state and year for Prosper Loans between 2006 and 2014. We will be able to see that 4 major states (California, New York, Texas and Florida) states have the highest origination volumes by year. Furthermore, certain states (North Dakota, Iowa and Maine) used to originate moderate originations, but as of 2013/2014, they originate $0 in loans. A closer look at North Dakota, Iowa and Maine revealed that changes in state law enacted in 2013 made borrowing from Prosper illegal in these states; this explains the abrupt dropoff in loan originations.
 
# Design
The core of this visualization is a Choropleth of the United States of America. The smallest unit or entity is each State and the measured variable is the total loan origination amount in the state over a given period of time. Time is controlled by the user via the use of a slider (ranging from 2006 - 2014). 

Chart Type: Choropleth 
Visual Encoding: Encode origination amount in a given state as the intensity of a hue. 
Layout: Choropleth (top) + Slider (below)

# Feedback

# Resources
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

