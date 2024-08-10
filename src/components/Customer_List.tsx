import React, { useEffect, useState } from "react";
import { CustomerType } from "../types";

const Customer_List = ({
  setActiveCustomer,
}: {
  setActiveCustomer: Function;
}) => {
  const customers: CustomerType[] = [
    {
      id: 1,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      name: "John Doe",
      address: "123 Main St, Springfield, USA",
      about:
        "John is a software engineer with over 10 years of experience in the tech industry. He has a deep passion for coding and loves exploring new technologies to create innovative solutions. Throughout his career, John has worked on a wide range of projects, from developing complex web applications to optimizing software performance. His expertise spans various programming languages, frameworks, and methodologies. John enjoys collaborating with cross-functional teams to deliver high-quality products and continuously seeks to expand his knowledge in emerging tech trends.",
    },
    {
      id: 2,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Jane Smith",
      address: "456 Elm St, Shelbyville, USA",
      about:
        "Jane is a marketing professional who specializes in digital marketing strategies and content creation. With a background in advertising and brand management, she has successfully led numerous campaigns that drive engagement and increase brand awareness. Jane is skilled in SEO, SEM, social media marketing, and data analytics. She is passionate about leveraging data-driven insights to craft compelling marketing messages and strategies. Her goal is to help businesses achieve their marketing objectives and connect with their target audiences effectively.",
    },
    {
      id: 3,
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Robert Johnson",
      address: "789 Oak St, Capital City, USA",
      about:
        "Robert is a project manager with a passion for leading teams to success. He has a strong background in IT project management, where he has overseen the development and implementation of complex projects. Robert excels in coordinating resources, managing timelines, and ensuring project goals are met within budget. His leadership skills and problem-solving abilities make him an invaluable asset to any team. Robert is committed to delivering high-quality results and continuously seeks ways to improve project management processes and methodologies.",
    },
    {
      id: 4,
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      name: "Emily Davis",
      address: "101 Maple St, Ogdenville, USA",
      about:
        "Emily is a graphic designer who enjoys creating visually appealing designs for both print and digital media. With a keen eye for detail and a passion for aesthetics, she has worked on a variety of design projects, including branding, marketing materials, and web design. Emily is proficient in design software such as Adobe Creative Suite and has a strong understanding of design principles and trends. She takes pride in delivering creative solutions that effectively communicate messages and captivate audiences.",
    },
    {
      id: 5,
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      name: "Michael Brown",
      address: "202 Pine St, North Haverbrook, USA",
      about:
        "Michael is an accountant with a keen eye for detail and a love for numbers. With over 15 years of experience in finance, he has a deep understanding of financial reporting, budgeting, and tax regulations. Michael is skilled in using accounting software and financial analysis tools to ensure accuracy and compliance. He is dedicated to providing valuable insights and recommendations to help businesses make informed financial decisions and achieve their financial goals.",
    },
    {
      id: 6,
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Sarah Wilson",
      address: "303 Cedar St, Brockway, USA",
      about:
        "Sarah is a human resources specialist with expertise in recruitment and employee relations. She has a strong background in managing HR functions, including talent acquisition, performance management, and employee engagement. Sarah is skilled in developing and implementing HR policies and procedures that support organizational goals and promote a positive work environment. She is committed to fostering strong relationships with employees and ensuring that HR practices align with best practices and legal requirements.",
    },
    {
      id: 7,
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      name: "David Lee",
      address: "404 Birch St, Springfield, USA",
      about:
        "David is a data analyst who excels in turning raw data into meaningful insights. With a background in statistics and data science, he is skilled in analyzing large datasets and using statistical methods to identify trends and patterns. David is proficient in data visualization tools and programming languages such as Python and R. His analytical skills and attention to detail enable him to provide actionable recommendations that drive business decisions and enhance organizational performance.",
    },
    {
      id: 8,
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "Laura Martinez",
      address: "505 Ash St, Shelbyville, USA",
      about:
        "Laura is a content writer with a passion for storytelling and creating engaging content across various platforms. She has experience writing for diverse industries, including technology, healthcare, and finance. Laura excels in crafting compelling articles, blog posts, and marketing copy that resonates with audiences and drives engagement. She is skilled in SEO best practices and content strategy, ensuring that her writing not only captivates readers but also contributes to achieving business objectives.",
    },
    {
      id: 9,
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "James Garcia",
      address: "606 Willow St, Capital City, USA",
      about:
        "James is a sales manager with a track record of exceeding sales targets and building strong customer relationships. He has extensive experience in developing and implementing sales strategies that drive revenue growth and enhance customer satisfaction. James is skilled in sales forecasting, pipeline management, and team leadership. His ability to motivate and guide sales teams, combined with his expertise in market analysis, enables him to achieve exceptional sales results and contribute to overall business success.",
    },
    {
      id: 10,
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Linda Rodriguez",
      address: "707 Redwood St, Ogdenville, USA",
      about:
        "Linda is a customer service representative known for her friendly demeanor and commitment to helping customers. With extensive experience in handling customer inquiries, resolving issues, and providing product information, Linda excels in delivering exceptional service and building positive relationships with clients. She is adept at managing customer interactions across various channels, including phone, email, and chat. Linda is dedicated to ensuring customer satisfaction and contributing to the overall success of the customer service team.",
    },
  ];

  const [activeID, setActiveID] = useState<number>(1);

  const handleCustomerClick = (customer: CustomerType) => {
    setActiveCustomer(customer);
    setActiveID(customer.id);
  };

  useEffect(() => {
    setActiveCustomer(customers[0]);
  }, []);

  return (
    <aside className="w-full h-2/5 border-b-2 md:w-2/6 grow md:h-screen overflow-y-auto no-scrollbar">
      <ul>
        {customers.map((customer) => {
          return (
            <li
              key={customer.name}
              onClick={() => handleCustomerClick(customer)}
              className={`w-full py-4 px-6 md:px-8 md:py-6 xl:px-12 border-1 ${
                activeID === customer.id
                  ? "bg-blue-100 md:border-r-4 md:border-r-slate-500"
                  : ""
              } hover:bg-blue-100 cursor-pointer border-b-2`}
            >
              <Customer customer={customer} />
            </li>
          );
        })}
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
