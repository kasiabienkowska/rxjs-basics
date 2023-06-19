import { fromEvent } from "rxjs";

const observer = {
	next: (val) => console.log("next", val),
	error: (err) => console.log("error", val),
	complete: () => console.log("complete!"),
};

const source$ = fromEvent(document, "keyup");

const subOne = source$.subscribe(observer);
const subTwo = source$.subscribe(observer);

setTimeout(() => {
	console.log("unsubscrubing");
	subOne.unsubscribe();
}, 3000);
