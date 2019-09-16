import React from 'react';
import CodeImg from '../assets/code.jpg';
import Tutorial from '../components/Tutorial';

const tutorials = [
  {
    img: CodeImg,
    title: 'Git Tutorial',
    description: 'Quick tutorial of how to use Git.',
    date: '10.9.2019 13:12',
    time: '8:00'
  },
  {
    img: CodeImg,
    title: 'Git Tutorial',
    description: 'Quick tutorial of how to use Git.',
    date: '10.9.2019 13:12',
    time: '8:00'
  },
  {
    img: CodeImg,
    title: 'Git Tutorial',
    description: 'Quick tutorial of how to use Git.',
    date: '10.9.2019 13:12',
    time: '8:00'
  },
  {
    img: CodeImg,
    title: 'Git Tutorial',
    description: 'Quick tutorial of how to use Git.',
    date: '10.9.2019 13:12',
    time: '8:00'
  }
];

const TutorialsPage = () => {
  return (
    <>
      <h2 className="text-4xl my-4 mx-24">Tutorials:</h2>
      {tutorials.map(tutorial => (
        <Tutorial {...tutorial} />
      ))}
    </>
  );
};

export default TutorialsPage;
