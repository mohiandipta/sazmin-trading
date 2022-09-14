export const Product = (props) => {
  return (
    <div id='products' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Products</h2>
          {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p> */}
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
              // <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2">
              //   <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 team'>
              //     <div className='thumbnail rounded p-2 d-flex flex-column nurCard justify-content-center on-hover-zoom'>
              //       {' '}
              //       <img src={d.img} alt='...' className='team-img' />
              //       <div className='caption'>
              //         <h4>{d.name}</h4>
              //         <p>{d.job}</p>
              //       </div>
              //     </div>
              //   </div>
              //   </div>
              <>
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 my-2">
                  <div className="thumbnail rounded p-2 d-flex flex-column nurCard justify-content-center on-hover-zoom">
                    <img
                      className="team-img"
                      src={d.img}
                      alt=""
                    />
                    <div className="text justify-text limit-box fnt-solaiman">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              </>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
