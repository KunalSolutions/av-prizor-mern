import { FaHeadphones, FaShippingFast , FaTruck } from "react-icons/fa"

const Features = () => {
    return (
        <section className="py-12 bg-white">
            <div className="mx-auto max-w-5xl px-4">
                <div className="grid md:grid-cols-3 text-base font-sans text-black gap-8">
                    <div className="flex items-center space-x-4">
                        {/* free shipping */}
                        <div className="h-12 w-12 p-2.5 bg-sky-100 rounded-full items-center justify-center">
                            <FaTruck className="h-7 w-7 text-sky-600" />
                        </div>
                        <div>
                            <h3 className="">Free Shipping</h3>
                            <p className="text-black/80">On orders above 500</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* fast delivery */}
                        <div className="h-12 w-12 p-2.5 bg-rose-100 rounded-full items-center justify-center">
                            <FaShippingFast  className="h-7 w-7 text-rose-600" />
                        </div>
                        <div>
                            <h3>Fast Delivery</h3>
                            <p>Quick & reliable doorstep delivery</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        {/* 24hrs support */}
                        <div className="h-12 w-12 p-2.5 bg-amber-100 rounded-full items-center justify-center">
                            <FaHeadphones className="h-7 w-7 text-amber-600" />
                        </div>
                        <div>
                            <h3>24/7 Support</h3>
                            <p>Always here to assist you</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features