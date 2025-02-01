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
import AuthorContactInfo from "@/pages/contact/authorContactInfo";
import { FaEdit } from "react-icons/fa";
import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaPaperPlane,
  FaPhone,
  FaUser,
} from "react-icons/fa6";

const faqData = [
  {
    question: "এই ওয়েবসাইটে কি দেখা যাবে?",
    answer:
      "এই ওয়েবসাইটে নিয়মিত লেখা প্রকাশ করা হয়। মহাকাশ, পদার্থবিজ্ঞান, গণিত, প্রযুক্তি, জীববিজ্ঞান, রসায়নসহ বিভিন্ন বিষয়ের ওপর লেখা পাবেন। পাশাপাশি লেখকের বই সম্পর্কেও বিস্তারিত জানতে পারবেন এবং কিছু অধ্যায় ফ্রিতে পড়তে পারবেন। এছাড়াও সহজেই লেখকের সঙ্গে যোগাযোগ করা যাবে।",
  },
  {
    question: "আপনার সম্পর্কে জানতে চাই...",
    answer:
      "আমার নাম কাজী আকাশ। আমি দেশের সবচেয়ে বড় বিজ্ঞানবিষয়ক মাসিক ম্যাগাজিন ‘বিজ্ঞানচিন্তা’র সহসম্পাদক হিসেবে কর্মরত। ছোটদের ম্যাগাজিন ‘কিশোর আলো’তেও নিয়মিত লিখি। গণিত ও বিজ্ঞান সহজ ভাষায় সবার কাছে পৌঁছে দেওয়াই আমার লক্ষ্য।",
  },
  {
    question: "আমি কি নিজের লেখা এখানে প্রকাশ করতে পারব?",
    answer:
      "হ্যাঁ, তবে শুধু লেখকের বইয়ের রিভিউ প্রকাশ করা যাবে। ফিচার বা অন্যান্য লেখা এখানে প্রকাশ করা সম্ভব নয়। এই ওয়েবসাইটটি মূলত লেখকের নিজস্ব লেখার জন্যই নির্ধারিত।",
  },
  {
    question: "আপনি কি বিজ্ঞানের সব বিষয় নিয়ে লেখেন?",
    answer:
      "আমি বিজ্ঞানের প্রায় সব বিষয় নিয়েই লিখি। তবে গণিত আমার বিশেষ প্রিয়। পাশাপাশি ইতিহাস, খেলাধুলাসহ অন্যান্য বিষয়েও লেখালেখি করি। তবে কবিতা, ছড়া বা গল্প লিখি না, তবে গল্প ও উপন্যাস অনুবাদ করি।",
  },
  {
    question: "আপনি কি গণিতের সমস্যা সমাধান করে দেবেন?",
    answer:
      "হ্যাঁ এবং না—দুইভাবেই বলা যায়। ক্লাসের গণিত বইয়ের সমাধান দেওয়া হয় না। তবে যদি কোনো গাণিতিক সমস্যা নিয়ে লেখা প্রয়োজন হয়, আমি তা লেখার চেষ্টা করব। আমার লক্ষ্য গণিতভীতি দূর করা এবং গণিতকে ভালোবাসতে শেখানো।",
  },
  {
    question: "আপনার বইগুলো কোথায় কিনতে পাবো?",
    answer:
      "এই ওয়েবসাইট থেকে সরাসরি বই কেনা যাবে। এছাড়া রকমারি, প্রথমা, পিবিএসসহ বিভিন্ন অনলাইন এবং অফলাইন দোকানেও পাওয়া যাবে। সরাসরি লেখকের কাছ থেকে কিনলে ৩০% ছাড় পাওয়া যাবে।",
  },
];

const title = "যোগাযোগ রাখুন";
const description =
  "সরাসরি আমাকে কিছু জানাতে চাইলে আপনার নাম, ইমেইল, ফোন নাম্বার ও বিস্তারিত লিখে পাঠিয়ে দিন। আমি আপনার সঙ্গে যোগাযোগ করব।";

const contactData = [
  {
    id: 2,
    icon: <FaFacebook />,
    title: "ফেসবুক",
    link: "https://www.facebook.com/sohagislam.akash ",
    shortLink: "Qazi Akash",
  },
  {
    id: 3,
    icon: <FaLinkedin />,
    title: "লিংকডিন",
    link: "https://www.linkedin.com/in/qazi-akash",
    shortLink: "Qazi Akash",
  },
  {
    id: 4,
    icon: <FaEnvelope />,
    title: "মেইল",
    link: "mailto:qaziakash.math@gmail.com",
    shortLink: "qaziakash.math@gmail.com",
  },
];

const page = () => {
  return (
    <section className="-mt-16">
      {/* Keep in touch section */}
      <section className="flex pt-16 flex-col lg:flex-row w-11/12 lg:container gap-8 lg:gap-20 mx-auto lg:px-24 lg:my-16 mt-8 items-center justify-between">
        {/* Left */}
        <AuthorContactInfo
          contactData={contactData}
          title={title}
          description={description}
        />
        {/* Right */}

        <div className="lg:w-1/2">
          <form className="flex flex-col gap-2">
            <div className="flex gap-2 items-center justify-between">
              <div className="relative flex gap-2 border border-lightblue items-center rounded w-1/2">
                <FaUser className="absolute left-2 top-1/2 transform -translate-y-1/2 text-primary" />
                <Input
                  className="border-none ml-6 shadow-none"
                  placeholder="আপনার নাম"
                />
              </div>
              <div className="relative flex gap-2 border border-lightblue items-center rounded w-1/2">
                <FaEnvelope className="absolute left-2 top-1/2 transform -translate-y-1/2 text-primary" />
                <Input
                  className="border-none ml-6 shadow-none"
                  placeholder="ইমেইল অ্যাড্রেস"
                />
              </div>
            </div>
            <div className="relative flex gap-2 border border-lightblue items-center rounded w-full">
              <FaPhone className="absolute left-2 top-1/2 transform -translate-y-1/2 text-primary" />
              <Input
                className="border-none ml-6 shadow-none"
                placeholder="ফোন নাম্বার"
              />
            </div>
            <div className="relative flex gap-2 border border-lightblue rounded items-center w-full">
              <FaEdit className="absolute left-2 top-2 text-primary" />
              <Textarea
                className="rounded-none border-none ml-6 shadow-none resize-none h-40"
                placeholder="এখানে মেসেজ লিখুন..."
              />
            </div>

            <div className="hidden items-center gap-2">
              <Checkbox className="shadow-none" />
              <p className="text-xs text-gray-500 capitalize">আমি</p>
            </div>
            <div>
              <Button className="flex rounded shadow-none w-full">
                পাঠিয়ে দিন <FaPaperPlane />
              </Button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-secondary py-8 mt-8 lg:mt-0 lg:py-16">
        <section className="w-11/12 lg:container mx-auto">
          <h3 className="text-2xl lg:text-3xl font-bold text-center">
            প্রায়শ জিজ্ঞাসিত প্রশ্নগুলো
          </h3>
          <hr className="w-14 h-0.5 bg-primary my-4 mx-auto" />

          <Accordion
            type="single"
            collapsible
            className="w-9/12 mx-auto grid md:grid-cols-2 gap-4"
          >
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={index.toString()}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </section>
    </section>
  );
};

export default page;
