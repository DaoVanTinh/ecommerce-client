import React, { useEffect, useState } from "react";
import NotificationBar from "../componets/Notificationbar";
import NavigationBar from "../componets/NavigationBar";
import Countdown from "../componets/Countdown";
import Value from "../componets/Value";
import Paste from "../assets/paste.png";
import Brandlogo1 from "../assets/brandlogo1.png";
import Brandlogo2 from "../assets/brandlogo2.png";
import Brandlogo3 from "../assets/brandlogo3.png";
import Brandlogo4 from "../assets/brandlogo4.png";
import Brandlogo5 from "../assets/brandlogo5.png";
import Brandlogo6 from "../assets/brandlogo6.png";
import Contact1 from "../assets/contact1.png";
import Contact2 from "../assets/contact2.png";
import Contact3 from "../assets/contact3.png";
import Contact4 from "../assets/contact4.png";
import BannerImage from "../assets/banner.png";
import Newsletter from "../assets/newsletter.png";
import Slider from "react-slick";
import axios from "axios";
import Headband from "../assets/headband.png";
import Accessories from "../assets/accessories.png";
import Earbuds from "../assets/earbuds.png";
import { ArrowRight } from "lucide-react";
import { List, Card } from "antd";
import { useNavigate } from "react-router-dom";
import Footer from "../componets/Footer";

const { Meta } = Card;

function Home() {
  const [newProducts, setNewProducts] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/new")
      .then((res) => setNewProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products/random")
      .then((res) => setRandomProducts(res.data))
      .catch((err) => console.error(err));
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
  };
  return (
    <div>
      <NotificationBar />
      <NavigationBar />
      <div className="hero-section relative w-full">
        <div className="w-full">
          <img src={Paste} alt="Paste" className="w-full h-full object-cover" />
        </div>
        <div
          className="w-[538px] h-auto absolute top-1/2 right-[30px] transform -translate-y-1/2 
                flex flex-col items-start justify-center text-black space-y-6"
        >
          <h1 className="text-[48px] font-semibold leading-tight mb-2">
            Đắm chìm trong <span className="text-[#377DFF]">âm thanh</span> sống
            động.
          </h1>
          <p className="text-[18px] font-normal text-gray-700">
            Trải nghiệm âm nhạc như chưa bao giờ có trước đây.
          </p>
          <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition cursor-pointer">
            Mua sắm ngay
          </button>
        </div>
      </div>
      <div className=" brand-logo ml-[160px] mr-[160px] flex justify-around pt-10 pb-10">
        <div>
          <img src={Brandlogo1} alt="Brandlogo1" />
        </div>
        <div>
          <img src={Brandlogo2} alt="Brandlogo2" />
        </div>
        <div>
          <img src={Brandlogo3} alt="Brandlogo3" />
        </div>
        <div>
          <img src={Brandlogo4} alt="Brandlogo4" />
        </div>
        <div>
          <img src={Brandlogo5} alt="Brandlogo5" />
        </div>
        <div>
          <img src={Brandlogo6} alt="Brandlogo6" />
        </div>
      </div>
      <div className="product-carousel ml-[160px] mr-[160px]">
        <h1 className="font-medium text-[40px] mb-12">Sản phẩm mới</h1>
        <Slider {...settings}>
          {Array.isArray(newProducts) && newProducts.length > 0 ? (
            newProducts.map((newProducts) => (
              <div key={newProducts._id} className="px-3">
                <img
                  src={newProducts.image}
                  alt={newProducts.name}
                  className="w-full h-52 object-cover"
                />
                <h3 className="mt-2 text-lg font-medium">{newProducts.name}</h3>
                <p className="text-sm text-gray-600">
                  {newProducts.description}
                </p>
                <p className="mt-1 font-semibold">
                  Price: ${newProducts.price}
                </p>
              </div>
            ))
          ) : (
            <p>Đang tải sản phẩm...</p>
          )}
        </Slider>
      </div>
      <div className="banner-grid ml-[160px] mr-[160px]">
        <h1 className="font-medium text-[40px] mb-12 mt-12">
          Sản phẩm theo chủ đề
        </h1>
        <div className="grid grid-cols-2 gap-6">
          <div className="w-full h-full relative">
            <img
              src={Headband}
              alt="Headband Large"
              className="w-full h-full object-cover"
            />
            <div className="absolute left-12 bottom-12 flex flex-col items-start justify-center text-black space-y-3">
              <span className="text-[34px] font-medium">Headband</span>
              <span className="flex text-[16px] font-medium items-center justify-center underline decoration-1 cursor-pointer">
                Vào bộ sưu tập <ArrowRight className="ml-1" size={20} />
              </span>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-6">
            <div className="w-full h-full relative">
              <img
                src={Accessories}
                alt="Accessories"
                className="w-full h-full object-cover"
              />
              <div className="absolute left-8 bottom-10 flex flex-col items-start justify-center text-black space-y-3">
                <span className="text-[34px] font-medium">Accessories</span>
                <span className="flex text-[16px] font-medium items-center justify-center underline decoration-1 cursor-pointer">
                  Vào bộ sưu tập <ArrowRight className="ml-1" size={20} />
                </span>
              </div>
            </div>
            <div className="w-full h-full relative">
              <img
                src={Earbuds}
                alt="Earbuds"
                className="w-full h-full object-cover"
              />
              <div className="absolute left-8 bottom-10 flex flex-col items-start justify-center text-black space-y-3">
                <span className="text-[34px] font-medium">Earbuds</span>
                <span className="flex text-[16px] font-medium items-center justify-center underline decoration-1 cursor-pointer">
                  Vào bộ sưu tập <ArrowRight className="ml-1" size={20} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-carousel ml-[160px] mr-[160px]">
        <h1 className="font-medium text-[40px] mb-12 mt-12">
          Bạn có thể thích
        </h1>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={randomProducts}
          renderItem={(randomProducts) => (
            <List.Item>
              <Card
                hoverable
                cover={
                  <img
                    alt={randomProducts.name}
                    src={randomProducts.image}
                    style={{ height: 200, objectFit: "cover" }}
                  />
                }
              >
                <Meta
                  title={randomProducts.name}
                  description={`$${randomProducts.price}`}
                />
              </Card>
            </List.Item>
          )}
        />
      </div>
      <div className="flex w-full h-screen mt-[100px]">
        <div className="flex-1 h-full">
          <img
            src={BannerImage}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 h-full flex flex-col justify-center bg-[#FFAB00]/40 pl-18">
          <div>
            <h1 className="text-[16px] font-bold text-[#377DFF] mb-4">
              Khuyến mãi
            </h1>
            <p className="text-[40px] font-medium text-black mb-4">
              Nhanh lên! Giảm giá 40%
            </p>
            <p className="text-[20px] font-normal text-black mb-6">
              Hàng nghìn sản phẩm đang chờ đón bạn.
            </p>
          </div>
          <Countdown targetDate="2025-09-15T00:00:00" />
        </div>
      </div>
      <Value />
      <div className="facebook-newfeed ml-[160px] mr-[160px] mt-20">
        <div className="flex flex-col items-center justify-center mb-10">
          <p className="text-[16px] font-bold text-[#6C7275] mb-4">
            Bảng tin tức
          </p>
          <p className="text-[40px] font-medium text-black mb-4">Facebook</p>
          <p className="text-[20px] font-normal text-black mb-6">
            Theo dõi chúng tôi trên mạng xã hội để nhận thêm ưu đãi và khuyến
            mãi.
          </p>
          <a
            className="text-[20px] font-medium text-[#6C7275] underline"
            href="https://www.facebook.com/aovantinh.59016"
          >
            https://www.facebook.com/aovantinh.59016
          </a>
        </div>
        <div className="flex justify-between gap-6 mb-10">
          <div>
            <img src={Contact1} alt="Contact 1" />
          </div>
          <div>
            <img src={Contact2} alt="Contact 2" />
          </div>
          <div>
            <img src={Contact3} alt="Contact 3" />
          </div>
          <div>
            <img src={Contact4} alt="Contact 4" />
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="relative">
          <img className="w-full" src={Newsletter} alt="Newsletter" />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-[40px] font-medium mb-2">
              Tham gia bản tin của chúng tôi
            </p>
            <p className="text-[18px] font-normal mb-8">
              Đăng ký tài khoản để nhận ưu đãi, sản phẩm mới và khuyến mãi.
            </p>
            <button
              className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Đăng ký ngay
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
