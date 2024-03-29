import React, { useContext } from 'react'
import Header from '../../common/admin/Header'
import Sidebar from '../../common/admin/Sidebar'
import { adminContext } from '../../Context/MainContext'
import Location from '../../common/admin/Location'
import avatar from "../../images/avatar.png"

export function AdminProfile() {
  const { sideBar } = useContext(adminContext)
  return (
    <div>
      <Header />
      <div className={`grid ${(sideBar) ? "grid-cols-[200px_auto]" : "grid-cols-[100px_auto]"} pt-[84px]`}>
        <Sidebar />
        <div className='w-full'>
          <Location />
          <div className='p-4'>
            <div className='background_admin p-[2px] rounded-lg grid grid-cols-[30%_auto]'>
              <div className='bg-[white] me-[1px] rounded-lg p-4'>
                <img src={avatar} className='w-3/4 mx-auto' />
              </div>
              <div className='bg-[white] ms-[1px] rounded-lg p-4'>
                <form className=''>
                  <div className='mb-4'>
                    <label className='block mb-2 font-semibold text-[red] text-[18px]'>Full Name *</label>
                    <div className='w-full rounded-md pb-[2px] background_admin'>
                      <input type="text" className='w-full bg-[white] rounded-md p-1' disabled />
                    </div>
                  </div>
                  <div className='mb-4'>
                    <label className='block mb-2 font-semibold text-[red] text-[18px]'>Email *</label>
                    <div className='w-full rounded-md pb-[2px] background_admin'>
                      <input type="email" className='w-full bg-[white] rounded-md p-1' disabled />
                    </div>
                  </div>
                  <div className='mb-4'>
                    <label className='block mb-2 font-semibold text-[red] text-[18px]'>Phone *</label>
                    <div className='w-full rounded-md pb-[2px] background_admin'>
                      <input type="number" className='w-full bg-[white] rounded-md p-1' disabled />
                    </div>
                  </div>
                  <div className='mb-4'>
                    <label className='block mb-2 font-semibold text-[red] text-[18px]'>Address *</label>
                    <div className='w-full rounded-md pb-[2px] background_admin'>
                      <input type="text" className='w-full bg-[white] rounded-md p-1' disabled />
                    </div>
                  </div>
                  <div className='mb-4'>
                    <label className='block mb-2 font-semibold text-[red] text-[18px]'>Pincode *</label>
                    <div className='w-full rounded-md pb-[2px] background_admin'>
                      <input type="text" className='w-full bg-[white] rounded-md p-1' disabled />
                    </div>
                  </div>
                  <div className='mb-4'>
                    <label className='block mb-2 font-semibold text-[red] text-[18px]'>Password *</label>
                    <div className='w-full rounded-md pb-[2px] background_admin'>
                      <input type="password" className='w-full bg-[white] rounded-md p-1' disabled />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
