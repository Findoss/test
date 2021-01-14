// import template from './vendor/template.js';
import template from 'lodash/template';

var compiled = template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
console.log(compiled({ users: ['fred', 'barney'] }));
