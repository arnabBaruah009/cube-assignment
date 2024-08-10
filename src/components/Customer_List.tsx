import React, { ReactHTMLElement, useState } from "react";

type CustomerType = {
  id: number;
  name: string;
  address: string;
  about: string;
};

const Customer_List = ({
  setActiveCustomer,
}: {
  setActiveCustomer: Function;
}) => {
  const customers: CustomerType[] = [
    {
      id: 1,
      name: "John Doe",
      address: "123 Main St, Springfield, USA",
      about:
        "John is a software engineer with over 10 years of experience in the tech industry. He loves coding and exploring new technologies.",
    },
    {
      id: 2,
      name: "Jane Smith",
      address: "456 Elm St, Shelbyville, USA",
      about:
        "Jane is a marketing professional who specializes in digital marketing strategies and content creation.",
    },
    {
      id: 3,
      name: "Robert Johnson",
      address: "789 Oak St, Capital City, USA",
      about:
        "Robert is a project manager with a passion for leading teams to success. He has a strong background in IT project management.",
    },
    {
      id: 4,
      name: "Emily Davis",
      address: "101 Maple St, Ogdenville, USA",
      about:
        "Emily is a graphic designer who enjoys creating visually appealing designs for both print and digital media.",
    },
    {
      id: 5,
      name: "Michael Brown",
      address: "202 Pine St, North Haverbrook, USA",
      about:
        "Michael is an accountant with a keen eye for detail and a love for numbers. He has over 15 years of experience in finance.",
    },
    {
      id: 6,
      name: "Sarah Wilson",
      address: "303 Cedar St, Brockway, USA",
      about:
        "Sarah is a human resources specialist with expertise in recruitment and employee relations.",
    },
    {
      id: 7,
      name: "David Lee",
      address: "404 Birch St, Springfield, USA",
      about:
        "David is a data analyst who excels in turning raw data into meaningful insights. He has a background in statistics and data science.",
    },
    {
      id: 8,
      name: "Laura Martinez",
      address: "505 Ash St, Shelbyville, USA",
      about:
        "Laura is a content writer with a passion for storytelling and creating engaging content across various platforms.",
    },
    {
      id: 9,
      name: "James Garcia",
      address: "606 Willow St, Capital City, USA",
      about:
        "James is a sales manager with a track record of exceeding sales targets and building strong customer relationships.",
    },
    {
      id: 10,
      name: "Linda Rodriguez",
      address: "707 Redwood St, Ogdenville, USA",
      about:
        "Linda is a customer service representative known for her friendly demeanor and commitment to helping customers.",
    },
    {
      id: 11,
      name: "Christopher Wilson",
      address: "808 Spruce St, North Haverbrook, USA",
      about:
        "Christopher is a network engineer with a deep understanding of networking technologies and infrastructure.",
    },
    {
      id: 12,
      name: "Jessica Hernandez",
      address: "909 Fir St, Brockway, USA",
      about:
        "Jessica is a product manager who loves working on innovative products that solve real-world problems.",
    },
    {
      id: 13,
      name: "Matthew Moore",
      address: "1010 Chestnut St, Springfield, USA",
      about:
        "Matthew is a software developer with a passion for building scalable web applications and writing clean code.",
    },
    {
      id: 14,
      name: "Olivia Taylor",
      address: "1111 Poplar St, Shelbyville, USA",
      about:
        "Olivia is a UX/UI designer who focuses on creating user-friendly and aesthetically pleasing interfaces.",
    },
    {
      id: 15,
      name: "Joshua Anderson",
      address: "1212 Walnut St, Capital City, USA",
      about:
        "Joshua is a business analyst who specializes in identifying business needs and finding solutions to improve processes.",
    },
    {
      id: 16,
      name: "Megan Thomas",
      address: "1313 Sycamore St, Ogdenville, USA",
      about:
        "Megan is a digital marketer with experience in SEO, SEM, and social media marketing.",
    },
    {
      id: 17,
      name: "Ryan Jackson",
      address: "1414 Magnolia St, North Haverbrook, USA",
      about:
        "Ryan is a mechanical engineer who enjoys solving complex engineering problems and working on innovative projects.",
    },
    {
      id: 18,
      name: "Samantha White",
      address: "1515 Hickory St, Brockway, USA",
      about:
        "Samantha is a public relations specialist who excels at building and maintaining a positive public image for her clients.",
    },
    {
      id: 19,
      name: "Andrew Harris",
      address: "1616 Dogwood St, Springfield, USA",
      about:
        "Andrew is a financial advisor who helps individuals and businesses make informed financial decisions.",
    },
    {
      id: 20,
      name: "Ashley Clark",
      address: "1717 Alder St, Shelbyville, USA",
      about:
        "Ashley is an operations manager who oversees the day-to-day operations of a large manufacturing plant.",
    },
    {
      id: 21,
      name: "Daniel Lewis",
      address: "1818 Beech St, Capital City, USA",
      about:
        "Daniel is a systems administrator with a focus on maintaining and optimizing IT infrastructure.",
    },
    {
      id: 22,
      name: "Sophia Walker",
      address: "1919 Maplewood St, Ogdenville, USA",
      about:
        "Sophia is a legal consultant who provides expert advice on corporate law and compliance.",
    },
    {
      id: 23,
      name: "Anthony Hall",
      address: "2020 Elmwood St, North Haverbrook, USA",
      about:
        "Anthony is a software architect who designs and oversees the development of complex software systems.",
    },
    {
      id: 24,
      name: "Isabella Scott",
      address: "2121 Pinewood St, Brockway, USA",
      about:
        "Isabella is a brand strategist who helps companies build and maintain strong brand identities.",
    },
    {
      id: 25,
      name: "Joseph Allen",
      address: "2222 Cedarwood St, Springfield, USA",
      about:
        "Joseph is a logistics coordinator with experience in supply chain management and transportation.",
    },
    {
      id: 26,
      name: "Grace Young",
      address: "2323 Oakwood St, Shelbyville, USA",
      about:
        "Grace is an event planner who specializes in organizing large-scale corporate events and conferences.",
    },
    {
      id: 27,
      name: "Nicholas King",
      address: "2424 Birchwood St, Capital City, USA",
      about:
        "Nicholas is a cybersecurity expert who helps organizations protect their digital assets from cyber threats.",
    },
    {
      id: 28,
      name: "Chloe Wright",
      address: "2525 Ashwood St, Ogdenville, USA",
      about:
        "Chloe is a social media manager who creates and implements social media strategies for businesses.",
    },
    {
      id: 29,
      name: "Ethan Lopez",
      address: "2626 Willowwood St, North Haverbrook, USA",
      about:
        "Ethan is a construction project manager who ensures that construction projects are completed on time and within budget.",
    },
    {
      id: 30,
      name: "Ava Hill",
      address: "2727 Redwoodwood St, Brockway, USA",
      about:
        "Ava is a human resources manager who focuses on employee development and organizational culture.",
    },
    {
      id: 31,
      name: "Benjamin Green",
      address: "2828 Sprucewood St, Springfield, USA",
      about:
        "Benjamin is a research scientist with a background in molecular biology and genetics.",
    },
    {
      id: 32,
      name: "Zoe Baker",
      address: "2929 Firwood St, Shelbyville, USA",
      about:
        "Zoe is a product designer who loves creating innovative products that improve people's lives.",
    },
    {
      id: 33,
      name: "Mason Nelson",
      address: "3030 Chestnutwood St, Capital City, USA",
      about:
        "Mason is a civil engineer with a focus on designing and building infrastructure projects.",
    },
    {
      id: 34,
      name: "Lily Carter",
      address: "3131 Poplarwood St, Ogdenville, USA",
      about:
        "Lily is a digital content creator who produces engaging video content for various platforms.",
    },
    {
      id: 35,
      name: "Jacob Mitchell",
      address: "3232 Walnutwood St, North Haverbrook, USA",
      about:
        "Jacob is an IT consultant who provides expert advice on IT strategies and solutions for businesses.",
    },
    {
      id: 36,
      name: "Mia Perez",
      address: "3333 Sycamorewood St, Brockway, USA",
      about:
        "Mia is a fashion designer who creates unique and stylish clothing for a wide range of clients.",
    },
    {
      id: 37,
      name: "William Roberts",
      address: "3434 Magnoliawood St, Springfield, USA",
      about:
        "William is an architect who specializes in designing sustainable and eco-friendly buildings.",
    },
    {
      id: 38,
      name: "Ella Turner",
      address: "3535 Hickorywood St, Shelbyville, USA",
      about:
        "Ella is a fitness trainer who helps clients achieve their health and fitness goals through personalized training programs.",
    },
    {
      id: 39,
      name: "Alexander Phillips",
      address: "3636 Dogwoodwood St, Capital City, USA",
      about:
        "Alexander is a business development manager who focuses on expanding market reach and driving revenue growth.",
    },
    {
      id: 40,
      name: "Harper Campbell",
      address: "3737 Alderwood St, Ogdenville, USA",
      about:
        "Harper is a copywriter with a knack for creating persuasive and engaging copy for marketing campaigns.",
    },
    {
      id: 41,
      name: "Michael Evans",
      address: "3838 Beechwood St, North Haverbrook, USA",
      about:
        "Michael is a software tester who ensures that software products meet quality standards before they are released.",
    },
    {
      id: 42,
      name: "Charlotte Adams",
      address: "3939 Maplewoodwood St, Brockway, USA",
      about:
        "Charlotte is a financial analyst who provides insights and recommendations to improve financial performance.",
    },
    {
      id: 43,
      name: "Liam Collins",
      address: "4040 Elmwoodwood St, Springfield, USA",
      about:
        "Liam is a content strategist who helps businesses create and manage effective content marketing strategies.",
    },
    {
      id: 44,
      name: "Amelia Sanchez",
      address: "4141 Pinewoodwood St, Shelbyville, USA",
      about:
        "Amelia is a teacher who is passionate about education and helping students achieve their full potential.",
    },
    {
      id: 45,
      name: "James Morris",
      address: "4242 Cedarwoodwood St, Capital City, USA",
      about:
        "James is a business consultant who provides expert advice on business strategy and operations.",
    },
    {
      id: 46,
      name: "Evelyn Rivera",
      address: "4343 Oakwoodwood St, Ogdenville, USA",
      about:
        "Evelyn is a therapist who specializes in cognitive-behavioral therapy and helping clients overcome anxiety.",
    },
    {
      id: 47,
      name: "Aiden Bell",
      address: "4444 Birchwoodwood St, North Haverbrook, USA",
      about:
        "Aiden is a web developer who enjoys creating responsive and user-friendly websites.",
    },
    {
      id: 48,
      name: "Sofia Cooper",
      address: "4545 Ashwoodwood St, Brockway, USA",
      about:
        "Sofia is a legal assistant who provides support to attorneys and helps manage legal documents.",
    },
    {
      id: 49,
      name: "Lucas Ward",
      address: "4646 Willowwoodwood St, Springfield, USA",
      about:
        "Lucas is a graphic artist who specializes in creating digital illustrations and visual content.",
    },
    {
      id: 50,
      name: "Aria Rogers",
      address: "4747 Redwoodwoodwood St, Shelbyville, USA",
      about:
        "Aria is a product marketer who focuses on launching and promoting new products in the market.",
    },
    {
      id: 51,
      name: "Daniel Patterson",
      address: "4848 Sprucewoodwood St, Capital City, USA",
      about:
        "Daniel is a data scientist who uses machine learning and AI to analyze large datasets and generate insights.",
    },
    {
      id: 52,
      name: "Mila Hughes",
      address: "4949 Firwoodwoodwood St, Ogdenville, USA",
      about:
        "Mila is an interior designer who creates beautiful and functional living spaces for her clients.",
    },
  ];

  const [activeID, setActiveID] = useState<number>(0);

  const handleCustomerClick = (customer: CustomerType) => {
    setActiveCustomer(customer);
    setActiveID(customer.id);
  };

  return (
    <div className="w-2/6 h-screen border-2 overflow-y-auto no-scrollbar">
      <ul>
        {customers.map((customer) => {
          return (
            <li
              onClick={() => handleCustomerClick(customer)}
              className={`w-full p-10 border-1 ${
                activeID === customer.id ? "bg-blue-100" : ""
              } hover:bg-blue-100 cursor-pointer border-b-2`}
            >
              <Customer key={customer.name} customer={customer} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Customer_List;

const Customer = ({ customer }: { customer: CustomerType }) => {
  return (
    <>
      <div>
        <h1 className="text-2xl mb-4">{customer.name}</h1>
        <p className="text-slate-500">{customer.about}</p>
      </div>
    </>
  );
};
