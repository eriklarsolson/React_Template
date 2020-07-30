import {ComponentTypes} from "../../shared/models/ComponentTypes";

let observers: PositionObserver[] = []
export type PositionObserver = ((component: {x: number, y: number, type: string}) => void) | null
// let componentPosition: [number, number] = [0, 0]
let components =  [
    {
        x: 0,
        y: 0,
        type: ComponentTypes.BATTERY
    },
    {
        x: 1,
        y: 2,
        type: ComponentTypes.BATTERY
    }
]

export function getComponents(): any {
    return components;
}

function emitChange() {
    observers.forEach((o) => o && o(components[0]))
}

export function observe(o: PositionObserver): () => void {
    observers.push(o)
    emitChange()

    return (): void => {
        observers = observers.filter((t) => t !== o)
    }
}

export function canMoveComponent(toX: number, toY: number): boolean {
    const x = components[0].x
    const y = components[0].y
    const dx = toX - x
    const dy = toY - y

    //Can move anywhere on grid
    const bool = ((Math.abs(dx) > 0 || Math.abs(dy) > 0))
    console.log(bool)
    return bool;

    // return !componentAtLocation
}

export function moveComponent(toX: number, toY: number): void {
    console.log(components)
    components.push({x: toX, y: toY, type: ComponentTypes.BATTERY})
    console.log(components)
    emitChange() //todo focus on this emit change
}
