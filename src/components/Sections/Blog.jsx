import {useState} from "react";
import styled from "styled-components";

// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
  };

  const convertCurrency = (price) => {
    // You can implement the currency conversion logic here
    // For simplicity, let's assume a direct conversion rate for illustration
    const conversionRate = 1.2; // 1 USD to 1.2 GBP
    return (price * conversionRate).toFixed(2);
  };


  return (
   
    <Wrapper id="blog">

    <LightBgSection>
    <div  >
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Pricing</h1>
            
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 ">
              <BlogBox
                title="Starter"
                text="Get started with our introductory plan designed for those who want a taste of our exceptional online Quran teaching services."
                tag={`${convertCurrency(20)} ${selectedCurrency}`}
                author="2 days of dedicated lessons for an entire month."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Basic"
                text="Take a step further with our Basic plan offering extended learning opportunities and more personalized sessions."
                tag="$25"
                author="3 days of immersive Quran learning for an entire month."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Golden"
                text="Shine bright with our Golden plan, offering an extended period of learning and enhanced features for an enriched experience."
                tag="$30"
                author="4 days of comprehensive Quranic education for an entire month."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-6 col-lg-6 mx-auto">
              <BlogBox
                title="Premium"
                text="Elevate your learning journey with our Premium plan, providing a more in-depth and tailored curriculum for accelerated progress."
                tag="$40"
                author="5 days of personalized teaching for an entire month."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-6 col-lg-6 mx-auto">
              <BlogBox
                title="Special"
                text="Elevate your learning journey with our Special plan, tailored for those seeking consistent and advanced learning opportunities."
                tag="$35"
                author="Saturdays and Sundays for an entire month."
                action={() => alert("clicked")}
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
            <CurrencySpinner onChange={(e) => handleCurrencyChange(e.target.value)} value={selectedCurrency}>
            <option value="USD">Fee In Pounds UK</option>
             <option value="USA">Fee In Dollars USA</option>
            <option value="CDA">Fee In Dollars CANADA</option>
            <option value="AU">Fee In Dollars Australia</option>
          {/* Add more currency options as needed */}
        </CurrencySpinner>
            </div>
          </div>
        </div>
      </div>
    </LightBgSection>
      <div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
      
    
    </Wrapper>
     
  );
}

const CurrencySpinner = styled.select`
  
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid green;  
  box-sizing: border-box; 
`;

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const LightBgSection = styled.div`
  background-color: #81EE96;
  padding: 50px 0;
`;