import Image from "next/image";
import ReservationSideBar from "./ReservationSideBar";

const PropertyDetailPage = () => {
    return (
        <main className="max-w-1500pxl mx-auto px-6 pb-6">
            <div className="mb-4 w-full h-[64vh] overflow-hidden rounded-xl relative">
                <Image 
                    fill 
                    src="/beach.jpg"
                    sizes="(max-width: 768px) 768px, (max-wdith: 1200px) 768px, 768px"
                    className="object-cover h-full w-full" 
                    alt="Beach House" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property name</h1>
                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 2 bedrooms - 1 bathroom
                    </span>

                    <hr />

                    <div className="py-6 flex items-center space-x-4">
                        <Image 
                            src="/profile-pic.jpg"
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="The user name"
                        />
                        <p className="s"><strong>Jane Doe is your host</strong></p>
                    </div>

                    <hr />

                    <p className="mt-6">
                        lorem-ipsum50fmgdhkgkhkgmhmgh gtnkh thkbtyh tvyjt egt tg
                        thrtjrbt grthgr tgrt g5 etgr tg4 frfw 4ra rif4 r
                        lorem-ipsum50fmgdhkgkhkgmhmgh gtnkh thkbtyh tvyjt egt tg
                        thrtjrbt grthgr tgrt g5 etgr tg4 frfw 4ra rif4 r
                        lorem-ipsum50fmgdhkgkhkgmhmgh gtnkh thkbtyh tvyjt egt tg
                        thrtjrbt grthgr tgrt g5 etgr tg4 frfw 4ra rif4 r
                    </p>
                </div>
                
                
                <ReservationSideBar />

            </div>
        </main>
    );
}

export default PropertyDetailPage;