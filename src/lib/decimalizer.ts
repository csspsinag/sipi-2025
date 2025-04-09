export function decimalize(
	value: number,
	decimals: number
): {
	value: number;
	decimals: number;
} {
	const decimalized = value.toFixed(decimals);
	const [whole, decimal] = decimalized.split('.');
	return {
		value: parseInt(whole),
		decimals: parseInt(decimal)
	};
}
