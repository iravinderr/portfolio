import React from 'react'

export default function SkillCard({imageUrl, skillName}) {
  return (
    <div className="h-[170px] w-[130px] bg-white flex flex-col justify-center items-center cursor-pointer">
        <img src={imageUrl} alt={skillName} />
        <div>{skillName}</div>
    </div>
  )
}