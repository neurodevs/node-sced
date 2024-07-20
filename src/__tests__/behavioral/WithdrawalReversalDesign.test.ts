import AbstractSpruceTest, { test, assert } from '@sprucelabs/test-utils'
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
}
