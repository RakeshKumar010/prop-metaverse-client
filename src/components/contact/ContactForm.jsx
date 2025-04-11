const ContactForm = () => {
  return (
    <div className="w-full py-8">

 
      <h2 className="text-2xl md:text-3xl mb-4 font-bold text-black">
           Get in Touch
        </h2>
     
      <p  className="text-gray-600 mb-6 max-w-3xl mx-auto"> 
        Discover luxury and exclusive listings tailored for international clients with our premier real estate services.
      </p>
      <form className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-logoBlue transition-colors"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-logoBlue transition-colors"
          />
          <input
            type="text"
            placeholder="Your Address"
            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-logoBlue transition-colors"
          />
          <input
            type="tel"
            placeholder="Your Phone"
            className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-logoBlue transition-colors"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="border border-gray-300 p-3 rounded w-full focus:outline-none focus:ring-2 focus:ring-logoBlue transition-colors"
        />
        <textarea
          placeholder="Your Message"
          className="border border-gray-300 p-3 rounded w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-logoBlue transition-colors"
        ></textarea>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <label className="flex items-center text-gray-600">
            <input
              type="checkbox"
              className="mr-2 h-4 w-4 accent-logoBlue"
            />
            <span className="text-sm">I&apos;m not a robot</span>
          </label>
          <button
            type="submit"
            className="bg-logoColor text-white px-6 py-2.5 rounded font-medium   focus:outline-none focus:ring-2 focus:ring-logoColor/90 transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;