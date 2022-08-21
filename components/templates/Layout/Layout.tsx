import React from 'react'

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-w-screen min-h-screen bg-[#0A0A0A]">
      <div className="flex flex-row justify-between items-center py-[14px] px-6 gap-8 border-[#1F1F1F] border rounded-lg">
        <div className="flex flex-row items-center p-0 gap-2">
          <span className="text-xl bg-clip-text bg-[linear-gradient(#E2FF24,#24FE41)] text-transparent">
            {'</develoop>'}
          </span>
        </div>
      </div>
      {/* remove navbar size from content */}
      <div className="min-h-[calc(100vh - 100px)] bg-[#141414]"></div>
    </div>
  )
}
{
  /* <div className="" data-testid="test">
      {children}
    </div> */
}
