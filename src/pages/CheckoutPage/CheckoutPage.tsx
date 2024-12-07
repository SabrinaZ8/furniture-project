export const CheckoutPage = () => {
  return (
    <section className="flex">
      <div className="w-1/2">
        <h2 className="font-semibold text-4xl">Billing details</h2>
        <div className="w-1/2">
          <div className="flex my-7">
            <div className="flex flex-col mr-6">
              <label htmlFor="name" className="mb-5 font-medium">First Name</label>
              <input
                type="text"
                id="name"
                className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[211px]"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last-name" className="mb-5 font-medium">Last Name</label>
              <input
                type="text"
                id="last-name"
                className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[211px]"
              />
            </div>
          </div>
          <div className="flex flex-col  my-7">
            <label htmlFor="company-name" className="mb-5 font-medium">Company Name (Optional)</label>
            <input
              type="text"
              id="company-name"
              className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[453px]"
            />
          </div>
          <div className="flex flex-col my-7">
            <label htmlFor="zip-code" className="mb-5 font-medium">ZIP code</label>
            <input
              type="text"
              id="zip-code"
              className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[453px]"
            />
          </div>
          <div className="flex flex-col my-7">
            <label htmlFor="country" className="mb-5 font-medium">Country / Region</label>
            <input
              type="text"
              id="country"
              className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[453px]"
            />
          </div>
          <div className="flex flex-col  my-7">
            <label htmlFor="street-address" className="mb-5 font-medium">Street address</label>
            <input
              type="text"
              id="street-address"
              className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[453px]"
            />
          </div>
          <div className="flex flex-col my-7">
            <label htmlFor="city" className="mb-5 font-medium">Town / City</label>
            <input
              type="text"
              id="city"
              className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[453px]"
            />
          </div>
          <div className="flex flex-col my-7">
            <label htmlFor="province" className="mb-5 font-medium">Province</label>
            <input
              type="text"
              id="province"
              className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[453px]"
            />
          </div>
          <div className="flex flex-col my-7">
            <label htmlFor="add-on-address" className="mb-5 font-medium">Add-on address</label>
            <input
              type="text"
              id="add-on-address"
              className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[453px]"
            />
          </div>
          <div className="flex flex-col my-7">
            <label htmlFor="email-address" className="mb-5 font-medium">Email address</label>
            <input
              type="text"
              id="email-address"
              className="border-[1px] border-gray-350 rounded-[10px] h-[75px] w-[453px]"
            />
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="">
          <div className="flex justify-between mb-8">
              <h3 className="font-semibold text-2xl text-start mr-8">Product</h3>
              <h3 className="font-semibold text-2xl text-end">Subtotal</h3>
          </div>
            <div className="flex justify-between mb-8">
              <p className="text-gray-350">Asgaard sofa <span className="text-black">x 1</span></p>
              <p className="font-light">Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between mb-8">
              <p>Subtotal</p>
              <p className="font-light">Rs. 250,000.00</p>
            </div>
            <div className="flex justify-between mb-8">
              <p>Total</p>
              <p className="text-2xl text-yellow-550 font-bold">Rs. 250,000.00</p>
            </div>
        </div>
        <hr />
      </div>
    </section>
  );
};
