"use client"
import React from 'react'
import { MousePointerClick, HandHeart, DollarSign, Users, Maximize2, Pointer } from "lucide-react";
import Card from '@/components/Card';
import BarChart from '@/components/Barchart';
import SalesCard from '@/components/SalesCard';
import { useRouter } from 'next/navigation';
const Dashboard = () => {
     const route= useRouter();
        const ADS= [
          {
             name: "Ad1",
             reach: 1234,
            impression: 345,
            clicks: 23,
            clickThoughRate: 23,
            costPerClick: 2,
            conversionRate: 23,
            returnOnAdSpend: 14
          },
          {
             name: "Ad2",
             reach: 1234,
            impression: 345,
            clicks: 23,
            clickThoughRate: 23,
            costPerClick: 2,
            conversionRate: 23,
            returnOnAdSpend: 14
          },
          {
             name: "Ad3",
             reach: 1234,
            impression: 345,
            clicks: 23,
            clickThoughRate: 23,
            costPerClick: 2,
            conversionRate: 23,
            returnOnAdSpend: 14
          },
          {
             name: "Ad4",
             reach: 1234,
            impression: 345,
            clicks: 23,
            clickThoughRate: 23,
            costPerClick: 2,
            conversionRate: 23,
            returnOnAdSpend: 14
          },
          {
             name: "Ad5",
             reach: 1234,
            impression: 345,
            clicks: 23,
            clickThoughRate: 23,
            costPerClick: 2,
            conversionRate: 23,
            returnOnAdSpend: 14
          },
          {
             name: "Ad6",
             reach: 1234,
            impression: 345,
            clicks: 23,
            clickThoughRate: 23,
            costPerClick: 2,
            conversionRate: 23,
            returnOnAdSpend: 14
          },
          {
             name: "Ad7",
             reach: 1234,
            impression: 345,
            clicks: 23,
            clickThoughRate: 23,
            costPerClick: 2,
            conversionRate: 23,
            returnOnAdSpend: 14
          },
          {
             name: "Ad8",
             reach: 1234,
            impression: 345,
            clicks: 23,
            clickThoughRate: 23,
            costPerClick: 2,
            conversionRate: 23,
            returnOnAdSpend: 14
          },
          {
             name: "Ad9",
             reach: 1234,
            impression: 345,
            clicks: 23,
            clickThoughRate: 23,
            costPerClick: 2,
            conversionRate: 23,
            returnOnAdSpend: 14
          },
          {
             name: "Ad10",
             reach: 1234,
            impression: 345,
            clicks: 23,
            clickThoughRate: 23,
            costPerClick: 2,
            conversionRate: 23,
            returnOnAdSpend: 14
          }
        ]
      // Function to calculate total reach
const calculateTotalReach = (ads) => {
    return ads.reduce((total, ad) => total + ad.reach, 0);
  };
  
  // Function to calculate total impression
  const calculateTotalImpression = (ads) => {
    return ads.reduce((total, ad) => total + ad.impression, 0);
  };
  
  // Function to calculate total clicks
  const calculateTotalClicks = (ads) => {
    return ads.reduce((total, ad) => total + ad.clicks, 0);
  };
  
  // Function to calculate total cost per click
  const calculateTotalCostPerClick = (ads) => {
   return ads.reduce((total, ad) => total + ad.costPerClick, 0);
    
  };
  
  // Example usage
  const totalReach = calculateTotalReach(ADS);
  const totalImpression = calculateTotalImpression(ADS);
  const totalClicks = calculateTotalClicks(ADS);
  const totalCostPerClick = calculateTotalCostPerClick(ADS);
  
  console.log("Total Reach:", totalReach);
  console.log("Total Impression:", totalImpression);
  console.log("Total Clicks:", totalClicks);
  console.log("Total Cost Per Click:", totalCostPerClick);
   
  const cardData=[
    {
      label:"Total Reach",
      amount: totalReach,
      icon:Users 
    },
    {
      label:"Total Impression",
      amount: totalImpression,
      icon: HandHeart 
    },
    {
      label:"Total Clicks",
      amount:totalClicks,
      icon:MousePointerClick
    },
    {
      label:"Total Cost Per Click",
      amount:totalCostPerClick,
      icon:DollarSign
    },
  ]


  return (
    <div className='h-full py-20 md:py-7 px-4 bg-black'>
     <Card cardData={cardData}/>
     <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2 mt-8">
        <div className="bg-white text-black flex w-full flex-col gap-3 rounded-xl border p-5 shadow-lg">
        <div>
          <p className="p-4 text-xl font-semibold">Overview</p>
          <BarChart/>
        </div>
        </div>
        <div  className=" bg-white text-black flex justify-between w-full flex-col gap-4 rounded-xl border p-5 shadow-lg">
          <div className='flex  justify-between items-center'>
          <p>Recent ADS</p>
          <Maximize2 size="18px" className='cursor-pointer font-bold' onClick={()=>{route.push("/detailanalytics")}}/>
          <p>Reach</p>
        </div>
         
        {ADS.map((d,i)=>(<SalesCard key={i}  name={d.name} reach={d.reach}/>))}
      </div>
      </section>
    </div>
  )
}

export default Dashboard