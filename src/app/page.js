
import { Inter } from 'next/font/google'
import style from '@/page.module.css'
import Map from './components/map/map'
import 'mapbox-gl/dist/mapbox-gl.css';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={style.main} style={{marginTop:20}}>
      <Map/>
    </main>
  )
}
