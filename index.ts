// import template from './vendor/template.js';
import template from 'lodash/template';

var compiled = template('<% users.forEach( function(user) { %><li><%- user %></li><% }); %>');
console.log(compiled({ users: ['fred', 'barney'] }));
