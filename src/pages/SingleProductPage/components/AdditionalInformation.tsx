export const AdditionalInformation = () => {
  return (
    <div className="flex flex-col justify-center items-center text-gray-350 p-[50px]">
      <div className="flex justify-evenly mb-14 w-1/2">
        <h3 className="text-2xl text-black">Description</h3>
        <h3 className="text-2xl">Additional Information</h3>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="w-3/5">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
        <br />
        <p className="w-3/5">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>
      <div className="flex mt-16">
        <img src="../../../../src/assets/images/imagesVisual/image-visual.png" alt="" className="mr-8" />
        <img src="../../../../src/assets/images/imagesVisual/image-visual.png" alt=""/>
      </div>
    </div>
  );
};
