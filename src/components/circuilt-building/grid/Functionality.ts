let observers: PositionObserver[] = []
export type PositionObserver = ((boxMap: [number, number]) => void) | null
let componentPosition: [number, number] = [0, 0]

function emitChange() {
    observers.forEach((o) => o && o(componentPosition))
}

export function observe(o: PositionObserver): () => void {
    observers.push(o)
    emitChange()

    return (): void => {
        observers = observers.filter((t) => t !== o)
    }
}

export function canMoveComponent(toX: number, toY: number): boolean {
    const [x, y] = componentPosition
    const dx = toX - x
    const dy = toY - y

    //Can move anywhere on grid
    const bool = ((Math.abs(dx) > 0 || Math.abs(dy) > 0))
    console.log(bool)
    return bool;

    // return !componentAtLocation
}

export function moveComponent(toX: number, toY: number): void {
    componentPosition = [toX, toY]
    emitChange() //todo focus on this emit change
}
