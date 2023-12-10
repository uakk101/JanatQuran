import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";
import AddImage2 from "../../assets/img/add/add2.png";
import { Link } from "react-scroll";

export default function Courses() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Courses</h1>
            <p className="font13">
              Our diverse array of courses offers a comprehensive Islamic
              education, ranging from <br />
              fundamental Noorani Qaida and Quranic recitation to advanced
              studies in Hifz, Translation, <br /> and Tafseer. Immerse yourself
              in the richness of Islamic knowledge, encompassing Duain, <br />
              Ahadees, and Qs&As, fostering a deep understanding and connection
              with the sacred teachings of Islam.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Noorani Qaida"
                text="Begin your journey in learning the fundamentals of Quranic recitation with the Noorani Qaida course. This foundational course introduces learners to Arabic letters, pronunciation rules, and basic tajweed (correct pronunciation) principles, providing a solid base for further Quranic studies."
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="Quran Paak Nazra"
                text="Immerse yourself in the divine verses of the Quran through the Nazra course. This program focuses on the accurate recitation of the Holy Quran, ensuring students read the sacred text fluently and with proper tajweed."
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="Quran Paak Hifz (Memorization)"
                text="Embark on the noble journey of memorizing the entire Quran with the Hifz course. This comprehensive program guides students in memorizing and retaining the verses of the Quran, instilling discipline, patience, and spiritual growth throughout the memorization process."
                // action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                title="Quran Paak Translation and Tafseer"
                text="Explore the profound meanings and interpretations of the Quran with the Translation and Tafseer course. Delve into the linguistic nuances, historical context, and spiritual insights provided by scholars to gain a deeper understanding of the divine messages within the Quranic verses."
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                title=" Islamic Duain,Ahadees,Qs&As"
                text="Enrich your knowledge of Islam with a diverse course covering Islamic Duain (supplications), Ahadees (sayings of Prophet Muhammad), and Qs&As (Questions and Answers) on various aspects of faith. "
                // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                title="Serat Nabavi"
                text="Coming Soon ... "
                // action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              {/* <FullButton title="Load More" action={() => alert("clicked")} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">
                A few words about our Teachers
              </h4>
              <h2 className="font40 extraBold">
                Guiding Lights of Knowledge: Meet Our Expert Instructors
              </h2>
              <p className="font12">
                Our esteemed team of instructors brings a wealth of diverse
                experiences to the realm of online Islamic education. With a
                proven track record in virtual instruction, they consistently
                deliver high-quality teaching, ensuring an enriching learning
                experience for students. Each instructor possesses a profound
                mastery of their respective subjects, demonstrating a strong
                command over Noorani Qaida, Quranic recitation, Hifz,
                Translation, Tafseer, and various aspects of Islamic studies.
                Their commitment to excellence and passion for imparting
                knowledge make them the guiding lights that illuminate the path
                of understanding and spiritual growth for our students. Rest
                assured, you are in capable hands with our team of dedicated and
                knowledgeable teachers.
              </p>
              <ButtonsRow
                className="flexNullCenter"
                style={{ margin: "30px 0" }}
              >
                <div style={{ width: "190px" }}>
                  <FullButton
                    title="Get Started"
                    action={() => {
                      <Link
                        activeClass="active"
                        style={{ padding: "10px 15px" }}
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-80}
                      >
                        Contact
                      </Link>;
                    }}
                  />
                </div>
                <div style={{ width: "190px", marginLeft: "15px" }}>
                  <FullButton
                    title="Contact Us"
                    // action={() => alert("clicked")}
                    border
                  />
                </div>
              </ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
