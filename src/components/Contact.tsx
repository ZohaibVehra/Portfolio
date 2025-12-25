const Contact: React.FC = () => {
    return(
        <div id="contact">
            <h1 className="scale-y-110 mt-8 text-lg md:text-2xl text-gray-600 font-bold text-center">Lets Get in Touch!</h1>
            <div className="flex items-center justify-center">
                <div className="mt-2.5 h-1 w-[10%] md:w-[2.5%] bg-gray-600"/>
            </div>
            <p className="mt-3 text-md md:text-lg text-gray-600 font-semibold text-center">
               Open to new opportunities, collaborations, and conversations. Feel free to reach out if you’d like to connect!
            </p>
            <div className="flex items-center justify-center">
                <a href="mailto:zohaib.vehra@gmail.com">
                    <img
                    src="email.png"
                    className="mt-7 h-[50px] cursor-pointer"
                    />
                </a>
            </div>

            <p className="mb-12 mt-2 text-md md:text-lg text-gray-600 font-semibold text-center">
                <a
                    href="mailto:zohaib.vehra@gmail.com"
                    className="hover:underline hover:text-gray-800 transition"
                >
                    zohaib.vehra@gmail.com
                </a>
            </p>
        </div>
    )
}

export default Contact