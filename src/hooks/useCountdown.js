import { useEffect, useMemo, useState } from "react";

export function useCountdown(targetDate) {
	const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);
	const [diff, setDiff] = useState(Math.max(0, target - Date.now()));

	useEffect(() => {
		const id = setInterval(() => {
			setDiff(Math.max(0, target - Date.now()));
		}, 1000);
		return () => clearInterval(id);
	}, [target]);

	const seconds = Math.floor((diff / 1000) % 60);
	const minutes = Math.floor((diff / (1000 * 60)) % 60);
	const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));

	return { days, hours, minutes, seconds, isExpired: diff <= 0 };
}

