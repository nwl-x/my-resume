import { test as base } from '@playwright/test'
import { AxeResults } from 'axe-core'
import AxeBuilder from '@axe-core/playwright'
import { createHtmlReport } from 'axe-html-reporter'

type Report = {
  results: Promise<AxeResults>
  options: {
    projectKey: string
    outputDir: string
    reportFileName: string
  }
}

type AxeFixture = {
  makeAxeBuilder: () => AxeBuilder
  createHtmlReport: ({ results, options }: Report) => string
}

export type ReportParams = {
  results: AxeResults
  reportFileName: string
}

/**
 * Extend base test by providing "makeAxeBuilder"
 *
 * This new "test" can be used in multiple test files, and each of them will get
 * a consistently configured AxeBuilder instance.
 */
export const test = base.extend<AxeFixture>({
  makeAxeBuilder: async ({ page }, use) => {
    const makeAxeBuilder = () =>
      new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'])
        .disableRules(['color-contrast'])

    await use(makeAxeBuilder)
  }
})

export const createReport = ({ results, reportFileName }: ReportParams) => {
  createHtmlReport({
    results,
    options: {
      projectKey: 'resume',
      outputDir: 'axe-reports',
      reportFileName
    }
  })
}
