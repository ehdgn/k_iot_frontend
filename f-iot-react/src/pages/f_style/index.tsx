import ToggleSection from '@/components/ToggleSection'
import React from 'react'
import A_CSS from './A_CSS'
import B__Module from './B__Module'

function Index() {
  return (
    <div>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        === 리액트 스타일(Style) ===
      </h1>
      
      <ToggleSection title="1. 일반 CSS">
        <A_CSS />
      </ToggleSection>

      <ToggleSection title="1. Module CSS">
        <B__Module />
      </ToggleSection>
    </div>
  )
}

export default Index