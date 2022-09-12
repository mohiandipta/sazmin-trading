import Logo from "../assets/Logo.png"

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top' style={{margin:'20px', borderRadius:'15px'}}>
      {/* <div className="container" style={{height:'20px', backgroundColor:'black'}}></div> */}
      <div className='container'>
        <div className='navbar-header' style={{display:'flex'}}>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <div >
          <img src={Logo} alt="" style={{height:'50px', width:'50px', marginLeft:'-10px'}}/>
          </div>
          <a className='navbar-brand page-scroll' href='#page-top' style={{color:'dodgerblue', marginLeft:'20px'}}>
          Sazmin Traders
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li>
            <li>
              <a href='#products' className='page-scroll'>
                Products
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About Us
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            {/* <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li> */}
            {/* <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li> */}
            {/* <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li> */}
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
