import React from "react";
import AboutImg from "../../images/img_show.png";
import "./AboutSection.css";
const AboutSection = () => {
  console.log(process.env.PUBLIC_URL);
  return (
    <div>
      <div className="container mx-auto">
        <div className="columns-2">
          <div className="about__title">
            <div className="content_title">
              <h2>រៀនកូដជាភាសាខ្មែរ</h2>
              <div className="content__description">
                <p>
                  Tav Nin សូមស្វាគមន៍​ មកកាន់ការសិក្សា អំពីកូដជាភាសាខ្មែរ​!
                  បេីអ្នកទាំងអស់គ្នាអត់ ទាន់មានគណនីទេអាចបង្កេីតបានដោយចុច
                  លេីបង្កេីតគណនី ហេីយចូលទៅកាន់ Telegram ហេីយបង្កេីត
                  និងបង់ប្រាក់តាម Telegram!
                </p>
              </div>
            </div>
            <div className="content__show_img">
              <div className="wrapper_img_about">
                <img
                  className="img-size-fluid"
                  src={AboutImg}
                  alt="about images"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
