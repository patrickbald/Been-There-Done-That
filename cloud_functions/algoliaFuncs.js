// Algolia Functionality

const algoliasearch = require('algoliasearch');
const client = algoliasearch('0D2QURHTOH', '35140dd4e563460722777dbba81bfa75');
const index = client.initIndex('prod_been_there_done_that');

reindexAlgoliaData = () => {
  let objectsToIndex = [];

  const trip_query = new Parse.Query('Trip');
  trip_query.find({ 
    success(trips) {
      // prepare objects to index 
      objectsToIndex = trips.map(trip => {
        // convert to regular key/value JavaScript object
        trip = trip.toJSON();
        // Specify Algolia's objectID with the Parse.Object unique ID
        trip.objectID = trip.objectId;
        return trip;
      });
      index.replaceAllObjects(objectsToIndex, { safe: true }).then(() => {
        console.log('Done re-indexing Trip data');
      });
    },
    error(err) {
      throw err;
    }
  })

  objectsToIndex = [];
  const usr_query = new Parse.Query('User');
  usr_query.find({
    success(users) {
      objectsToIndex = users.map(usr => {
        usr = usr.toJSON();
        usr.objectID = usr.objectId;
        return usr;
      });
      index.replaceAllObjects(objectsToIndex, { safe: true }).then(() => {
        console.log('Done re-indexing User data');
      });
    },
    error(err) {
      throw err;
    }
  })

  objectsToIndex = [];
  const country_query = new Parse.Query('Country');
  country_query.find({
    success(countries) {
      objectsToIndex = countries.map(c => {
        c = c.toJSON();
        c.objectID = c.objectId;
        return c;
      });
      index.replaceAllObjects(objectsToIndex, { safe: true }).then(() => {
        console.log('Done re-indexing Country data');
      });
    },
    error(err) {
      throw err;
    }
  })

}

updateAlgoliaData = () => {
  Parse.Cloud.afterSave('Trip', ({object}) => {
    // Convert Parse.Object to JSON
    const objectToSave = object.toJSON();
    // Specify Algolia's objectID with the Parse.Object unique ID
    objectToSave.objectID = objectToSave.objectId;
    // Add or update object
    index.saveObject(objectToSave).then(() => {
      console.log('Parse<>Algolia object saved');
    });
  });
}

searchClient = algoliasearch(
  '0D2QURHTOH',
  '35140dd4e563460722777dbba81bfa75'
);