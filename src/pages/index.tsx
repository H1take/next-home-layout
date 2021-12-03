import type { NextPage } from "next";

import Head from "next/head";
import Image from "next/image";

import cryPicture from "../assets/img/cry.png";
import questionsPicture from "../assets/img/questions.png";
import workPicture from "../assets/img/work.png";
import lovelyPicture from "../assets/img/lovely.png";
import logo from "../assets/img/logo.svg";
import appStore from "../assets/img/appstoreDownload.png";
import googleStore from "../assets/img/googlestoreDownload.png";
import calculateCalories from "../assets/img/calculateCalories.jpg";
import dietPicture from "../assets/img/diet.jpg";
import arrow from "../assets/img/arrow.svg";

const Home: NextPage = () => {
	return (
		<div className="h-full">
			<Head>
				<title>Home layout</title>
			</Head>
			<main>
				<div className="container mx-auto h-full">
					<div className="grid justify-items-center divide-y divide-red-500 mt-10 text-red-500">
						<h1 className="text-4xl font-semibold sm:text-2xl">Мой здоровый рацион</h1>
						<h3 className="text-2xl sm:text-base">дневник питания и тренировок</h3>
					</div>
					<div className="flex flex-col my-auto items-center">
						<div className="flex justify-between mt-12 w-2/5">
							<div className="sm:w-24 sm:h-20">
								<Image
									src={questionsPicture}
									alt="women brooding"
									width={144}
									height={120}
								/>
							</div>
							<div className="w-72 h-16 sm:w-44 sm:h-96">
								<p className="text-2xl font-semibold sm:text-sm">
									Раньше получалось худеть легко и быстро, а сейчас нет?
								</p>
							</div>
						</div>
						<div className="flex justify-between mt-12 w-2/5">
							<div className="w-72 h-16">
								<p className="text-2xl font-semibold sm:text-sm">
									После диеты набираешь ещё больше?
								</p>
							</div>
							<div className="sm:w-24 sm:h-20">
								<Image
									src={cryPicture}
									alt="women cry"
									width={147}
									height={120}
								/>
							</div>
						</div>
						<div className="flex justify-between mt-12 w-2/5">
							<div className="">
								<Image
									src={lovelyPicture}
									alt="women lovely"
									width={146}
									height={120}
								/>
							</div>
							<div className="w-72 h-16">
								<p className="text-2xl font-semibold sm:text-sm">
									Но похудеть и оставаться стройной - это РЕАЛЬНО!
								</p>
							</div>
						</div>
						<div className="flex justify-between mt-12 w-2/5">
							<div className="w-72 h-16">
								<p className="text-2xl font-semibold sm:text-sm">
									После диеты набираешь ещё больше?
								</p>
							</div>
							<div className="">
								<Image
									src={workPicture}
									alt="women work"
									width={136}
									height={145}
								/>
							</div>
						</div>
					</div>
				</div>
			</main>
			<section className="bg-gray-100 w-full mt-10">
				<div className="container mx-auto">
					<div className="flex justify-center mb-8 pt-6">
						<Image src={logo} alt="logo" width={70} height={70} />
						<h1 className="text-2xl w-80 font-semibold text-red-500 ml-10">
							Установи приложение бесплатно прямо сейчас!
						</h1>
					</div>
					<div className="flex justify-center mr-10 pb-4">
						<div className="mr-10">
							<Image
								src={appStore}
								alt="app store download"
								width={210}
								height={62}
							/>
						</div>
						<div>
							<Image
								src={googleStore}
								alt="google store download"
								width={210}
								height={62}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full h-72 justify-center mt-10">
				<div className="container mx-auto justify-center flex">
					<div>
						<Image
							src={calculateCalories}
							alt="calculator calories"
							width={136}
							height={230}
						/>
					</div>
					<div className="ml-10 mt-10">
						<div className="w-72">
							<h1 className="text-blue-900 font-bold text-lg">
								ПОДСЧЁТ КАЛОРИЙ -
							</h1>
							<p className="font-bold ml-6">
								самый эффективный и популярный метод похудения
							</p>
						</div>
						<div className="w-72">
							<h1 className="text-blue-900 font-bold text-lg">ВСЕ ДИЕТЫ</h1>
							<p className="font-bold ml-6">работают на дефиците калорий</p>
						</div>
					</div>
				</div>
			</section>
			<section className="w-full bg-blue-400 h-1/3">
				<div className="flex justify-center pt-10">
					<p className="font-semibold text-xl">На основе этого мы разработали</p>
				</div>
				<div className="flex justify-center pt-6 pb-6">
					<h1 className="font-bold text-4xl text-white">СБАЛАНСИРОВАННУЮ МЕТОДИКУ</h1>
				</div>
        <div className="flex justify-center pb-6">
          <h1 className="font-bold text-4xl text-white">СНИЖЕНИЯ ВЕСА</h1>
        </div>
				<div className="flex justify-center">
					<Image
						src={dietPicture}
						alt="diet picture"
						width={450}
						height={273}
					/>
				</div>
				<div className="flex flex-col my-auto items-center mt-10 pb-8 -ml-10">
					<div className="flex content-center -ml-32">
						<Image src={arrow} alt="arrow" width={32} height={32} />
						<p className="ml-4 font-bold text-white text-xl">
							индивидуальные рекомендации
						</p>
					</div>
					<div className="flex content-center -ml-32">
						<Image src={arrow} alt="arrow" width={32} height={32} />
						<p className="ml-4 font-bold text-white text-xl">
							пошаговый интерактивный курс
						</p>
					</div>
					<div className="flex content-center -ml-2">
						<Image src={arrow} alt="arrow" width={32} height={32} />
						<p className="ml-4 font-bold text-white text-xl">
							максимально заряженный дневник питания
						</p>
					</div>
					<div className="flex content-center ml-4">
						<Image src={arrow} alt="arrow" width={32} height={32} />
						<p className="ml-4 font-bold text-white text-xl">
							уникальная диета, которую вы создадите сами
						</p>
					</div>
				</div>
			</section>
      <section className="w-full bg-red-500 h-28">
        <div className="flex justify-center pt-8">
          <button className="bg-white w-96 h-14 rounded-lg">
            <p className="text-lg font-semibold text-red-500">Начать бесплатный курс похудения</p>
          </button>
        </div>
      </section>
		</div>
	);
};

export default Home;
