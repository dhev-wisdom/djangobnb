const ReservationSideBar = () => {
    return (
        <aside className="p-6 mt-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">$200 per night</h2>

            <div className="mb-4 border p-3 border-gray-400 rounded-xl">
                <label className="mb-2 block font-bold text-xs">Guests</label>
                <select className="w-full text-sm">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>

            <div className="w-full py-6 mb-4 text-center text-white bg-airbnb rounded-xl cursor-pointer hover:bg-airbnb-dark">Book</div>

            <div className="mb-4 flex justify-between align-center">
                <p>$200 * 4 nights</p>
                <p>$800</p>
            </div>

            <div className="mb-4 flex justify-between align-center">
                <p>Djangobnb fee</p>
                <p>$20</p>
            </div>

            <hr />

            <div className="mt-4 flex justify-between align-center">
                <p><strong>Total</strong></p>
                <p>$820</p>
            </div>
        </aside>
    )
}

export default ReservationSideBar;