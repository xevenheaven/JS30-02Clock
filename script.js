function tick() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDeg = ((seconds / 60) * 360) + 90;

	const minutes = now.getMinutes();
	const minutesDeg = ((minutes / 60) * 360) + 90;

	const hours = now.getHours();
	const hoursDeg = ((hours / 24) * 360) + 90;

	const hand = document.querySelector('.hand');
	const secondHand = document.querySelector('.second-hand');
	const minuteHand = document.querySelector('.minute-hand');
	const hourHand = document.querySelector('.hour-hand');

	if (secondsDeg === 90) {
		secondHand.style.transition = 'none';
	} else if (secondHand && secondHand.style.transition) {
		secondHand.style.transition = '';
	}

	if (minutesDeg === 90) {
		minuteHand.style.transition = 'none';
	} else if (minuteHand && minuteHand.style.transition) {
		minuteHand.style.transition = '';
	}

	if (hoursDeg === 90) {
		hourHand.style.transition = 'none';
	} else if (hourHand && hourHand.style.transition) {
		hourHand.style.transition = '';
	}

	secondHand.style.transform = 'rotate(' + secondsDeg + 'deg)';
	minuteHand.style.transform = 'rotate(' + minutesDeg + 'deg)';
	hourHand.style.transform = 'rotate(' + hoursDeg + 'deg)';
}

setInterval(tick, 1000);
tick();