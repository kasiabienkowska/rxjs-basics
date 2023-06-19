import { interval, timer } from "rxjs";

// const interval$ = interval(500);
const interval$ = timer(2000);

interval$.subscribe(console.log);
