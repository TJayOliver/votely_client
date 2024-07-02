import { Footer } from "./components/Footer";
import { Header } from "./components/HomeHeader";
import { FaRegFileAlt } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <main className="flex justify-between p-4">
        {/* navigation */}
        <section className="top-28 sticky md:flex md:flex-col hidden bg-gray-200 p-3 rounded-lg w-96 h-[28.4rem]">
          <h1 className="mb-3 font-bold text-xl">Contents</h1>
          <div className="flex flex-col justify-between gap-4 text-lg">
            <a
              href="#collection-of-information"
              className="hover:translate-x-2 hover:duration-100 hover:ease-in-out flex items-center gap-1 hover:font-medium"
            >
              <FaRegFileAlt /> Collection of Information
            </a>
            <a
              href="#usage-of-information"
              className="hover:translate-x-2 hover:duration-100 hover:ease-in-out flex items-center gap-1 hover:font-medium"
            >
              <FaRegFileAlt /> Usage of Information
            </a>
            <a
              href="#protection-of-information"
              className="hover:translate-x-2 hover:duration-100 hover:ease-in-out flex items-center gap-1 hover:font-medium"
            >
              <FaRegFileAlt /> Protection of Information
            </a>
            <a
              href="#sharing-of-information"
              className="hover:translate-x-2 hover:duration-100 hover:ease-in-out flex items-center gap-1 hover:font-medium"
            >
              <FaRegFileAlt /> Sharing of Information
            </a>
            <a
              href="#cookies"
              className="hover:translate-x-2 hover:duration-100 hover:ease-in-out flex items-center gap-1 hover:font-medium"
            >
              <FaRegFileAlt /> Cookie Policy
            </a>
            <a
              href="#third-party"
              className="hover:translate-x-2 hover:duration-100 hover:ease-in-out flex items-center gap-1 hover:font-medium"
            >
              <FaRegFileAlt /> Third Party Services
            </a>
            <a
              href="#your-rights"
              className="hover:translate-x-2 hover:duration-100 hover:ease-in-out flex items-center gap-1 hover:font-medium"
            >
              <FaRegFileAlt /> Rights & Choices
            </a>
            <a
              href="#childrens-privacy"
              className="hover:translate-x-2 hover:duration-100 hover:ease-in-out flex items-center gap-1 hover:font-medium"
            >
              <FaRegFileAlt /> Childrens Privacy
            </a>
            <a
              href="#change-of-privacy"
              className="hover:translate-x-2 hover:duration-100 hover:ease-in-out flex items-center gap-1 hover:font-medium"
            >
              <FaRegFileAlt /> Changes to Privacy
            </a>
          </div>
        </section>
        {/* policies */}
        <section className="mx-auto px-4 container">
          <h1 className="mb-4 font-bold text-3xl">Privacy Policy</h1>

          <section id="collection-of-information" className="flex flex-col gap-3 mb-6 text-justify">
            <h2 className="mb-2 font-semibold text-2xl">1. Information We Collect</h2>
            <p className="mb-2">
              At Votely, we are committed to protecting your privacy and safeguarding your personal
              information. When you use our platform, we collect various types of information to
              provide and improve our services. This includes:
            </p>
            <p className="mb-2">
              <strong>Personal Information:</strong> We collect personal information that you
              provide directly, such as your name, email address, and any other details you choose
              to share with us when you create an account or participate in polls. This information
              is essential for managing your account, conducting polls, and communicating with you.
            </p>
            <p className="mb-2">
              <strong>Usage Data:</strong> We automatically collect information about your
              interactions with our platform. This includes your IP address, browser type, operating
              system, pages visited, and the duration of your visit. This data helps us understand
              how users interact with our platform and allows us to improve our services.
            </p>
            <p className="mb-2">
              <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar
              tracking technologies to enhance your user experience, analyze usage patterns, and
              improve our services. Cookies are small data files stored on your device that help us
              recognize you and remember your preferences. You can manage your cookie preferences
              through your browser settings.
            </p>
          </section>

          <section id="usage-of-information" className="flex flex-col gap-3 mb-6 text-justify">
            <h2 className="mb-2 font-semibold text-2xl">2. How We Use Your Information</h2>
            <p className="mb-2">
              We use the information we collect for various purposes, including:
            </p>
            <p className="mb-2">
              <strong>To Provide and Manage Services:</strong> Your information is used to manage
              your account, conduct polls, and ensure the smooth operation of our platform. This
              includes verifying your identity, processing your participation, and communicating
              with you about your account and poll activities.
            </p>
            <p className="mb-2">
              <strong>To Improve Our Platform:</strong> We analyze usage data to understand how our
              platform is used and to make enhancements that improve user experience. This includes
              identifying trends, monitoring performance, and troubleshooting issues.
            </p>
            <p className="mb-2">
              <strong>For Communication:</strong> We may use your email address to send updates,
              notifications, and other information related to your account and our services. This
              includes promotional materials, system updates, and customer support communications.
            </p>
            <p className="mb-2">
              <strong>For Legal Compliance:</strong> We may use your information to comply with
              legal obligations and to protect the rights and safety of our users and our platform.
              This includes responding to legal requests, such as court orders or subpoenas, and
              ensuring compliance with applicable laws and regulations.
            </p>
          </section>

          <section id="protection-of-information" className="flex flex-col gap-3 mb-6 text-justify">
            <h2 className="mb-2 font-semibold text-2xl">3. How We Protect Your Information</h2>
            <p className="mb-2">
              We are committed to protecting your personal information and have implemented
              appropriate technical and organizational measures to safeguard it. These measures
              include:
            </p>
            <p className="mb-2">
              <strong>Security Measures:</strong> We use industry-standard security protocols to
              protect your data from unauthorized access, disclosure, alteration, and destruction.
              This includes encryption, secure servers, and access controls.
            </p>
            <p className="mb-2">
              <strong>Data Retention:</strong> We retain your personal information only as long as
              necessary to fulfill the purposes outlined in this Privacy Policy and as required by
              law. We periodically review our data retention practices and securely delete or
              anonymize data that is no longer needed.
            </p>
          </section>

          <section id="sharing-of-information" className="flex flex-col gap-3 mb-6 text-justify">
            <h2 className="mb-2 font-semibold text-2xl">4. Sharing Your Information</h2>
            <p className="mb-2">We may share your information in the following circumstances:</p>
            <p className="mb-2">
              <strong>Third-Party Service Providers:</strong> We may share your information with
              trusted third-party service providers who assist us in operating our platform,
              conducting polls, and providing customer support. These providers are bound by
              confidentiality agreements and are only permitted to use your information as necessary
              to perform their services.
            </p>
            <p className="mb-2">
              <strong>Legal Requirements:</strong> We may disclose your information if required by
              law or in response to legal requests, such as court orders or subpoenas. This includes
              complying with regulatory requirements and protecting our legal rights.
            </p>
            <p className="mb-2">
              <strong>Business Transfers:</strong> In the event of a merger, acquisition, or other
              business transfer, your information may be transferred as part of the transaction. We
              will ensure that any acquiring entity adheres to the same privacy practices outlined
              in this policy.
            </p>
          </section>

          <section id="cookies" className="flex flex-col gap-3 mb-6 text-justify">
            <h2 className="mb-2 font-semibold text-2xl">5. Cookies and Tracking Technologies</h2>
            <p className="mb-2">
              Cookies are small data files placed on your device that help us provide a better user
              experience. They allow us to remember your preferences, analyze usage patterns, and
              deliver personalized content. You can manage your cookie preferences through your
              browser settings, but disabling cookies may impact the functionality of our platform.
            </p>
            <p className="mb-2">We use various types of cookies, including:</p>
            <p className="mb-2">
              <strong>Essential Cookies:</strong> These cookies are necessary for the proper
              functioning of our platform and cannot be disabled. They include cookies that remember
              your login status and settings.
            </p>
            <p className="mb-2">
              <strong>Performance Cookies:</strong> These cookies collect information about how
              users interact with our platform, such as which pages are visited and any errors
              encountered. They help us improve the performance and functionality of our services.
            </p>
            <p className="mb-2">
              <strong>Advertising Cookies:</strong> We use cookies to deliver targeted
              advertisements and measure the effectiveness of our advertising campaigns. These
              cookies may be placed by third-party advertising partners, such as Google.
            </p>
          </section>

          <section id="third-party" className="flex flex-col gap-3 first-letter:mb-6 text-justify">
            <h2 className="mb-2 font-semibold text-2xl">6. Third-Party Services</h2>
            <p className="mb-2">
              Our platform may integrate with third-party services to enhance functionality and
              provide additional features. These third-party services may collect and use your
              information in accordance with their own privacy policies. For example, we use Google
              Analytics to analyze usage patterns and improve our platform.
            </p>
            <p className="mb-2">
              <strong>Google Analytics:</strong> Google Analytics helps us understand how users
              interact with our platform by collecting information about your visits and usage
              patterns. Google’s privacy practices can be reviewed at their{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>

          <section id="your-rights" className="flex flex-col gap-3 mb-6 text-justify">
            <h2 className="mb-2 font-semibold text-2xl">7. Your Rights and Choices</h2>
            <p className="mb-2">
              You have various rights and choices regarding your personal information, including:
            </p>
            <p className="mb-2">
              <strong>Access and Correction:</strong> You have the right to access, correct, or
              delete your personal information. You can update your account details through your
              profile settings or contact us for assistance.
            </p>
            <p className="mb-2">
              <strong>Opt-Out:</strong> You can opt-out of receiving promotional emails from us by
              following the unsubscribe instructions provided in those emails.
            </p>
            <p className="mb-2">
              <strong>Cookie Management:</strong> You can manage your cookie preferences through
              your browser settings. Note that disabling cookies may affect the functionality of
              certain features of our platform.
            </p>
          </section>

          <section id="childrens-privacy" className="flex flex-col gap-3 mb-6 text-justify">
            <h2 className="mb-2 font-semibold text-2xl">8. Childrens Privacy</h2>
            <p className="mb-2">
              Our platform is not intended for children under the age of 13. We do not knowingly
              collect personal information from children under 13. If we become aware that we have
              collected such information, we will take steps to delete it promptly.
            </p>
          </section>

          <section id="change-of-privacy" className="flex flex-col gap-3 mb-6 text-justify">
            <h2 className="mb-2 font-semibold text-2xl">9. Changes to This Privacy Policy</h2>
            <p className="mb-2">
              We may update this Privacy Policy from time to time to reflect changes in our
              practices or for other operational, legal, or regulatory reasons. We will notify you
              of significant changes by posting the updated policy on our website. Your continued
              use of our platform after such changes constitutes your acceptance of the updated
              policy.
            </p>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
