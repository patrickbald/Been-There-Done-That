
const algoliasearch = require('algoliasearch');
const client = algoliasearch('0D2QURHTOH', 'b9a209b6cf28e0a383dc247809a6f41a');
const index = client.initIndex('Trips');

Parse.Cloud.define('indexData', () => {
  const Trip = new Parse.Object.extend("Trip");
  const query = new Parse.Query(Trip);
  query.include("TripUser"); // Points to User class
  query.include("TripDestination"); // points to Countries Class
  query.find({
    success(trips) {
      // Prepare objects to index from contacts
      const objectsToIndex = trips.map(trip => {
        // Convert to JavaScript object and specify Algolia's objectID with the Parse.Object unique ID
        return { ...trip.toJSON(), ...{ objectID: trip.objectId } };
      });
      // Add or update new objects
      index.saveObjects(objectsToIndex).then(() => {
        console.log('Parse<>Algolia import done');
      });
    },
    error(err) {
      throw err;
    }
  });

  // const query = new Parse.Query('User');
  // query.find({
  //   success(users) {
  //     const objectsToIndex = users.map(user => {
  //       return { ...user.toJSON(), ...{ objectID: user.objectId } };
  //     });
  //     index.saveObjects(objectsToIndex).then(() => {
  //       console.log('Parse<>Algolia import done');
  //     });
  //   },
  //   error(err) {
  //     throw err;
  //   }
  // });

  // const query = new Parse.Query('Country');
  // query.find({
  //   success(countries) {
  //     const objectsToIndex = countries.map(country => {
  //       return { ...country.toJSON(), ...{ objectID: country.objectId } };
  //     });
  //     index.saveObjects(objectsToIndex).then(() => {
  //       console.log('Parse<>Algolia import done');
  //     });
  //   },
  //   error(err) {
  //     throw err;
  //   }
  // });

});

// Parse.Cloud.afterSave('reindexAlgoliaData', () => {
//   let objectsToIndex = [];

//   const trip_query = new Parse.Query('Trip');
//   trip_query.find({ 
//     success(trips) {
//       // prepare objects to index 
//       objectsToIndex = trips.map(trip => {
//         // convert to regular key/value JavaScript object
//         trip = trip.toJSON();
//         // Specify Algolia's objectID with the Parse.Object unique ID
//         trip.objectID = trip.objectId;
//         return trip;
//       });
//       index.replaceAllObjects(objectsToIndex, { safe: true }).then(() => {
//         console.log('Done re-indexing Trip data');
//       });
//     },
//     error(err) {
//       throw err;
//     }
//   })

//   objectsToIndex = [];
//   const usr_query = new Parse.Query('User');
//   usr_query.find({
//     success(users) {
//       objectsToIndex = users.map(usr => {
//         usr = usr.toJSON();
//         usr.objectID = usr.objectId;
//         return usr;
//       });
//       index.replaceAllObjects(objectsToIndex, { safe: true }).then(() => {
//         console.log('Done re-indexing User data');
//       });
//     },
//     error(err) {
//       throw err;
//     }
//   })

//   objectsToIndex = [];
//   const country_query = new Parse.Query('Country');
//   country_query.find({
//     success(countries) {
//       objectsToIndex = countries.map(c => {
//         c = c.toJSON();
//         c.objectID = c.objectId;
//         return c;
//       });
//       index.replaceAllObjects(objectsToIndex, { safe: true }).then(() => {
//         console.log('Done re-indexing Country data');
//       });
//     },
//     error(err) {
//       throw err;
//     }
//   })

// });

// Parse.Cloud.define('updateAlgoliaData', () => {
//   Parse.Cloud.afterSave('Trip', ({object}) => {
//     // Convert Parse.Object to JSON
//     const objectToSave = object.toJSON();
//     // Specify Algolia's objectID with the Parse.Object unique ID
//     objectToSave.objectID = objectToSave.objectId;
//     // Add or update object
//     index.saveObject(objectToSave).then(() => {
//       console.log('Parse<>Algolia object saved');
//     });
//   });
// });
