import React, { useContext } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from '../../common/admin/Sidebar'
import Location from '../../common/admin/Location'
import { adminContext } from '../../Context/MainContext'

export function AddSlider() {
  const { sideBar } = useContext(adminContext)
  return (
    <div>
      <div>
        <Header />
        <div className={`grid ${(sideBar) ? "grid-cols-[210px_auto]" : "grid-cols-[130px_auto]"} h-full`}>
          <Sidebar />
          <div className='w-full'>
            <Location />
            <div className='p-4'>
              <h1 className='w-max text-4xl font-bold mb-6 bgClipColor'>Add Slider</h1>
              <form className='w-8/12'>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1'>Slider Name <span className='text-[red]'>*</span></label>
                  <div className='w-full background_admin p-[2px_6px_6px_2px] rounded-lg'>
                    <input type="text" className='w-full bg-[white] rounded-md p-1 outline-offset-[3px]' />
                  </div>
                </div>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1'>Slider Description <span className='text-[red]'>*</span></label>
                  <div className='w-full h-[120px] background_admin p-[2px_6px_6px_2px] rounded-lg'>
                    <textarea className='w-full h-full bg-[white] rounded-md p-1 outline-offset-[3px] resize-none'></textarea>
                  </div>
                </div>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1'>Slider Image <span className='text-[red]'>*</span></label>
                  <div className='w-full background_admin p-[2px_6px_6px_2px] rounded-lg'>
                    <input type="file" className='w-full bg-[white] rounded-md p-1' />
                  </div>
                </div>
                <div className='mb-6'>
                  <label className='block text-[18px] font-medium mb-1'>Slider Status <span className='text-[red]'>*</span></label>
                  <div className='text-[18px]'>
                    <input type="radio" name='status' value={1} className='me-1' />Active<br />
                    <input type="radio" name='status' value={0} className='me-1' />De-Active
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
