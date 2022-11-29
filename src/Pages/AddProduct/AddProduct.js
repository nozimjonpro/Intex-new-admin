import { useState } from "react";
import Information from "./ProductPages/Infotmation/Infotmation";
import ProductImgs from "./ProductPages/ProductImages/Images";
import AtributPage from "./ProductPages/AtributPage/AtributPage";
import Line from "./../../BaseComponents/Line/Line";

export default function AddProduct() {
  const [info, setInfo] = useState(true);
  const [img, setImg] = useState(false);
  const [atr, setAtr] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [informationInfos, setInformationInfos] = useState();
  const [imgInfos, setImgsInfos] = useState();
  const [atrInfos, setAtrInfos] = useState();

  return (
    <div className="py-6 overflow-scroll h-[100vh] px-headerPaddingX">
      <div className="mb-6">
        <h2 className="font-bold text-2xl leading-8">Добавить продукт</h2>
      </div>
      <div className="bg-white p-6 rounded-xl">
        <ul className="flex items-center list-none space-x-4 w-addProductListWidth border-b-2">
          <li
            className={` font-medium relative cursor-pointer text-sm text-addProductLinks leading-lead pb-2.5`}
          >
            Информация
            {info ? <Line /> : ""}
          </li>
          <li
            className={`font-medium relative cursor-pointer text-sm text-addProductLinks leading-lead pb-2.5`}
          >
            Изображение
            {img ? <Line /> : ""}
          </li>
          <div className="relative">
            <li
              className={` font-medium relative cursor-pointer text-sm text-addProductLinks leading-lead pb-2.5`}
            >
              Атрибуты
              {atr ? <Line /> : ""}
            </li>
            {atr ? (
              <button
                className="absolute -right-[870px] top-1   text-sm text-[#109EF4]"
                onClick={() => setShowModal(true)}
              >
                + Добавить атрибуть
              </button>
            ) : (
              ""
            )}
          </div>
        </ul>
        <div>
          {info ? (
            <Information
              info={setInfo}
              setImg={setImg}
              firsInfos={setInformationInfos}
            />
          ) : (
            ""
          )}
          {img ? (
            <ProductImgs
              img={setImg}
              atrbut={setAtr}
              imgInfoRes={setImgsInfos}
            />
          ) : (
            ""
          )}
          {atr ? (
            <AtributPage
              thirdinfos={setAtrInfos}
              showModal={showModal}
              setShowModal={setShowModal}
              ownPage={setAtr}
              infoPageThis={setInfo}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
