import React from "react";
import Logo from "../assets/logo.png";
import { ChevronDown } from "lucide-react";
import { Search } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Handbag } from "lucide-react";

function NavigationBar() {
  return (
    <div className="flex justify-around pt-4 pb-4 bg-[#FFAB00]/64">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="flex gap-10 text-[#141718] text-sm font-medium items-center">
        <div>Trang chủ</div>
        <div className="flex items-center">
          Cửa hàng <ChevronDown size={18} />
        </div>
        <div className="flex items-center">
          Sản phẩm <ChevronDown size={18} />
        </div>
        <div>Liên hệ</div>
      </div>
      <div className="flex">
        <div className="flex items-center mr-4">
          <Search size={24} />
        </div>
        <div className="flex items-center mr-4">
          <div>
            <CircleUserRound size={24} />
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-1">
            <Handbag size={24} />
          </div>
          <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
            <span className="text-[#FFAB00] text-xs font-bold">2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
