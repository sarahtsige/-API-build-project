# Country API with Migration Data

The goal of this project was to build an API which includes country statistics and migration data for each country where it is available.  



## Built With:

 - Node.JS
 - Express 
 - Mongoose 



## Getting Started
This API will allow the user to view all countries and the 2018 asylum data available for each country.  User can search for one country by name or country ID or can view a list of countries by region.  Responses are sent as JSON.


### Location
The API is available at https://api-projectssaleh.herokuapp.com/.   Responses are sent as JSON.

Included in the data is the following information:
 - Latitude/Longitude
 - Document ID
 - Country Name
 - Capital
 - Region
 - Population
 - Demonym
 - URL for image of Flag
 - Asylum Data


## Sample 

```
{
"latlong": [
38,
-97
],
"_id": "5e616b8608648a00044252b0",
"name": "United States of America",
"capital": "Washington, D.C.",
"region": "Americas",
"population": 323947000,
"demonym": "American",
"flag": "https://restcountries.eu/data/usa.svg",
"asylum": [
{
"_id": "5e616b8a08648a000442540a",
"Origin": "United States of America",
"CountryOfAsylumOrResidence": "Canada",
"year": 2018,
"total": 36,
"__v": 0
}
],
"__v": 1
}

```
## Paths


### Retrieve all countries

http://localhost:4000/



### Retrieve one country by name

http://localhost:4000/name/:name

Example:



### Retrieve countries by region

http://localhost:4000/region/:region





### Authors
Sarah Saleh





