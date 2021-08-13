import React from "react";

import Twitter from "../svg/Twitter.svg";
import LinkedIn from "../svg/LinkedIn.svg";
import Telegram from "../svg/Telegram.svg";

const Navigation = () => {
  return (
    <nav className="">
      <div className="px-6 py-8 mx-auto max-w-7xl lg:px-8">
        <div className="flex justify-end">
          <a
            href="https://t.me/kristoferkristofer"
            target="_blank"
            rel="noreferrer"
            className="mr-6 text-gray-800 hover:text-gray-600"
          >
            <div className="text-sm text-center">
              <Telegram className="w-4" />
            </div>
          </a>
          <a
            href="https://twitter.com/kristoferlund"
            target="_blank"
            rel="noreferrer"
            className="mr-6 text-gray-800 hover:text-gray-600"
          >
            <div className="text-sm text-center">
              <Twitter className="w-4" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/kristoferlund"
            target="_blank"
            rel="noreferrer"
            className="text-gray-800 hover:text-gray-600"
          >
            <div className="text-sm text-center">
              <LinkedIn className="w-4" />
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
