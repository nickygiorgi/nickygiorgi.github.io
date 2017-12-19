function randomNumber(rangeStart, rangeEnd) {
	return Math.floor((Math.random() * rangeEnd) + rangeStart);
}

var hexMap = new Map();
	hexMap.set(10, 'A');
	hexMap.set(11, 'B');
	hexMap.set(12, 'C');
	hexMap.set(13, 'D');
	hexMap.set(14, 'E');
	hexMap.set(15, 'F');

function randomHexadecimalColour() {	
	var colourNums = [];
	for (var i = 0; i < 6; i++) {
		colourNums.push(randomNumber(0, 15));
	}

	var colourVals = colourNums.map(
		x => {
			if (x < 10) {
				return x.toString();
			}
			
			return hexMap.get(x);
		}
	);
	
	return '#' + colourVals.join('');	
}