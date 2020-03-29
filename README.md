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

Below is a sample document:


![Screen Shot 2020-03-27 at 3 39 21 PM](https://user-images.githubusercontent.com/59429924/77794094-a912fb00-7041-11ea-93a7-80725a14f7ac.png)



## Paths


### Retrieve all countries

[https://api-projectssaleh.herokuapp.com/](https://api-projectssaleh.herokuapp.com/)



### Retrieve one country by name

This path will return a single country by name.

`https://api-projectssaleh.herokuapp.com/name/:name`


Example:
[https://api-projectssaleh.herokuapp.com/name/Afghanistan](https://api-projectssaleh.herokuapp.com/name/Afghanistan)






### Retrieve countries by region

This path will return all countries within the named region.

`https://api-projectssaleh.herokuapp.com/region/:region`

Example:
[https://api-projectssaleh.herokuapp.com/region/Africa](https://api-projectssaleh.herokuapp.com/region/Africa)

Path above will return all countries with the region of Africa.

### Author
Sarah Saleh





