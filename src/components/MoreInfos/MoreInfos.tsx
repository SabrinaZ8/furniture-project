export const MoreInfos = () => {
  return (
    <section className="flex justify-between items-center px-12 bg-yellow-70 min-h-[265px] flex-wrap">
      <div className="flex p-4">
        <div className="mr-5">
            <img src="../../../src/assets/images/icons/high-quality.png" alt="High Quality" />
        </div>
        <div>
            <h3 className="text-2xl font-semibold">High Quality</h3>
            <p className='text-gray-898 text-xl'>crafted from top materials</p>
        </div>
      </div>
      <div className="flex p-4">
        <div className="mr-5">
            <img src="../../../src/assets/images/icons/protection.png" alt="Warranty Protection" />
        </div>
        <div>
            <h3 className="text-2xl font-semibold">Warranty Protection</h3>
            <p className='text-gray-898 text-xl'>Over 2 years</p>
        </div>
      </div>
      <div className="flex p-4">
        <div className="mr-5">
            <img src="../../../src/assets/images/icons/free-shipping.png" alt="Free Shipping" />
        </div>
        <div>
            <h3 className="text-2xl font-semibold">Free Shipping</h3>
            <p className='text-gray-898 text-xl'>Order over 150 $</p>
        </div>
      </div>
      <div className="flex p-4">
        <div className="mr-5">
            <img src="../../../src/assets/images/icons/support.png" alt="24 / 7 Support" />
        </div>
        <div>
            <h3 className="text-2xl font-semibold">24 / 7 Support</h3>
            <p className='text-gray-898 text-xl'>Dedicated support</p>
        </div>
      </div>
    </section>
  );
};
