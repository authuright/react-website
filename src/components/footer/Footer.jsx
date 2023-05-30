import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container mx-auto footer__site_bar">
          <div className="grid justify-items-center">
            <h1 className="text-4xl font-bold text-[#9531CE]">VISIONCODE</h1>
            <div className="py-8">
              <div className="py-8 flex items-center gap-[2vw]">
                <div>Facebook</div>
                <div>Twetter</div>
                <div>Youtube</div>
              </div>
            </div>
            <div>
              <h1>© Copyright 2023, VISIONCODE. All Rights Reserved.</h1>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
