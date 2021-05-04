import React, { Suspense } from "react";

const Example = React.lazy(() => import("./components/Example")); 

const App = () => {
	return (
		<>
			<Suspense fallback={<div>Lodaing...</div>}>
				<Example />
			</Suspense>
		</>
	);
};

export default App;
