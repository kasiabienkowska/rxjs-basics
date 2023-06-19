import { from } from "rxjs";

function* hello() {
	yield "Hello";
	yield "World";
}

const iterator = hello();

// console.log(iterator.next().value);
// console.log(iterator.next().value);

const observer = {
	next: (val) => console.log("next", val),
	error: (err) => console.log("error", val),
	complete: () => console.log("complete!"),
};

// const source$ = range(1, 5);
// const source$ = from([1, 2, 3, 4, 5]);

// const source$ = from(fetch("https://api.github.com/users/octocat"));

const source$ = from(iterator);

source$.subscribe(observer);
