import React, { PureComponent } from "react";

class FooterSuggestionSection extends PureComponent {
  state = {};

  generateLinksSection = (title, list) => {
    return (
      <div c="get-to-know-us-section" className="flex flex-col gap-2">
        <h3
          c="footer-section-title"
          className="text-lg font-semibold text-slate-200"
        >
          {title}
        </h3>
        <ul
          c="footer-section-list"
          className="flex flex-col text-xs text-slate-300 gap-2"
        >
          {list.map((item, index) => {
            return (
              <li>
                <a href="javascript: void(0)" className="hover:underline">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div
          c="footer-suggestion-section"
          className="flex justify-center gap-16 pt-11 pb-20 px-5 bg-slate-800"
        >
          {this.generateLinksSection("Get to Know Us", [
            "Careers",
            "Blog",
            "About Amazon",
            "Investor Relations",
            "Amazon Devices",
            "Amazon Science",
          ])}
          {this.generateLinksSection("Make Money with Us", [
            "Sell products on Amazon",
            "Sell apps on Amazon",
            "Become an Affiliate",
            "Advertise Your Products",
            "Self-Publish with Us",
            "Host an Amazon Hub",
            "See More Make Money with Us",
          ])}
          {this.generateLinksSection("Amazon Payment Products", [
            "Amazon Business Card",
            "Shop with Points",
            "Reload Your Balance",
            "Amazon Currency Converter",
          ])}
          {this.generateLinksSection("Let Us Help You", [
            "Amazon and COVID-19",
            "Your Account",
            "Your Orders",
            "Shipping Rates & Policies",
            "Returns & Replacements",
            "Manage Your Content and Devices",
            "Amazon Assistant",
            "Help",
          ])}
        </div>
      </React.Fragment>
    );
  }
}

export default FooterSuggestionSection;
