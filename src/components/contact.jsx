import { useState } from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  name: '',
  email: '',
  message: '',
}
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, message)
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
      )
      .then(
        (result) => {
          console.log(result.text)
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Message'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> Address
                </span>
                13/1/Ka, Panthapath, Tejgaon, 
                <br /> Dhaka-1215, Bangladesh
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> Phone
                </span>{' '}
                {props.data ? props.data.phone : 'loading'}
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> Email
                </span>{' '}
                {props.data ? props.data.email : 'loading'}
              </p>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='footer'>
        <div className='container text-center'>
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
                    DESCRIPTION
                  </p>
                </div>
                <div className="col-12 col-sm-4 text-left text-sm-center">
                  <h5 className="text-black fw-bold fs-6 mt-4 mt-sm-0">
                    QUICK LINKS
                  </h5>
                  <div className="d-flex justify-content-start justify-content-sm-center">
                    <div className="d-flex flex-column align-items-start" style={{listStyle:'none'}}>
                      <li>
                      <a className="text-black" href={"/feature"} style={{color:'white'}}>
                        Feature
                      </a>
                      </li>
                      <li>
                      <a className="text-black" href={"/books"} style={{color:'white'}}>
                        About Us
                      </a>
                      </li>
                      <li>
                      <a className="text-black" href={"/books"} style={{color:'white'}}>
                        Services
                      </a>
                      </li>
                      <li>
                      <a className="text-black" href={"/books"} style={{color:'white'}}>
                        Contact
                      </a>
                      </li>
                      
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
                  <h5 className="text-black fw-bold fs-6 mt-4 mt-sm-0" style={{textAlign:'start'}}>
                    FIND US
                  </h5>
                  <div className="d-flex flex-column">
                    <div style={{ textAlign: "left", display: "flex" }}>
                      <i className="fa fa-location-dot padding-right d-flex p-1" style={{color:'white', padding:'5px'}}></i>
                      <p
                        className="text-black"
                        style={{ marginRight: "50px", textAlign: "justify" }}
                      >
                        <a
                          className="text-black"
                          href="https://g.page/akijhouse" style={{color:'white'}}
                        >
                          13/1/Ka, Panthapath, Tejgaon, 
                          <br /> Dhaka-1215, Bangladesh
                        </a>
                      </p>
                    </div>

                    <div style={{ textAlign: "left", display: "flex" }}>
                      <i className="fa fa-phone padding-right d-flex p-1" style={{color:'white', padding:'5px'}}></i>
                      <p
                        className="text-black"
                        style={{ marginRight: "50px", textAlign: "justify" }}
                      >
                        {/* <a href="tel:080000 166009">080000 166009</a>, */}
                        <a
                          className="ms-1"
                          href="https://api.whatsapp.com/send?phone=8801755630298"
                        >
                          ____
                        </a>
                      </p>
                    </div>

                    <div style={{ textAlign: "left", display: "flex" }}>
                      <i className="fa fa-envelope padding-right d-flex p-2" style={{color:'white', padding:'5px'}}></i>
                      <p
                        className="text-black"
                        style={{ marginRight: "50px", textAlign: "justify" }}
                      >
                        <a href="mailto:info@sazmintrading.com" style={{color:'white'}}>
                        info@sazmintrading.com
                        </a>
                      </p>
                    </div>

                    <div className="align-self-center mt-4">
                      <a href="https://www.facebook.com/Amprokashoni">
                        <i
                          className="fa fa-facebook mx-2"
                          style={{ color: "white", fontSize: "20px", padding:'2px' }}
                        ></i>
                      </a>
                      <a href="https://www.youtube.com/channel/UCT8jI6Oh2Z5B_3zVJ0NmOzA">
                        <i
                          className="fa fa-youtube mx-2"
                          style={{ color: "white", fontSize: "20px", padding:'2px' }}
                        ></i>
                      </a>
                      <a href="https://api.whatsapp.com/send?phone=8801755630298">
                        <i
                          className="fa fa-whatsapp mx-2"
                          style={{ color: "white", fontSize: "20px", padding:'2px' }}
                        ></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-top border-secondary mt-4">
                  <p className="text-black text-center my-4">
                    Copyright ©{new Date().getFullYear()} | Designed by{" "}
                    <a href="sazmintrading.com">
                    SAZMIN TRADING
                    </a>
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
