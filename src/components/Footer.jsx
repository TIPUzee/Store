import React, { PureComponent } from "react";

class Footer extends PureComponent {
  state = {};
  render() {
    return (
      <React.Fragment>
        <footer
          c="footer-wrapper"
          className="w-full flex flex-col gap-0 p-0 m-0"
        >
          <div c="back-to-top-button" className="contents">
            <a
              href="#top-bar-id"
              className="block bg-slate-900 text-slate-200 text-center py-2 scroll-smooth"
            >
              Back to top
            </a>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
