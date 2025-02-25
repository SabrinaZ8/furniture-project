export const BrowseRange = () => {
  return (
    
    <section className="flex flex-col justify-center items-center text-center text-gray-333 ">
    <div className="my-14">
      <h2 className=" text-3xl font-bold my-2">Browse The Range</h2>
      <p className="text-gray-666 text-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <div className="flex justify-start w-full overflow-x-auto xl:justify-center">
      <div className="mx-5">
        <img
          src="https://res.cloudinary.com/ducw84byb/image/upload/v1739625171/category-dining_br88x3.png"
          alt="Category dining"
          className="img-rd-cover-center"
        />
        <h3 className="text-gray-smb-24">Dining</h3>
      </div>
      <div className="mx-5">
        <img
          src="https://res.cloudinary.com/ducw84byb/image/upload/v1739625304/category-living_bntlkq.png"
          alt="Category living"
          className="img-rd-cover-center"
        />
        <h3 className="text-gray-smb-24">Living</h3>
      </div>
      <div className="mx-5">
        <img
          src="https://res.cloudinary.com/ducw84byb/image/upload/v1739625304/category-bedroom_voz0jz.png"
          alt="Category Bedroom"
          className="img-rd-cover-center"
        />
        <h3 className="text-gray-smb-24">Bedroom</h3>
      </div>
    </div>
  </section>
  )
}
