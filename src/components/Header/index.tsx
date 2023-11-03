export default function HeaderFlex() {
    return (
        <header className="relative min-h-screen w-full flex justify-center pt-12 sm:pt-0 lg:px-4 xl:px-0">
            <div className="absolute top-4 left-4">
                <h1 className="font-extrabold uppercase text-xs">Rafael Bezerra</h1>
            </div>
            <div className="w-full max-w-7xl sm:grid sm:grid-cols-2 gap-2 items-center px-4 sm:px-0">
                <div className="max-w-md flex flex-col gap-2 sm:gap-4">
                    <h1 className="text-3xl font-bold">Headline principal da página para apresentar oferta</h1>
                    <p className="text-zinc-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <a href="" className="py-2 bg-zinc-600 max-w-sm text-center rounded-md text-white font-medium ">Quero aproveitar</a>
                </div>
                <div className="flex justify-end mt-4 sm:mt-0">
                    <img src="./images/bg.png" alt="" className="w-full rounded-md" />
                </div>
            </div>
        </header>
    )
}