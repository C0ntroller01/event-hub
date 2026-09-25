import React from 'react'
interface PageHeaderProps {
    header?: string;
    subheader?: string;
}

function PageHeader({header, subheader}:PageHeaderProps) {
  return (
    <div className="flex flex-col gap-2 m-2">
        <h1 className="text-primary text-lg font-bold">{header}</h1>
        <h2 className="text-textGray text-sm">{subheader}</h2>
    </div>
  )
}

export default PageHeader