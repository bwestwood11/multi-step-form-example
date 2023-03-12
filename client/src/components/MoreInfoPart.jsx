import React from 'react'

const MoreInfoPart = ({data, setData}) => {
  return (
    <div className="space-y-6">
      {/* Phone Number Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Phone Number
        </label>
        <input
        onChange={(e) => setData({...data, phone: e.target.value})}
        value={data.phone}
          type="text"
          id="firstName"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      {/* Favorite Food Section */}
      <div className="mt-1">
        <label className="block text-sm font-medium text-gray-700 pb-2">
          Favorite Food 
        </label>
        <input
      onChange={(e) => setData({...data, food: e.target.value})}
      value={data.food}
          type="text"
          id="lastName"
          className="block h-14 w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  )
}

export default MoreInfoPart