/*
 * routes.js - module to provide routing
 */

  'use strict';
  var
    configRoutes,
    mongodb    = require('mongodb'),

    mongoServer = new mongodb.Server(
      'localhost',
      mongodb.Connection.DEFAULT_PORT
    ),
    dbHandle  = new mongodb.Db(
      'spa', mongoServer, {safe : true}
    );

  dbHandle.open (function () {
    console.log( '** Connected to MongoDB **');
  })

