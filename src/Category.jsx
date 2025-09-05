import { CiBowlNoodles } from "react-icons/ci";
import { GiFullPizza, GiHamburger } from "react-icons/gi";
import { MdOutlineFoodBank, MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { TiThSmallOutline } from "react-icons/ti";

const Categories = [
  {
    id: 1,
    name: "All",
    icon: <TiThSmallOutline className="w-[50px] h-[50px] text-green-500" />,
  },
  {
    id: 2,
    name: "Breakfast",
    icon: (
      <MdOutlineFreeBreakfast className="w-[50px] h-[50px] text-green-500" />
    ),
  },
  {
    id: 3,
    name: "Soup",
    icon: <TbSoup className="w-[50px] h-[50px] text-green-500" />,
  },
  {
    id: 4,
    name: "Pasta",
    icon: <CiBowlNoodles className="w-[50px] h-[50px] text-green-500" />,
  },
  {
    id: 5,
    name: "Sandwidch",
    icon: <MdOutlineFoodBank className="w-[50px] h-[50px] text-green-500" />,
  },
  {
    id: 6,
    name: "Pizza",
    icon: <GiFullPizza className="w-[50px] h-[50px] text-green-500" />,
  },
  {
    id: 7,
    name: "Burger",
    icon: <GiHamburger className="w-[50px] h-[50px] text-green-500" />,
  },
];
export default Categories;
