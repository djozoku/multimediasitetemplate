import React from 'react';
import Button from '../components/Button';
import Tutorial from '../components/Tutorial';

const IndexPage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, eos at. Amet, ut nemo
        molestias quam labore fugit inventore sed voluptas magni soluta dignissimos consectetur,
        ipsa repudiandae distinctio. Nemo quos neque quaerat atque doloribus, voluptatem fuga
        aperiam, expedita incidunt voluptate possimus quod necessitatibus veniam! Officia doloribus
        fugit velit aliquid quidem. Culpa dolor quaerat quasi mollitia est? Iusto animi qui, eius
        suscipit ea necessitatibus. Culpa provident dolorem natus nostrum odio reiciendis numquam
        qui quam delectus ad. Tempore adipisci possimus deleniti molestiae autem doloremque ad
        beatae suscipit neque enim voluptate, nostrum porro rerum voluptatem architecto,
        voluptatibus non unde praesentium maxime at itaque!
      </p>
      <Button
        text="Click Me!"
        onClick={() => {
          console.log('Clicked!');
        }}
      />
      <Tutorial />
    </>
  );
};

export default IndexPage;
