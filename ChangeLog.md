<b>Version 0.6.0 </b>
  Contributors: 
  Eleanor Kinyon 

The additions for this feature were based on the following user stories: 
1. User is able to like posts.
2. User is able to view liked posts.
3. User is able to view more information about a trip. 

To implement the first user story, the trip cards on the homepage now have like buttons (hearts), which the user can click to like, which will change the color of the button to indicate the post has been liked. I added the additional feature of unliking a post as well. Both of these actions update the new Liked class in the Parse database by either creating or deleting an object that contains pointers to the trip and the current user. 

To implement the second user story, I adjusted the profile page so the user can go to their profile (by clicking the profile icon in the header) and view information about the trips they have liked. 

To implement the third user story, I have added a "See More" button that the user can click on in the homepage feed or in their profile page feed of liked trips, to view more information about a trip. I added more data in the Parse database that includes top recommended restaurant, accomodation, activity, and attraction. A table showing these recommendations is displayed, in addition to another photo from the trip. The user can click "See Less" to hide this information.  

To implement the second



<b> Version 0.5.0 </b>
  Contributors: 
  Eleanor Kinyon, 
  Patrick Bald

Added Authentication:
- User can log in and out of the site (logged in on first visit, visit profile to log out)
- certain pages are protected from users who are not logged in
Added Sign Up Page:
- Lets user create a new account that gets added to database

<b> Version: 0.4.0 </b>
  Contributors: 
  Eleanor Kinyon, 
  Patrick Bald

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
  
