'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Gallery = new Module('gallery');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Gallery.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Gallery.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Gallery.menus.add({
    title: 'Gallery',
    link: 'gallery example page',
    roles: ['anonymous'],
    menu: 'main'
  });
  
  Gallery.aggregateAsset('css', 'gallery.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Gallery.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Gallery.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Gallery.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Gallery;
});
