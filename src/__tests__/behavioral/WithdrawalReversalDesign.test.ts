import AbstractSpruceTest, {
    test,
    assert,
    generateId,
} from '@sprucelabs/test-utils'
import WithdrawalReversalDesign from '../../WithdrawalReversalDesign'

export default class WithdrawalReversalDesignTest extends AbstractSpruceTest {
    private static design: WithdrawalReversalDesign

    protected static async beforeEach() {
        await super.beforeEach()

        this.design = new WithdrawalReversalDesign()
    }

    @test()
    protected static async canCreateWithdrawalReversalDesign() {
        assert.isTruthy(this.design)
    }

    @test()
    protected static async hasPublicAbbreviationAttribute() {
        assert.isEqual(this.design.abbreviation, 'WRD')
    }

    @test()
    protected static async canAddPhaseToDesign() {
        const name = generateId()
        this.design.addPhase(name)

        assert.isEqual(this.phases.length, 1)
        assert.isEqual(this.phases[0], name)
    }

    private static get phases() {
        return this.design.phases
    }
}
