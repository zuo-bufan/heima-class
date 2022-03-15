import { Popup, NavBar } from 'antd-mobile'

import CommentItem from '../CommentItem'
import CommentFooter from '../CommentFooter'
import CommentInput from '../CommentInput'

import styles from './index.module.scss'

type Props = {
  onClose: () => void
}

const Reply = ({ onClose }: Props) => {
  return (
    <div className={styles.root}>
      <div className="reply-wrapper">
        <NavBar className="transparent-navbar" onBack={onClose}>
          {0}条回复
        </NavBar>

        {/* 要回复的评论 */}
        <div className="origin-comment">
          <CommentItem type="origin" />
        </div>

        <div className="reply-list">
          <div className="reply-header">全部回复</div>
          <CommentItem type="reply" />
        </div>

        <CommentFooter placeholder="去评论" type="reply" />
      </div>

      {/* 回复文本框对应的抽屉 */}

      <Popup className="reply-popup" position="bottom" visible={false}>
        <CommentInput />
      </Popup>
    </div>
  )
}

export default Reply
