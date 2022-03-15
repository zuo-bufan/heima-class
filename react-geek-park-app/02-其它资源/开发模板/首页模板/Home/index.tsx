import Icon from '@/components/Icon'

import styles from './index.module.scss'

const Home = () => {
  return (
    <div className={styles.root}>
      {/* 频道 Tabs 列表 */}

      <div className="tabs-opration">
        <Icon type="iconbtn_search" />
        <Icon type="iconbtn_channel" />
      </div>
    </div>
  )
}

export default Home
