import ImageComponent from "@/components/common/ImageComponent.tsx";
import React from "react";

const Loading = () => {
  return (
    <div className=" flex flex-col items-center gap-12 justify-center min-h-[calc(100vh-150px)]">
      <div className="relative">
        <ImageComponent
          src="/assets/images/fan2.svg"
          figClassName=""
          className="rotate"
          width={210}
          height={210}
          alt=""
          priority
        />
        <ImageComponent
          src="/assets/images/rfc1.svg"
          fill
          figClassName="h-14 w-14 !absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          alt=""
        />
      </div>
      <div className="flex items-center">
        <h1 className="text-white text-[32px] font-medium">Loading</h1>
        <div className="flex items-center gap-1 ml-2.5 mt-2">
          <div className="w-2.5 h-2.5 bg-white rounded-full animate-blink delay-0"></div>
          <div className="w-2.5 h-2.5 bg-white rounded-full animate-blink delay-200"></div>
          <div className="w-2.5 h-2.5 bg-white rounded-full animate-blink delay-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
