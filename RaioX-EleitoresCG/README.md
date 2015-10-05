# Description

This project makes a data analysis about the profile of voters from Campina Grande in Paraiba, Brazil. This way, we will have a deeper view about the people who are eligible to vote in this city and be able to see which is the main individual profile. The variable SEX, AGE GROUP and LEVEL OF EDUCATION were taken into consideration to make the analysis.


#Data
The data was obtained from the http://dados.gov.br/ website which is a tool made by the brazilian government to gather and find all the public information easily. It has a lof of different datasets that can be downloaded and analyzed.

#Tools
    Below, you can see the programming languages and main libraries used:
  
1. **Programming Languages:** 
    * R and Python 
2. **Main Libraries:**
    * [Dplyr](https://cran.rstudio.com/web/packages/dplyr/vignettes/introduction.html) - Manipulation of the data
    * [rCharts](http://rcharts.io/) - Creation of the interactive charts

#Scripts
All the code used in this analysis is in the files described below:

1. **election_analysis.Rmd**
        It is the main script of the project which is written in R. It has all the code to make the charts.
2. **add_ensinoMedio_categ.py:** 
        It is a python script which modifies the variable LEVEL OF EDUCATION in the original dataset in order to update this category and keep the data consistency.
3.  **format.py :**
        It is another python script that removes accented letters from the dataset to make it simpler to analyse.