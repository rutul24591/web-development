import React from "react";

/** For below shortcut to work we need to explicitly add path in tsconfig.js
 * "paths": {
      "@/*": [
        "./src/*"
				"@/lib/*": ["./src/lib/*"]      // Only for any specific folder
      ]
    },
 * 
 * 
 */
import BarChart from "@/components/barChart";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <BarChart />
    </>
  );
};

export default Dashboard;
