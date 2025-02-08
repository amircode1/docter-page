import React from "react";

const NavbarChain = () => {
  const links = [
    { title: "هیلیفا", path: "#" },
    { title: "زیبایی", path: "#" },
    { title: "متخصص پوست", path: "#" },
    { title: "دکتر رضا فرجی", path: "#" },
  ];

  return (
    <div className="text-text-primary flex justify-end items-start w-full">
      <div className="flex text-text-secondary flex-row-reverse gap-4 text-xs">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <a
              href={link.path}
              className={`transition-colors duration-200 ${
                index === links.length - 1
                  ? "text-text-primary opacity-100"
                  : "text-text-secondary/60 hover:text-text-primary"
              }`}
            >
              {link.title}
            </a>
            {index < links.length - 1 && (
              <span className="text-text-secondary">&lt;</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default NavbarChain;