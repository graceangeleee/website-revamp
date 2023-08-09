export default function Header(){

    return(
        <div className="flex fixed top-5 left-5 right-5 justify-between">
            <img src="/seal.png" alt="Seal" width={45}/>
            <div className="flex flex-row space-x-2 items-center">
                <p className="font-mulish font-semibold text-sm">Menu</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>
                
                {/* uncomment when bg is added
                <p className="font-mulish font-semibold text-sm text-white">Menu</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 stroke-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg> */}
            </div>
        </div>

    )
}
