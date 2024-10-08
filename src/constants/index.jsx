import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Luxury Living Interiors",
    image: user1,
    text: "The VR experience completely transformed how we approached our interior design project. Seeing everything in a virtual space before implementation made decision-making so much easier. The team’s attention to detail was impeccable!",
  },
  {
    user: "Sarah Bennet",
    company: "Innovative Spaces",
    image: user2,
    text: "Working with this interior design firm was truly groundbreaking. Their use of VR allowed us to visualize the final outcome and make changes on the spot. We are thrilled with the results!",
  },
  {
    user: "Paul Donaldson",
    company: "Modern Elegance Homes",
    image: user3,
    text: "I was blown away by how realistic the VR mockups were! It felt like walking through my future home before it was even built. The design team is professional, innovative, and the results were beyond what we expected.",
  },
  {
    user: "William Harris",
    company: "Urban Luxe Interiors",
    image: user4,
    text: "The virtual reality aspect took our interior design to the next level. Being able to 'walk through' our space before construction gave us the confidence to proceed. Their expertise and use of technology are unmatched.",
  },
  {
    user: "James Evans",
    company: "Visionary Designs",
    image: user5,
    text: "Thanks to their VR design service, we could visualize every corner of our office renovation. It was like taking a tour of the completed project before a single thing was built. They were professional, creative, and exceeded our expectations!",
  },
  {
    user: "Olivia Taylor",
    company: "Studio Synergy",
    image: user6,
    text: "The team’s innovative use of VR in design made the entire process stress-free. We could easily make design adjustments on the go, and the end result was nothing short of spectacular. We’ll definitely be working with them again!",
  },
];


export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Revolutionize your VR design process",
    description:
      "Transform your interior spaces with immersive VR experiences and gain valuable insights into user interaction.",
  },
  {
    title: "Immerse in flawless design reviews",
    description:
      "Explore your virtual interior designs seamlessly and understand user engagement effortlessly.",
  },
  {
    title: "AI-driven efficiency for faster results",
    description:
      "Utilize AI assistance to streamline your VR design workflow, saving time and enhancing productivity.",
  },
  {
    title: "Effortlessly share your virtual creations",
    description:
      "Share your stunning VR interior designs effortlessly, allowing collaboration and feedback in minutes.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "2 Design Projects",
      "Standard Quality Rendering",
      "Basic Furniture Library",
      "Community Support",
    ],
  },
  {
    title: "Professional",
    price: "$39.99",
    features: [
      "Unlimited Design Projects",
      "High Quality Rendering",
      "Expanded Furniture Library",
      "Priority Email and Phone Support",
      "Exclusive Design Templates",
      "Customizable VR Environments",
    ],
  },
  {
    title: "Enterprise",
    price: "$199.99",
    features: [
      "All from professional package +",
      "Tailored Solutions for Large Projects",
      "Dedicated Account Manager",
      "On-Site Training",
      "24/7 Priority Support",
      "Advanced Analytics Dashboard",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
