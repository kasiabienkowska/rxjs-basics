// import { of } from 'rxjs';

// /*
//  * Any code samples you want to play with can go in this file.
//  * Updates will trigger a live reload on http://localhost:1234/
//  * after running npm start.
//  */
// of('Hello', 'RxJS').subscribe(console.log);

import { Observable } from "rxjs";

const observer = {
	next: (value) => console.log("next", value),
	error: (value) => console.log("error", value),
	complete: () => console.log("complete!"),
};

const observable = new Observable((subscriber) => {
	subscriber.next("Hello");
	subscriber.next("World");
	subscriber.complete();
});

observable.subscribe(observer);
