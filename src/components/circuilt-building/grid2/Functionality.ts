let component: [number, number] = [0, 0]
let observers: PositionObserver[] = []
export type PositionObserver = ((position: [number, number]) => void) | null

export function snapToGrid(x: number, y: number): [number, number] {
    const snappedX = Math.round(x / 32) * 32
    const snappedY = Math.round(y / 32) * 32
    return [snappedX, snappedY]
}


function emitChange() {
    observers.forEach((o) => o && o(component))
}

export function observe(o: (newPos: [number, number]) => void): () => void {
    observers.push(o)
    emitChange()

    return (): void => {
        observers = observers.filter((t) => t !== o)
    }
}

export function canMoveComponent(toX: number, toY: number): boolean {
    const [x, y] = component
    const dx = toX - x
    const dy = toY - y

    //Can move anywhere on grid
    return ((Math.abs(dx) > 0 || Math.abs(dy) > 0))

    // (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    // (Math.abs(dx) === 1 && Math.abs(dy) === 1)
}

export function moveComponent(toX: number, toY: number): void {
    component = [toX, toY]
    emitChange()
}
