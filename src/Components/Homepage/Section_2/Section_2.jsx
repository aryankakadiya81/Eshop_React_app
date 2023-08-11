import React, { useContext } from 'react';
import "./Section_2.css";
import { Link, Outlet } from 'react-router-dom';
import { Item } from '../../../App';



const Section_2 = () => {

  let { Cart, Wish } = useContext(Item);

  return (
    <>
      <div className='container-2xl mx-auto mt-20'>
        <div className='w-10/12 mx-auto'>
          <div className='flex justify-center'>
            <div className='container'>

              <div className='flex justify-between'>
                <h1 className='font-bold border-0 border-custom-pink border-l-4 text-4xl pl-5'>Popular Product</h1>
                <div>
                  <Link to='' className='ml-6'>Top Rated</Link>
                  <Link to='Best_Selling' className='ml-6'>Best Selling</Link>
                  <Link to='Latest_Product' className='ml-6'>Latest Product</Link>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
      <Outlet />



    </>


  )
}

export default Section_2
// import aset_11 from "../../../assets/asset11.jpeg"

// import aset_17 from "../../../assets/asset 17.jpeg"
// import aset_23 from "../../../assets/asset 23.jpeg"
// import aset_29 from "../../../assets/asset 29.jpeg"
// import aset_35 from "../../../assets/asset 35.jpeg"
// import aset_41 from "../../../assets/asset 41.jpeg"
// import aset_47 from "../../../assets/asset 47.jpeg"
// import aset_53 from "../../../assets/asset 53.jpeg"
// import aset_59 from "../../../assets/asset 59.jpeg"
// import aset_65 from "../../../assets/asset 65.jpeg"
// import aset_75 from "../../../assets/asset 75.jpeg"
// import aset_77 from "../../../assets/asset 77.jpeg"