import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="w-2/3 bg-white shadow-lg rounded-lg p-10">
        <div className="container mx-auto p-4">
          <h1 className="text-4xl font-bold text-green-800 mb-8">Privacy Policy</h1>

          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-2">Introduction</h2>
            <p>
              Welcome to AgriConnect! We are committed to protecting your
              personal information and your right to privacy. If you have any
              questions or concerns about this privacy policy or our practices
              with regards to your personal information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-2">
              Information We Collect
            </h2>
            <p>
              We collect personal information that you voluntarily provide to us
              when registering on the platform, expressing an interest in
              obtaining information about us or our products and services, when
              participating in activities on the platform, or otherwise
              contacting us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-2">
              How We Use Your Information
            </h2>
            <p>
              We use personal information collected via our platform for a
              variety of business purposes described below. We process your
              personal information for these purposes in reliance on our
              legitimate business interests, in order to enter into or perform a
              contract with you, with your consent, and/or for compliance with
              our legal obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-2">
              Sharing Your Information
            </h2>
            <p>
              We only share information with your consent, to comply with laws,
              to provide you with services, to protect your rights, or to
              fulfill business obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-2">
              Security of Your Information
            </h2>
            <p>
              We use administrative, technical, and physical security measures
              to help protect your personal information. While we have taken
              reasonable steps to secure the personal information you provide to
              us, please be aware that despite our efforts, no security measures
              are perfect or impenetrable, and no method of data transmission
              can be guaranteed against any interception or other type of
              misuse.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-2">Your Privacy Rights</h2>
            <p>
              In some regions, such as the European Economic Area, you have
              rights that allow you greater access to and control over your
              personal information. You may review, change, or terminate your
              account at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold mb-2">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this privacy policy from time to time in order to
              reflect, for example, changes to our practices or for other
              operational, legal, or regulatory reasons.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
