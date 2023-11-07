import { useState } from 'react';
import './Tooltip.css';

const ToolTip = ({ text, children }) => {
    
    const [isTooltipVisible, setTooltipVisible] = useState(false);
    
    const handleMouseEnter = () => {
        setTooltipVisible(true);
    };
    
    const handleMouseLeave = () => {
        setTooltipVisible(false);
    };

    return (
        <div>
            <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {isTooltipVisible && <div className="tooltip">{text}</div>}
            </div>
            
        </div>
    );
};

export default ToolTip;