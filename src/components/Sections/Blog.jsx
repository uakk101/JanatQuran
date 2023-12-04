import {useState} from "react";
import styled from "styled-components";

// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');

  const handleCurrencyChange = (value) => {
    setSelectedCurrency(value);
  };

  const getPricing = () => {
    switch (selectedCurrency) {
      case 'USD':
        return {
          starter: 30,
          basic: 20,
          golden: 25,
          premium: 35,
          special: 2000,
        };
      case 'USA':
        return {
          starter: 45,
          basic: 45,
          golden: 45,
          premium: 45,
          special: 45,
        };
      case 'CDA':
        return {
          starter: 78,
          basic: 78,
          golden: 78,
          premium: 78,
          special: 78,
        };
      case 'AU':
        return {
          starter: 30,
          basic: 15,
          golden: 25,
          premium: 30,
          special: 1500,
        };
      case 'IND':
        return {
          starter: 99,
          basic: 99,
          golden: 99,
          premium: 99,
          special: 99,
        };
      default:
        return {
          starter: 88,
          basic: 88,
          golden: 88,
          premium: 88,
          special: 88,
        };
    }
  };

  const getFormattedPrice = (price) => {
    return `${price} ${selectedCurrency}`;
  };
  const prices = getPricing();


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
                
                tag={getFormattedPrice(prices.starter)}
                author="2 days of dedicated lessons for an entire month."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <BlogBox
          title="Basic"
          text="Take a step further with our Basic plan offering extended learning opportunities and more personalized sessions."
          tag={getFormattedPrice(prices.basic)}
          author="3 days of immersive Quran learning for an entire month."
          action={() => alert("clicked")}
        />
      </div>

      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
        <BlogBox
          title="Golden"
          text="Shine bright with our Golden plan, offering an extended period of learning and enhanced features for an enriched experience."
          tag={getFormattedPrice(prices.golden)}
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
                tag={getFormattedPrice(prices.premium)}
                author="5 days of personalized teaching for an entire month."
                action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-6 col-lg-6 mx-auto">
              <BlogBox
                title="Special"
                text="Elevate your learning journey with our Special plan, tailored for those seeking consistent and advanced learning opportunities."
                tag={getFormattedPrice(prices.special)}
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
            <option value="IND">Fee In India Rupee</option>
          
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