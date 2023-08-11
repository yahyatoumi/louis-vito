import './App.css'
import Nav from './Components/Nav';
import fetchAll from './assets/fetchAll'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      staleTime: Infinity,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={client}>

      <Nav />
      hoho
    </QueryClientProvider>
  )
}

export default App
