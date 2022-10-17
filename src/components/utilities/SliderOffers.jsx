import React, { PureComponent } from "react";
import { ResponsiveContainer } from "../utilities";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      c="slider-right-btn"
      className="absolute h-12 w-12 right-5 top-1/2 -translate-y-1/2 rounded-full text-4xl flex items-center justify-center bg-slate-800 text-slate-200 hover:bg-slate-600 transition-all"
      onClick={() => onClick()}
    >
      <ChevronRightIcon style={{ fontSize: "inherit", color: "inherit" }} />
    </button>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      c="slider-right-btn"
      className="absolute h-12 w-12 left-5 top-1/2 -translate-y-1/2 rounded-full text-4xl flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all"
      onClick={() => onClick()}
    >
      <ChevronLeftIcon style={{ fontSize: "inherit", color: "inherit" }} />
    </button>
  );
};

class SliderOffers extends PureComponent {
  state = {};

  responsive = {
    superLargeDesktop: {
      breakpoint: { max: 99999, min: 1280 },
      items: 4,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 1280, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 568 },
      items: 2,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: { max: 568, min: 0 },
      items: 1,
      partialVisibilityGutter: 40,
    },
  };

  render() {
    return (
      <React.Fragment>
        <div c="slider-offers" className="contents">
          <ResponsiveContainer>
            <div
              c="section-wrapper"
              className="rounded-2xl py-6 px-7 bg-white shadow-lg hover:shadow-xl transition-shadow flex flex-col gap-5"
            >
              <div c="title" className="text-xl font-semibold">
                {this.props.headerTitle}
              </div>
              <div c="slider-wrapper" className="">
                <Carousel
                  partialVisible={true}
                  responsive={this.responsive}
                  draggable={false}
                  focusOnSelect={false}
                  infinite={true}
                  customRightArrow={<CustomRightArrow />}
                  customLeftArrow={<CustomLeftArrow />}
                >
                  {React.Children.map(this.props.children, (child, index) => {
                    return this.generateItem(child);
                  })}
                </Carousel>
              </div>
            </div>
          </ResponsiveContainer>
        </div>
      </React.Fragment>
    );
  }

  generateItem = (child) => {
    return (
      <div className="h-60 flex justify-center items-center">
        <div className="w-5/6 h-5/6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          {child}
        </div>
      </div>
    );
  };
}

export default SliderOffers;
