// components/Footer.jsx
import Link from "next/link";

const footerLinks = [
  {
    title: "Shop and Learn",
    links: [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "AirPods",
      "TV & Home",
      "AirTag",
      "Accessories",
      "Gift Cards",
    ],
  },
  {
    title: "Apple Wallet",
    links: ["Wallet"],
  },
  {
    title: "Account",
    links: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
  },
  {
    title: "Entertainment",
    links: [
      "Apple One",
      "Apple TV",
      "Apple Music",
      "Apple Arcade",
      "Apple Fitness+",
      "Apple Podcasts",
      "Apple Books",
      "App Store",
    ],
  },
  {
    title: "Apple Store",
    links: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Group Reservations",
      "Apple Camp",
      "Apple Trade In",
      "Ways to Buy",
      "Recycling Programme",
      "Order Status",
      "Shopping Help",
    ],
  },
  {
    title: "For Business",
    links: ["Apple and Business", "Shop for Business"],
  },
  {
    title: "For Education",
    links: ["Apple and Education", "Shop for Education", "Shop for University"],
  },
  {
    title: "For Healthcare",
    links: ["Apple and Healthcare"],
  },
  {
    title: "For Government",
    links: ["Apple and Government"],
  },
  {
    title: "Apple Values",
    links: [
      "Accessibility",
      "Education",
      "Environment",
      "Privacy",
      "Supply Chain Innovation",
    ],
  },
  {
    title: "About Apple",
    links: [
      "Newsroom",
      "Apple Leadership",
      "Career Opportunities",
      "Investors",
      "Ethics & Compliance",
      "Events",
      "Contact Apple",
    ],
  },
];

// Groups columns are laid out in, matching the 5-column screenshot layout
const columnGroups = [
  ["Shop and Learn", "Apple Wallet"],
  ["Account", "Entertainment"],
  ["Apple Store"],
  ["For Business", "For Education", "For Healthcare", "For Government"],
  ["Apple Values", "About Apple"],
];

function Footer() {
  const getSection = (title) => footerLinks.find((s) => s.title === title);

  return (
    <footer className="bg-black text-[#86868B] text-sm px-6 md:px-10 pt-10 pb-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[#86868B] mb-8">
        <span className="text-base"></span>
        <span>/</span>
        <Link href="/iphone" className="hover:underline">
          iPhone
        </Link>
        <span>/</span>
        <Link href="/iphone-17-pro" className="hover:underline">
          iPhone 17 Pro
        </Link>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-[#86868B]/20 pb-8">
        {columnGroups.map((group, i) => (
          <div key={i} className="flex flex-col gap-8">
            {group.map((title) => {
              const section = getSection(title);
              return (
                <div key={title}>
                  <h3 className="text-white font-semibold mb-3">{title}</h3>
                  <ul className="flex flex-col gap-2">
                    {section.links.map((link) => (
                      <li key={link}>
                        <Link href="#" className="hover:underline">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* More ways to shop */}
      <p className="pt-6 pb-4">
        More ways to shop:{" "}
        <Link href="#" className="text-blue-500 hover:underline">
          Find an Apple Store
        </Link>{" "}
        or{" "}
        <Link href="#" className="text-blue-500 hover:underline">
          other retailer
        </Link>{" "}
        near you. Or call{" "}
        <Link href="#" className="text-blue-500 hover:underline">
          000800 040 1966
        </Link>
        .
      </p>

      {/* Bottom bar */}
      <div className="border-t border-[#86868B]/20 pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs">
        <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="#" className="hover:underline">
            Terms of Use
          </Link>
          <span>|</span>
          <Link href="#" className="hover:underline">
            Sales Policy
          </Link>
          <span>|</span>
          <Link href="#" className="hover:underline">
            Legal
          </Link>
          <span>|</span>
          <Link href="#" className="hover:underline">
            Site Map
          </Link>
        </div>
        <p>India</p>
      </div>
    </footer>
  );
}

export default Footer;