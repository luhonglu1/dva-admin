import dva from 'dva'
import { createHashHistory } from 'history'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  // redux持久化配置
  key: 'root',
  storage: storage,
  blacklist: [],
}

// 生成dva应用，配置一些hooks
const app = dva({
  history: createHashHistory(),
  onError(e) {
    // 捕捉effect中执行的报错
    // subscription中通过done触发的错误
    console.log(e)
  },
  onAction() {
    return (next) => (action) => next(action)
  },
  // 可监听state状态的变化
  onStateChange() {},

  onReducer(reducer) {
    return persistReducer(persistConfig, reducer)
  },
})
window.onload = () => persistStore(app._store)

export default app
