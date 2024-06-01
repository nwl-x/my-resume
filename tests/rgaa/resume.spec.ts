import { test, createReport, ReportParams } from './rgaa.setup'

test('resume RGAA', async ({ page, makeAxeBuilder }) => {
  await page.goto('/')

  try {
    const results = await makeAxeBuilder().analyze()

    createReport({ results, reportFileName: 'resume.html' } as ReportParams)
  } catch (e) {
    // kikoo
  }
})
