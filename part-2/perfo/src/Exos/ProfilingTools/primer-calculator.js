function nextPrime(value) {
    if (value > 2) {
        var i, q;
        do {
            i = 3;
            value += 2;
            q = Math.floor(Math.sqrt(value));
            while (i <= q && value % i) {
                i += 2;
            }
        } while (i <= q);
        return value;
    }
    return value === 2 ? 3 : 2;
}


export const generatePrime = (startingNumber) => {
	var userValue = startingNumber;
	var value = 0, result = [];
	for (var i = 0; i < userValue; i++) {
		value = nextPrime(value);
		result.push(value);
	}
  return result[userValue-1];
}