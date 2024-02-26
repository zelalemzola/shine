import { Button,buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BarChart4, HandCoins, ImagePlus, ListPlus, LogIn, Radio, UserRoundCog } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  
  return (
    <>
     <div className="bg-yellow-400 h-full p-16">
        {/* landing page */}
        <h1 className="text-center text-black font-bold text-4xl">Shine A <span className="text-white">Light</span> On Your Brand With Us !</h1>
        <div className="flex flex-col-reverse md:flex-row items-center gap-4 mt-10">
          <div className="flex-1  flex flex-col items-start text-justify p-5">
            
        <p className="text-justify text-xl font-bold"><span className="text-3xl text-white font-bold">" With SHINE </span> Unleash the power of our bespoke social media magic to propel your brand to the forefront of the digital world. Elevate your online presence, captivate audiences, and ignite conversations that drive unprecedented growth.<span className="text-3xl text-white font-bold">"</span> </p> 
         <p className="mt-5 text-lg font-semibold mb-4"> New User Sign Up Now and Reach Millions </p>
          <Link href="/sign-in" className="rounded-lg text-center bg-black text-white py-3 px-5 w-1/3">Sign In</Link>
          </div>
          <div className="flex-1 ">
            <Image src="/home.svg" width={320} height={320} className="mx-auto" alt="home"/>
          </div>
        </div>
        </div>
        {/* services */}
        <div className="bg-yellow-400 pt-28  p-16 ">
          <h1 className="text-4xl text-black font-bold text-center">Services We Provide</h1>
          <div className="mt-[80px] md:mt-[160px] mx-auto flex flex-col md:flex-row gap-9 justify-center items-center">
            <Card className={cn("w-[290px] h-[290] bg-black text-white")} >
              <CardHeader>
                <CardTitle className="flex flex-col font-bold text-white items-center space-y-4">
                <ImagePlus size="36px"/>
                <p>AD Creation</p></CardTitle>
              </CardHeader>
              <CardContent>
                <p>Get assited help in creating an AD with curated and research backed ways to create successful ADS</p>
              </CardContent>
              
            </Card>
           
            <Card className={cn("w-[290px]  h-[290] bg-black text-white")} >
              <CardHeader>
                <CardTitle className="flex flex-col font-bold text-white items-center space-y-4">
                <UserRoundCog size="36px"/>
                <p>Manage ADS</p></CardTitle>
              </CardHeader>
              <CardContent>
                <p>Get a custom Dashboard for your current running ADS right from your dashboard and measure your impact</p>
              </CardContent>
              
            </Card>
           
            <Card className={cn("w-[290px]  h-[290] bg-black text-white")} >
              <CardHeader>
                <CardTitle className="flex flex-col font-bold text-white items-center space-y-4">
                <Radio  size="36px"/>
                <p>Live Data</p></CardTitle>
              </CardHeader>
              <CardContent>
                <p>Get Live Data Analytics and how your AD is performing right from your dashboard without having to go anywhere</p>
              </CardContent>
              
            </Card>
           

          </div>
        </div>

        {/* How it works */}

        <div className="bg-black text-white p-16 pt-30 ">
           <h1 className="text-yellow-500 font-bold text-4xl text-center">How It Works</h1>
           <div className="mt-[80px] md:mt-[100px] flex flex-col items-center md:flex-row text-justify md:gap-20 gap-10 ">
            <div className=" flex-1 flex flex-col  space-y-8">
              <div className="flex flex-col space-y-3">
              <LogIn size="36px" className="text-yellow-500"/>
              <h2 className="text-2xl font-bold">1.Sign Up to Our Site</h2>
              <p>We Support sign up with email and password or you can also use your google account to sign in</p>
              </div>
              <div className="flex flex-col space-y-3">
              <ListPlus size="36px" className="text-yellow-500"/>
              <h2 className="text-2xl font-bold">2.Create New AD</h2>
              <p>Head over to your dashboard to create a new Ad with curated recommendations to create a successful AD</p>
              </div>
              
            </div>
            <div className=" flex-1 flex flex-col space-y-8">
              <div className="flex flex-col space-y-3">
              <HandCoins size="36px" className="text-yellow-500"/>
              <h2 className="text-2xl font-bold">3.Head To Payment</h2>
              <p>Once content with your AD head to checkout section to make payment for the AD you created, you can choose from the flexible pricing options that are available  </p>
              </div>
              <div className="flex flex-col space-y-3">
              <BarChart4 size="36px" className="text-yellow-500"/>
              <h2 className="text-2xl font-bold">4.Get Analtytics</h2>
              <p>Once you have made the payment and the AD is active you will get live analytics and data on how each of your ADS are performing</p>
              </div>
            </div>
           </div>
        </div>
    
     </>
  );
}
