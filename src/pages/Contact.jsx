import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import MapSection from "../components/contact/MapSection";
import Header from "../components/contact/Header";
import Footer from "../components/global/Footer";
import AgentsSection from "../components/home/AgentsSection";
import Navbar from "../components/global/Navbar";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
        <Header />
      <main className="px-3 md:px-10 lg:px-20 xl:px-28 2xl:px-40 ">
        <section className=" py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 ">
              <ContactForm />
            </div>
            <div className="lg:w-1/3  rounded">
              <ContactInfo />
            </div>
          </div>
        </section>
        <MapSection />
      </main>
      <AgentsSection />
      <Footer />
    </div>
  );
};

export default Contact;