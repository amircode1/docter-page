import React from "react";

const NavbarChain = () => {
  const links = [
    { title: "هیلیفا", path: "#" },
    { title: "زیبایی", path: "#" },
    { title: "متخصص پوست", path: "#" },
    { title: "دکتر رضا فرجی", path: "#" },
  ];

  return (
    <div className="text-white flex justify-end items-start w-full">
      <div className="flex text-gray-300 flex-row-reverse gap-4 text-xs">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <a
              href={link.path}
              className={`transition-colors duration-200 ${
                index === links.length - 1
                  ? "text-white opacity-100"
                  : "text-[#8C8ABE] opacity-60 hover:text-white"
              }`}
            >
              {link.title}
            </a>
            {index < links.length - 1 && (
              <span className="text-gray-400">&lt;</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NavbarChain;