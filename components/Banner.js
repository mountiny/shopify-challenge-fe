
const Banner = ({ show, children, ...rest }) => {
  return (
    <div 
      className={`fixed top-0 left-1/2 -translate-x-2/4 transform px-4 py-4 w-full text-center font-bold max-w-4xl bg-red text-primary rounded-lg ease-my-curve transition-transform duration-300 cursor-pointer
      ${show ? 'translate-y-4' : '-translate-y-36'}`}
      {...rest}
      >
      {children}
    </div>
  )
}

export default Banner;