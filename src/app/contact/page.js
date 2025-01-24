import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEdit } from "react-icons/fa";
import { FaEnvelope, FaPhone, FaUser, FaWhatsapp } from "react-icons/fa6";

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What is Qaziakash.com?",
        answer:
          "Qaziakash.com is a platform dedicated to publishing engaging and well-researched feature articles on science, mathematics, and history.",
      },
      {
        question: "Who writes the articles on this website?",
        answer:
          "Our articles are written by experienced feature writers with backgrounds in science, mathematics, and history.",
      },
      {
        question: "Can I submit my own articles?",
        answer:
          "Yes! We welcome guest submissions from writers. Check our submission guidelines for more details.",
      },
    ],
  },
  {
    category: "Science",
    questions: [
      {
        question: "Are your science articles peer-reviewed?",
        answer:
          "While we strive for accuracy and consult reliable sources, our articles are not formally peer-reviewed like academic journals.",
      },
      {
        question: "Do you cover all branches of science?",
        answer:
          "Yes! We write about physics, chemistry, biology, astronomy, environmental science, and more.",
      },
    ],
  },
  {
    category: "Mathematics",
    questions: [
      {
        question: "Are your math articles suitable for beginners?",
        answer:
          "Yes! We write for a broad audience, from beginners to advanced learners.",
      },
      {
        question: "Do you provide math problem-solving guides?",
        answer:
          "Yes! Some of our articles include step-by-step solutions to famous mathematical problems.",
      },
    ],
  },
];

const contactData = [
  {
    id: 2,
    icon: <FaEnvelope />,
    title: "Email",
    description: "qaziakashmath@gmail.com",
  },
  {
    id: 3,
    icon: <FaPhone />,
    title: "Phone",
    description: "+8801711111111",
  },
  {
    id: 4,
    icon: <FaWhatsapp />,
    title: "Whatsapp",
    description: "+8801711111111",
  },
];

const page = () => {
  return (
    <section className="-mt-16">
      <div className="bg-deepblue pt-16 pb-8 lg:py-32 text-white">
        <div className="flex flex-col items-center font-english">
          <h2 className="mb-4 text-center text-3xl lg:text-5xl font-bold">
            Connect with Author
          </h2>
          <hr className="w-14 h-0.5 bg-primary mb-4 lg:mb-4" />
        </div>
      </div>

      {/* Keep in touch section */}
      <section className="flex flex-col lg:flex-row w-11/12 lg:container gap-8 lg:gap-20 mx-auto lg:px-24 lg:my-16 mt-8 items-center justify-between">
        {/* Left */}
        <div className="lg:w-1/2">
          <h3 className="font-english text-3xl font-bold text-deepblue">
            Keep in Touch
          </h3>
          <hr className="w-14 h-0.5 bg-primary my-4" />
          <p className="mb-4 font-inter text-sm text-gray-400">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div className="flex flex-col gap-2">
            {contactData.map((item, index) => (
              <div key={index} className="flex gap-4 font-english">
                <div className="bg-deepblue w-fit min-w-12 text-xl min-h-12 flex justify-center items-center text-primary">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl lg:text-2xl font-bold">
                    {item.title}
                  </h4>
                  <p className="text-sm font-inter text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right */}

        <div className="lg:w-1/2">
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

      <section className="bg-lightblue py-8 mt-8 lg:mt-0 lg:py-16">
        <section className="w-11/12 lg:container mx-auto">
          <h3 className="text-2xl lg:text-3xl font-bold text-center">
            Frequently Asked Questions
          </h3>
          <hr className="w-14 h-0.5 bg-primary my-4 mx-auto" />

          <Accordion
            type="single"
            collapsible
            className="w-full grid md:grid-cols-2 gap-4"
          >
            {faqData.flatMap((category, catIndex) =>
              category.questions.map((faq, index) => (
                <AccordionItem
                  key={`${catIndex}-${index}`}
                  value={`item-${catIndex}-${index}`}
                >
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))
            )}
          </Accordion>
        </section>
      </section>
    </section>
  );
};

export default page;
