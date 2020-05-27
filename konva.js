var width = window.innerWidth;
var height = window.innerHeight;

var stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height,
});

var layer = new Konva.Layer();

var circle = new Konva.Circle({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 70,
    fill: 'blue',
    stroke: 'black',
    strokeWidth: 4,
    shadowOffsetX: 10,
    shadowOffsetY: 10,
    shadowBlur: 10,
    draggable: true
});


var rectangle = new Konva.Rect({
    x: 20,
    y: 20,
    width: 150,
    height: 50,
    fill: '#39ff14',
    stroke: 'black',
    strokeWidth: 4,
    draggable: true
});

layer.add(rectangle);

var rect2 = new Konva.Rect({
    x: 150,
    y: 140,
    width: 100,
    height: 50,
    fill: 'red',
    shadowBlur: 10,
    cornerRadius: 10,
    draggable: true
});
layer.add(rect2);
layer.add(circle);
stage.add(layer);