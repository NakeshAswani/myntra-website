import React, { useContext } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from '../../common/admin/Sidebar'
import Location from '../../common/admin/Location'
import { adminContext } from '../../Context/MainContext'

export function ViewSlider() {
  const { sideBar } = useContext(adminContext)
  return (
    <div>
      <div>
        <Header />
        <div className={`grid ${(sideBar) ? "grid-cols-[200px_auto]" : "grid-cols-[100px_auto]"} h-full`}>
          <Sidebar />
          <div className='w-full'>
            <Location />
            <div className='p-4'>
              <h1 className='w-max text-4xl font-bold mb-6 bgClipColor leading-[2.8rem]'>View Slider</h1>
              <table className='w-full table border'>
                <thead>
                  <tr>
                    <th className='border p-2 text-center'>Slider Name</th>
                    <th className='border p-2 text-center'>Slider Description</th>
                    <th className='border p-2 text-center'>Slider Image</th>
                    <th className='border p-2 text-center'>Status</th>
                    <th className='border p-2 text-center'>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='border p-2 text-center'>Slider 1</td>
                    <td className='border p-2 text-center'>Home page Slider</td>
                    <td className='border p-2 text-center'>1.png</td>
                    <td className='border p-2 text-center'>1</td>
                    <td className='p-2 text-center grid grid-cols-2 gap-3'>
                      <button className='bg-[red] text-[white] w-full py-2 font-medium rounded-lg'>Delete</button>
                      <button className='bg-[darkGreen] text-[white] w-full py-2 font-medium rounded-lg'>Edit</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}