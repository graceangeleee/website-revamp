export default function Sidebar() {
    return (
        <div className="h-[80vh] flex flex-col min-v-screen justify-center self-start relative overflow-hidden  p-3 border-r-2">
            <div className="flex flex-col justify-between h-[45vh] rotate-180 space-y-20">
                {/* <p className="text-xs  rotate-90 font-mulish font-medium ">Facebook</p>
                <p className="text-xs mt-4 rotate-90 font-mulish font-medium">Twitter</p>
                <p className="text-xs  rotate-90 font-mulish font-medium">Instagram</p> */}
            
            {/* uncomment when background image is added */}
            <p className="text-xs text-white mb-2 rotate-90 font-mulish font-medium">Facebook</p>
            <p className="text-xs text-white mb-2 rotate-90 font-mulish font-medium">Twitter</p>
            <p className="text-xs text-white mb-2 rotate-90 font-mulish font-medium">Instagram</p>
            </div>
            
        </div>
    );
}
