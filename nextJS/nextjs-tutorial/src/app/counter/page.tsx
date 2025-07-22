/** BEFORE */

// 'use client';

// import { useState } from 'react';

// /** Below 2 won't work as metadata is only meant for server side components */
// // export const metadata = {
// //   title: 'Counter page'
// // }

// // export const generateMetadata = () => {}

// /** Solution is to move UI logic into separata UI component Counter and use this component as server component */

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}> Increment</button>
//     </div>
//   );
// };

// export default Counter;

// 'use client';
// import { useState } from 'react';

/** Keep the above 2 lines commented out to get an idea */

/** AFTER */
import Counter from './counter';

export const metadata = {
	title: 'Counter page',
};

const CounterPage = () => {
	return <Counter />;
};

export default CounterPage;
