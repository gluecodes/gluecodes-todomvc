import renderer from '../../init/renderer'
import styles from './styles.css'

export default ({ getSlot }) => (
  <div id="layout">
    <section className={styles.todoapp}>
      {getSlot({ id: 'header' })()}
      {getSlot({ id: 'list' })()}
      {getSlot({ id: 'bottomBar' })()}
    </section>
    {getSlot({ id: 'footer' })()}
  </div>
)
