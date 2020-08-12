import {ComponentTypes} from "../../shared/models/ComponentTypes";

let observers: PositionObserver[] = []
export type PositionObserver = ((component: {x: number, y: number, type: string}) => void) | null
let currentComponent = 0;
let currentLevel = 0;
let passed = false;
let currentX = -1;
let currentY = -1;
let components: { x: number; y: number; type: string}[] =  []

export function getComponents(): any {
    return components;
}

export function getCurrentComponent(): any {
    return components[currentComponent];
}

export function getPassed() {
    return passed;
}

export function setCurrentLevel(newLevel: number) {
    currentLevel = newLevel
}

export function setCurrentComponent(x: number, y: number) {
    currentX = x;
    currentY = y;

    const samePlaceComponents = components.filter(component => component.x === x && component.y === y)
    if(samePlaceComponents.length > 0) {
        const index = getIndex(samePlaceComponents[0], components);
        currentComponent = index;
        emitChange();
    }
}

export function resetPositions() {
    currentX = -1;
    currentY = -1;
}

export function getNewestIndex(): number {
    return components.length
}

function emitChange() {
    observers.forEach((o) => o && o(components[currentComponent]))
}

export function observe(o: PositionObserver): () => void {
    observers.push(o)
    emitChange()

    return (): void => {
        observers = observers.filter((t) => t !== o)
    }
}

//TODO - Occasionally can't put in position 0,0 if other object is there. Tried different logic with return statement
// before but breaks app (can't move existing comps), so coming back later
export function canMoveComponent(toX: number, toY: number): boolean {
    if(components.length ===  0) {
        const x = 0
        const y = 0
        const dx = toX - x
        const dy = toY - y

        //Can move anywhere on grid
        return (Math.abs(dx) >= 0 || Math.abs(dy) >= 0)
    } else {
        const x = components[currentComponent].x
        const y = components[currentComponent].y
        const dx = toX - x
        const dy = toY - y


        //Can move anywhere on grid
        return (Math.abs(dx) > 0 || Math.abs(dy) > 0)
    }
}

export function getIndex(value: any, arr: string | any[]) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === value) {
            return i;
        }
    }
    return -1; //to handle the case where the value doesn't exist
}

export function moveComponent(toX: number, toY: number, type: string): void {
    const samePlaceComponents = components.filter(component => component.x === toX && component.y === toY);

    if(samePlaceComponents.length > 0) {
        components.splice(currentComponent, 1);
        const index = getIndex(samePlaceComponents[0], components);
        components[index] = {x: toX, y: toY, type: type}
    } else {
        //TODO - Need to make this only delete the old object if dragging and dropping from grid, not from comps on side bar
        // components.splice(currentComponent, 1);
        if(currentX !== -1 && currentY !== -1) {
            components.splice(currentComponent, 1);
        }
        components.push({x: toX, y: toY, type: type});
    }

    currentComponent = components.length - 1;

    checkIfPassed();

    emitChange();
}

export function setComponentsList(newComponents: any): void {
    components = newComponents
    emitChange()
}

function checkIfPassed(): void {
    const passingLevel: { x: number; y: number; type: string}[] = getCurrentLevelPass()

    console.log(components)
    console.log(passingLevel)

    //TODO - Doesn't work
    if(passingLevel.every(v => components.includes(v))) {
        passed = true;
    }
}

function getCurrentLevelPass(): any {
    if(currentLevel === 0) {
        let components: { x: number; y: number; type: string}[] =  []
        components.push({x: 0, y: 0, type: ComponentTypes.BATTERY})
        return components
    } else if(currentLevel === 1) {
        let components: { x: number; y: number; type: string}[] =  []
        components.push({x: 0, y: 0, type: ComponentTypes.BATTERY})
        return components
    } else if(currentLevel === 2) {
        let components: { x: number; y: number; type: string}[] =  []
        components.push({x: 0, y: 0, type: ComponentTypes.BATTERY})
        return components
    }

    return []
}

