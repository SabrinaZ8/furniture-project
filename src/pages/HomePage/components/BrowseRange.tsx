export const BrowseRange = () => {
  return (
    
    <section className="flex flex-col justify-center items-center text-center text-gray-333 ">
    <div className="my-14">
      <h2 className=" text-3xl font-bold my-2">Browse The Range</h2>
      <p className="text-gray-666 text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <div className="flex">
      <div className="mx-5">
        <img
          src="https://furniro.s3.us-east-1.amazonaws.com/home-imgs/image-106.png"
          alt="image-106"
          className="img-rd-cover-center"
        />
        <h3 className="text-gray-smb-24">Dining</h3>
      </div>
      <div className="mx-5">
        <img
          src="https://furniro.s3.us-east-1.amazonaws.com/home-imgs/image-100.png"
          alt="image-100"
          className="img-rd-cover-center"
        />
        <h3 className="text-gray-smb-24">Living</h3>
      </div>
      <div className="mx-5">
        <img
          src="https://furniro.s3.us-east-1.amazonaws.com/home-imgs/image-101.png"
          alt="image-101"
          className="img-rd-cover-center"
        />
        <h3 className="text-gray-smb-24">Bedroom</h3>
      </div>
    </div>
  </section>
  )
}
