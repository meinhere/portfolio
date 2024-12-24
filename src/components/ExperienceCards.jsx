import React from "react";

const ExperienceCards = ({item}) => {
	return (
		<div className="relative flex mb-12">
	        <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center absolute top-16">
	          <span className="text-xl">{item.icon}</span>
	        </div>
	        <div className="ml-20 p-6 bg-white shadow-md rounded-lg border border-gray-200">
	          <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
	          <p className="text-sm text-gray-600 font-medium">{item.institution}</p>
	          <p className="mt-2 text-gray-700 text-sm">
	            {item.desc}
	          </p>
	          <p className="mt-4 text-sm text-gray-500">{item.date}</p>
	        </div>
	     </div>
	)
}

export default ExperienceCards;