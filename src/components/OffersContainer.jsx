import React, { PureComponent } from "react";
import { ResponsiveContainer } from "./utilities";
import OffersCollection from "./OffersCollection";
import SliderOffers from "./utilities/SliderOffers";

class OffersContainer extends PureComponent {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ResponsiveContainer
          fluidContainerStyle={{
            marginTop: "-50px",
            position: "relative",
            zIndex: "10",
          }}
          containerStyle={{ paddingInline: "30px" }}
        >
          {/* wrapper */}
          <div className="offers-wrapper flex flex-col gap-12">
            <OffersCollection
              details={[
                {
                  title: "Gaming Accessories",
                  offerClickHandlers: [
                    this.props.handlerForDialogueBoxToShow,
                    this.props.handlerForDialogueBoxToShow,
                    this.props.handlerForDialogueBoxToShow,
                    this.props.handlerForDialogueBoxToShow,
                  ],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "Shop Now",
                },
                {
                  title: "Health & Personal Care",
                  offerClickHandlers: [
                    this.props.handlerForDialogueBoxToShow,
                    this.props.handlerForDialogueBoxToShow,
                  ],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "Shop Now",
                },
                {
                  title: "Dress",
                  offerClickHandlers: [
                    this.props.handlerForDialogueBoxToShow,
                    this.props.handlerForDialogueBoxToShow,
                    this.props.handlerForDialogueBoxToShow,
                  ],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "Shop Now",
                },
                {
                  title: "Toys under $30",
                  offerClickHandlers: [
                    this.props.handlerForDialogueBoxToShow,
                    this.props.handlerForDialogueBoxToShow,
                  ],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "Shop Now",
                },
                {
                  title: "Shop by Catagory",
                  offerClickHandlers: [this.props.handlerForDialogueBoxToShow],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "Shop Now",
                },
                {
                  title: "Computer & Accessories",
                  offerClickHandlers: [this.props.handlerForDialogueBoxToShow],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "Shop Now",
                },
                {
                  title: "Easy Returns",
                  offerClickHandlers: [this.props.handlerForDialogueBoxToShow],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "Learn More",
                },
                {
                  title: "Best Quality",
                  offerClickHandlers: [this.props.handlerForDialogueBoxToShow],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "Learn More",
                },
              ]}
            />
            <SliderOffers headerTitle={"Top Sellers in Books for you"}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </SliderOffers>
            <SliderOffers headerTitle={"International top sellers in Home"}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </SliderOffers>
            <OffersCollection
              details={[
                {
                  title: "Gaming Accessories",
                  offerClickHandlers: [
                    this.props.handlerForDialogueBoxToShow,
                    this.props.handlerForDialogueBoxToShow,
                    this.props.handlerForDialogueBoxToShow,
                    this.props.handlerForDialogueBoxToShow,
                  ],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "Shop Now",
                },
                {
                  title: "Health & Personal Care",
                  offerClickHandlers: [
                    this.props.handlerForDialogueBoxToShow,
                    this.props.handlerForDialogueBoxToShow,
                  ],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "Shop Now",
                },
                {
                  title: "Dress",
                  offerClickHandlers: [
                    this.props.handlerForDialogueBoxToShow,
                    this.props.handlerForDialogueBoxToShow,
                    this.props.handlerForDialogueBoxToShow,
                  ],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "Shop Now",
                },
                {
                  title: "Toys under $30",
                  offerClickHandlers: [
                    this.props.handlerForDialogueBoxToShow,
                    this.props.handlerForDialogueBoxToShow,
                  ],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "Shop Now",
                },
                {
                  title: "Shop by Catagory",
                  offerClickHandlers: [this.props.handlerForDialogueBoxToShow],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "Shop Now",
                },
                {
                  title: "Computer & Accessories",
                  offerClickHandlers: [this.props.handlerForDialogueBoxToShow],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "Shop Now",
                },
                {
                  title: "Easy Returns",
                  offerClickHandlers: [this.props.handlerForDialogueBoxToShow],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "Learn More",
                },
                {
                  title: "Best Quality",
                  offerClickHandlers: [this.props.handlerForDialogueBoxToShow],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "Learn More",
                },
              ]}
            />
          </div>
          {/* wrapper */}
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}

export default OffersContainer;
