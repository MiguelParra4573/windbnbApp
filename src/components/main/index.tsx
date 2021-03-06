import React from "react";
import { useSelector } from "react-redux";

import { StayReduxCombinerState } from "../../state/reducers/filterStayReducer";

import { BedCount, Image, NoData, Rating, StayType, SuperHost, Title, } from "./StayComponent/index";

const StayDataComponent = () => {
  const stayData = useSelector<StayReduxCombinerState,StayReduxCombinerState["stay"]["stayData"]> ((state) => state.stay.stayData);

  if (stayData.length)
    return (
      <div className="grid justify-center gap-8 mt-8 lg:grid-cols-3 sm:grid-cols-2">
        {
          stayData.map((data, index) => (
            <div className="space-y-5" key={index}>
              <Image
                url={data.photo}
                altData={`${data.city.toLowerCase()}_${data.country.toLowerCase()}`}
              />
              <div className="px-1 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                    <SuperHost isSuperHostAvailable={data.superHost} />
                    <div className="flex items-center gap-x-0.5">
                      <StayType stayType={data.type} />
                      <BedCount bedCount={data.beds} />
                    </div>
                  </div>
                  <Rating rating={data.rating} />
                </div>
                <Title title={data.title} />
              </div>
            </div>
            )
          )
        }
      </div>
    );
  else return <NoData />;
};

const MainSection: React.FC = () => (
  <main className="p-4 space-y-12 sm:p-6 md:p-8 lg:py-8 lg:px-10 xl:px-12 2xl:px-14">
    <h1 className="text-lg font-bold md:text-xl xl:text-2xl font-montserrat">
      Stays in Finland
    </h1>
    <StayDataComponent />
  </main>
);

export default MainSection;
