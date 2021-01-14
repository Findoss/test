import template from './vendor/template.js';

var compiled = template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
console.log(compiled({ users: ['fred', 'barney'] }));
