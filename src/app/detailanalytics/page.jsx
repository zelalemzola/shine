"use client"
import DataTable from '@/components/DataTable'

import React from 'react'

const Users = () => {
   const columns = [
    {
      accessorKey: "name",
      header: "Name",
      cell:({row})=>{
        return <div className='flex gap-2 items-center'>
        <img src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue("name")}`} className='w-10 h-10'  alt="user-image" />
        <p>{row.getValue("name")}</p>

        </div>
      }
    },
    {
      accessorKey: "reach",
      header: "Reach",
    },
    {
      accessorKey: "impression",
      header: "Impression",
    },
    {
      accessorKey: "clicks",
      header: "Clicks",
    },
    {
      accessorKey: "clickThoughRate",
      header: "CTR",
    },
    {
      accessorKey: "costPerClick",
      header: "CPC",
    },
    {
      accessorKey: "conversionRate",
      header: "Conversion Rate",
    },
    {
      accessorKey: "returnOnAdSpend",
      header: "Return On Ad Spend",
    },
  ]
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
  return (
    <div className='flex flex-col gap-5 w-full h-full py-16 px-7 bg-white text-black'>
       <h1 className='text-2xl font-semibold'>List Of All ADS</h1>
      <DataTable columns={columns} data={ADS}/>
    </div>
  )
}

export default Users