import React from "react";
import ThreeDotsSvg from "../../Assets/Images/ProductsImgs/threedots.svg";
import TableHeader from "../../components/TableHeader/TableHeader";
import TableRow from "../../components/TableRow/TableRow";
import LimitSelect from "../../components/LimitSelect/LimitSelect";

export default function Products() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://intex-shop-production.up.railway.app/api/products/getAll?page=0&limit=10"
    )
      .then((res) => res.json())
      .then((data) => setData(data.result));
  }, []);

  return (
    <div className=" bg-white border-b  rounded-b-xl">
      <div className="table-scroll overflow-x-scroll pb-2.5 bg-white">
        <table className="w-full">
          <thead className="bg-[#f2f2f2]">
            <TableRow>
              <TableHeader styles="w-11 pr-3 justify-center">
                <input className="" type="checkbox" />
              </TableHeader>
              <TableHeader styles="w-[66px]" sortIcon={true}>
                ID
              </TableHeader>
              <TableHeader styles="w-[300px]" sortIcon={true}>
                Название товара
              </TableHeader>
              <TableHeader styles="w-[153px]">Цена</TableHeader>
              <TableHeader styles="w-[153px]">Цена со скидкой</TableHeader>
              <TableHeader styles="w-[99px]" sortIcon={true}>
                Кол-во
              </TableHeader>
              <TableHeader styles="w-[147px]">Размер</TableHeader>
              <TableHeader styles="w-[118px]">Объем</TableHeader>
              <TableHeader styles="w-[140px]">Статус</TableHeader>
              <TableHeader styles="w-[95px] pr-3 justify-center">
                <button>
                  <img src={ThreeDotsSvg} alt="three dots icon" />
                </button>
              </TableHeader>
            </TableRow>
          </thead>
          <tbody className="bg-white">
            {data.length ? (
              data.map((item) => {
                return (
                  <TableRow styles="py-0" data={item} key={item.id}></TableRow>
                );
              })
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex border-t mt-2.5 p-3 justify-between items-center pr-5">
        <div className="flex">
          <LimitSelect></LimitSelect>
          <span className="m-0 mr-3 text-paginationColor text-sm">
            Элементы на каждой странице
          </span>
          <span className="text-sm text-paginationButtonColor">
            1-10 из 200 предметов
          </span>
        </div>
        <div className="flex items-center">
          <LimitSelect></LimitSelect>
          <span className="mr-3.5 text-sm text-paginationButtonColor">
            из 44 страниц
          </span>
          <span className="flex">
            <button className="mr-4 text-paginationButtonColor">&#60;</button>
            <button className=" text-paginationButtonColor">&#62;</button>
          </span>
        </div>
      </div>
    </div>
  );
}