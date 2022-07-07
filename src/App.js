import "./App.css";
import Navigation from "./navigation";
import Header from "./header";
import { useState } from "react";
import Rating from "./rating";

function App() {
  const [cartValue,setCartValue]= useState(0);
  const [toggle1,setToggle1]= useState(false);
  const [toggle2,setToggle2]= useState(false);
  const [toggle3,setToggle3]= useState(false);
  const [toggle4,setToggle4]= useState(false);
  const [toggle5,setToggle5]= useState(false);
  const [toggle6,setToggle6]= useState(false);
  const [toggle7,setToggle7]= useState(false);
  const [toggle8,setToggle8]= useState(false);
  return (
    <div>
      <Navigation data={{cartValue:cartValue}}/>
      <Header />

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">iphone 13 pro</h5>
                                    {/* <!-- Product price--> */}
                                    Rs. 1,37,000
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                  <Rating />
                                  {
                                    toggle1?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue-1)
                                      setToggle1((e)=>!e)
                                    }}>Remove</button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle1((e)=>!e)
                                    }}>Add to cart</button>
                                    }
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">iphone 13 pro max</h5>
                                    {/* <!-- Product price--> */}
                                    Rs. 1,40,000
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                <Rating />
                                  {
                                    toggle2?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue-1)
                                      setToggle2((e)=>!e)
                                    }}>Remove</button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle2((e)=>!e)
                                    }}>Add to cart</button>
                                    }
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">iphone 13 mini</h5>
                                    {/* <!-- Product price--> */}
                                    Rs. 77,000
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                <Rating />
                                  {
                                    toggle3?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue-1)
                                      setToggle3((e)=>!e)
                                    }}>Remove</button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle3((e)=>!e)
                                    }}>Add to cart</button>
                                    }
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">iphone 12 pro</h5>
                                    {/* <!-- Product price--> */}
                                    Rs. 85,000
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                <Rating />
                                  {
                                    toggle4?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue-1)
                                      setToggle4((e)=>!e)
                                    }}>Remove</button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle4((e)=>!e)
                                    }}>Add to cart</button>
                                    }
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">iphone 12 mini</h5>
                                    {/* <!-- Product price--> */}
                                    Rs. 55,000
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                <Rating />
                                  {
                                    toggle5?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue-1)
                                      setToggle5((e)=>!e)
                                    }}>Remove</button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle5((e)=>!e)
                                    }}>Add to cart</button>
                                    }
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">iphone 11 pro</h5>
                                    {/* <!-- Product price--> */}
                                    Rs. 60,000
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                <Rating />
                                  {
                                    toggle6?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue-1)
                                      setToggle6((e)=>!e)
                                    }}>Remove</button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle6((e)=>!e)
                                    }}>Add to cart</button>
                                    }
                                  </div>
                            </div>
                        </div>
                    </div><div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">iphone 11 mini</h5>
                                    {/* <!-- Product price--> */}
                                    Rs. 65,000
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                <Rating />
                                  {
                                    toggle7?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue-1)
                                      setToggle7((e)=>!e)
                                    }}>Remove</button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle7((e)=>!e)
                                    }}>Add to cart</button>
                                    }
                                  </div>
                            </div>
                        </div>
                    </div><div className="col mb-5">
                        <div className="card h-100">
                            {/* <!-- Product image--> */}
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            {/* <!-- Product details--> */}
                            <div className="card-body p-4">
                                <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">iphone XR</h5>
                                    {/* <!-- Product price--> */}
                                    Rs. 49,000
                                </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                <Rating />
                                  {
                                    toggle8?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue-1)
                                      setToggle8((e)=>!e)
                                    }}>Remove</button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                      setCartValue(cartValue+1)
                                      setToggle8((e)=>!e)
                                    }}>Add to cart</button>
                                    }
                                  </div>
                            </div>
                        </div>
                    </div>
          </div>
        </div>
      </section>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
