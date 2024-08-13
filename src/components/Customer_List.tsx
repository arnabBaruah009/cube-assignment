import { useEffect, useMemo, useState } from "react";
import { CustomerType } from "../types";
import { Virtuoso } from "react-virtuoso";

const Customer_List = ({
  setActiveCustomer,
}: {
  setActiveCustomer: Function;
}) => {
  // Dummy customers array of length 10000
  const customers: CustomerType[] = useMemo(() => {
    return Array.from({ length: 10000 }, (_, i) => ({
      id: i,
      image: `https://randomuser.me/api/portraits/men/1.jpg`,
      name: `John Doe ${i + 1}`,
      address: `${i + 1}23 Main St, Springfield, USA`,
      about:
        "John is a software engineer with over 10 years of experience in the tech industry. He has a deep passion for coding and loves exploring new technologies to create innovative solutions. Throughout his career, John has worked on a wide range of projects, from developing complex web applications to optimizing software performance. His expertise spans various programming languages, frameworks, and methodologies. John enjoys collaborating with cross-functional teams to deliver high-quality products and continuously seeks to expand his knowledge in emerging tech trends.",
    }));
  }, []);

  // State to set active customerID
  const [activeID, setActiveID] = useState<number>(1);

  // Function to handle active customer
  const handleCustomerClick = (customer: CustomerType) => {
    setActiveCustomer(customer);
    setActiveID(customer.id);
  };

  // useEffect to set the first customers as initial active customer
  useEffect(() => {
    setActiveCustomer(customers[0]);
  }, [customers, setActiveCustomer]);

  return (
    <aside className="w-full h-2/5 border-b-2 md:w-2/6 grow md:h-screen overflow-y-auto no-scrollbar">
      <ul>
        <Virtuoso
          style={{ height: '100vh' }}
          data={customers}
          itemContent={(_, customer) => (
            <li
              key={customer.name}
              onClick={() => handleCustomerClick(customer)}
              className={`relative w-full py-4 px-6 md:px-8 md:py-6 xl:px-12 border-1 ${
                activeID === customer.id
                  ? "bg-blue-100 md:before:absolute md:before:h-full md:before:w-[4px] md:before:top-0 md:before:right-0 md:before:bg-slate-500"
                  : ""
              } hover:bg-blue-100 cursor-pointer border-b-2`}
            >
              <Customer customer={customer} />
            </li>
          )}
        />
      </ul>
    </aside>
  );
};

export default Customer_List;

const Customer = ({ customer }: { customer: CustomerType }) => {
  return (
    <>
      <div>
        <div className="flex items-center mb-4">
          <img
            className="w-16 h-16 rounded-full mr-8"
            src={customer.image}
            alt="user-pic"
          />
          <h1 className="text-xl md:text-2xl">{customer.name}</h1>
        </div>

        <p className="text-slate-500 text-xs md:text-sm xl:text-base text-justify">
          {customer.about.length > 200
            ? customer.about.substring(0, 200) + "..."
            : customer.about}
        </p>
      </div>
    </>
  );
};
