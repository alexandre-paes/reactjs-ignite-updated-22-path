import {Post} from './Post';

export function App() {
  return (
    <div>
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
    </div>
  )
}
