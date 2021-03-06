import React from 'react';

interface Tutorial {
  title: string;
  description: string;
  img: any;
  date: string;
  time: string;
}

const Tutorial: React.FC<Tutorial> = props => {
  const { date, description, img, time, title } = props;
  return (
    <div className="xl:mx-32 xl:my-8 md:flex bg-gray-300 rounded-lg p-4">
      <div className="relative h-48 w-64 sm:h-64 sm:w-96 mx-auto md:mx-0">
        <img src={img} alt="Some code" className="h-48 w-64 sm:h-64 sm:w-96" />
        <p
          className="absolute bottom-0 right-0 p-1 m-1 text-white"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
        >
          {time}
        </p>
      </div>
      <div className="relative sm:ml-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl">{title}</h2>
        <p>{description}</p>
        <p className="absolute bottom-0 left-0">{date}</p>
      </div>
    </div>
  );
};

export default Tutorial;
