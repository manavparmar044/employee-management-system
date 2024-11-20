import React from "react";

const DetailCard = ({ icon: Icon, text, count }) => {
  return (
    <div className="flex items-center space-x-4 bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 w-1/3">
      {/* Icon Section */}
      <div className="bg-slate-100 p-3 rounded-full">
        <Icon className="text-slate-500 w-6 h-6" />
      </div>
      {/* Text and Count Section */}
      <div>
        <p className="text-lg font-medium text-slate-700">{text}</p>
        <p className="text-2xl font-bold text-slate-900">{count}</p>
      </div>
    </div>
  );
};

export default DetailCard;
