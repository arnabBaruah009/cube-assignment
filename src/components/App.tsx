import { useState } from "react";
import CustomerList from "./Customer_List";

type Customer = {
  id: number;
  name: string;
  address: string;
  about: string;
}

function App() {
  const [activeCustomer, setActiveCustomer] = useState<Customer>()
  return (
    <div className="w-screen h-screen flex">
      <CustomerList setActiveCustomer={setActiveCustomer} />
    </div>
  );
}

export default App;
