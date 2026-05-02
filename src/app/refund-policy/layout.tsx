import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refund Policy | Payfolio",
    description:
        "Read the refund policy for Payfolio, the secure payment platform by rahul. All payments are final and non-refundable.",
    keywords: [
        "refund policy",
        "Payfolio",
        "rahul",
        "secure payments",
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
        title: "Refund Policy | Payfolio",
        description:
            "Read the refund policy for Payfolio, the secure payment platform by rahul.",
        url: "https://pay.muhammadfiaz.com/refund-policy",
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
        title: "Refund Policy | Payfolio",
        description:
            "Read the refund policy for Payfolio, the secure payment platform by rahul.",
        images: ["https://pay.muhammadfiaz.com/logo.png"],
    },
};

export default function RefundPolicyLayout({ children }: { children: React.ReactNode }) {
    return children;
}
