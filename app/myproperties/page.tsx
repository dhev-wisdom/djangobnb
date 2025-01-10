import ContactButton from "@/app/components/ContactButton";
import PropertyList from "@/app/components/properties/PropertyList";
import Image from "next/image";

const MyPropertiesPage = () => {
    return (
        <main className="max-w-1500pxl mx-auto px-6 pb-6">
            <div className="pt-6 pb-2 ">
                <h1 className="my-6 text-2xl">My Properties Page</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 transition">
                    <PropertyList />
                </div>
            </div>
        </main>
    );
}

export default MyPropertiesPage;