var registry = require('./registry');

var $container = document.getElementById('container');

var data = [
  { x: 1910, y: 2 },
  { x: 1920, y: 106021568 },
  { x: 1930, y: 123202660 }
];
var graph = new Rickshaw.Graph( {
        element: $container,
        width: 580,
        height: 250,
        series: [ {
                color: 'steelblue',
                data: data
        } ]
} );

graph.render();