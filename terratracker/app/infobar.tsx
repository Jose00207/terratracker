export default function InfoBar({ children: data }: any) {
    return (
        <div className="absolute top-0 right-0 max-h-screen w-64 overflow-y-scroll scrollbar-thin scrollbar-thumb-indigo-100">
            <p className="fixed text-lg  text-indigo-100 bg-black flex w-full">Recent Activity</p>
            <div className="bg-white/20 pt-7 rounded-lg shadow-md  ">
                {data.features.map((feature: any, index: number) => (
                    <div key={index} className="font-inter text-indigo-100 bg-black/20 p-2 rounded-sm mb-1">
                        <p className="text-sm">{feature.properties.place} - Mag: {feature.properties.mag}</p>
                    </div>
                ))}           
                </div>
        </div>
    )
}