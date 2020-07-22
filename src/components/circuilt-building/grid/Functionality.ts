let componentPosition: [string, number, number] = ["a", 0, 0]
let observers: PositionObserver[] = []
export type PositionObserver = ((position: [string, number, number]) => void) | null

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
    const [index, x, y] = componentPosition
    const dx = toX - x
    const dy = toY - y

    //Can move anywhere on grid
    const bool = ((Math.abs(dx) > 0 || Math.abs(dy) > 0))
    console.log(bool)
    return bool
}

export function moveComponent(index: string, toX: number, toY: number): void {
    componentPosition = [index, toX, toY]
    emitChange()
}
