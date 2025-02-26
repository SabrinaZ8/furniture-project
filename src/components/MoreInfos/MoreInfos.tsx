export const MoreInfos = () => {
  return (
    <section className="flex justify-between items-center px-5 sm:px-12 bg-yellow-70 min-h-[265px] flex-wrap">
      <div className="div-flex">
        <div>
            <img src="/icons/high-quality.png" alt="High Quality" className="img-moreinfos" />
        </div>
        <div>
            <h3 className="h3-moreinfos">High Quality</h3>
            <p className='p-moreinfos'>crafted from top materials</p>
        </div>
      </div>
      <div className="div-flex">
        <div>
            <img src="/icons/protection.png" alt="Warranty Protection" className="img-moreinfos"  />
        </div>
        <div>
            <h3 className="h3-moreinfos">Warranty Protection</h3>
            <p className='p-moreinfos'>Over 2 years</p>
        </div>
      </div>
      <div className="div-flex">
        <div>
            <img src="/icons/free-shipping.png" alt="Free Shipping" className="img-moreinfos" />
        </div>
        <div>
            <h3 className="h3-moreinfos">Free Shipping</h3>
            <p className='p-moreinfos'>Order over 150 $</p>
        </div>
      </div>
      <div className="div-flex">
        <div>
            <img src="/icons/support.png" alt="24 / 7 Support" className="img-moreinfos" />
        </div>
        <div>
            <h3 className="h3-moreinfos">24 / 7 Support</h3>
            <p className='p-moreinfos'>Dedicated support</p>
        </div>
      </div>
    </section>
  );
};
