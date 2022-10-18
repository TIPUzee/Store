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
          <div className="offers-wrapper flex flex-col gap-12 pb-14">
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
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
            </SliderOffers>
            <SliderOffers headerTitle={"International top sellers in Home"}>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
            </SliderOffers>
            <OffersCollection
              details={[
                {
                  title: "Create with Strip lights",
                  offerClickHandlers: [this.props.handlerForDialogueBoxToShow],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "Shop Now",
                },
                {
                  title: "Shop Laptops & Tablets",
                  offerClickHandlers: [this.props.handlerForDialogueBoxToShow],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "See More",
                },
                {
                  title: "For your Fitness Needs",
                  offerClickHandlers: [this.props.handlerForDialogueBoxToShow],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "Shop Now",
                },
                {
                  title: "Home & Kitchen under $30",
                  offerClickHandlers: [this.props.handlerForDialogueBoxToShow],
                  buttonClickHandler: this.props.handlerForDialogueBoxToShow,
                  buttonTitle: "Shop Now",
                },
              ]}
            />
            <SliderOffers headerTitle={"International top Sellers"}>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
            </SliderOffers>
            <SliderOffers headerTitle={"International top Sellers in Kitchen"}>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
              <div className="w-full h-full relative after:absolute after:bg-imgPlaceholder after:bg-contain after:bg-no-repeat after:w-12 after:h-1/2 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:block after:opacity-30 after:bg-center"></div>
            </SliderOffers>
          </div>
          {/* wrapper */}
        </ResponsiveContainer>
      </React.Fragment>
    );
  }
}

export default OffersContainer;
