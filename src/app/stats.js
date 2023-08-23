export default function Stats() {
    return (  //main div includes position, line divider, color, & displaying elements in row
    <div className="flex flex-row relative px-[70vh] self-end items-center divide-x divide-slate-white">
            <div className="font-mulish px-9 text-white"> {/*space between line and text*/}
                <b className="text-xl">90 +</b>
                <p className="text-sm">Active<br></br>Residents</p>
            </div>
            <div className="font-mulish mb-4 px-8 text-white"> {/*space between line and text*/}
                <b className="text-xl">15 M +</b>
                <p className="text-sm">Alumni</p>
            </div>
    </div>
    );

}