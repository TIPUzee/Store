import React, { PureComponent } from "react";

class FooterReferenceSection extends PureComponent {
  state = {};

  generateReferenceSection = (title, desc) => {
    return (
      <a c="reference-link" href="javascript: void(0)">
        <div>{title}</div>
        <div>{desc}</div>
      </a>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div
          c="footer-reference-section"
          className="pt-8 px-14 pb-6 flex flex-row"
        >
          {this.generateReferenceSection(
            "Amazom Music",
            "Stream millions of songs"
          )}
          {this.generateReferenceSection(
            "Amazon Advertising",
            "Find, attract, and engage customers"
          )}
          {this.generateReferenceSection(
            "Amazon Drive",
            "Cloud storage from Amazon"
          )}
          {this.generateReferenceSection(
            "6pm",
            "Score deals on fashion brands"
          )}
          {this.generateReferenceSection(
            "Amazon Business",
            "Everything For Your Business"
          )}
          {this.generateReferenceSection(
            "Prime Now",
            "2-Hour Delivery on Everyday Items"
          )}
          {this.generateReferenceSection(
            "Amazon Prime",
            "Fast, free delivery on over 100 million items"
          )}
          {this.generateReferenceSection(
            "Amazon Photos",
            "Unlimited Photo Storage Free With Prime"
          )}
          {this.generateReferenceSection("Shopbop", "Designer Fashion Brands")}
          {this.generateReferenceSection(
            "Amazon Warehouse",
            "Great Deals on Quality Used Products"
          )}
          {this.generateReferenceSection(
            "Whole Foods Market",
            "We Believe in Real Food"
          )}
          {this.generateReferenceSection(
            "Amazon Second Chance",
            "Pass it on, trade it in, give it a second life"
          )}
          {this.generateReferenceSection(
            "Amazon Renewed",
            "Like-new products you can trust"
          )}
          {this.generateReferenceSection(
            "Amazon Ignite",
            "Sell your original Digital Educational Resources"
          )}
          {this.generateReferenceSection(
            "Amazon Web Services",
            "Scalable Cloud Computing Services"
          )}
          {this.generateReferenceSection(
            "Audible",
            "Listen to Books & Original Audio Performances"
          )}
          {this.generateReferenceSection(
            "Book Depository",
            "Books With Free Delivery Worldwide"
          )}
          {this.generateReferenceSection(
            "Box Office Mojo",
            "Find Movie Box Office Data"
          )}
          {this.generateReferenceSection(
            "IMDb",
            "Pro Movies, TV & Celebrities"
          )}
          {this.generateReferenceSection(
            "IMDbPro",
            "Get Info Entertainment Professionals Need"
          )}
          {this.generateReferenceSection(
            "Kindle Direct Publishing",
            "Indie Digital Publishing Made Easy"
          )}
          {this.generateReferenceSection(
            "Prime Video Direct",
            "Video Distribution Made Easy"
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default FooterReferenceSection;
