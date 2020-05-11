import renderer from '../../init/renderer'
import styles from './styles.css'

export default ({ getSlot }) => (
  <div id="layout">
    <section className={styles.todoapp}>
      {getSlot({ id: 'header' })()}
      {/* This section should be hidden by default and shown when there are todos */}
      {getSlot({ id: 'list' })()}
      {/* This footer should hidden by default and shown when there are todos */}
      {getSlot({ id: 'bottomBar' })()}
    </section>
    {getSlot({ id: 'footer' })()}
  </div>
)
