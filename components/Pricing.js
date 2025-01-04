import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Выберите Подписку
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Выберите подходящую для вас подписку и используйте её с удовольствием и радостью!
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-16 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
  <ScrollAnimationWrapper className="flex justify-center">
    <motion.div
      variants={scrollAnimation}
      className="flex flex-col justify-center items-center rounded-xl py-4 px-6 lg:px-12 xl:px-20"
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <div className="p-4 lg:p-0 mt-6 lg:mt-16">
        <Image
          src="/assets/Free.png"
          width={145}
          height={165}
          alt="Пробная подписка"
        />
      </div>
      <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
        Пробная подписка
      </p>
      <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
        <li className="relative check custom-list my-2">
          Без Ограничений По трафику.
        </li>
        <li className="relative check custom-list my-2">
          Защищенное соединение
        </li>
        <li className="relative check custom-list my-2">
          Пробный период 1 сутки
        </li>
        <li className="relative check custom-list my-2">
          Работает на всех устройствах
        </li>
      </ul>
      <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
        <p className="text-2xl text-black-600 text-center mb-4">Бесплатно!</p>
        <ButtonPrimary
          onClick={() =>
            window.location.href = 'https://t.me/Hidefreedom_bot'
          }
        >
          Подключиться
        </ButtonPrimary>
      </div>
    </motion.div>
  </ScrollAnimationWrapper>
  <ScrollAnimationWrapper className="flex justify-center">
    <motion.div
      variants={scrollAnimation}
      className="flex flex-col justify-center items-center rounded-xl py-4 px-6 lg:px-12 xl:px-20"
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <div className="p-4 lg:p-0 mt-6 lg:mt-16">
        <Image
          src="/assets/Standard.png"
          width={145}
          height={165}
          alt="3 Месяца"
        />
      </div>
      <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
        3 Месяца
      </p>
      <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
        <li className="relative check custom-list my-2">
          Без Ограничений По трафику
        </li>
        <li className="relative check custom-list my-2">
          Защищенное соединение.
        </li>
        <li className="relative check custom-list my-2">
          3 Протокола Защиты Данных
        </li>
        <li className="relative check custom-list my-2">
          Работает на всех устройствах
        </li>
      </ul>
      <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
        <p className="text-2xl text-black-600 text-center mb-4">
          90 Р <span className="text-black-500">/ мес</span>
        </p>
        <ButtonPrimary
          onClick={() =>
            window.location.href = 'https://t.me/Hidefreedom_bot'
          }
        >
          Подключиться
        </ButtonPrimary>
      </div>
    </motion.div>
  </ScrollAnimationWrapper>
  <ScrollAnimationWrapper className="flex justify-center">
    <motion.div
      variants={scrollAnimation}
      className="flex flex-col justify-center items-center rounded-xl py-4 px-6 lg:px-12 xl:px-20"
      whileHover={{
        scale: 1.1,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <div className="p-4 lg:p-0 mt-6 lg:mt-16">
        <Image
          src="/assets/Premium.png"
          width={145}
          height={165}
          alt="12 Месяцев"
        />
      </div>
      <p className="text-lg text-black-600 font-medium capitalize my-2 sm:my-7">
        12 Месяцев
      </p>
      <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
        <li className="relative check custom-list my-2">
          Без Ограничений По трафику
        </li>
        <li className="relative check custom-list my-2">
          Защищенное соединение.
        </li>
        <li className="relative check custom-list my-2">
          3 Протокола Защиты Данных
        </li>
        <li className="relative check custom-list my-2">
          Работает на всех устройствах
        </li>
        <li className="relative check custom-list my-2">Скидка 30%</li>
      </ul>
      <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
        <p className="text-2xl text-black-600 text-center mb-4">
          66 руб <span className="text-black-500">/ мес</span>
        </p>
        <ButtonPrimary
          onClick={() =>
            window.location.href = 'https://t.me/Hidefreedom_bot'
          }
        >
          Подключиться
        </ButtonPrimary>
      </div>
    </motion.div>
  </ScrollAnimationWrapper>
</div>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              Защищенный и быстрый VPN{" "}
            </motion.h3>
            <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
              Используйте VPN безопасно, где бы вы не находились!
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}> 
              <Maps className="w-full h-auto" />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap" variants={scrollAnimation}>
              {/* <Netflix className="h-18 w-auto" /> */}
              <img
                src="/assets/Icon/amazon.png"
                className="h-14 w-auto mt-4 lg:mt-2"
                alt=""
              />
              <img
                src="/assets/Icon/netflix.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/reddit.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/discord.png"
                className="h-14 w-auto mt-2 lg:mt-0"
                alt=""
              />
              <img
                src="/assets/Icon/spotify.png"
                className="h-12 w-auto mt-2 lg:mt-0"
                alt=""
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Более 300 Довольных Пользователей{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Это истории наших клиентов, которые с большим удовольствием присоединились к нам, используя наш потрясающий VPN.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Подключиться сейчас для  <br /> Дополнительных скидок!
                  </h5>
                  <p>Подключтайтесь и наслаждайтесь интернетом без ограничений.</p>
                </div>
                <ButtonPrimary onClick={() => window.location.href = 'https://t.me/Hidefreedom_bot'}>Подключиться</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
                ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
