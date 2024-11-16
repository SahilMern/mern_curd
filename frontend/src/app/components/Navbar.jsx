import React from 'react';

const Navbar = () => {
  const navbarList = [
    {
      id: 1,
      name: "Home"
    },
    {
      id: 2,
      name: "Details"
    },
    {
      id: 3,
      name: "Edit"
    },
    {
      id: 4,
      name: "Contact"
    }
  ];

  return (
    <div className="px-16 py-4 flex justify-between items-center shadow-lg ">
      <h1 className="text-[1.3rem] uppercase cursor-pointer">Curd</h1>
      <ul className="px-8 py-2 flex justify-between items-center gap-14">
        {navbarList.map((item) => (
          <li
            key={item.id}
            className="border-b-2 border-transparent hover:border-blue-500 transition-colors duration-300 uppercase cursor-pointer"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
