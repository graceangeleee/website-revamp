import Image
 from "next/image"
export default function Header(){

    return(
        <div className="flex fixed top-5 left-5 right-5 justify-between">
            <img src="/seal.png" alt="Seal" width={45}/>
            <div className="flex flex-row space-x-2 items-center mr-5">
                {/* <p className="font-mulish font-semibold text-sm">Menu</p>
                <Image src="/drawer.svg" width={50} height={9}/> */}
{/*             
                uncomment when bg is added */}
                <p className="font-mulish font-semibold text-sm text-white">Menu</p>
                <Image src="/drawer.svg" width={50} height={9}/>
                
            </div>
        </div>

    )
}
