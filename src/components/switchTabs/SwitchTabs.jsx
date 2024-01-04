import "./style.scss"
import React, {useState} from 'react'

const SwitchTabs = ({data, onTabChange}) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [left, setLeft] = useState(0);

    const activeTab = (tab, index) => {
        setLeft(index * 100);
        setTimeout(() => {
            setSelectedTab(index);
        }, 400);
        onTabChange(index,tab);
    }


  return (
    <div className="switchingTabs">
      {/* Switchtabs */}
      <div className="tabItems">
        {data.map((tab, index) => (
            <span key={index} className={`tabItem ${selectedTab ? "active" : ''}`} onClick={()=> activeTab(tab, index)}>
                {tab}
            </span>
        ))}
        <span className="movingBg" style={{left}}/>
      </div>
    </div>
  )
}

export default SwitchTabs
