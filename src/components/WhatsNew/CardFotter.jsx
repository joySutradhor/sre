import { CiClock2 } from 'react-icons/ci'
import { FaRegComments } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'

const CardFotter = () => {
  return (
    <div className='flex items-center justify-between  pb-5'>
      <div className='flex items-center gap-[5px] font-[300] text-[14px]'>
        <span>
          <IoIosPeople className='text-[#010101] group-hover:text-black ' />
        </span>
        <p className='text-[#010101] group-hover:text-black '>25</p>
      </div>
      <div className='flex items-center gap-[5px]  font-[300] text-[14px] text-[#010101]'>
        <CiClock2 className='group-hover:text-black' />

        <p className='group-hover:text-black'>36hr</p>
      </div>
      {/* <div className='flex items-center gap-[5px] font-[300] text-[14px] text-[#010101] group-hover:text-black'>
        <FaRegComments className='group-hover:text-black' />
        <p className='text-[#010101] group-hover:text-black'>25k</p>
      </div> */}
    </div>
  )
}

export default CardFotter
