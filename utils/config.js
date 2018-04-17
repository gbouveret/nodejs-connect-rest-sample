/*
 * Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

module.exports = {
  creds: {
    redirectUrl: 'http://localhost:3000/token',
    clientID: 'CLIENT_ID',
    clientSecret: 'CLIENT_SECRET',
    identityMetadata: 'https://login.microsoftonline.com/TENANT_ID/v2.0/.well-known/openid-configuration',
    allowHttpForRedirectUrl: true, // For development only
    responseType: 'code',
    validateIssuer: false, // For development only
    responseMode: 'query',
    scope: ['User.Read', 'Mail.Send', 'Files.ReadWrite'],
    tokenEndPointUrl: 'https://login.windows.net/TENANT_ID/oauth2/authorize',
    tokenEndPointv2Url: 'https://login.windows.net/TENANT_ID/oauth2/authorize'
  }
};
