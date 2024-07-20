import { Experiment } from './types'

export default class WithdrawalReversalDesign implements Experiment {
    public readonly abbreviation = 'WRD'
    public readonly phases: string[] = []

    public addPhase(name: string): void {
        this.phases.push(name)
    }
}
