import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Payfolio",
    description:
        "Read the privacy policy for Payfolio, the secure payment platform by rahul. Learn how your data is collected, used, and protected.",
    keywords: [
        "privacy policy",
        "Payfolio",
        "rahul",
        "secure payments",
        "data protection",
        "razorpay",
        "binance",
        "crypto",
        "fiat",
        "donation",
        "tip",
    ],
    authors: [{ name: "rahul", url: "https://muhammadfiaz.com" }],
    publisher: "rahul",
    openGraph: {
        title: "Privacy Policy | Payfolio",
        description:
            "Read the privacy policy for Payfolio, the secure payment platform by rahul.",
        url: "https://pay.muhammadfiaz.com/privacy-policy",
        siteName: "Payfolio",
        images: [
            {
                url: "https://pay.muhammadfiaz.com/logo.png",
                width: 400,
                height: 400,
                alt: "Payfolio Logo",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@muhammadfiaz_",
        creator: "@muhammadfiaz_",
        title: "Privacy Policy | Payfolio",
        description:
            "Read the privacy policy for Payfolio, the secure payment platform by rahul.",
        images: ["https://pay.muhammadfiaz.com/logo.png"],
    },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
    return children;
}
