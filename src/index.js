import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App'

const tistoryId = (id) => `https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F${id}%2Fimg.jpg`
const images = [
  // Front
  { position: [0, 0, 1.5], rotation: [0, 0, 0], url: tistoryId('lOX0z%2Fbtr5Q3jRXeO%2FE6hTak97lTJ5LukPIAS3tk') },
  // Back
  { position: [-0.8, 0, -0.6], rotation: [0, 0, 0], url: tistoryId('KZntz%2Fbtr53IFD5sN%2FujoBt5DJvqLnmzoJvgL5ak') },
  { position: [0.8, 0, -0.6], rotation: [0, 0, 0], url: tistoryId('dntrpK%2Fbtr5QiICovG%2FkQhQyoxMRgGijieH40LYf1') },
  // Left
  { position: [-1.75, 0, 0.25], rotation: [0, Math.PI / 2.5, 0], url: tistoryId('dCTFsZ%2Fbtr5OdgY8MG%2Fs7FlqZeA75AOKhhBA1WSq0') },
  { position: [-2.15, 0, 1.5], rotation: [0, Math.PI / 2.5, 0], url: tistoryId('b2SbGB%2Fbtr5OPtqWIX%2FnRtJ1nAN9WAy0DXGXHyW61') },
  { position: [-2, 0, 2.75], rotation: [0, Math.PI / 2.5, 0], url: tistoryId('cffcDC%2Fbtr5R1lL0s2%2FeVJeFvbjhb3fAIxtr2jT1K') },
  // Right
  { position: [1.75, 0, 0.25], rotation: [0, -Math.PI / 2.5, 0], url: tistoryId('oN1NU%2Fbtr5ZlYiemO%2F8MGGaWd0CQtcaQsUa8rzuK') },
  { position: [2.15, 0, 1.5], rotation: [0, -Math.PI / 2.5, 0], url: tistoryId('bFDuS1%2Fbtr5Zl45tnq%2F0ZkbWZhkkpm44I4o1w8NZ0') },
  { position: [2, 0, 2.75], rotation: [0, -Math.PI / 2.5, 0], url: tistoryId('l4fsz%2Fbtr5OQsils7%2FdUZf2MrgkXNDAkKJcuULek') }
]

createRoot(document.getElementById('root')).render(<App images={images} />)
