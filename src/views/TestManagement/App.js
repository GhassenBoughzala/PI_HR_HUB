import React, { Component } from "react";


export const CardPage = () => (
  <div className="flex flex-wrap">
    <div className="w-full md:w-4/12 mb-6 md:mb-0 md:p-3">
      <Card>
        <img
          className="max-w-full h-auto md:h-48"
          src="https://res.cloudinary.com/beloved/image/upload/v1608683063/Assets/lamborghini_mxb2j7.jpg"
          alt="Bugatti"
          width={1200}
          height={800}
        />
        <CardBody>
          <CardTitle className="text-lg">TEST A</CardTitle>
          <CardText>
            Joe made the sugar cookies; Susan decorated them. When motorists
            sped in and out of traffic.
          </CardText>
          <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">
            Pass Test
            <ArrowIcon />
          </a>
        </CardBody>
      </Card>
    </div>
    <div className="w-full md:w-4/12 mb-6 md:mb-0 md:p-3">
      <Card>
        <img
          className="max-w-full h-auto md:h-48"
          src="https://res.cloudinary.com/beloved/image/upload/v1608683147/Assets/bugatti-cars-7-free-car-hd-wallpaper_j4xyj6.jpg"
          alt="Bugatti"
          width={1200}
          height={800}
        />
        <CardBody>
          <CardTitle className="text-lg">TEST B</CardTitle>
          <CardText>
            Joe made the sugar cookies; Susan decorated them. When motorists
            sped in and out of traffic.
          </CardText>
          <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">
          Pass Test
            <ArrowIcon />
          </a>
        </CardBody>
      </Card>
    </div>
    <div className="w-full md:w-4/12 mb-6 md:mb-0 md:p-3">
      <Card>
        <img
          className="max-w-full h-auto md:h-48"
          src="https://res.cloudinary.com/beloved/image/upload/v1599343428/Assets/3_znyzrd.jpg"
          alt="blog"
          width={1200}
          height={800}
        />
        <CardBody>
          <CardTitle className="text-lg">TEST C</CardTitle>
          <CardText>
            Joe made the sugar cookies; Susan decorated them. When motorists
            sped in and out of traffic.
          </CardText>
          <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">
          Pass Test
            <ArrowIcon />
          </a>
        </CardBody>
      </Card>
    </div>
  </div>
);
const Card = ({ children, className }) => (
  <div
    className={`${className} relative flex flex-col border-2 border-gray-200 rounded-lg`}
    style={style}
  >
    {children}
  </div>
);
const CardBody = ({ children }) => (
  <div className="block flex-grow flex-shrink p-5">{children}</div>
);
const CardTitle = ({ children, className }) => (
  <div className={`${className} font-medium text-gray-700 mb-3`}>
    {children}
  </div>
);
const CardText = ({ children }) => (
  <div className="text-gray-500">{children}</div>
);
const style = {
  boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
};
const ArrowIcon = () => (
  <svg
    className="w-4 h-4 ml-2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </svg>
);

export default CardPage