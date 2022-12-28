import { Header } from './components/Header';
import {Post} from './components/Post';
//import './styles.css';
import './components/global.css';
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
     <Header />

     <div className={ styles.wrapper }>
        <Sidebar />

        <main>
          <Post
            author="Alexandre Paes"
            content="Any simple text"
            separator="-----------------------------------------"
          />
          <Post
            author="Alex Monteiro"
            content="Any simple text once again"
            separator="-----------------------------------------"
          />
          <Post
            author="Ahlex Paes"
            content="Any simple text once again"
            separator="-----------------------------------------"
          />
        </main>
     </div>
    </div>
  )
}
