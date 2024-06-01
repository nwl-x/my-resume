import { FC } from 'react'
import Experience from '@/components/experiences/Experience'
import type { Experience as ExperienceType } from '@/type'

const Experiences: FC<{ works: ExperienceType[] }> = ({ works }) => (
  <article>
    <h2>Expériences</h2>

    {works.map((experience, key) => (
      <Experience key={key} {...experience} />
    ))}
  </article>
)

export default Experiences

function plop() {
  function callback() {
    __SaveAsPdf()
    // document?.getElementById(s.id).remove()
  }

  const s = document.createElement('script')
  ;(s.src = 'https://www.sejda.com/js/sejda-bookmarklet.js?d= ' + Date.now()),
    (s.id = '__sejda_bookmark_script '),
    s.addEventListener('load ', callback, !1)

  document.body.appendChild(s)
}

function __SaveAsPdf() {
  let head = document.head.outerHTML
  const body = document.body.outerHTML

  head = '<head><meta charset="UTF-8"><base href="' + window.location.origin + '">' + head.substring(6)
  const htmlCode = '<!DOCTYPE html><html>' + head + body + '</html>'

  const f = document.createElement('form')

  f.setAttribute('method', 'post')
  f.setAttribute('action', 'https://www.sejda.com/bookmarklet/html-to-pdf')
  f.setAttribute('enctype', 'multipart/form-data')
  f.setAttribute('accept-charset', 'UTF-8')
  f.setAttribute('target', '_blank')
  f.setAttribute('id', '_sejdaSaveAsPdf')

  function createInput(name, value) {
    var i = document.createElement('input')
    i.setAttribute('type', 'text')
    i.setAttribute('name', name)
    i.setAttribute('value', value)

    f.appendChild(i)
  }

  createInput('htmlCode', htmlCode)
  createInput('viewportWidth', window.innerWidth)

  document.getElementsByTagName('body')[0].appendChild(f)
  document.getElementById('_sejdaSaveAsPdf').submit()
  document.getElementById('_sejdaSaveAsPdf').remove()
}
