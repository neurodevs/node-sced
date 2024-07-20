import { WRD, WRDConstructor } from './types'

export default class WithdrawalReversalDesignImpl implements WRD {
    public static Class?: WRDConstructor

    public readonly abbreviation = 'WRD'
    public readonly phases: string[] = []

    protected constructor() {}

    public static Create() {
        return new (this.Class ?? this)()
    }

    public addPhase(name: string): void {
        this.phases.push(name)
    }
}
