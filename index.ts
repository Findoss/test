import template from './vendor/template.js';

var compiled = template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
compiled({ users: ['fred', 'barney'] });
