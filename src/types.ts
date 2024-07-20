export interface WithdrawalReversalDesign {
    addPhase(name: string): void
    abbreviation: string
    phases: string[]
}

export type WRD = WithdrawalReversalDesign

export type WithdrawalReversalDesignConstructor =
    new () => WithdrawalReversalDesign

export type WRDConstructor = WithdrawalReversalDesignConstructor
