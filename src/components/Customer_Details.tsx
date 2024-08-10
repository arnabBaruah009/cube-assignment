import { useEffect, useState } from "react";
import { CustomerType } from "../types";

const Customer_Details = ({
  customer,
}: {
  customer: CustomerType | undefined;
}) => {
  return (
    <section className="w-4/6 h-screen text-center p-32 pt-10 overflow-y-auto bg-slate-100">
      <div className="mb-10">
        <h1 className="text-3xl font-medium my-4">{customer?.name}</h1>
        <p className="text-xl my-4 text-slate-600">
          Address: {customer?.address}
        </p>
        <p className="text-justify text-slate-500">{customer?.about}</p>
      </div>
      <div>
        <ImageContainer customer={customer} />
      </div>
    </section>
  );
};

export default Customer_Details;

const ImageContainer = ({
  customer,
}: {
  customer: CustomerType | undefined;
}) => {
  type Response = {
    message: string[];
  };

  const [data, setData] = useState<Response>();

  const getImage = async () => {
    try {
      const response = await fetch(
        `https://dog.ceo/api/breeds/image/random/9`
      ).then((res) => res.json());
      setData(response);
    } catch (error) {
      console.log("Error fetching plant image", error);
    }
  };

  useEffect(() => {
    if (customer) {
      getImage();
      const interval = setInterval(() => {
        getImage();
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [customer]);

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-10 justify-items-center">
      {data?.message?.map((url) => {
        return (
          <div key={url} className="w-40 h-40">
            <Image src={url} />
          </div>
        );
      })}
    </div>
  );
};

const Image = ({ src }: { src: string }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <>
      {!isLoaded && (
        <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded-xl">
          <svg
            className="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      )}
      <img
        className={`w-full h-full rounded-xl shadow-xl ${
          isLoaded ? "block" : "hidden"
        }`}
        src={src}
        alt="dog-image"
        onLoad={() => setIsLoaded(true)}
      />
    </>
  );
};
