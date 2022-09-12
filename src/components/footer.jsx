
export const Footer = (props) => {
    return (
      <div id="footer">
        <div className="container">
        <div className="mx-xxl-5 mx-xl-4 mx-lg-3 mx-md-2 mx-sm-2 mx-2 px-xl-4 px-lg-3 px-md-2 px-sm-0 pt-3">
          <div className="mx-xxl-5 mx-xl-4 mx-lg-3 mx-md-2 mx-sm-2 mx-2 px-xl-4 px-lg-3 px-md-2 px-sm-0">
            <div className="mx-xxl-5 mx-xl-4 mx-lg-3 mx-md-2 mx-sm-0 pt-4">
              <footer className="row">
                <div className="col-12 col-sm-4">
                  <div className="text-center text-sm-start">
                    {/* <Image
                      height="48px"
                      width= "100w"
                      src="/images/logo.png"
                      alt="logo"
                      objectFit="contain"
                    /> */}
                  </div>
                  <p
                    className="text-black mt-3"
                    style={{ textAlign: "justify" }}
                  >
                    Amanatul Monowara Prokashoni is a sister concern of Akij
                    Venture Group. It publishes books, comics, feature videos,
                    animation series, audio podcasts, etc. It holds moral values
                    of Islamic norms and customs.
                  </p>
                </div>
                <div className="col-12 col-sm-4 text-left text-sm-center">
                  <h5 className="text-black fw-bold fs-6 mt-4 mt-sm-0">
                    QUICK LINKS
                  </h5>
                  <div className="d-flex justify-content-start justify-content-sm-center">
                    <div className="d-flex flex-column align-items-start">
                      {/* <Link className="text-black" href={"/animation"}>
                        Animation
                      </Link> */}
                      {/* <Link className="text-black" href={"/books"}>
                        Books
                      </Link> */}
                      {/* <Link className="text-black" href={"/blog"}>
                        Blog
                      </Link> */}
                      {/* <Link className="text-black" href={"/comics"}>
                          Comics
                        </Link>
                        <Link className="text-black" href={"/dubbing"}>
                          Dubbing
                        </Link> */}
                      {/* <Link className="text-black" href={"/feature-video"}>
                        Feature Video
                      </Link> */}
                      {/* <Link className="text-black" href={"/nurer-chowa"}>
                        Nurer Chowa
                      </Link> */}
                      {/* <Link className="text-black" href={"/tafsir"}>
                        Tafsir
                      </Link> */}
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <h5 className="text-black fw-bold fs-6 mt-4 mt-sm-0">
                    FIND US
                  </h5>
                  <div className="d-flex flex-column">
                    <div style={{ textAlign: "left", display: "flex" }}>
                      <i className="fa-solid fa-location-dot padding-right d-flex p-1"></i>
                      <p
                        className="text-black"
                        style={{ marginRight: "50px", textAlign: "justify" }}
                      >
                        <a
                          className="text-black"
                          href="https://g.page/akijhouse"
                        >
                          Akij House, 198 Bir Uttam Mir Shawkat Sarak, Tejgaon,
                          Dhaka-1208, Bangladesh.
                        </a>
                      </p>
                    </div>

                    <div style={{ textAlign: "left", display: "flex" }}>
                      <i className="fa-solid fa-phone padding-right d-flex p-1"></i>
                      <p
                        className="text-black"
                        style={{ marginRight: "50px", textAlign: "justify" }}
                      >
                        <a href="tel:080000 166009">080000 166009</a>,
                        <a
                          className="ms-1"
                          href="https://api.whatsapp.com/send?phone=8801755630298"
                        >
                          01755630298
                        </a>
                      </p>
                    </div>

                    <div style={{ textAlign: "left", display: "flex" }}>
                      <i className="fa-solid fa-envelope padding-right d-flex p-1"></i>
                      <p
                        className="text-black"
                        style={{ marginRight: "50px", textAlign: "justify" }}
                      >
                        <a href="mailto:info@ampublication.com">
                          info@ampublication.com
                        </a>
                      </p>
                    </div>

                    <div className="align-self-center mt-4">
                      <a href="https://www.facebook.com/Amprokashoni">
                        <i
                          className="fa-brands fa-facebook mx-2"
                          style={{ color: "blue", fontSize: "20px" }}
                        ></i>
                      </a>
                      <a href="https://www.youtube.com/channel/UCT8jI6Oh2Z5B_3zVJ0NmOzA">
                        <i
                          className="fa-brands fa-youtube mx-2"
                          style={{ color: "red", fontSize: "20px" }}
                        ></i>
                      </a>
                      <a href="https://api.whatsapp.com/send?phone=8801755630298">
                        <i
                          className="fa-brands fa-whatsapp mx-2"
                          style={{ color: "green", fontSize: "20px" }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-top border-secondary mt-4">
                  <p className="text-black text-center my-4">
                    Copyright ©{new Date().getFullYear()} | Designed by{" "}
                    <a href="http://www.ampublication.com">
                      Amanatul Monowara Publication
                    </a>
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  };

  
//   info@sazmintrading.com