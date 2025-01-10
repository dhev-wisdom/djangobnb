import ContactButton from "@/app/components/ContactButton";
import PropertyList from "@/app/components/properties/PropertyList";
import Image from "next/image";

const LandlordDetailPage = () => {
    return (
        <main className="max-w-1500pxl mx-auto px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap">
                <aside className="col-span-1 mb-4">
                    <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
                        <Image 
                        src="/profile-pic.jpg"
                        width={200}
                        height={200}
                        alt="Landlord name"
                        className="rounded-full" />

                        <h1 className="pt-6 text-2xl">Landlord Name</h1>

                        <ContactButton />
                    </div>
                </aside>

                <div className="col-span-3 pl-0 md:pl-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 transition">
                        <PropertyList />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LandlordDetailPage;