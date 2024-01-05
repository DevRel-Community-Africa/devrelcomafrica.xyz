export function NewsletterSection() {
  // const onFormSubmit = () => {
  //   window.open(
  //     "https://developbydevrelcom.substack.com/subscribe",
  //     "popupwindow",
  //     "scrollbars=yes,width=800,height=600",
  //   );
  //   return true;
  // };

  return (
    <section className="" id="contact">
      <div className="container mx-auto px-8 py-20">
        <h4 className="text-3xl my-2">Subscribe to our Newsletter</h4>
        <p className="text-[#222] font-thin my-2">
          A curated list of jobs, articles, and resources on Developer
          Relations, Technical writing and developer marketing for software
          developers, and developer relations professionals.
        </p>
        <div className="flex justify-center">
          {/* <form
            action="https://developbydevrelcom.substack.com/subscribe"
            method="post"
            target="popupwindow"
            onSubmit={(e) => onFormSubmit()}
            className="md:w-[750px] w-full px-8 py-10 bg-primary-light rounded-md"
          >
            <h4 className="text-3xl my-2">Subscribe to our Newsletter</h4>
            <p className="text-[#222] font-thin my-2">
              A curated list of jobs, articles, and resources on Developer
              Relations, Technical writing and developer marketing for software
              developers, and developer relations professionals.
            </p>
            <div>
              <input
                type="text"
                name="email"
                id="tlemail"
                placeholder="Please enter your email"
                className="bg-transparent border border-[#222] rounded-m p-2 md:w-[70%] w-full mr-2 mt-2"
              />
              <input
                type="submit"
                value="Subscribe"
                className="bg-primary text-white border-primary text-md rounded-md border-solid border py-2 px-6 mt-2 font-medium"
              />
            </div>
          </form> */}
          <iframe
            src="https://developbydevrelcom.substack.com/embed"
            className="md:w-[750px] w-full px-8 py-10 rounded-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
