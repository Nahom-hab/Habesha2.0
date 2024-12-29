import React from 'react';

// PrivacyPolicy component to display the privacy policy of the application
const PrivacyPolicy = () => {
    return (
        // Main container for the privacy policy
        <div className="privacy-policy bg-primary md:px-[20%] lg:px-80 py-12">
            {/* Title of the privacy policy */}
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

            {/* Introductory paragraph */}
            <p className="mb-6 text-lg">
                Welcome to Habesha Libs. Your privacy is critically important to us. This Privacy Policy
                explains how we collect, use, and protect your information when you visit our website or
                use our services.
            </p>

            {/* Section for information collection */}
            <h2 className="text-3xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-6 text-lg">
                We collect personal information you provide directly to us, such as when you create an
                account, contact us, or make a purchase. This may include your name, email address,
                payment information, and other details necessary to provide our services.
            </p>

            {/* Section for how information is used */}
            <h2 className="text-3xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-6 text-lg">We use the information we collect to:</p>
            <ul className="list-disc pl-8 mb-6">
                {/* List of usage purposes */}
                <li className="mb-2">Provide, maintain, and improve our services</li>
                <li className="mb-2">Process transactions and send related information</li>
                <li className="mb-2">Communicate with you, including responding to inquiries and sending updates</li>
                <li className="mb-2">Monitor and analyze trends to improve your experience</li>
                <li className="mb-2">Comply with legal obligations</li>
            </ul>

            {/* Section for sharing information */}
            <h2 className="text-3xl font-semibold mb-4">Sharing Your Information</h2>
            <p className="mb-6 text-lg">
                We do not share your personal information with third parties except as necessary to provide
                our services, comply with the law, or protect our rights.
            </p>

            {/* Section for data security measures */}
            <h2 className="text-3xl font-semibold mb-4">Data Security</h2>
            <p className="mb-6 text-lg">
                We take reasonable measures to protect your information from unauthorized access, loss, or
                misuse. However, no system can be completely secure, and we cannot guarantee absolute
                security.
            </p>

            {/* Section for user rights regarding their data */}
            <h2 className="text-3xl font-semibold mb-4">Your Rights</h2>
            <p className="mb-6 text-lg">
                You have the right to access, update, or delete your personal information. To exercise these
                rights, please contact us using the information provided below.
            </p>

            {/* Section for contact information */}
            <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-6 text-lg">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p className="mb-6 font-semibold text-lg">Email: support@habeshalibs.com</p>

            {/* Section for changes to the policy */}
            <h2 className="text-3xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="mb-6 text-lg">
                We may update this Privacy Policy from time to time. We encourage you to review this page
                periodically for any changes. Your continued use of our services constitutes your agreement
                to the updated policy.
            </p>

            {/* Last updated date note */}
            <p className="italic text-lg">Last updated:  December 23, 2024</p>
        </div>
    );
};

export default PrivacyPolicy;