import Head from "next/head";
import Image from "next/image";

import Script from "next/script";
import Header from "@/components/Header";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        {/* ===================================
START LODAER PAGE
    ==================================== */}
        {/* <section className="loader-page" id="loaderPage">
          <div className="spinner_flash" />
        </section> */}
        {/* START WRAPPER */}
        <div id="wrapper">
          {/* START CONTENT */}
          <div id="content">
            {/* ===================================
        START THE HEADER
      ==================================== */}

            {/* ===================================
        START THE SPACE STICKY
      ==================================== */}
            
            {/* ===================================
        START THE STORIES SECTION
      ==================================== */}
            
            {/* ===================================
        START THE BORDER SECTIONS
      ==================================== */}
      <br /><br /><br />
            <div className="border-sections-home" />
            {/* ===================================
        START THE RANDOM NFTS
      ==================================== */}
            <section className="unSwiper-cards margin-t-20">
              {/* un-title-default */}
              <div className="un-title-default">
                <div className="text">
                  <h2>Votre Classe</h2>
                  <p>Veillez choisir votre classe</p>
                </div>
                
              </div>
              <div className="discover-nft-random margin-t-20">
                <div className="content-NFTs-body">
                  
                  <a
                    href="page-collectibles-details.html"
                    className="item-sm-card-NFTs"
                  >
                    <div className="cover-image">
                      <>
                        
                        <img
                          className="big-image"
                          src="images/other/30.jpg"
                          alt=""
                        />
                      </>
                      
                      <div className="user-text">
                        <div className="user-avatar">
                          
                            
                            
        
                          <span>2 nde</span>
                        </div>
                        
                      </div>
                    </div>
                  </a>
                  {/* item-sm-card-NFTs */}
                  <a
                    href="page-collectibles-details.html"
                    className="item-sm-card-NFTs"
                  >
                    <div className="cover-image">
                      <picture>
                        <source
                          srcSet="images/other/19.jpg"
                          type="image/jpg"
                        />
                        <img
                          className="big-image"
                          src="images/other/19.jpg"
                          alt=""
                        />
                      </picture>
                      
                      <div className="user-text">
                        <div className="user-avatar">
                          
                          <span>1 ère</span>
                        </div>
                        
                      </div>
                    </div>
                  </a>
                  {/* item-sm-card-NFTs */}
                
                  {/* item-sm-card-NFTs */}
                  <a
                    href="page-collectibles-details.html"
                    className="item-sm-card-NFTs"
                  >
                    <div className="cover-image">
                      <picture>
                        
                        <img
                          className="big-image"
                          src="images/other/16.jpg"
                          alt=""
                        />
                      </picture>
                      
                      <div className="user-text">
                        <div className="user-avatar">
                          
                          <span>Terminale</span>
                        </div>
                        
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </section>
            
         
           
           

            
          </div>

        
        </div>
        {/* ===================================
START THE MODAL UPLOAD
    ==================================== */}
        <div
          className="modal transition-bottom screenFull defaultModal mdlladd__rate fade"
          id="mdllUploadItem"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="title-modal">Menu</h1>
                <button
                  type="button"
                  className="btn btnClose"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ri-close-fill" />
                </button>
              </div>
              <div className="modal-body">
                <div className="content-upload-item text-center">
                  
                  <div className="grid_buttonUpload">
                    <Link
                      href="dash"
                      className="btn btn-primary margin-b-10"
                    >
                      Français
                    </Link>
                    <Link
                      href="page-create-multi.html"
                      className="btn btn-warning margin-b-10 text-white "
                    >
                      Maths
                    </Link>
                    <Link
                      href="page-create-single.html"
                      className="btn btn-primary margin-b-10"
                    >
                      Physique
                    </Link>
                    <Link
                      href="page-create-multi.html"
                      className="btn btn-warning margin-b-10 text-white "
                    >
                      Create Multiple
                    </Link>
                    
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0">
                <div className="env-pb" />
              </div>
            </div>
          </div>
        </div>
        {/* ===================================
START THE MODAL ADD ETH
    ==================================== */}
        <div
          className="modal transition-bottom screenFull defaultModal mdlladd__rate fade"
          id="mdllAddETH"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="title-modal">Add ETH to your wallet</h1>
                <button
                  type="button"
                  className="btn btnClose"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ri-close-fill" />
                </button>
              </div>
              <div className="modal-body">
                <div className="content-upload-item">
                  <p className="text-center">
                    Select one of the options to deposit <br /> ETH to your
                    wallet
                  </p>
                  <div className="un-navMenu-default margin-t-30 p-0">
                    <ul className="nav flex-column">
                      <li className="nav-item mb-3">
                        <a
                          className="nav-link effect-click"
                          href="javascript: void(0)"
                        >
                          <div className="item-content-link">
                            <div className="icon color-text w-auto">
                              <i className="ri-exchange-box-line" />
                            </div>
                            <h3 className="link-title">
                              Deposit from an exchange
                            </h3>
                          </div>
                          <div className="other-cc">
                            <span className="badge-text" />
                            <div className="icon-arrow">
                              <i className="ri-arrow-drop-right-line" />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="nav-item mb-0">
                        <a
                          className="nav-link effect-click"
                          href="javascript: void(0)"
                        >
                          <div className="item-content-link">
                            <div className="icon color-text w-auto">
                              <i className="ri-bank-card-line" />
                            </div>
                            <h3 className="link-title">Buy with card</h3>
                          </div>
                          <div className="other-cc">
                            <span className="badge-text" />
                            <div className="icon-arrow">
                              <i className="ri-arrow-drop-right-line" />
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0">
                <div className="env-pb" />
              </div>
            </div>
          </div>
        </div>
        {/* ===================================
START THE MODAL SIDEBAR MENU - CONNECTED
    ==================================== */}
        
        {/* ===================================
START THE MODAL SIDEBAR MENU - guest
    ==================================== */}
        <div
          className="modal sidebarMenu -left -guest fade"
          id="mdllSidebar-guest"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <div className="welcome_em">
                  <h2>
                    Welcome to Unic<span>.</span>
                  </h2>
                  <p>
                    Connect wallet to browse, Buy, Sell, and create NFTs items.
                  </p>
                  <a
                    href="page-connect-wallet.html"
                    className="btn btn-md-size bg-primary text-white rounded-pill"
                  >
                    Connect wallet
                  </a>
                </div>
                <button
                  type="button"
                  className="btn btnClose"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ri-close-fill" />
                </button>
              </div>
              <div className="modal-body">
                <ul className="nav flex-column -active-links">
                  <li className="nav-item">
                    <a className="nav-link" href="homepage.html">
                      <div className="icon_current">
                        <i className="ri-compass-line" />
                      </div>
                      <div className="icon_active">
                        <i className="ri-compass-fill" />
                      </div>
                      <span className="title_link">Discover</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="app-homes.html">
                      <div className="icon_current">
                        <i className="ri-home-5-line" />
                      </div>
                      <div className="icon_active">
                        <i className="ri-home-5-fill" />
                      </div>
                      <span className="title_link">Home Styles</span>
                      <span className="xs-badge">8</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="app-pages.html">
                      <div className="icon_current">
                        <i className="ri-pages-line" />
                      </div>
                      <div className="icon_active">
                        <i className="ri-pages-fill" />
                      </div>
                      <span className="title_link">Page Packs</span>
                      <div className="badge-circle">
                        <span className="doted_item" />
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="app-components.html">
                      <div className="icon_current">
                        <i className="ri-layout-2-line" />
                      </div>
                      <div className="icon_active">
                        <i className="ri-layout-2-fill" />
                      </div>
                      <span className="title_link">Components</span>
                    </a>
                  </li>
                  <label className="title__label">other</label>
                  <li className="nav-item">
                    <a className="nav-link" href="page-help.html">
                      <div className="icon_current">
                        <i className="ri-questionnaire-line" />
                      </div>
                      <div className="icon_active">
                        <i className="ri-questionnaire-fill" />
                      </div>
                      <span className="title_link">Help Center</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="page-about.html">
                      <div className="icon_current">
                        <i className="ri-file-info-line" />
                      </div>
                      <div className="icon_active">
                        <i className="ri-file-info-fill" />
                      </div>
                      <span className="title_link">About Unic.</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="modal-footer">
                <div className="em_darkMode_menu">
                  <label className="text" htmlFor="switchDark2">
                    <h3>Dark Mode</h3>
                    <p>Browsing in night mode</p>
                  </label>
                  <label
                    className="switch_toggle toggle_lg theme-switch"
                    htmlFor="switchDark2"
                  >
                    <input
                      type="checkbox"
                      className="switchDarkMode theme-switch"
                      id="switchDark2"
                      aria-describedby="switchDark2"
                    />
                    <span className="handle" />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===================================
START THE CREATE STORY MODAL
    ==================================== */}
        <div
          className="modal sidebarMenu -left --fullScreen modal-filter fade"
          id="mdllAddStory"
          tabIndex={-1}
          aria-labelledby="sidebarMenuLabel3"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="title-modal">Create Story</h1>
                <button
                  type="button"
                  className="btn btnClose"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="ri-close-fill" />
                </button>
              </div>
              <div className="modal-body">
                <div className="un-create-collectibles bg-white p-0">
                  <div className="form-group upload-form">
                    <h2>Upload file</h2>
                    <p>Choose your file to upload</p>
                    <div className="upload-input-form">
                      <input type="file" />
                      <div className="content-input">
                        <div className="icon">
                          <i className="ri-upload-cloud-line" />
                        </div>
                        <span>PNG, GIF, JPG, MP4 . Max 5 mb.</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group icon-right">
                    <label>Add Link</label>
                    <div className="input_group">
                      <input
                        type="url"
                        className="form-control"
                        placeholder='e. g. "www.example.com"'
                      />
                      <div className="icon">
                        <i className="ri-link" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Link Text</label>
                    <div className="inpust_group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder='e. g. "INSTALL APP"'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer justify-content-center border-0 pt-2">
                <div className="footer-pages-forms">
                  <div className="content">
                    <div className="links-clear-data">
                      <button
                        type="button"
                        className="btn link-clear"
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                      >
                        <i className="ri-close-circle-line" />
                        <span>Cancel</span>
                      </button>
                    </div>
                    <a
                      href="page-home-stories.html"
                      className="btn btn-bid-items"
                    >
                      <p>Create Story</p>
                      <div className="ico">
                        <i className="ri-arrow-drop-right-line" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===================================
START STATUS CONNECTION
    ==================================== */}
        <div className="d-flex justify-content-center">
          <div
            className="toast status-connection"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          />
        </div>
        {/* JS FILES */}
        {/* PWA APP SERVICE REGISTRATION AND WORKS JS */}
      </>
    </>
  );
}
