# Description

This project makes a data analysis about the profile of voters from Campina Grande in Paraiba, Brazil. This way, we will have a deeper view about the people who are eligible to vote in this city and be able to see which is the main individual profile. The variable SEX, AGE GROUP and LEVEL OF EDUCATION were taken into consideration to make the analysis.


#Data
The data was obtained from the http://dados.gov.br/ website which is a tool made by the brazilian government to gather and find all the public information easily. It has a lof of different datasets that can be downloaded and analyzed.

#Tools
    Below, you can see the programming languages and main libraries used:
  
###Languages 
    R and Python 
###Main Libraries
    Dplyr - https://cran.rstudio.com/web/packages/dplyr/vignettes/introduction.html - Manipulation of the data
    rCharts - http://rcharts.io/ - Creation of the interactive charts

#Scripts
All the code used in this analysis is in the files described below:

###election_analysis.Rmd
        This is the main script of the project which is written in R. It has all the code to make the charts.
###add_ensinoMedio_categ.py: 
        This is a python script which modifies the variable LEVEL OF EDUCATION in the original dataset in order to update this category and keep the data consistency.
### format.py :
        It is another python script that removes accented letters from the dataset to make it simpler to analyse.