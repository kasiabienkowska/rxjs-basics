import { range, of } from "rxjs";

const observer = {
	next: (val) => console.log("next", val),
	error: (err) => console.log("error", val),
	complete: () => console.log("complete!"),
};

// const source$ = range(1, 5);
const source$ = of(1, 2, 3, 4, 5);

source$.subscribe(observer);
