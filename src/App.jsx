import axios from "axios";



function App() {

  const handlePayment = async (event)=>{
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const card_holder = form.card_holder.value;
  const billing_address = form.billing_address.value;
  const billing_state = form.billing_state.value;
  const price = form.price.value;
  const currentPrice = parseInt(price)


  const UserInformation = {email,card_holder,billing_address,billing_state,currentPrice}


  try{
    const {data} = await axios.post('http://localhost:500/create-payment',UserInformation)
    const currentData = data.url

    if(currentData){
      window.location.replace(currentData)
    }

  }
  catch(erorr){
     console.log(erorr)
  }









  }



  return (
    <>
    <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
</div>
<div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
  <div className="px-4 pt-8">
    <p className="text-xl font-medium">Order Summary</p>
    <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      <div className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
          <span className="float-right text-gray-400">42EU - 8.5US</span>
          <p className="text-lg font-bold">$138.99</p>
        </div>
      </div>
      <div className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
          <span className="float-right text-gray-400">42EU - 8.5US</span>
          <p className="mt-auto text-lg font-bold">$238.99</p>
        </div>
      </div>
    </div>

    <p className="mt-8 text-lg font-medium">Shipping Methods</p>
    <form className="mt-5 grid gap-6">
      <div className="relative">
        <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" >
          <img className="w-14 object-contain" src="/images/naorrAeygcJzX0SyNI4Y0.png" alt="" />
          <div className="ml-5">
            <span className="mt-2 font-semibold">Fedex Delivery</span>
            <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
      <div className="relative">
        <input className="peer hidden" id="radio_2" type="radio" name="radio" checked />
        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
        <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" >
          <img className="w-14 object-contain" src="/images/oG8xsl3xsOkwkMsrLGKM4.png" alt="" />
          <div className="ml-5">
            <span className="mt-2 font-semibold">Fedex Delivery</span>
            <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
          </div>
        </label>
      </div>
    </form>
  </div>

  <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p className="text-xl font-medium">Payment Details</p>
    <p className="text-gray-400">Complete your order by providing your payment details.</p>
    <form onSubmit={handlePayment}>
    <div className="">
      <label  className="mt-4 mb-2 block text-sm font-medium">Email</label>
      <div className="relative">
        <input type="email" id="email" name="email" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
        </div>
      </div>
      <label  className="mt-4 mb-2 block text-sm font-medium">Card Holder</label>
      <div className="relative">
        <input type="text" id="card-holder" name="card_holder" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
        <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
            <path  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
          </svg>
        </div>
      </div>
      <label  className="mt-4 mb-2 block text-sm font-medium">Price</label>
      <input className="p-2 rounded-md" type="number" name="price" placeholder="Enter youer price " id="" />
      
      <label  className="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
      <div className="flex flex-col sm:flex-row">
        <div className="relative flex-shrink-0 sm:w-7/12">
          <input type="text" id="billing-address" name="billing_address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />
        </div>
        <select type="text" name="billing_state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
          <option value="BDT">BDT</option>
          <option value="Dollor">Dollor</option>
          <option value="Ur">Ur</option>
          <option value="Ropi">Ropi</option>
        </select>
      </div>


      
    </div>
    <button type="submit"  className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>

    </form>
  </div>
</div>
    </>
  )
}

export default App
