Version 0.6.0

Added Algolia functionality:
- Allows users to now search for more than just card title, as Algolia elastic search will match all text on card (except for author).
- When users update or save new trips, back4app will run a cloud function to reindex and save the new back4app data into the algolia index, to keep the searching up to date with changes made the the database. 


Version 0.5.0

Added Authentication:
- User can log in and out of the site (logged in on first visit, visit profile to log out)
- certain pages are protected from users who are not logged in
Added Sign Up Page:
- Lets user create a new account that gets added to database

Version: 0.4.0

Added Parse functionality to the project in the following ways:
- Added trip information to a Back4App database organized with Trips, Countries, and People
  - Trip contains specific data to the Trip and points to both the Country and the Person
  - Country contains country specific data
  - Person contains person specific data
- Load the feed on mount with Parse Query results
- Allow the user to search specifically for a trip's Title
- Allowed the user to create and save their own trip object to the database in the Add Trip page

Added Routing Capabilities in the following ways:
- Added two pages to the nav bar, Add trip and Plan Trip
  - Add trip allows the user to create and save a new trip
  - Plan trip has not been implemented, but utilizes the routing correctly
  
  Contributors: 
  Eleanor Kinyon, 
  Patrick Bald
