/*
 * Copyright (c) Microsoft All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

var request = require('request');
var Q = require('q');
var config = require('./config');
var AuthenticationContext = require('adal-node').AuthenticationContext;

// The auth module object.
var auth = {};

// @name getAccessToken
// @desc Makes a request for a token using client credentials.
auth.getAppOnlyAccessToken = function () {
  var deferred = Q.defer();

  // These are the parameters necessary for the OAuth 2.0 Client Credentials Grant Flow.
  // For more information, see Service to Service Calls Using Client Credentials (https://msdn.microsoft.com/library/azure/dn645543.aspx).

  var authorityUrl = config.creds.tokenEndPointUrl;
  var authenticationContext = new AuthenticationContext(authorityUrl);
  authenticationContext.acquireTokenWithClientCredentials('https://graph.microsoft.com', config.creds.clientID, config.creds.clientSecret, function(err, response) {

    if (err) {
        deferred.reject(err);
      } else {
        // If successful, return the access token.
        console.log('authent success');
        console.log(response);
        deferred.resolve(response.accessToken);
      }    
    });

  return deferred.promise;
};

module.exports = auth;