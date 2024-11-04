import HowItworks from "@/components/howItworks/howItworks";
import KeyFeatures from "@/components/keyFeatures/keyFeatures";
import LandingPage from "@/components/landingPage/landingPage";
import WhatPepoleSay from "@/components/whatPepoleSay/whatPepoleSay";
import { Calendar, Clock, LinkIcon } from "lucide-react";

export default function Home() {

  const features = [
    {
      icon: Calendar,
      title: "Create Events",
      description: "Easily set up and customize your event types",
    },
    {
      icon: Clock,
      title: "Manage Availability",
      description: "Define your availability to streamline scheduling",
    },
    {
      icon: LinkIcon,
      title: "Custom Links",
      description: "Share your personalized scheduling link",
    },
  ];
  
  const howItWorks = [
    { step: "Sign Up", description: "Create your free Schedulrr account" },
    {
      step: "Set Availability",
      description: "Define when you're available for meetings",
    },
    {
      step: "Share Your Link",
      description: "Send your scheduling link to clients or colleagues",
    },
    {
      step: "Get Booked",
      description: "Receive confirmations for new appointments automatically",
    },
  ];
  

  return (
    <>
      <div>
        <LandingPage/>
        <KeyFeatures features={features}/>
        <WhatPepoleSay howItWorks={howItWorks} />
        <HowItworks howItWorks={howItWorks} />
      </div>
    </>
  );
}
 