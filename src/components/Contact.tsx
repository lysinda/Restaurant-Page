type HeadingProps = {
  text: string;
};

function Contact() {
  return (
    <div className="flex justify-center bg-leaves-frame-image bg-center bg-no-repeat bg-contain h-screen my-8">
      <div className="grid grid-cols-55/fr w-2/5 gap-x-4 gap-y-16 p-8 h-1/2 text-lg">
        <h2 className="text-6xl font-handlee text-center pt-64 col-span-2">
          Contact
        </h2>
        <div>
          <Heading text="You can find us at:" />
          <p>The Leafy Llama</p>
          <p>123 Greenleaf Lane</p>
          <p>Elvenwood, Enchanted Forest 12345</p>
          <p>Avalon</p>
        </div>
        <div className="text-right place-self-end">
          <p>We'd love to hear from you!</p>
          <p className="text-base">
            Whether you want to share your experience, have a question about our
            menu, or just want to chat, we're here for you!
          </p>
        </div>
        <div>
          <Heading text="Opening Hours:" />
          <p>Monday - Friday: 10:00 AM - 9:00 PM</p>
          <p>Saturday - Sunday: 9:00 AM - 10:00 PM</p>
        </div>
        <div className="text-right">
          <Heading text="Contact us:" />
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@leafy-llama.com</p>
        </div>
      </div>
    </div>
  );
}

function Heading(props: HeadingProps) {
  return (
    <div>
      <h3 className="text-2xl">{props.text}</h3>
    </div>
  );
}

export default Contact;
