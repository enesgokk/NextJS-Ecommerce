import Header from "../../components/Header";
import Image from "next/image"

function Checkout() {
	return (
		<div className="gray-1">
			<Header/>
			
			<main className="lg:flex max-w-screen-2xl mx-auto">
				{/*Left*/}
				<div className="flex-grow m-5 shadow-sm">
					<Image
					src="https://links.papareact.com/ikj"
					width={1020}
					height={250}
					objectFit="contain"
					/>
				

					<div className="flex flex-col p-4 space-y-10 bg-white">
						<h1 className="text-3xl border-b pb-4">Your Shopping Basket</h1>
					</div>
				</div>

				{/*Right*/}
			</main>
		</div>
	)
}

export default Checkout