import { BiLogoFacebook } from 'react-icons/bi'
import { FaGoogle } from 'react-icons/fa'

const LogIn = () => {
  return (
    <section className='h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-[80px] mx-5 md:mx-0 md:my-0'>
      <div className='md:w-1/3 max-w-sm'>
        <img
          src='https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
          alt='Sample image'
        />
      </div>
      <div className='md:w-1/3 max-w-sm bg-custom-gradient p-10  rounded-[10px]'>
        <div className='mb-[20px]'>
          <label className='mr-1 text-black text-xl '>Sign in with</label>
        </div>
        <input
          className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded'
          type='text'
          placeholder='Email Address'
        />
        <input
          className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4'
          type='password'
          placeholder='Password'
        />
        <div className='mt-4 flex justify-between font-semibold text-sm'>
          <label className='flex text-slate-500 hover:text-slate-600 cursor-pointer'>
            <input className='mr-1' type='checkbox' />
            <span>Remember Me</span>
          </label>
          <a
            className='text-black  hover:underline hover:underline-offset-4'
            href='#'
          >
            Forgot Password?
          </a>
        </div>
        <div className='text-center md:text-left'>
          <button
            className='mt-4 bg-black font-bold hover:opacity-5 px-4 py-2 text-white uppercase rounded text-xs tracking-wider'
            type='submit'
          >
            Login
          </button>
        </div>

        <div className='my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-black after:mt-0.5 after:flex-1 after:border-t after:border-black'>
          <p className='mx-4 mb-0 text-center font-semibold text-slate-500'>
            Or
          </p>
        </div>
        <div className='text-center md:text-left'>
          <button
            type='button'
            className='mx-1 h-9 w-9  rounded-full bg-[#FFD300]/[92.3] hover:bg-[#8EFA6D]/[79.68] text-white shadow-[0_4px_9px_-4px_#3b71ca]'
          >
            <BiLogoFacebook
              size={20}
              className='text-black flex justify-center items-center w-full'
            />
          </button>
          <button
            type='button'
            className='inlne-block mx-1 h-9 w-9 rounded-full bg-[#FFD300]/[92.3] hover:bg-[#8EFA6D]/[79.68] uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]'
          >
            <FaGoogle
              size={20}
              className='flex justify-center text-black items-center w-full'
            />
          </button>
        </div>
        <div className='mt-4 font-semibold text-sm text-slate-500 text-center md:text-left'>
          Don&apos;t have an account?{' '}
          <a
            className='text-black  hover:underline hover:underline-offset-4'
            href='#'
          >
            Register
          </a>
        </div>
      </div>
    </section>
  )
}

export default LogIn
