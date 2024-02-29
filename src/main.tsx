import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createClient, Provider, fetchExchange,cacheExchange, dedupExchange} from 'urql'

const client = createClient({
  url: import.meta.env.VITE_API_URL || "http://localhost:4001/graphql",
  exchanges: [dedupExchange, cacheExchange, fetchExchange]
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>,
)
