import React from 'react'
import Saleone from "../assets/saleone.png"
import Saletwo from "../assets/saletwo.png"
import Salethree from "../assets/salethree.png"

const Saleitem = () => {
  return (
    <div className='py-10'>
       <container>
        <flex className="">
            <div className="flex justify-around">
                <div className="w-[48%]">
                <img src={Saleone} alt="saleone" />
                </div>
                <div className="w-[48%]">
                    <div className="">
                        <img src={Saletwo} alt="" />
                    </div>
                    <div className="pt-9">
                    <img src={Salethree} alt="" />
                    </div>
                </div>
            </div>

        </flex>
        </container>
    </div>
  )
}

export default Saleitem