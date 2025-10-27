import React from 'react'
import { Line, LineChart } from 'recharts';

export default function CardChart({ icon, color, title, value, coloricon, lineColor }) {
  const data = [
    { uv: 10 }, { uv: 30 }, { uv: 20 }, { uv: 40 }, { uv: 25 }, { uv: 35 }
  ];
  return (
    <div className={`rounded-xl p-5 shadow-md w-60 ${color} flex flex-col justify-between gap-5`}>
      <div className='flex items-center justify-between'>
        <div className={`inline-block p-3 rounded-lg ${coloricon} text-white shadow-md`}>
          {icon}
        </div>
        <div className='flex flex-col items-end'>
          <h6 className="mt-3 text-[14px] text-gray-700 font-medium">{title}</h6>
          <p className="text-[1rem] font-bold">{value}</p>
        </div>

      </div>

      <LineChart width={200} height={60} data={data}>
        <Line type="monotone" dataKey="uv" stroke={lineColor} strokeWidth={2} dot={false} />
      </LineChart>
    </div>
  )
}
