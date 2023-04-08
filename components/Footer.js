import React from "react";
import Script from "next/script";

export default function Footer() {
  return (
    <>
      <footer className="un-bottom-navigation filter-blur">
        <div className="em_body_navigation border-0 -active-links">
          <div className="item_link">
            <a
              href="homepage.html"
              className="btn btn_navLink"
              aria-label="btnNavigation"
            >
              <div className="icon_current">
                <i className="ri-home-5-line" />
              </div>
              <div className="icon_active">
                <i className="ri-home-5-fill" />
              </div>
            </a>
          </div>
          <div className="item_link">
            <a
              href="page-search-random.html"
              className="btn btn_navLink"
              aria-label="btnNavigation"
            >
              <div className="icon_current">
                <i className="ri-search-2-line" />
              </div>
              <div className="icon_active">
                <i className="ri-search-2-fill" />
              </div>
            </a>
          </div>
          <div className="item_link">
            <button
              type="button"
              name="uploadItem"
              aria-label="uploadItem"
              className="btn btn_navLink without_active"
              data-bs-toggle="modal"
              data-bs-target="#mdllUploadItem"
            >
              <div className="btn btnCircle_default">
                <i className=" ri-home-5-line" />
              </div>
            </button>
          </div>
          <div className="item_link">
            <a
              href="page-favourit-random.html"
              className="btn btn_navLink"
              aria-label="btnNavigation"
            >
              <div className="icon_current">
                <i className="ri-heart-3-line" />
              </div>
              <div className="icon_active">
                <i className="ri-heart-3-fill" />
              </div>
            </a>
          </div>
          <div className="item_link">
            <a
              href="page-account.html"
              className="btn btn_navLink"
              aria-label="btnNavigation"
            >
              <div className="icon_current">
                <i className="ri-user-4-line" />
              </div>
              <div className="icon_active">
                <i className="ri-user-4-fill" />
              </div>
            </a>
          </div>
        </div>
      </footer>
      
      <Script src="assets/vendors/btn.js"></Script>
      <Script src="assets/vendors/zuck_stories/zuck.min.js"></Script>
      <Script src="assets/vendors/zuck_stories/zuck.min.js"></Script>
      <Script src="assets/vendors/smoothscroll/smoothscroll.min.js"></Script>
      <Script src="assets/vendors/swiper/swiper-bundle.min.js"></Script>
      <Script src="assets/vendors/nouislider/nouislider.min.js"></Script>
      <Script src="assets/vendors/nouislider/wNumb.min.js"></Script>
      <Script src="assets/js/bootstrap.bundle.min.js"></Script>
      <Script src="assets/js/pwa-services.js"></Script>
      <Script src="assets/js/custom.js"></Script>
    </>
  );
}
