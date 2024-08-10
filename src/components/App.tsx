import { useState } from "react";
import CustomerList from "./Customer_List";
import CustomerDetails from "./Customer_Details";
import { CustomerType } from "../types";

function App() {
  const [activeCustomer, setActiveCustomer] = useState<CustomerType>();
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row">
      <CustomerList setActiveCustomer={setActiveCustomer} />
      {activeCustomer && <CustomerDetails customer={activeCustomer} />}
    </div>
  );
}

export default App;
