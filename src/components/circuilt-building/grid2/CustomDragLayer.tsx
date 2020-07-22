import React from 'react'
import { XYCoord, useDragLayer } from 'react-dnd'
import { ComponentTypes } from './ComponentTypes'
import { snapToGrid } from './Functionality'
import {Battery} from "./components/Battery";
import {Wire} from "../grid/components/Wire";
import {Resistor} from "../grid/components/Resistor";
import {Switch} from "../grid/components/Switch";
import {Inductor} from "../grid/components/Inductor";
import {Capacitor} from "../grid/components/Capacitor";

const layerStyles: React.CSSProperties = {
    position: 'fixed',
    pointerEvents: 'none',
    zIndex: 100,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
}

function getItemStyles(
    initialOffset: XYCoord | null,
    currentOffset: XYCoord | null,
) {
    if (!initialOffset || !currentOffset) {
        return {
            display: 'none',
        }
    }

    let { x, y } = currentOffset

    x -= initialOffset.x
    y -= initialOffset.y
    ;[x, y] = snapToGrid(x, y)
    x += initialOffset.x
    y += initialOffset.y

    const transform = `translate(${x}px, ${y}px)`
    return {
        transform,
        WebkitTransform: transform,
    }
}

export const CustomDragLayer: React.FC = () => {
    const {
        itemType,
        isDragging,
        item,
        initialOffset,
        currentOffset,
    } = useDragLayer((monitor) => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialOffset: monitor.getInitialSourceClientOffset(),
        currentOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging(),
    }))

    function renderItem() {
        switch (itemType) {
            case ComponentTypes.WIRE:
                return <Wire/>;
            case ComponentTypes.BATTERY:
                return <Battery key={item.id} id={item.id} {...item} />;
            case ComponentTypes.RESISTOR:
                return <Resistor/>;
            case ComponentTypes.SWITCH:
                return <Switch/>;
            case ComponentTypes.INDUCTOR:
                return <Inductor/>;
            case ComponentTypes.CAPACITOR:
                return <Capacitor/>;
            default:
                return <Battery key={item.id} id={item.id} {...item} />;
        }
    }

    if (!isDragging) {
        return null
    }
    return (
        <div style={layerStyles}>
            <div style={getItemStyles(initialOffset, currentOffset)}>
                {renderItem()}
            </div>
        </div>
    )
}
