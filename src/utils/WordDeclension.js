function wordDeclension(value){  
	value = Math.abs(value) % 100; 
	const num = value % 10;
	if(value > 10 && value < 20) return 'минут'; 
	if(num > 1 && num < 5) return 'минуты';
	if(num === 1) return 'минута'; 
	return 'минут';
}

export default wordDeclension;
