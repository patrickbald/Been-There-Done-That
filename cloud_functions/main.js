
Parse.Cloud.afterSave("Trip", function(request, response) {

  const algoliasearch = require('algoliasearch');
  const client = algoliasearch('0D2QURHTOH', 'b9a209b6cf28e0a383dc247809a6f41a');
  const index = client.initIndex('Trips');

  const query = new Parse.Query("Trip");
  query.include("TripUser"); // Points to User class
  query.include("TripDestination"); // points to Countries Class
  return query.find().then((results) => {
    console.log("in results");
      // // Prepare objects to index from Trip
      const objectsToIndex = results.map(trip => {

        trip = trip.toJSON();
        trip.objectID = trip.objectId;
        return trip;

      });
      console.log("objects to index: ", objectsToIndex);
      // Add or update new objects
      index.replaceAllObjects(objectsToIndex, { safe: true }).then(() => {
        console.log('Parse<>Algolia import done');
      });
    return results;
    });
});


