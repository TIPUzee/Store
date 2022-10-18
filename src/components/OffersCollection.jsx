import React, { createFactory, PureComponent } from "react";
import OffersCard from "./utilities/OffersCard";

class OffersCollection extends PureComponent {
  state = { res: null };
  render() {
    return (
      <React.Fragment>
        <div
          c="offers-collection"
          className="flex flex-wrap xl:justify-between lg:justify-evenly md:justify-between gap-y-8"
        >
          {this.props.details.map((detail, i) =>
            this.generateOfferCard(detail)
          )}
        </div>
      </React.Fragment>
    );
  }

  componentDidMount = () => {
    fetch(process.env.REACT_APP_LOCALHOST + "offersDetails.php")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ res: res });
      });
  };

  generateOfferCard = (details) => {
    return (
      <OffersCard
        mainTitle={details.title}
        onOfferClickHandler={details.offerClickHandlers}
        onButtonClickHandler={details.buttonClickHandler}
        bottomButtonTitle={details.buttonTitle}
      ></OffersCard>
    );
  };
}

export default OffersCollection;
