import { signal } from "@preact/signals-react";

const count = signal(0);

console.log("ran signal");

export default count;
