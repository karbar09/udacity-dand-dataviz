## Visualizing Prosper Loan Data with D3

## Summary
I take a geographic approach to visualizing loan origination volumne (in dollars) by state and year for Prosper Loans between 2006 and 2014. We will be able to see that 4 major states (California, New York, Texas and Florida) states have the highest origination volumes by year. Furthermore, certain states (North Dakota, Iowa and Maine) used to originate moderate originations, but as of 2013/2014, they originate $0 in loans. A closer look at North Dakota, Iowa and Maine revealed that changes in state law enacted in 2013 made borrowing from Prosper illegal in these states; this explains the abrupt dropoff in loan originations.
 
## Design
The core of this visualization is a Choropleth of the United States of America. The smallest unit or entity is each State and the measured variable is the total loan origination amount in the state over a given period of time. Time is controlled by the user via the use of a slider (ranging from 2006 - 2014). 

### Current

Initial design decisions such as chart type, visual encodings, layout, legends, or hierarchy are included at the beginning of the Design section in the README.md file.

Chart Type: Choropleth of USA

Visual Encodings: Loan Origination Amounts are bucketed into 6 groups. I use 6 hues of the color blue to distinguish between loan origination buckets - uses multiple hues of 1 color makes it less visually challenging to distinguish groups.

Legend: 6 colors. Each color represents a range of log-scaled dollar amounts and is clearly labeled in the legend.

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

### After Feedback 2/3/4
1. Fixed the slider ticks so that .5 year ticks are not displayed (this appeared when viewing the visualization on larger screens)
2. Fixed the slider number formatting so that years appeared without commas. [this issue was connected to fixing the number of ticks above]
3. Reduced the number of buckets from 8 -> 6, by combining the ranges 1-1000, 1000-10000, and 10,000-100,000. This merging makes sense from the perspective of conveying information because the focus of this visualization is to show which states originate the most/least loans. Being able to see differences across america is also an objective, so, that's why I still show 6 gradations of loan amounts. 
3. There was confusion, rightfully so, about what statistic is being displayed. So, I clarified the title to show the year that is currently being displayed in the chart. 

Reviewer #3 mentioned that a bar chart may be better for this visualization. I responsed to this feedback with this message, and the reviewer agreed with my point of view:

I think bar chart would be tricky because there are 50 states to have on the x-axis. From a viewer's perspective, it will be tough to search for a particular states data. the usa layout is more friendly to that kind of exploration. 

Most of Reviewer #4's initial feedback was due to not scrolling down and seeing the slider. After seeing this, the reviewer revised the feedback to account for this.


## Feedback

### Reviewer #1 

It's very clear that the map is showing the changes in loans in different states overtime, the overall trend seems to be growing, but the comparison is a little weak, it's a little hard to tell which states grew faster than the others.
1. the size of the chart and text are a little off due to laptop resolution
2. the type of the legend is a little confusing, it's not heat map, should use spectrum for heatmap.
3. there is no color difference between NC (>300k) and Kentucky (2k)
4. title says it's from 2008, the chart starts from 2006

### Reviewer #2

From looking at the visualization, I'm not following what information you are trying to highlight. What does the value amount represent when the mouse is over state? The legend doesn't have a title so I'm unsure. The 0.5 marks in between the years are not operational, so it's probably best to remove them to avoid confusion. I think once I can convey the central theme of the visualization, then I can better respond to the questions. Looks like a good start though!

I would probably also recommend using different colors instead of saturation for the visual encoding as it will stand out more. Just a suggestion.

### Reviewer #3

i dont see alaska there.
i am surprised that there are two or three states without any loan originations.
loan originations are thin in middle states. seem to reflect the political landscape of red/blue states.
red states having less loan originations and blue states having in general more loan originations than the red ones. texas is an exception.
loan originations are more in industrialized, prosperous, populous, and perhaps more well educated states.

what do you mean by the legend 1-10 million loans. it is a bit confusing. a bar chart giving the numbers would have been more instructive..
i interpreted that legend as the number of loans in the range 1 to 10m. 

### Reviewer #4

Here are my quick thoughts: 

1. I think there are too many buckets. There are 8 here, which is hard to distinguish on the chart because the blue start blending together. 
2. There is no state in the top 2 buckets. So why are they included in the legend? Just removing those would get down to 6 buckets, which would help. 
3. Might be useful to have loan originations per capita.  Because this graph seems somewhat correlated with population (the biggest ones are Californis, Texas, Georgia, New York, Florida, Illinois). Georgie is the 8th most populous state and the other 5 are the top 5. 
4. For title I would suggest: "Total Prosper Loan Originations 2006-2014, by state" 

oops. didnt even scroll down so i did not see the toggle or the text below the toggle, which made the same point I made about population. this also changes my title suggestion since I thought you were shoring total originations over the entire 8-year period. 

maybe this is an accidental point about people's expectation of scrolling when you show them a chart? maybe im an outlier but will everyone know to scroll?


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
