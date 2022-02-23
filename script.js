function coordenadasTCP(){
	const comprimentoEixo1 = document.getElementById('comprimento1').value;
	const comprimentoEixo2 = document.getElementById('comprimento2').value;
	const angulo1Grau = document.getElementById('angulo1').value;
	const angulo2Grau = document.getElementById('angulo2').value;

	const angulo1Rad = (angulo1Grau * Math.PI)/180;
	const angulo2Rad = (angulo2Grau * Math.PI)/180;
	x = (Math.cos(angulo1Rad) * Math.cos(angulo2Rad) * comprimentoEixo1) + (comprimentoEixo2 * Math.cos(angulo2Rad));
	y = (Math.sin(angulo2Rad) * Math.cos(angulo1Rad) * comprimentoEixo1) + (Math.cos(angulo2Rad) * Math.sin(angulo1Rad) * comprimentoEixo2) + (comprimentoEixo2 * Math.sin(angulo2Rad));
	gerarResultado(x, y);
	gerarGrafico(x, y, 0);
}

function gerarResultado(x, y){
	console.log('x = ' + x.toString() + ', y = ' + y.toString());
}

function gerarGrafico(coordenadaX, coordenadaY, coordenadaZ){
	var data = [trace2];
	var layout = {margin: {
		l: 0,
		r: 0,
		b: 0,
		t: 0
	}};
	
    var trace2 = {
    	//x:unpack(rows, 'x2'), y: unpack(rows, 'y2'), z: unpack(rows, 'z2'),
        x: [coordenadaX], y: [coordenadaY], z: [coordenadaZ],
    	mode: 'markers',
    	marker: {
    		color: 'rgb(0, 46, 41)',
    		size: 12,
    		symbol: 'circle',
    		line: {
    		color: 'rgb(0, 46, 41)',
    		width: 1},
    		opacity: 0.8},
    	type: 'scatter3d'};

    var data = [trace2];
    var layout = {margin: {
    	l: 0,
    	r: 0,
    	b: 0,
    	t: 0
    }};
    Plotly.newPlot('myChart', data, layout);
}