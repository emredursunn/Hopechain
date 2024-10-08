import React from "react";

const About = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto my-8 py-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg text-white">
      <div className="px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-6">About HopeChain</h1>
        <p className="mb-4 text-lg">
          HopeChain is a revolutionary platform that aims to bridge the gap
          between charitable organizations and cryptocurrency donations. By
          leveraging blockchain technology, we ensure transparency, security,
          and efficiency in the donation process.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
        <p className="mb-4">
          Our mission is to empower individuals to contribute to meaningful
          causes through secure and traceable donations. We believe in a world
          where everyone can make a difference, and we strive to make that
          process as seamless as possible.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Why Blockchain?</h2>
        <p className="mb-4">
          Blockchain technology provides an immutable ledger, which means that
          all transactions are recorded and cannot be altered. This transparency
          ensures that every donation reaches its intended recipient, fostering
          trust between donors and charities.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Get Involved</h2>
        <p>
          Join us in our mission to create a more compassionate world. Whether
          you are a donor looking to support charities or a charity seeking to
          receive donations, HopeChain is here to help you every step of the
          way.
        </p>
      </div>
    </section>
  );
};

export default About;
