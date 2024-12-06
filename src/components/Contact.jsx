// src/components/Contact.js

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-3 border rounded-lg" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border rounded-lg" />
          <textarea name="message" placeholder="Your Message" required className="w-full p-3 border rounded-lg h-32"></textarea>
          <button type="submit" className="w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300">
            Send Message
          </button>
          </form>
      </div>
    </section>
  );
};

export default Contact;
