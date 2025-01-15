import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEdit } from "react-icons/fa";
import { FaEnvelope, FaPhone, FaUser, FaWhatsapp } from "react-icons/fa6";

const page = () => {
  return (
    <section className="-mt-16">
      <div className="bg-deepblue py-32 text-white">
        <div className="flex flex-col items-center font-english">
          <h2 className="mb-4 text-center text-4xl lg:text-5xl font-bold">
            Connect with Author
          </h2>
          <hr className="w-14 h-0.5 bg-primary mb-4 lg:mb-4" />
          <p className="text-center w-1/3 mx-auto">
            There are many variations of passages of Lorem Ipsum available, have
            suffered alteration in some form.
          </p>
        </div>
      </div>

      {/* Keep in touch section */}
      <section className="flex w-11/12 lg:container gap-20 mx-auto px-24 my-16 items-center justify-between">
        {/* Left */}
        <div className="w-1/2">
          <h3 className="font-english text-3xl font-bold">Keep in Touch</h3>
          <hr className="w-14 h-0.5 bg-primary my-4" />
          <p className="mb-4 font-inter text-sm text-gray-400">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex gap-5 font-english">
              <div className="bg-deepblue w-fit min-w-12 text-xl min-h-12 flex justify-center items-center text-primary">
                <FaPhone />
              </div>
              <div>
                <h4 className="text-2xl font-bold">Address:</h4>
                <p className="text-sm font-inter text-gray-600">
                  No: 09a, Downtown, San Dieago, USA.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-deepblue w-fit min-w-12 text-xl min-h-12 flex justify-center items-center text-primary">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-2xl font-bold font-english">Address:</h4>
                <p className="text-sm font-inter text-gray-600">
                  No: 09a, Downtown, San Dieago, USA.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="bg-deepblue w-fit min-w-12 text-xl min-h-12 flex justify-center items-center text-primary">
                <FaWhatsapp />
              </div>
              <div>
                <h4 className="text-2xl font-bold font-english ">Address:</h4>
                <p className="text-sm font-inter text-gray-600">
                  No: 09a, Downtown, San Dieago, USA.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}

        <div className="w-1/2">
          <form className="flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-between">
              <div className="relative flex gap-2 border border-lightblue items-center w-1/2">
                <FaUser className="absolute left-2 top-1/2 transform -translate-y-1/2 text-primary" />
                <Input
                  className="rounded-none border-none ml-6 shadow-none"
                  placeholder="Your Name"
                />
              </div>
              <div className="relative flex gap-2 border border-lightblue items-center w-1/2">
                <FaEnvelope className="absolute left-2 top-1/2 transform -translate-y-1/2 text-primary" />
                <Input
                  className="rounded-none border-none ml-6 shadow-none"
                  placeholder="Your Email"
                />
              </div>
            </div>
            <div className="relative flex gap-2 border border-lightblue items-center w-full">
              <FaPhone className="absolute left-2 top-1/2 transform -translate-y-1/2 text-primary" />
              <Input
                className="rounded-none border-none ml-6 shadow-none"
                placeholder="Your Phone"
              />
            </div>
            <div className="relative flex gap-2 border border-lightblue items-center w-full">
              <FaEdit className="absolute left-2 top-2 text-primary" />
              <Textarea
                className="rounded-none border-none ml-6 shadow-none resize-none h-40"
                placeholder="Your Message"
              />
            </div>

            <div className="flex items-center gap-2">
              <Checkbox className="shadow-none" />
              <p className="text-xs text-gray-500 capitalize">
                passages of Lorem Ipsum available, have suffered alteration in
                some form.
              </p>
            </div>
            <div>
              <Button className="flex rounded-none shadow-none w-full">
                Send a message
              </Button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default page;
