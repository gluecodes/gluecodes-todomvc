import renderer from '../../../init/renderer'
import styles from './styles.css'

export default ({
  actionResults
}) => (
  <footer className={styles.info}>
    <p>Double-click to edit a todo</p>
    {/* Remove the below line ↓ */}
    <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
    {/* Change this out with your name and url ↓ */}
    <p>Created by <a href="https://www.glue.codes">Chris Czopp</a></p>
    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
  </footer>
)
