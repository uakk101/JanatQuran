import { useState } from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";

export default function Blog() {
  const [selectedCurrency, setSelectedCurrency] = useState("$");

  const handleCurrencyChange = (value) => {
    setSelectedCurrency(value);
  };

  const getPricing = () => {
    switch (selectedCurrency) {
      case "£":
        return {
          starter: 15,
          basic: 20,
          golden: 25,
          premium: 30,
          special: 30,
        };
      case "$":
        return {
          starter: 20,
          basic: 25,
          golden: 30,
          premium: 40,
          special: 35,
        };
      case "C$":
        return {
          starter: 30,
          basic: 35,
          golden: 40,
          premium: 50,
          special: 45,
        };
      case "A$":
        return {
          starter: 30,
          basic: 40,
          golden: 50,
          premium: 60,
          special: 55,
        };
      case "₹":
        return {
          starter: 1500,
          basic: 2000,
          golden: 2500,
          premium: 3000,
          special: 2500,
        };
      default:
        return {
          starter: 20,
          basic: 25,
          golden: 30,
          premium: 40,
          special: 35,
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
        <div>
          <div className="container">
            {/* <h1 className="font40 extraBold">Our Pricing</h1>
            <div style={{ margin: "50px 0", width: "200px" }}>
            <CurrencySpinner onChange={(e) => handleCurrencyChange(e.target.value)} value={selectedCurrency}>
            <option value="USD">Fee In Pounds UK</option>
             <option value="USA">Fee In Dollars USA</option>
            <option value="CDA">Fee In Dollars CANADA</option>
            <option value="AU">Fee In Dollars Australia</option>
            <option value="IND">Fee In India Rupee</option>
            </CurrencySpinner>
            </div> */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "block" }}>
                <h1 className="font40 extraBold">Packages</h1>
              </div>

              <CurrencySpinner
                onChange={(e) => handleCurrencyChange(e.target.value)}
                value={selectedCurrency}
              >
                <option value="£">Fee In Pounds</option>
                <option value="$">Fee In American Dollars</option>
                <option value="C$">Fee In Canadian Dollars</option>
                <option value="A$">Fee In Australian Dollars</option>
                <option value="₹">Fee In Indian Rupee</option>
              </CurrencySpinner>
            </div>

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
                  // action={() => alert("clicked")}
                />
              </div>

              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <BlogBox
                  title="Golden"
                  text="Shine bright with our Golden plan, offering an extended period of learning and enhanced features for an enriched experience."
                  tag={getFormattedPrice(prices.golden)}
                  author="4 days of comprehensive Quranic education for an entire month."
                  // action={() => alert("clicked")}
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
                  // action={() => alert("clicked")}
                />
              </div>
              <div className="col-xs-12 col-sm-4 col-md-6 col-lg-6 mx-auto">
                <BlogBox
                  title="Special"
                  text="Elevate your learning journey with our Special plan, tailored for those seeking consistent and advanced learning opportunities."
                  tag={getFormattedPrice(prices.special)}
                  author="Saturdays and Sundays for an entire month."
                  // action={() => alert("clicked")}
                />
              </div>
            </div>
          </div>
        </div>
      </LightBgSection>
      {/* <div className="lightBg" style={{padding: '50px 0'}}>
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
      </div> */}
    </Wrapper>
  );
}

const CurrencySpinner = styled.select`
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid #c6a682;
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
  background-color: #f5f5f5;
  padding: 50px 0;
`;
