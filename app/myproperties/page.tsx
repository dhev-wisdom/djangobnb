import ContactButton from "@/app/components/ContactButton";
import PropertyList from "@/app/components/properties/PropertyList";
import Image from "next/image";

const MyPropertiesPage = () => {
    return (
        <main className="max-w-1500pxl mx-auto px-6 pb-6">
            <div className="pt-6 pb-2 ">
                <h1 className="my-6 text-2xl">My MyPropertiesPage Page</h1>

                <div className="space-y-4">
                    <div className="p-5 rounded-xl grid grid-cols-1 md:grid-cols-4 shadow-md gap-4 border border-gray-300">
                        <div className="col-span-1">
                            <div className="relative overflow-hidden aspect-square rounded-xl">
                                <Image 
                                    fill
                                    src="/beach.jpg"
                                    className="hover:scale-110 object-cover transition w-full h-full"
                                    alt="Beach house"
                                />
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-3">
                            <h2 className="mb-4 text-xl">Property Name</h2>

                            <p className="mb-2"><strong>Check-in date:</strong>  14/12/2024</p>
                            <p className="mb-2"><strong>Check-out date:</strong>  21/12/2024</p>

                            <p className="mb-2"><strong>Number of nights:</strong>  7</p>
                            <p className="mb-2"><strong>Total price:</strong>  $820</p>

                            <div className="mt-6 bg-airbnb hover:bg-airbnb-dark text-white cursor-pointer inline-block p-4 rounded-xl">
                                Go to property
                            </div>
                        </div>
                    </div>

                    <div className="p-5 rounded-xl grid grid-cols-1 md:grid-cols-4 shadow-md gap-4 border border-gray-300">
                        <div className="col-span-1">
                            <div className="relative overflow-hidden aspect-square rounded-xl">
                                <Image 
                                    fill
                                    src="/beach.jpg"
                                    className="hover:scale-110 object-cover transition w-full h-full"
                                    alt="Beach house"
                                />
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-3">
                            <h2 className="mb-4 text-xl">Property Name</h2>

                            <p className="mb-2"><strong>Check-in date:</strong>  14/12/2024</p>
                            <p className="mb-2"><strong>Check-out date:</strong>  21/12/2024</p>

                            <p className="mb-2"><strong>Number of nights:</strong>  7</p>
                            <p className="mb-2"><strong>Total price:</strong>  $820</p>

                            <div className="mt-6 bg-airbnb hover:bg-airbnb-dark text-white cursor-pointer inline-block p-4 rounded-xl">
                                Go to property
                            </div>
                        </div>
                    </div>

                    <div className="p-5 rounded-xl grid grid-cols-1 md:grid-cols-4 shadow-md gap-4 border border-gray-300">
                        <div className="col-span-1">
                            <div className="relative overflow-hidden aspect-square rounded-xl">
                                <Image 
                                    fill
                                    src="/beach.jpg"
                                    className="hover:scale-110 object-cover transition w-full h-full"
                                    alt="Beach house"
                                />
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-3">
                            <h2 className="mb-4 text-xl">Property Name</h2>

                            <p className="mb-2"><strong>Check-in date:</strong>  14/12/2024</p>
                            <p className="mb-2"><strong>Check-out date:</strong>  21/12/2024</p>

                            <p className="mb-2"><strong>Number of nights:</strong>  7</p>
                            <p className="mb-2"><strong>Total price:</strong>  $820</p>

                            <div className="mt-6 bg-airbnb hover:bg-airbnb-dark text-white cursor-pointer inline-block p-4 rounded-xl">
                                Go to property
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MyPropertiesPage;