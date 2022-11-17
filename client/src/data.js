import generateId from "./utils/generateId";
import { v4 as uuidv4 } from "uuid";

export const sliderItems = [
  {
    id: uuidv4(),
    img: "https://www.el-gal.co.il/wp-content/uploads/2018/06/Vitra_0256_copy-1.jpg",
    title: "POPULAR SALE",
    desc: "Do not compromise on quality! Get a 10% discount on the shower,bathroom cabinet and shower accessories",
    bg: "EEEEEE",
  },
  {
    id: uuidv4(),
    img: "https://www.el-gal.co.il/wp-content/uploads/2018/06/304_Versus_-_Bathroom_-_White-copy.jpg",
    title: "POPULAR SALE",
    desc: "Do not compromise on quality! Get a 10% discount on the shower,bathroom cabinet and shower accessories",
    bg: "EEEEEE",
  },
  {
    id: uuidv4(),
    img: "https://www.el-gal.co.il/wp-content/uploads/2018/06/Memoria_Elements_-_Set_02_-_01_Main_Set_Revised-1.jpg",
    title: "POPULAR SALE",
    desc: "Do not compromise on quality! Get a 10% discount on the shower,bathroom cabinet and shower accessories",
    bg: "EEEEEE",
  },
  {
    id: uuidv4(),
    img: "https://www.el-gal.co.il/wp-content/uploads/2018/06/439_Bern_-_Bathroom_Set_01_-_02_Ambiente.jpg",
    title: "POPULAR SALE",
    desc: "Do not compromise on quality! Get a 10% discount on the shower,bathroom cabinet and shower accessories",
    bg: "EEEEEE",
  },
];
export const categories = [
  {
    id: uuidv4(),
    img: "https://www.el-gal.co.il/wp-content/uploads/2018/06/eternity_x2-copy.jpg",
    title: "BATHROOM",
  },
  {
    id: uuidv4(),
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/07/A42557.jpg",
    title: "SINK FAUCET",
  },
  {
    id: uuidv4(),
    img: "https://www.el-gal.co.il/wp-content/uploads/2018/07/VitrA6286srevize.jpg",
    title: "BATHROOM SINK",
  },
];

export const populartitles = [
  {
    id: uuidv4(),
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/06/62570_sol.jpg",
  },
  {
    id: uuidv4(),
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/06/62582_1-1.jpg",
  },
  {
    id: uuidv4(),
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/06/64101.jpg",
  },
  {
    id: uuidv4(),
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/06/64079.jpg",
  },
  {
    id: uuidv4(),
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/07/64110.jpg",
  },
  {
    id: uuidv4(),
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/06/64041.jpg",
  },
];
export const CartProducts = [
  {
    id: uuidv4(),
    title: "Royal shower",
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/06/62570_sol.jpg",
    sizing: "200*120",
    price: "$10.00",
  },
  {
    id: uuidv4(),
    title: "Royal shower2",
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/06/62582_1-1.jpg",
    sizing: "180*140",
    price: "$12.00",
  },
  {
    id: uuidv4(),
    title: "Royal shower3",
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/06/64101.jpg",
    sizing: "110*80",
    price: "$13.00",
  },
  {
    id: uuidv4(),
    title: "Royal shower4",
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/06/64079.jpg",
    sizing: "310*220",
    price: "$14.00",
  },
  {
    id: uuidv4(),
    title: "Royal shower5",
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/07/64110.jpg",
    sizing: "145*92",
    price: "$15.00",
  },
  {
    id: uuidv4(),
    title: "Royal shower",
    img: "https://www.el-gal.co.il/wp-content/uploads/2019/06/64041.jpg",
    sizing: "100*50",
    price: "$16.00",
  },
];

export const itemsWithId = generateId(CartProducts);
